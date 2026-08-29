import { readFileSync, readdirSync } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "app/chats/data");

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatSummary = {
  slug: string;
  title: string;
  date?: string;
};

export type Chat = ChatSummary & {
  messages: ChatMessage[];
};

const ACRONYMS = new Set(["gpt", "ai", "glp1", "mri", "moca", "csf", "iv"]);

// Filenames may start with a sort prefix, e.g. "01-intro-to-glp1s.txt",
// so the video series can be ordered without that prefix leaking into the title.
function titleFromSlug(slug: string): string {
  return slug
    .replace(/^\d+[-_]+/, "")
    .replace(/[-_]+/g, " ")
    .split(" ")
    .map((word) =>
      ACRONYMS.has(word.toLowerCase())
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

function listSlugs(): string[] {
  try {
    return readdirSync(DATA_DIR)
      .filter((f) => f.endsWith(".txt"))
      .map((f) => f.replace(/\.txt$/, ""))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

export function getAllChats(): ChatSummary[] {
  return listSlugs()
    .map((slug) => {
      const { title, date } = readChatFile(slug);
      return { slug, title: title || titleFromSlug(slug), date };
    })
    .sort((a, b) => parseDisplayDate(b.date) - parseDisplayDate(a.date));
}

// Parses a "Date:" value like "8/28/26" or "8/28/2026" for sorting newest-first.
// Chats without a parseable date sort to the end.
function parseDisplayDate(date: string | undefined): number {
  const match = date?.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
  if (!match) return -Infinity;
  const [, m, d, y] = match;
  const year = y.length === 2 ? 2000 + Number(y) : Number(y);
  return new Date(year, Number(m) - 1, Number(d)).getTime();
}

export function getChat(slug: string): Chat | null {
  if (!listSlugs().includes(slug)) return null;

  const { title, date, body } = readChatFile(slug);
  return {
    slug,
    title: title || titleFromSlug(slug),
    date,
    messages: parseTranscript(body),
  };
}

function readChatFile(slug: string): { title?: string; date?: string; body: string } {
  const raw = readFileSync(path.join(DATA_DIR, `${slug}.txt`), "utf-8");
  return parseFrontmatter(raw);
}

// Optional "Title:" / "Date:" lines at the very top of a file override the
// filename-derived title and add a display date, e.g.:
//   Title: Syphilis
//   Date: 8/28/26
//
//   You said:
//   ...
function parseFrontmatter(raw: string): { title?: string; date?: string; body: string } {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const meta: Record<string, string> = {};

  let i = 0;
  while (i < lines.length) {
    const match = lines[i].match(/^(Title|Date):\s*(.*)$/);
    if (!match) break;
    meta[match[1].toLowerCase()] = match[2].trim();
    i++;
  }
  if (i === 0) return { body: raw };

  while (i < lines.length && lines[i].trim() === "") i++;
  return { title: meta.title, date: meta.date, body: lines.slice(i).join("\n") };
}

// Parses the raw text you get from selecting and copying a chatgpt.com
// conversation, where each turn is preceded by a "You said:" or
// "ChatGPT said:" line.
function parseTranscript(raw: string): ChatMessage[] {
  const normalized = raw.replace(/\r\n/g, "\n");
  const parts = normalized.split(/^[ \t]*(You said:|ChatGPT said:)[ \t]*$/m);

  const messages: ChatMessage[] = [];
  for (let i = 1; i < parts.length; i += 2) {
    const role: ChatMessage["role"] = parts[i] === "You said:" ? "user" : "assistant";
    const content = cleanContent(parts[i + 1] ?? "");
    if (content) messages.push({ role, content });
  }
  return messages;
}

function cleanContent(content: string): string {
  return content
    .replace(/\n?ChatGPT can make mistakes\. Check important info\.\s*$/i, "")
    .trim();
}

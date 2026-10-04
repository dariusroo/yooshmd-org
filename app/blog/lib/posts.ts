import { readFileSync, readdirSync } from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export type PostSummary = {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  author?: string;
  credentials: string[];
  date?: string;
  draft: boolean;
};

export type Post = PostSummary & {
  body: string;
};

// Posts are Markdown files with a simple `key: value` frontmatter block.
function parse(slug: string, raw: string): Post {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  const fields: Record<string, string> = {};
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const i = line.indexOf(":");
      if (i > 0) fields[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }

  return {
    slug,
    title: fields.title || slug,
    subtitle: fields.subtitle,
    description: fields.description,
    author: fields.author,
    credentials: (fields.credentials ?? "")
      .split(";")
      .map((line) => line.trim())
      .filter(Boolean),
    date: fields.date,
    draft: fields.draft === "true",
    body: match ? raw.slice(match[0].length) : raw,
  };
}

function listSlugs(): string[] {
  try {
    return readdirSync(CONTENT_DIR)
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

export function getPost(slug: string): Post | undefined {
  if (!listSlugs().includes(slug)) return undefined;
  return parse(slug, readFileSync(path.join(CONTENT_DIR, `${slug}.md`), "utf8"));
}

export function getAllPosts(): PostSummary[] {
  return listSlugs()
    .map((slug) => {
      const { body, ...summary } = getPost(slug)!;
      void body;
      return summary;
    })
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function formatDate(date?: string): string | undefined {
  if (!date) return undefined;
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

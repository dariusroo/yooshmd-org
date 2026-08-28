"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ChatSummary } from "../lib/transcripts";

export default function ChatSidebar({
  chats,
  title,
}: {
  chats: ChatSummary[];
  title: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-3 left-3 z-30 flex h-9 w-9 items-center justify-center rounded-lg bg-[#171717] text-gray-300 border border-[#2f2f2f]"
        aria-label="Open chat list"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {open && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/60"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed md:static inset-y-0 left-0 z-40 w-72 shrink-0 flex flex-col bg-[#171717] border-r border-[#2f2f2f] transition-transform duration-200 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-4 border-b border-[#2f2f2f]">
          <Link
            href="/chats"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-gray-100 hover:text-white transition-colors"
          >
            {title}
          </Link>
          <p className="text-xs text-gray-500 mt-0.5">Conversations from the video series</p>
          <div className="mt-2 flex flex-col gap-1.5">
            <a
              href="https://www.instagram.com/yooshmd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-100 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.428.465a4.902 4.902 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.525 5.45c-.247.637-.416 1.364-.465 2.428C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.428a4.902 4.902 0 0 0 1.153 1.772 4.902 4.902 0 0 0 1.772 1.153c.637.247 1.364.416 2.428.465C8.944 21.988 9.284 22 12 22s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.428-.465a4.902 4.902 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.637.416-1.364.465-2.428.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.428a4.902 4.902 0 0 0-1.153-1.772A4.902 4.902 0 0 0 18.551 2.525c-.637-.247-1.364-.416-2.428-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.858.048 1.054.058 1.37.058 4.04s-.01 2.986-.058 4.04c-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15 3.1 3.1 0 0 1-1.15.748c-.353.137-.882.3-1.858.344-1.054.048-1.37.058-4.04.058s-2.986-.01-4.04-.058c-.976-.045-1.505-.207-1.858-.344a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.858-.048-1.054-.058-1.37-.058-4.04s.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.858-.344 1.054-.048 1.37-.058 4.04-.058z" />
                <path d="M12 6.865A5.135 5.135 0 1 0 12 17.135 5.135 5.135 0 0 0 12 6.865zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666z" />
                <circle cx="17.338" cy="6.662" r="1.2" />
              </svg>
              @yooshmd
            </a>
            <a
              href="https://www.tiktok.com/@yooshmd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-100 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82c-.78-.68-1.27-1.65-1.27-2.72h-3.05v13.02c0 1.55-1.26 2.8-2.8 2.8a2.8 2.8 0 0 1-2.8-2.8 2.8 2.8 0 0 1 2.8-2.8c.28 0 .55.04.8.12v-3.1a5.9 5.9 0 0 0-.8-.06 5.85 5.85 0 0 0-5.85 5.85 5.85 5.85 0 0 0 5.85 5.85 5.85 5.85 0 0 0 5.85-5.85V9.4a7.9 7.9 0 0 0 4.6 1.47V7.82a4.83 4.83 0 0 1-3.33-1.99z" />
              </svg>
              @yooshmd
            </a>
          </div>
        </div>
        <ul className="flex-1 overflow-y-auto py-2">
          {chats.length === 0 && (
            <li className="px-4 py-3 text-sm text-gray-500">No chats yet.</li>
          )}
          {chats.map((chat) => {
            const href = `/chats/${chat.slug}`;
            const active = pathname === href;
            return (
              <li key={chat.slug} className="px-2">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 transition-colors ${
                    active
                      ? "bg-[#2f2f2f] text-gray-100"
                      : "text-gray-300 hover:bg-[#212121]"
                  }`}
                >
                  <span className="block truncate text-sm">{chat.title}</span>
                  {chat.date && (
                    <span className="block truncate text-xs text-gray-500">{chat.date}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { getAllChats } from "./lib/transcripts";

export default function ChatsIndexPage() {
  const chats = getAllChats();
  const latest = chats[0];

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <div className="flex-1 flex items-center justify-center px-6 text-center">
        <div>
          <Image
            src="/chats/mascot.png"
            alt=""
            width={220}
            height={220}
            priority
            className="mx-auto mb-4"
          />
          <p className="text-lg font-medium text-gray-200">
            {chats.length > 0 ? "Select a chat" : "No chats yet"}
          </p>
          <p className="mt-2 text-sm text-gray-500 max-w-sm">
            {chats.length > 0
              ? "Pick a conversation from the list to read the transcript."
              : "Add .txt transcript files to app/chats/data to see them here."}
          </p>
          {latest && (
            <Link
              href={`/chats/${latest.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              Latest: {latest.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

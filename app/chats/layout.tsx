import type { Metadata } from "next";
import { getAllChats } from "./lib/transcripts";
import ChatSidebar from "./components/ChatSidebar";

const SECTION_TITLE = "Doctor versus ChatGPT";

export const metadata: Metadata = {
  title: {
    default: SECTION_TITLE,
    template: `%s | ${SECTION_TITLE}`,
  },
  description: "Chat transcripts referenced in the video series.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const chats = getAllChats();

  return (
    <div className="flex-1 flex bg-[#212121] text-gray-100 min-h-screen">
      <ChatSidebar chats={chats} title={SECTION_TITLE} />
      {children}
    </div>
  );
}

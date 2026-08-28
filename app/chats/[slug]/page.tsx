import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllChats, getChat } from "../lib/transcripts";
import ChatTranscript from "../components/ChatTranscript";

export function generateStaticParams() {
  return getAllChats().map((chat) => ({ slug: chat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chat = getChat(slug);
  return { title: chat?.title ?? "Chat not found" };
}

export default async function ChatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chat = getChat(slug);
  if (!chat) notFound();

  return <ChatTranscript title={chat.title} date={chat.date} messages={chat.messages} />;
}

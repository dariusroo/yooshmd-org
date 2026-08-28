import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ChatMessage } from "../lib/transcripts";

export default function ChatTranscript({
  title,
  date,
  messages,
}: {
  title: string;
  date?: string;
  messages: ChatMessage[];
}) {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      <header className="sticky top-0 z-10 bg-[#212121]/95 backdrop-blur border-b border-[#2f2f2f] px-5 md:px-8 py-3">
        <h1 className="text-sm font-medium text-gray-200 truncate pl-10 md:pl-0">{title}</h1>
        {date && (
          <p className="text-xs text-gray-500 truncate pl-10 md:pl-0">{date}</p>
        )}
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 space-y-6">
          {messages.length === 0 && (
            <p className="text-sm text-gray-500">This transcript couldn&rsquo;t be parsed.</p>
          )}
          {messages.map((message, i) => (
            <ChatBubble key={i} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ message }: { message: ChatMessage }) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] rounded-3xl bg-[#2f2f2f] text-gray-100 px-4 py-2.5 text-[15px] leading-relaxed whitespace-pre-wrap">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2 2 7l10 5 10-5-10-5Zm0 20-10-5V9l10 5 10-5v8l-10 5Z" />
        </svg>
      </div>
      <div className="min-w-0 flex-1 pt-0.5 text-[15px] leading-relaxed text-gray-100 md-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
      </div>
    </div>
  );
}

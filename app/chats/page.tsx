import { getAllChats } from "./lib/transcripts";

export default function ChatsIndexPage() {
  const chats = getAllChats();

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <div className="flex-1 flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-lg font-medium text-gray-200">
            {chats.length > 0 ? "Select a chat" : "No chats yet"}
          </p>
          <p className="mt-2 text-sm text-gray-500 max-w-sm">
            {chats.length > 0
              ? "Pick a conversation from the list to read the transcript."
              : "Add .txt transcript files to app/chats/data to see them here."}
          </p>
        </div>
      </div>
    </div>
  );
}

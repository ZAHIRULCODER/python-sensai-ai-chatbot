import { ChatInterface } from "@/components/chats/chat-interface";

export default async function ChatPage({ params }) {
  // Properly await the params promise
  const { chatId } = await Promise.resolve(params);

  return <ChatInterface chatId={chatId} />;
}

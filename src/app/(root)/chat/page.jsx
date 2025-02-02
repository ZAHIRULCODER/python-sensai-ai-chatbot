"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useChat } from "@/contexts/chat-context";
import { ChatInterface } from "@/components/chats/chat-interface";

export default function InitialChatPage() {
  const { createChat } = useChat();
  const router = useRouter();

  useEffect(() => {
    const initializeChat = async () => {
      const tempChat = await createChat(true);
      router.replace(`/chat/${tempChat.id}`);
    };

    initializeChat();
  }, []);

  return <ChatInterface isInitialPage />;
}

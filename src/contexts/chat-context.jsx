"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { nanoid } from "nanoid";

const CHAT_PREFIX = "chat_";
const MESSAGES_SUFFIX = "_messages";

const ChatContext = createContext();

const encodeChatKey = (chatId) =>
  `${CHAT_PREFIX}${encodeURIComponent(chatId)}${MESSAGES_SUFFIX}`;

const decodeChatKey = (key) => {
  const match = key.match(new RegExp(`^${CHAT_PREFIX}(.*)${MESSAGES_SUFFIX}$`));
  return match ? decodeURIComponent(match[1]) : null;
};

export function ChatProvider({ children }) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const loadChats = () => {
      try {
        const allCookies = Cookies.get();
        const chatKeys = Object.keys(allCookies)
          .filter(
            (key) =>
              key.startsWith(CHAT_PREFIX) && key.endsWith(MESSAGES_SUFFIX)
          )
          .map((key) => ({
            id: decodeChatKey(key),
            title: `Chat ${decodeChatKey(key).slice(0, 6)}`,
            createdAt: Date.now(),
          }));
        setChats(chatKeys);
      } catch (error) {
        console.error("Error loading chats:", error);
      }
    };
    loadChats();
  }, []);

  const createChat = async () => {
    const newChat = {
      id: nanoid(),
      title: "New Chat",
      createdAt: Date.now(),
    };

    const updatedChats = [newChat, ...chats];
    setChats(updatedChats);
    return newChat;
  };

  const deleteChat = (chatId) => {
    const updatedChats = chats.filter((c) => c.id !== chatId);
    Cookies.remove(encodeChatKey(chatId));
    setChats(updatedChats);
  };

  const updateChatTitle = (chatId, newTitle) => {
    const updatedChats = chats.map((chat) =>
      chat.id === chatId ? { ...chat, title: newTitle } : chat
    );
    setChats(updatedChats);
  };

  const getChatMessages = (chatId) => {
    const messages = Cookies.get(encodeChatKey(chatId));
    return messages ? JSON.parse(messages) : [];
  };

  const saveChatMessages = (chatId, messages) => {
    Cookies.set(encodeChatKey(chatId), JSON.stringify(messages), {
      expires: 365,
      encode: false,
    });
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        createChat,
        deleteChat,
        updateChatTitle,
        getChatMessages,
        saveChatMessages,
      }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}

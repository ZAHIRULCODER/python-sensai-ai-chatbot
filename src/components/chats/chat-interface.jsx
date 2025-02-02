// "use client";

// import { useState, useRef, useEffect } from "react";
// import Cookies from "js-cookie";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { useToast } from "@/hooks/use-toast";
// import { ChatMessage } from "./chat-message";
// import { HomeworkChallenge } from "./homework-challenge";
// import { generateResponse, initializeGenAI } from "@/lib/config/gemini";
// import { Send, Sparkles } from "lucide-react";
// import { useApi } from "@/contexts/api-context";
// import { useApiKey } from "@/contexts/apikey-context";
// import { characters } from "@/data/characters";
// import { nanoid } from "nanoid";

// export function ChatInterface() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showHomework, setShowHomework] = useState(false);
//   const scrollAreaRef = useRef(null);
//   const { toast } = useToast();
//   const { setIsKeyModalOpen } = useApi();
//   const { apiKey } = useApiKey();

//   useEffect(() => {
//     if (apiKey) {
//       initializeGenAI(apiKey);
//     } else {
//       console.warn("API Key not set");
//     }
//   }, [apiKey]);

//   useEffect(() => {
//     if (scrollAreaRef.current) {
//       scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const buildPrompt = (userInput) => {
//     // Read the selected character from cookie
//     const characterCookie = Cookies.get("selectedCharacter");
//     let character = characters[0]; // fallback character
//     try {
//       if (characterCookie) {
//         character = JSON.parse(characterCookie);
//       }
//     } catch (error) {
//       console.error("Error parsing character cookie:", error);
//     }
//     return `${character.prompt}\n\nUser Question: ${userInput}\n\nAssistant Response:`;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     if (!apiKey) {
//       toast({
//         title: "API Key Required",
//         description: "Please set your API key first",
//         variant: "destructive",
//       });
//       setIsKeyModalOpen(true);
//       return;
//     }

//     const newMessage = { id: nanoid(), role: "user", content: input };
//     setMessages((prev) => [...prev, newMessage]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const prompt = buildPrompt(input);
//       const response = await generateResponse(prompt);
//       setMessages((prev) => [
//         ...prev,
//         { id: nanoid(), role: "assistant", content: response },
//       ]);
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: error.message,
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEdit = (id, newContent) => {
//     setMessages(
//       messages.map((msg) =>
//         msg.id === id ? { ...msg, content: newContent } : msg
//       )
//     );
//   };

//   const handleReload = async (id) => {
//     const message = messages.find((msg) => msg.id === id);
//     if (!message) return;

//     setIsLoading(true);
//     try {
//       const prompt = buildPrompt(message.content);
//       const response = await generateResponse(prompt);
//       setMessages((prev) => [
//         ...prev,
//         { id: nanoid(), role: "assistant", content: response },
//       ]);
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: error.message,
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <ScrollArea className="flex-1 px-4 py-6" ref={scrollAreaRef}>
//         <div className="max-w-3xl mx-auto space-y-6">
//           {messages.map((message) => (
//             <ChatMessage
//               key={message.id}
//               message={message}
//               onEdit={handleEdit}
//               onReload={handleReload}
//             />
//           ))}
//           {isLoading && (
//             <ChatMessage
//               message={{
//                 id: "loading",
//                 role: "assistant",
//                 content: "Thinking...",
//               }}
//             />
//           )}
//         </div>
//       </ScrollArea>

//       <div className="border-t border-border bg-background p-4">
//         <div className="max-w-3xl mx-auto">
//           <form onSubmit={handleSubmit} className="flex gap-4">
//             <Textarea
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask your coding question..."
//               className="min-h-[52px] resize-none"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" && !e.shiftKey) {
//                   e.preventDefault();
//                   handleSubmit(e);
//                 }
//               }}
//             />
//             <div className="flex flex-col gap-2">
//               <Button
//                 type="submit"
//                 size="icon"
//                 disabled={isLoading || !input.trim()}>
//                 <Send className="h-4 w-4" />
//               </Button>
//               <Button
//                 type="button"
//                 size="icon"
//                 variant="secondary"
//                 onClick={() => setShowHomework(true)}>
//                 <Sparkles className="h-4 w-4" />
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <HomeworkChallenge open={showHomework} onOpenChange={setShowHomework} />
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ChatMessage } from "./chat-message";
import { HomeworkChallenge } from "./homework-challenge";
import { generateResponse, initializeGenAI } from "@/lib/config/gemini";
import { Send, Sparkles } from "lucide-react";
import { useApi } from "@/contexts/api-context";
import { useApiKey } from "@/contexts/apikey-context";
import { characters } from "@/data/characters";
import { nanoid } from "nanoid";
import { useChat } from "@/contexts/chat-context";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

export function ChatInterface({ chatId, isInitialPage }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showHomework, setShowHomework] = useState(false);
  const scrollAreaRef = useRef(null);
  const { toast } = useToast();
  const { setIsKeyModalOpen } = useApi();
  const { apiKey } = useApiKey();
  const { createChat, getChatMessages, saveChatMessages } = useChat();
  const router = useRouter();

  useEffect(() => {
    if (apiKey) initializeGenAI(apiKey);
  }, [apiKey]);

  useEffect(() => {
    if (chatId) {
      const loadedMessages = getChatMessages(chatId);
      setMessages(loadedMessages);
    }
  }, [chatId]);

  useEffect(() => {
    if (chatId) {
      saveChatMessages(chatId, messages);
      scrollToBottom();
    }
  }, [messages, chatId]);

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollAreaRef.current?.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  const buildPrompt = (userInput) => {
    const character = JSON.parse(
      Cookies.get("selectedCharacter") || JSON.stringify(characters[0])
    );
    return `${character.prompt}\n\nUser: ${userInput}\n\nAssistant:`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please set your API key first",
        variant: "destructive",
      });
      setIsKeyModalOpen(true);
      return;
    }

    let currentChatId = chatId;
    if (isInitialPage) {
      const newChat = await createChat();
      currentChatId = newChat.id;
      router.replace(`/chat/${newChat.id}`);
    }

    const newMessage = { id: nanoid(), role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const prompt = buildPrompt(input);
      const response = await generateResponse(prompt);
      setMessages((prev) => [
        ...prev,
        { id: nanoid(), role: "assistant", content: response },
      ]);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 px-4 py-6" ref={scrollAreaRef}>
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onEdit={(id, content) => {
                setMessages((prev) =>
                  prev.map((msg) => (msg.id === id ? { ...msg, content } : msg))
                );
              }}
              onReload={async (id) => {
                const message = messages.find((msg) => msg.id === id);
                if (!message) return;

                setIsLoading(true);
                try {
                  const prompt = buildPrompt(message.content);
                  const response = await generateResponse(prompt);
                  setMessages((prev) => [
                    ...prev,
                    { id: nanoid(), role: "assistant", content: response },
                  ]);
                } catch (error) {
                  toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive",
                  });
                } finally {
                  setIsLoading(false);
                }
              }}
            />
          ))}
          {isLoading && (
            <ChatMessage
              message={{
                id: "loading",
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}
        </div>
      </ScrollArea>

      <div className="border-t border-border bg-background p-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your coding question..."
              className="min-h-[52px] resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <div className="flex flex-col gap-2">
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="secondary"
                onClick={() => setShowHomework(true)}>
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      <HomeworkChallenge open={showHomework} onOpenChange={setShowHomework} />
    </div>
  );
}

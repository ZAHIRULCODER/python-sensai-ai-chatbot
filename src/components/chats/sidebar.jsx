// "use client";

// import { useState, useEffect } from "react";
// import { nanoid } from "nanoid";
// import Cookies from "js-cookie";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";
// import {
//   MessageSquare,
//   Settings,
//   Plus,
//   ChevronLeft,
//   ChevronRight,
//   Edit2,
//   Trash2,
// } from "lucide-react";
// import { ApiKeyModal } from "./api-key-modal";
// import { CharacterSelector } from "./character-selector";

// export function Sidebar() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [chats, setChats] = useState([]);

//   const [editingChatId, setEditingChatId] = useState(null);
//   const [editingTitle, setEditingTitle] = useState("");

//   // Load chats from cookies on mount
//   useEffect(() => {
//     const storedChats = Cookies.get("chats");
//     if (storedChats) {
//       setChats(JSON.parse(storedChats));
//     }
//   }, []);

//   // Save chats to cookies whenever they change
//   useEffect(() => {
//     Cookies.set("chats", JSON.stringify(chats), { expires: 365 });
//   }, [chats]);

//   // Add a new chat dynamically
//   const addNewChat = () => {
//     const newChat = { id: nanoid(), title: `Chat ${chats.length + 1}` };
//     setChats([newChat, ...chats]);
//   };

//   // Delete a chat
//   const deleteChat = (id) => {
//     setChats(chats.filter((chat) => chat.id !== id));
//   };

//   // Start editing a chat title
//   const startEditing = (chat) => {
//     setEditingChatId(chat.id);
//     setEditingTitle(chat.title);
//   };

//   // Save the edited chat title
//   const saveEdit = () => {
//     if (editingChatId && editingTitle.trim()) {
//       setChats(
//         chats.map((chat) =>
//           chat.id === editingChatId
//             ? { ...chat, title: editingTitle.trim() }
//             : chat
//         )
//       );
//       setEditingChatId(null);
//     }
//   };

//   return (
//     <div
//       className={cn(
//         "fixed inset-y-0 left-0 z-40 flex flex-col bg-background border-r border-border transition-all duration-300 ease-in-out",
//         isCollapsed ? "w-[72px]" : "w-[280px]"
//       )}>
//       <div className="flex items-center justify-between p-4">
//         {!isCollapsed && (
//           <h1 className="text-lg font-semibold">Python Sensai</h1>
//         )}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="h-6 w-6"
//           onClick={() => setIsCollapsed(!isCollapsed)}>
//           {isCollapsed ? (
//             <ChevronRight className="h-4 w-4" />
//           ) : (
//             <ChevronLeft className="h-4 w-4" />
//           )}
//         </Button>
//       </div>

//       {!isCollapsed && (
//         <div className="px-4 pb-4">
//           <CharacterSelector />
//         </div>
//       )}

//       <div className="px-4 pb-4">
//         <Button
//           className="w-full justify-start gap-2"
//           variant="secondary"
//           onClick={addNewChat}>
//           <Plus className="h-4 w-4" />
//           {!isCollapsed && "New Chat"}
//         </Button>
//       </div>

//       <ScrollArea className="flex-1 px-2">
//         <div className="space-y-1">
//           {chats.map((chat) => (
//             <div
//               key={chat.id}
//               className={cn(
//                 "group flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800",
//                 chat.id === editingChatId && "bg-gray-300 dark:bg-gray-700"
//               )}>
//               <MessageSquare className="h-4 w-4 shrink-0" />
//               {!isCollapsed &&
//                 (editingChatId === chat.id ? (
//                   <form
//                     className="flex-1 flex gap-2"
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       saveEdit();
//                     }}>
//                     <Input
//                       value={editingTitle}
//                       onChange={(e) => setEditingTitle(e.target.value)}
//                       className="h-7 px-2"
//                       autoFocus
//                       onBlur={saveEdit}
//                     />
//                   </form>
//                 ) : (
//                   <>
//                     <span className="flex-1 truncate">{chat.title}</span>
//                     <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         className="h-6 w-6"
//                         onClick={() => startEditing(chat)}>
//                         <Edit2 className="h-3 w-3" />
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         className="h-6 w-6"
//                         onClick={() => deleteChat(chat.id)}>
//                         <Trash2 className="h-3 w-3" />
//                       </Button>
//                     </div>
//                   </>
//                 ))}
//             </div>
//           ))}
//         </div>
//       </ScrollArea>

//       <div className="p-4 border-t border-border">
//         <Button
//           variant="ghost"
//           className="w-full justify-start gap-2"
//           onClick={() => setIsModalOpen(true)}>
//           <Settings className="h-4 w-4" />
//           {!isCollapsed && "Settings"}
//         </Button>
//       </div>

//       <ApiKeyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Settings,
  Plus,
  ChevronLeft,
  ChevronRight,
  Edit2,
  Trash2,
} from "lucide-react";
import { ApiKeyModal } from "./api-key-modal";
import { CharacterSelector } from "./character-selector";
import { useChat } from "@/contexts/chat-context";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(
    () => Cookies.get("sidebarCollapsed") === "true"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingChatId, setEditingChatId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const { chats, createChat, deleteChat, updateChatTitle } = useChat();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    Cookies.set("sidebarCollapsed", isCollapsed.toString(), { expires: 365 });
  }, [isCollapsed]);

  const handleCreateChat = async () => {
    const newChat = await createChat();
    router.push(`/chat/${newChat.id}`);
  };

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex flex-col bg-background border-r border-border",
        isCollapsed ? "w-[72px]" : "w-[280px]",
        "transition-all duration-300 ease-in-out"
      )}>
      {/* Header and collapse button */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <h1 className="text-lg font-semibold">Python Sensai</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      {/* Character selector */}
      {!isCollapsed && (
        <div className="px-4 pb-4">
          <CharacterSelector />
        </div>
      )}

      {/* New chat button */}
      <div className="px-4 pb-4">
        <Button
          className="w-full justify-start gap-2"
          variant="secondary"
          onClick={handleCreateChat}>
          <Plus className="h-4 w-4" />
          {!isCollapsed && "New Chat"}
        </Button>
      </div>

      {/* Chat list */}
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1">
          {chats.map((chat) => {
            const isActive = pathname === `/chat/${chat.id}`;
            return (
              <div
                key={chat.id}
                onClick={() => !isActive && router.push(`/chat/${chat.id}`)}
                className={cn(
                  "group flex items-center gap-2 p-2 rounded cursor-pointer",
                  isActive && "bg-accent",
                  "hover:bg-accent/50 transition-colors"
                )}>
                <MessageSquare className="h-4 w-4 shrink-0" />
                {!isCollapsed &&
                  (editingChatId === chat.id ? (
                    <Input
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      onBlur={() => {
                        updateChatTitle(chat.id, editingTitle.trim());
                        setEditingChatId(null);
                      }}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setEditingChatId(null)
                      }
                      className="h-7 px-2 flex-1"
                      autoFocus
                    />
                  ) : (
                    <>
                      <span className="flex-1 truncate">{chat.title}</span>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingChatId(chat.id);
                            setEditingTitle(chat.title);
                          }}>
                          <Edit2 className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteChat(chat.id);
                          }}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </>
                  ))}
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* Settings */}
      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          onClick={() => setIsModalOpen(true)}>
          <Settings className="h-4 w-4" />
          {!isCollapsed && "Settings"}
        </Button>
      </div>

      <ApiKeyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

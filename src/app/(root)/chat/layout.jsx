import { Sidebar } from "@/components/chats/sidebar";

export default function ChatLayout({ children }) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-[72px] md:ml-[280px] transition-[margin] duration-300 ease-in-out">
        {children}
      </main>
    </div>
  );
}

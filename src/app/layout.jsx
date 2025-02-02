import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provide";
import { Toaster } from "@/components/ui/toaster";
import { ApiProvider } from "@/contexts/api-context";
import { ApiKeyProvider } from "@/contexts/apikey-context";
import { ChatProvider } from "@/contexts/chat-context";

const nunito = Nunito({ subsets: ["latin"], weights: [500] });

export const metadata = {
  title: "Python Sensai - Fun Python Learning for Kids",
  description: "Learn Python with a friendly AI tutor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <ApiKeyProvider>
            <ApiProvider>
              <ChatProvider>
                <main className="min-h-screen">{children}</main>
              </ChatProvider>
            </ApiProvider>
          </ApiKeyProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Edit2, RotateCcw, Check, X } from "lucide-react";

export function ChatMessage({ message, onEdit, onReload }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(message.content);

  const handleSave = () => {
    onEdit?.(message.id, editedContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContent(message.content);
    setIsEditing(false);
  };

  return (
    <div
      className={cn(
        "group flex gap-3",
        message.role === "user" && "justify-end"
      )}>
      {message.role === "assistant" && (
        <Avatar>
          <AvatarImage src="/python-logo.png" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}

      <div className="flex flex-col gap-2 max-w-[85%] lg:max-w-[75%]">
        {isEditing ? (
          <div className="flex flex-col gap-2">
            <Textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="min-h-[100px] bg-secondary"
            />
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="ghost" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" /> Cancel
              </Button>
              <Button size="sm" onClick={handleSave}>
                <Check className="h-4 w-4 mr-2" /> Save
              </Button>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "p-4 rounded-lg",
              message.role === "assistant"
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground"
            )}>
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}>
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className={cn(
                        "bg-muted rounded px-1.5 py-0.5",
                        className
                      )}
                      {...props}>
                      {children}
                    </code>
                  );
                },
              }}>
              {message.content}
            </ReactMarkdown>
          </div>
        )}

        {!isEditing && message.role === "user" && (
          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsEditing(true)}
              className="h-8 w-8">
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onReload?.(message.id)}
              className="h-8 w-8">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {message.role === "user" && (
        <Avatar>
          <AvatarImage src="/user-avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}



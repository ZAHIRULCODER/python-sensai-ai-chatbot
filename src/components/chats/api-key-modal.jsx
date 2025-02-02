"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { initializeGenAI } from "@/lib/config/gemini";
import { useApiKey } from "@/contexts/apikey-context";

export function ApiKeyModal({ isOpen, onClose }) {
  const { apiKey, updateApiKey } = useApiKey();
  const { toast } = useToast();

  useEffect(() => {
    const storedApiKey = Cookies.get("geminiApiKey");
    if (storedApiKey) updateApiKey(storedApiKey);
  }, []);

  const handleSaveApiKey = () => {
    Cookies.set("geminiApiKey", apiKey, { expires: 365 });
    initializeGenAI(apiKey);
    toast({
      title: "API Key Saved",
      description: "Gemini API key saved successfully!",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>API Key Setup</DialogTitle>
          <DialogDescription>
            Get your API key from Google AI Studio and enter it here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="api-key" className="col-span-4">
              API Key
            </Label>
            <Input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={(e) => updateApiKey(e.target.value)}
              placeholder="Enter your Gemini API key"
              className="col-span-4"
            />
          </div>
        </div>
        <Button onClick={handleSaveApiKey}>Save Key</Button>
      </DialogContent>
    </Dialog>
  );
}

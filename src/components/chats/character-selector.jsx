"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { characters } from "@/data/characters";

// Helper to read the initial character from cookie
function getInitialCharacter() {
  try {
    const saved = Cookies.get("selectedCharacter");
    return saved ? JSON.parse(saved) : characters[0];
  } catch (error) {
    console.error(error);
    return characters[0];
  }
}

export function CharacterSelector() {
  const [selectedCharacter, setSelectedCharacter] =
    useState(getInitialCharacter);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (character) => {
    setSelectedCharacter(character);
    Cookies.set("selectedCharacter", JSON.stringify(character), {
      expires: 365,
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={() => setIsOpen(true)}>
          <span>{selectedCharacter.avatar}</span>
          <span className="truncate">{selectedCharacter.name}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[360px]">
        <DialogHeader>
          <DialogTitle>Choose Coding Buddy</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {characters.map((character) => (
            <Button
              key={character.id}
              variant="outline"
              className={cn(
                "flex h-auto flex-col gap-2 p-4 relative",
                selectedCharacter.id === character.id && "border-primary"
              )}
              onClick={() => handleSelect(character)}>
              <span className="text-2xl">{character.avatar}</span>
              <span className="font-medium">{character.name}</span>
              <span className="text-xs text-muted-foreground">
                {character.personality}
              </span>
              {selectedCharacter.id === character.id && (
                <span className="absolute top-2 right-2 text-green-500 text-lg">
                  ✔
                </span>
              )}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import { generateResponse } from "@/lib/config/gemini";
import { challenges } from "@/data/challenges";

const getShortFeedback = (text) => {
  if (!text) return "";
  const firstSentence = text.split(".")[1];
  const trimmed =
    firstSentence.length > 150
      ? firstSentence.substring(0, 150) + "..."
      : firstSentence;
  return trimmed + (trimmed.endsWith("...") ? "" : ".");
};

export function HomeworkChallenge({ open, onOpenChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState({ message: "", isCorrect: false });
  const [currentHint, setCurrentHint] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHintLoading, setIsHintLoading] = useState(false);

  const currentChallenge = challenges[currentIndex];

  const handleChallengeNavigation = (direction) => {
    setCurrentIndex((prev) => {
      const newIndex = direction === "next" ? prev + 1 : prev - 1;
      // Reset states when challenge changes
      setAnswer("");
      setFeedback({ message: "", isCorrect: false });
      setCurrentHint("");
      return newIndex;
    });
  };

  const checkAnswer = async () => {
    setIsLoading(true);
    setFeedback({ message: "", isCorrect: false });

    const prompt = `
        Challenge: ${currentChallenge.description}
        Expected Solution: ${currentChallenge.solution}
        Student Answer: ${answer}

        First, determine if the answer is correct. Start your response with either "Correct" or "Incorrect".
        Then, provide a short, specific explanation. If incorrect, identify errors and suggest improvements.
    `;

    try {
      const aiFeedback = await generateResponse(prompt);
      const isCorrect = aiFeedback.trim().toLowerCase().startsWith("correct");
      const feedbackMessage = aiFeedback.replace(
        /^(correct|incorrect)\s*/i,
        ""
      );

      setFeedback({
        message: feedbackMessage,
        isCorrect: isCorrect,
      });
    } catch (error) {
      setFeedback({
        message: "Failed to evaluate answer. Please try again.",
        isCorrect: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateHint = async () => {
    setIsHintLoading(true);
    setCurrentHint("");

    const prompt = `
        Challenge: ${currentChallenge.description}
        Expected Solution: ${currentChallenge.solution}

        Provide a concise hint to help the student solve this challenge. 
        Focus on key concepts needed without giving away the solution directly.
    `;

    try {
      const aiHint = await generateResponse(prompt);
      setCurrentHint(aiHint);
    } catch (error) {
      setCurrentHint("Unable to generate hint. Please try again.");
    } finally {
      setIsHintLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Python Challenge! 🏆</DialogTitle>
          <DialogDescription>
            Complete the challenge to earn points and track your progress!
            <span className="text-sm mt-2">
              Challenge {currentIndex + 1} of {challenges.length}
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h3 className="font-medium">{currentChallenge.title}</h3>
            <p className="text-sm text-muted-foreground">
              {currentChallenge.description}
            </p>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => handleChallengeNavigation("prev")}
              disabled={currentIndex === 0}>
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => handleChallengeNavigation("next")}
              disabled={currentIndex === challenges.length - 1}>
              Next
            </Button>
          </div>

          {currentHint && (
            <div className="p-3 rounded-lg bg-blue-500/20 text-blue-500 text-sm flex items-start gap-2">
              <Lightbulb className="h-4 w-4 mt-1 flex-shrink-0" />
              <span>{currentHint}</span>
            </div>
          )}

          <Textarea
            placeholder="Write your Python code here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="min-h-[150px] font-mono"
          />

          {feedback.message && (
            <div
              className={`flex items-start gap-2 p-3 rounded-lg ${
                feedback.isCorrect
                  ? "bg-green-500/20 text-green-500"
                  : "bg-red-500/20 text-red-500"
              }`}>
              {feedback.isCorrect ? (
                <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              )}
              <span>{getShortFeedback(feedback.message)}</span>
            </div>
          )}

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={generateHint}
              disabled={isHintLoading}>
              {isHintLoading ? "Generating Hint..." : "Show Hint"}
            </Button>
            <Button onClick={checkAnswer} disabled={isLoading}>
              {isLoading ? "Evaluating..." : "Check Answer"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

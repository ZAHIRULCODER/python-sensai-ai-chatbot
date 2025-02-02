import { GoogleGenerativeAI } from "@google/generative-ai";

let genAI = null;

export const initializeGenAI = (apiKey) => {
  genAI = new GoogleGenerativeAI(apiKey);
};

export const generateResponse = async (prompt) => {
  if (!genAI) throw new Error("Gemini not initialized");
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const result = await model.generateContent(prompt);
    return await result.response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate response. Please try again.");
  }
};

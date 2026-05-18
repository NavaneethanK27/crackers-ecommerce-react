import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY || API_KEY === "YOUR_GEMINI_API_KEY") {
  console.error("Gemini API Key is missing or invalid in .env file!");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const getGeminiResponse = async (prompt, chatHistory = []) => {
  try {
    const chat = model.startChat({
      history: chatHistory,
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later!";
  }
};

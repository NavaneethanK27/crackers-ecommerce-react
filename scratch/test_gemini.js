import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.VITE_GEMINI_API_KEY;

async function listModels() {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    // There isn't a direct listModels in the JS SDK's main genAI object usually, 
    // it's often part of the generativeAI service or you have to use the REST API.
    // Let's try to just hit one or two common names.
    const models = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro", "gemini-2.0-flash-exp"];
    
    for (const modelName of models) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("test");
        console.log(`✅ Model ${modelName} is available.`);
        process.exit(0);
      } catch (e) {
        console.log(`❌ Model ${modelName} failed: ${e.message}`);
      }
    }
  } catch (error) {
    console.error("General error:", error);
  }
}

listModels();

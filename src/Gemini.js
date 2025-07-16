
 

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


// Use environment variable safely
const apiKey ="AIzaSyBHOSl0j0H-Nf2ZqT0K_gy8k3m-lU1AOl8"
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Optional: config for safety
const generationConfig = {
  temperature: 0.7,
  maxOutputTokens: 20,
};

async function Run(prompt) {
  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig,
  });

  const response = result.response;
  return response.text()
}

export default Run;

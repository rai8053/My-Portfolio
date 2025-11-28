import { GoogleGenAI } from "@google/genai";
import { DEVELOPER_BIO, PROJECTS, SKILLS, DEVELOPER_NAME } from '../constants';

const apiKey = process.env.API_KEY;

// Construct the system instruction based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${DEVELOPER_NAME}'s portfolio website. 
Your goal is to answer questions about ${DEVELOPER_NAME}'s skills, projects, and professional background professionally and concisely.

Here is the context about ${DEVELOPER_NAME}:
Bio: ${DEVELOPER_BIO}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join('\n')}

Rules:
1. Be polite, professional, and helpful.
2. If asked about contact info, refer them to the contact section or mention the email.
3. Keep answers relatively short (under 100 words) unless asked for details.
4. If asked something unrelated to the portfolio or web development, politely steer the conversation back to ${DEVELOPER_NAME}'s work.
`;

let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({ apiKey });
} else {
  console.warn("Gemini API Key is missing. Chat functionality will be limited.");
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!aiClient) {
    return "I'm sorry, my brain (API Key) is missing right now. Please check the configuration.";
  }

  try {
    const model = aiClient.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm not sure how to answer that.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I encountered a temporary error. Please try again later.";
  }
};

import { GoogleGenAI } from "@google/genai";

// Assume API_KEY is set in the environment variables
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY for Gemini is not set. The AI feature will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `Você é um assistente virtual informativo focado na campanha Novembro Azul e saúde masculina, especialmente o câncer de próstata. 
Suas respostas devem ser claras, objetivas e baseadas em informações de saúde confiáveis. 
NÃO forneça diagnósticos ou conselhos médicos diretos. 
Sempre, ao final de cada resposta, inclua o seguinte aviso: 
'Lembre-se: esta é uma ferramenta informativa e não substitui a consulta com um médico especialista. Cuide da sua saúde.'`;

export async function askGemini(question: string): Promise<string> {
  if (!API_KEY) {
      throw new Error("A chave da API não está configurada.");
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
        topP: 0.95,
        topK: 64
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Não foi possível obter uma resposta da IA.");
  }
}

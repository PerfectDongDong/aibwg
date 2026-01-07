
import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
};

export const generateCreativeConcept = async (prompt: string, style: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `请基于“${style}”艺术风格，结合以下需求描述，生成一个具体的文创产品设计方案：${prompt}。
    要求包含：产品名称、核心设计元素、推荐材质、受众群体。请以简洁的Markdown格式回答。`,
  });
  return response.text;
};

export const generateHeritageArt = async (prompt: string, style: string) => {
  const ai = getAIClient();
  // We use gemini-3-pro-image-preview for high quality cultural generation
  // Users will need to provide their own key as per guidelines if this were a VEO context, 
  // but for standard generation we follow basic flow.
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [
        {
          text: `A professional digital artwork in the style of ${style} cultural heritage. The scene shows: ${prompt}. Hyper-detailed, authentic traditional textures, high definition, elegant lighting.`,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
        imageSize: "1K"
      }
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

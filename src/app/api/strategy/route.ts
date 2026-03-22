import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: Request) {
  try {
    const { results } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Missing GEMINI_API_KEY" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `
    You are an expert career strategist. A candidate is applying for the same role at multiple companies.
    Here are the gap analysis results and match scores for each company:
    
    ${JSON.stringify(results, null, 2)}

    Generate an "Application Strategy" - a single, plain-English paragraph telling the student which company to target first, which to build toward, and how to use early offers as leverage based on these scores and intelligence.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return NextResponse.json({ strategy: response.text });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { PDFParse } from 'pdf-parse';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('resume') as File;
    const company = formData.get('company') as string;
    const role = formData.get('role') as string;
    const exp = formData.get('exp') as string;

    if (!file) {
      return NextResponse.json({ error: 'No resume provided' }, { status: 400 });
    }

    // 1. Parse PDF
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const parser = new PDFParse({ data: buffer });
    const textResult = await parser.getText();
    const resumeText = textResult.text;

    // 2. Setup Claude Analysis (using tool-calling for live search)
    // Note: We simulate the search tool for now as it requires an external search API
    // but the prompt will guide Claude to synthesize the results.
    
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ 
        status: 'mock',
        data: {
          hireProbability: 88,
          gaps: ["Missing Cloud Ops", "Needs more React Native"],
          roadmap: [{ week: "01", topic: "Cloud Basics" }]
        },
        message: 'No API Key found. Returning mock data.'
      });
    }

    const message = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 2000,
      system: `You are an Agentic Career Coach. Analyze the resume against the target role and company. 
      Target Company: ${company}
      Target Role: ${role}
      Experience Level: ${exp}
      
      Provide a JSON response with:
      {
        "hireProbability": number,
        "gaps": string[],
        "roadmap": [{ "week": string, "topic": string, "focus": string }]
      }`,
      messages: [
        { role: "user", content: `Resume Content: ${resumeText}` }
      ],
    });

    const response = message.content[0].type === 'text' ? JSON.parse(message.content[0].text) : {};

    return NextResponse.json(response);
  } catch (error: any) {
    console.error('Analysis error:', error);
    return NextResponse.json({ error: error.message || 'Failed to analyze' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Lazy load pdf-parse to avoid build-time issues
    const pdf = require('pdf-parse');
    const data = await pdf(buffer);

    return NextResponse.json({ text: data.text });
  } catch (error: any) {
    console.error("PDF Parsing Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

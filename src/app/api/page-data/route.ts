import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch("https://slather-student-refresh.ngrok-free.dev/api/it-solutions-page?populate=deep", {
      headers: {
        "ngrok-skip-browser-warning": "69420"
      }
    });
    
    if (!response.ok) {
        throw new Error(`Failed to fetch from Strapi: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "AI Content Generator",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", // 🔥 FIXED MODEL
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("🔥 FULL OPENROUTER RESPONSE:", JSON.stringify(data, null, 2));

    const text =
      data?.choices?.[0]?.message?.content ||
      data?.choices?.[0]?.text ||
      "No response from AI";

    return NextResponse.json({ text });

  } catch (error) {
    console.error("❌ API ERROR:", error);

    return NextResponse.json(
      { text: "Something went wrong" },
      { status: 500 }
    );
  }
}
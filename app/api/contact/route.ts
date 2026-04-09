import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, organization, inquiryType, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    console.log("New Inquiry Received:", {
      name,
      email,
      organization,
      inquiryType,
      message,
    });

    return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

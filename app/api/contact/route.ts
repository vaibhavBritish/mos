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

    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (appsScriptUrl && appsScriptUrl !== "PASTE_YOUR_LINK_HERE") {
      // Send data to Google Sheets via Apps Script
      try {
        await fetch(appsScriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, organization, inquiryType, message }),
        });
      } catch (err) {
        console.error("Apps Script Error:", err);
        // We continue anyway so the user doesn't see an error if the sheet fails
      }
    }

    // console.log("New Inquiry Received:", { name, email, organization, inquiryType, message });

    return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

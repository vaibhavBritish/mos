import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, organization, inquiryType, message } = await request.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In a real scenario, you'd send an email to yourself
    // We use the RESEND_API_KEY from environment variables
    const { data, error } = await resend.emails.send({
      from: "MoS Contact Form <onboarding@resend.dev>",
      to: ["contact@masterofstrategies.com"], // Site owner's email
      subject: `New Inquiry: ${inquiryType} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #000; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Strategic Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization || "N/A"}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f9fafb; border-left: 4px solid #3b82f6;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <footer style="margin-top: 30px; font-size: 12px; color: #6b7280; text-align: center;">
            Sent from Master of Strategies Professional Website
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      // Even if email fails, we might want to log it and proceed if we're using a database
      // But here, email is the primary "working" part
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

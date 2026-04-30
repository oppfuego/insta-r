import { NextResponse } from "next/server";
import {
  sendContactMessageEmail,
  sendContactAutoReply,
} from "@/src/lib/email/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    const contactData = { name, email, subject, message };

    await sendContactMessageEmail(contactData);

    try {
      await sendContactAutoReply(contactData);
    } catch {
      // Auto-reply failure should not block the main submission
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, type } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "placeholder") {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "IMN Website <noreply@ibexmedianetwork.com>",
        to: ["info@ibexmedianetwork.com"],
        replyTo: email,
        subject: `[${type || "Contact"}] ${subject || "New Message"}`,
        html: `
          <h2>New ${type || "contact"} form submission</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject || "—"}</p>
          <p><strong>Type:</strong> ${type || "general"}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      });
    } else {
      console.log("Contact form submission (Resend not configured):", { name, email, subject, type });
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

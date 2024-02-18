import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { RequestBody } from "@/lib/types";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { name, email, subject, message } = body.data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required data" },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "kadynjaipearce@gmail.com",
      subject: subject,
      react: EmailTemplate({
        firstName: name,
        email: email,
        subject: subject,
        message: message,
      }) as React.ReactElement,
    });

    return NextResponse.json(
      { success: true, data },
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

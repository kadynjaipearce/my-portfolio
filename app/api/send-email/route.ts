import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { RequestBody, ErrorData } from "@/lib/types";
import { Resend } from "resend";
import { SelfEmailTemplate } from "@/components/SelfEmailTemplate";
import { UserEmailTemplate } from "@/components/UserEmailTemplate";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.EMAIL_DOMAIN ?? "email@kadynpearce.dev";

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { name, email, subject, message } = body.data;

    if (!name || !email || !subject || !message) {
      // List all fields that are missing in the response for better UX
      const missingFields = ["name", "email", "subject", "message"].filter(
        (field) => !(body.data as ErrorData)[field],
      );
      return NextResponse.json(
        {
          success: false,
          message: `Missing required data: ${missingFields.join(", ")}`,
        },
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const selfEmail = await resend.emails.send({
      from: domain,
      to: "kadynjaipearce@gmail.com",
      subject: subject,
      react: SelfEmailTemplate({
        firstName: name,
        email: email,
        subject: subject,
        message: message,
      }) as React.ReactElement,
    });

    console.log(email);

    const userEmail = await resend.emails.send({
      from: domain,
      to: email,
      subject: `Hello ${name} Nice to Meet You.`,
      react: UserEmailTemplate({
        firstName: name,
      }) as React.ReactElement,
    });

    return NextResponse.json(
      { success: true, userEmail },
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred" },
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}

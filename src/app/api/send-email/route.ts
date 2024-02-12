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
      return new NextResponse("Missing Data", { status: 400 });
    }

    if (!validator.isEmail(email)) {
      return new NextResponse("Invalid Email", { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: subject,
      react: EmailTemplate({
        firstName: name,
        message: message,
      }) as React.ReactElement,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.log(error);
    return new NextResponse(`${error}`, {
      status: 469,
    });
  }
}

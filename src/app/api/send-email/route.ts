import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { RequestBody } from "@/lib/types";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await request.json();
    const { name, email, message } = body.data;

    if (!name || !email || !message) {
      return new NextResponse("Missing Data", { status: 400 });
    }

    if (!validator.isEmail(email)) {
      console.log(
        "Name: ",
        name,
        "Invalid Email: ",
        email,
        "Message: ",
        message
      );
      return new NextResponse("Invalid Email", { status: 400 });
    }

    console.log("Name: ", name, "Valid Email: ", email, "Message: ", message);

    // TODO check name & message input size
    // TODO send email to self and user: email

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(`${error}`, {
      status: 469,
    });
  }
}

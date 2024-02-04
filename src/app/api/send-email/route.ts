import { NextRequest, NextResponse } from "next/server";
import validator from "validator";

interface RequestBody {
  data: {
    name: string;
    email: string;
    message: string;
  };
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await request.json();
    const { name, email, message } = body.data;
    console.log("Name: ", name, "Email: ", email, "Message: ", message);

    if (!name || !email || !message) {
      return new NextResponse("Missing Data", { status: 400 });
    }

    if (!validator.isEmail(email)) {
      return new NextResponse("Invalid Email", { status: 400 });
    }

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

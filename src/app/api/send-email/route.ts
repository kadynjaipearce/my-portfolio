export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    console.log("Name: ", name, "Email: ", email, "Message: ", message);

    // todo validate input.

    if (name == "") {
      throw new Error("Please Provide all details");
    }
    return Response.json("Success", { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json(`${error}`, {
      status: 469,
    });
  }
}

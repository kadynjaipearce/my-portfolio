import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const filename = "kadyn-Jai Pearce Resume.pdf";
  const URL = "http://localhost:3000/kadyn.pdf";
  const response = await fetch(URL);

  return new NextResponse(response.body, {
    headers: {
      ...response.headers, // copy the previous headers
      "content-disposition": `attachment; filename="${filename}"`,
    },
  });
}

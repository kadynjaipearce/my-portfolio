export async function GET(req: Request) {
  const filename = "kadyn-Jai Pearce Resume.pdf";
  const URL = "http://localhost:3000/kadyn.pdf";
  const response = await fetch(URL);

  return new Response(response.body, {
    headers: {
      ...response.headers, // copy the previous headers
      "content-disposition": `attachment; filename="${filename}"`,
    },
  });
}

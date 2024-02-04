import Container from "@/components/Container";
import prisma from "@/lib/utils";

export default async function Page({ params }: { params: { post: string } }) {
  const data = await prisma.post.findUnique({
    where: {
      slug: params.post,
    },
  });
  return (
    <Container>
      <div></div>
    </Container>
  );
}

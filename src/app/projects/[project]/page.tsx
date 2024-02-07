import Container from "@/components/Container";
import prisma from "@/lib/utils";

export default async function Page({
  params,
}: {
  params: { project: string };
}) {
  const data = await prisma.project.findUnique({
    where: {
      slug: params.project,
    },
  });
  return (
    <Container>
      <div></div>
    </Container>
  );
}

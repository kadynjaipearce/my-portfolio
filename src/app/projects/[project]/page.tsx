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
    <div>
      {data && (
        <div>
          My Post: {params.project} {data?.title}
          <div className="mt-10 rounded-lg ">
            <div className="flex justify-between">
              <h1 className="text-3xl title-font">{data.title}</h1>
              <h1 className="text-xl italic">{data.createdAt.toString()}</h1>
            </div>
          </div>
        </div>
      )}
      {!data && <div className="text-3xl text-center">This doesnt Exist</div>}
    </div>
  );
}

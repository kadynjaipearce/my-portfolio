import prisma from "@/app/utils/database";
import Image from "next/image";
import Markdown from "react-markdown";

export default async function Page({ params }: { params: { post: string } }) {
  const data = await prisma.post.findUnique({
    where: {
      slug: params.post,
    },
  });
  return (
    <div>
      {data && (
        <div>
          My Post: {params.post} {data?.title}
          <div className="w-full">
            <Image
              src={`/${data.img}.png`}
              alt={data.title}
              width={10000}
              height={10000}
              className="rounded-xl"
            ></Image>
          </div>
          <div className=" h-screen rounded-lg mt-10 space-y-10">
            <div className="flex justify-between">
              <h1 className="title-font text-3xl">{data.title}</h1>
              <h1 className="text-xl italic">{data.createdAt.toString()}</h1>
            </div>
            <Markdown>{data.body}</Markdown>
          </div>
        </div>
      )}
      {!data && <div className="text-center text-3xl">This doesnt Exist</div>}
    </div>
  );
}

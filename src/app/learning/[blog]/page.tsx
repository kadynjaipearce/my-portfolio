import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Category from "@/components/Category";
import Container from "@/components/Container";
import prisma from "@/lib/utils";
import { CategoryName, TechName } from "@/lib/types";
import TechPill from "@/components/TechPill";

export default async function Page({ params }: { params: { blog: string } }) {
  console.log(params.blog);
  const data = await prisma.post.findUnique({
    where: {
      slug: params.blog,
    },
  });

  if (!data) {
    return notFound();
  }

  return (
    <Container mobileFull={true}>
      <div className="my-16">
        <div className="px-6">
          <Category category={data?.category as CategoryName} />
          <div className="my-6 flex flex-col justify-between space-y-7 md:flex-row md:space-y-0">
            <h1 className="text-4xl font-bold text-gray-900">{data?.title}</h1>
            <h2 className="text-xl font-semibold text-gray-800">
              Posted On {data?.createdAt.toDateString()}
            </h2>
          </div>
          <div className="my-7 flex flex-wrap gap-3">
            {data?.techStack.map((item: string) => {
              return <TechPill tech={item as TechName} key={item} />;
            })}
          </div>
        </div>

        <div className="my-10 flex w-full items-center justify-center md:my-20">
          <Image
            src={`/${data?.img}`}
            alt=""
            width={1100}
            height={1100}
            className="rounded-none md:rounded-xl"
          ></Image>
        </div>
        <div className="px-6">
          <div className="font-medium">{data?.body}</div>

          {data?.html ? (
            <div dangerouslySetInnerHTML={{ __html: data?.html || "" }} />
          ) : (
            <div className="my-5 text-center text-xl font-bold">
              🚧 - This project page is currently being written - 🚧
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

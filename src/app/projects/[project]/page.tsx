import React from "react";
import Image from "next/image";
import Category from "@/components/Category";
import Container from "@/components/Container";
import prisma from "@/lib/utils";
import { CategoryName } from "@/lib/types";

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
      <div className="my-16">
        <Category category={data?.category as CategoryName} />
        <div className="my-6 flex justify-between">
          <h1 className="text-5xl font-bold text-black">{data?.title}</h1>
          <h2 className="text-2xl font-semibold">
            Posted On {data?.createdAt.toDateString()}
          </h2>
        </div>
        <div className="my-4 flex flex-wrap space-x-5">
          {data?.techStack.map((item) => {
            return (
              <div
                key={item}
                className="my-2 w-36 rounded-lg bg-green-200 p-1 text-center font-semibold text-green-600"
              >
                {item}
              </div>
            );
          })}
        </div>
        <Image src={`/${data?.img}`} alt="" width={1000} height={1000}></Image>
        {data?.html ? (
          <div dangerouslySetInnerHTML={{ __html: data?.html || "" }} />
        ) : (
          <div className="text-center text-3xl font-bold uppercase">
            🚧 - {data?.title} project page is currently being written - 🚧
          </div>
        )}
      </div>
    </Container>
  );
}

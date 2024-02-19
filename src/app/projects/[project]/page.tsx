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
        <div className="flex justify-between my-6">
          <h1 className="text-black font-bold text-5xl">{data?.title}</h1>
          <h2 className="text-2xl font-semibold">
            Posted On {data?.createdAt.toDateString()}
          </h2>
        </div>
        <div className="flex space-x-5 my-4 flex-wrap">
          {data?.techStack.map((item) => {
            return (
              <div
                key={item}
                className="text-green-600 font-semibold bg-green-200 w-36 text-center rounded-lg p-1 my-2"
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
          <div className="text-3xl font-bold uppercase text-center">
            🚧 - {data?.title} project page is currently being written - 🚧
          </div>
        )}
      </div>
    </Container>
  );
}

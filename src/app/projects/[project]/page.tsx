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
        <h1 className="text-black font-bold text-5xl my-6">{data?.title}</h1>
        <h2 className="text-2xl font-semibold">
          Posted On {data?.createdAt.toDateString()}
        </h2>
        <Image src={`/${data?.img}`} alt="" width={1000} height={1000}></Image>
        <div dangerouslySetInnerHTML={{ __html: data?.body || "" }} />
      </div>
    </Container>
  );
}

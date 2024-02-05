import React from "react";
import Container from "./Container";
import prisma from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Experience() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <Container>
      <div>
        <div className="my-20 space-y-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row-reverse ">
            <Link href={`/projects/${projects[0]?.slug}`} className="max-w-lg">
              <Image
                src="/complier.webp"
                alt=""
                className="w-full rounded-xl"
                width={10000}
                height={10000}
              />
            </Link>

            <div className="space-y-6 text-left max-w-3xl">
              <div className="flex justify-between">
                <span className="inline-flex items-center rounded-full border-2 border-blue-200 bg-blue-200 px-2 py-1 text-sm font-semibold text-blue-600 shadow-sm">
                  {projects[0].category}
                </span>
                <Link
                  href={`/projects/${projects[0]?.slug}`}
                  className="flex font-bold hover:bg-gray-200 px-3 rounded-full ease-in-out duration-200"
                >
                  Learn More <FaArrowRight className="mt-2 ml-2" />
                </Link>
              </div>
              <h3 className="text-3xl font-bold text-heading lg:text-4xl">
                {projects[0].title}
              </h3>
              <p className="text-lg ">{projects[0].body.slice(0, 200)}...</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <Link href={`/projects/${projects[1]?.slug}`} className="max-w-lg">
              <Image
                src="/blockchain.webp"
                alt=""
                className="w-full rounded-xl"
                width={10000}
                height={10000}
              />
            </Link>

            <div className="max-w-3xl space-y-6 text-left">
              <div className="flex justify-between">
                <span className="inline-flex items-center rounded-full border-2 border-pink-200 bg-pink-200 px-2 py-1 text-sm font-semibold text-pink-600 shadow-sm">
                  {projects[1].category}
                </span>
                <Link
                  href={`/projects/${projects[1]?.slug}`}
                  className="flex font-bold hover:bg-gray-200 px-3 rounded-full ease-in-out duration-200"
                >
                  Learn More <FaArrowRight className="mt-2 ml-2" />
                </Link>
              </div>
              <h3 className="text-3xl font-bold text-heading lg:text-4xl">
                {projects[1].title}
              </h3>
              <p className="text-lg">{projects[1].body.slice(0, 200)}...</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

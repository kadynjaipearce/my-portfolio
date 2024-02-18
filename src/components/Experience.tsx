import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import prisma from "@/lib/utils";
import Category from "@/components/Category";
import { FaArrowRight } from "react-icons/fa";
import { CategoryName } from "@/lib/types";

export default async function Experience() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      slug: true,
      img: true,
      title: true,
      body: true,
      html: false,
      category: true,
      githubUrl: false,
      websiteUrl: false,
      techStack: false,
      createdAt: false,
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
                <Category category={projects[0].category as CategoryName} />
                <Link
                  href={`/projects/${projects[0]?.slug}`}
                  className="flex leading-8 font-bold hover:bg-gray-200 px-3 rounded-full ease-in-out duration-200 text-gray-950"
                >
                  Learn More <FaArrowRight className="mt-2 ml-2" />
                </Link>
              </div>
              <h3 className="text-3xl font-bold text-heading lg:text-4xl lg:text-left text-center text-gray-950">
                {projects[0].title}
              </h3>

              <p className="text-lg lg:text-left text-center text-gray-950">
                {projects[0].body.slice(0, 200)}...
              </p>
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
                <Category category={projects[1].category as CategoryName} />
                <Link
                  href={`/projects/${projects[1]?.slug}`}
                  className="flex leading-8 font-bold hover:bg-gray-200 px-3 rounded-full ease-in-out duration-200 text-gray-950"
                >
                  Learn More <FaArrowRight className="mt-2 ml-2" />
                </Link>
              </div>
              <h3 className="text-3xl font-bold text-heading lg:text-4xl lg:text-left text-center text-gray-950">
                {projects[1].title}
              </h3>

              <p className="text-lg lg:text-left text-center text-gray-950">
                {projects[1].body.slice(0, 200)}...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

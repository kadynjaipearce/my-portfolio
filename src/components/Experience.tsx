import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import prisma from "@/lib/utils";
import Category from "@/components/Category";
import { CategoryName } from "@/lib/types";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";

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
      githubUrl: true,
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
                src={`/${projects[0]?.img}`}
                alt=""
                className="w-full rounded-xl"
                width={10000}
                height={10000}
              />
            </Link>

            <div className="max-w-3xl space-y-6 text-left">
              <div className="flex justify-between">
                <Category category={projects[0]?.category as CategoryName} />
                <div className="mt-1 flex space-x-4 text-2xl">
                  <Link href={`/projects/${projects[0]?.slug}`}>
                    <RiExternalLinkLine className="hover:scale-110" />
                  </Link>

                  <Link href={`${projects[0]?.githubUrl}`}>
                    <RiGithubLine className="hover:scale-110" />
                  </Link>
                </div>
              </div>
              <h3 className="text-heading text-3xl font-bold text-gray-950 lg:text-4xl">
                {projects[0]?.title}
              </h3>

              <p className="text-lg  text-gray-950">{projects[0]?.body}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <Link href={`/projects/${projects[1]?.slug}`} className="max-w-lg">
              <Image
                src={`/${projects[1]?.img}`}
                alt=""
                className="w-full rounded-xl"
                width={10000}
                height={10000}
              />
            </Link>

            <div className="max-w-3xl space-y-6 text-left">
              <div className="flex justify-between">
                <Category category={projects[1]?.category as CategoryName} />
                <div className="mt-1 flex space-x-4 text-2xl">
                  <Link href={`/projects/${projects[1]?.slug}`}>
                    <RiExternalLinkLine className="hover:scale-110" />
                  </Link>

                  <Link href={`${projects[1]?.githubUrl}`}>
                    <RiGithubLine className="hover:scale-110" />
                  </Link>
                </div>
              </div>
              <h3 className="text-heading text-3xl font-bold text-gray-950">
                {projects[1]?.title}
              </h3>

              <p className="text-lg text-gray-950">{projects[1]?.body}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

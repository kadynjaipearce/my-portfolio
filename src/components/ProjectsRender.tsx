import React from "react";
import Image from "next/image";
import Link from "next/link";
import Category from "@/components/Category";
import { ProjectProps } from "@/lib/types";
import { CategoryName } from "@/lib/types";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";

export default function ProjectsRender({ project, type }: ProjectProps) {
  return (
    <div className="-my-8 divide-y-4 divide-gray-100 px-6">
      {project.map((data) => {
        return (
          <div className="py-10" key={data.id}>
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row-reverse ">
              <Link href={`/${type}/${data.slug}`} className="max-w-lg">
                <Image
                  src="/complier.webp"
                  alt=""
                  className="w-full rounded-xl"
                  width={10000}
                  height={10000}
                />
              </Link>

              <div className="max-w-3xl space-y-6 text-left">
                <div className="flex justify-between">
                  <Category category={data.category as CategoryName} />

                  <div className="flex space-x-4 text-2xl">
                    <Link href={`/${type}/${data.slug}`}>
                      <RiExternalLinkLine className="hover:scale-110" />
                    </Link>

                    <Link href={`${data.githubUrl}`}>
                      <RiGithubLine className="hover:scale-110" />
                    </Link>
                  </div>
                </div>
                <h3 className="text-heading text-left text-3xl font-bold text-gray-950 lg:text-4xl">
                  {data.title}
                </h3>

                <p className="text-md text-left text-gray-950">{data.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Category from "@/components/Category";
import { CategoryName } from "@/lib/types";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";
import { getDataFromDB } from "@/lib/query";

export default async function Experience() {
  const items = await getDataFromDB();

  return (
    <Container>
      <div>
        <div className="my-20 space-y-10">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-between gap-6 ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              <Link href={""} className="max-w-lg">
                <Image
                  src={`/${item.img}`}
                  alt={item.title}
                  className="w-full rounded-xl"
                  width={10000}
                  height={10000}
                />
              </Link>

              <div className="max-w-3xl space-y-6 text-left">
                <div className="flex justify-between">
                  <Category category={item.category as CategoryName} />
                  <div className="mt-1 flex space-x-4 text-2xl">
                    <Link href={item.externalUrl ?? ""}>
                      <RiExternalLinkLine className="hover:scale-110" />
                    </Link>
                    <Link href={item.githubUrl ?? ""}>
                      <RiGithubLine className="hover:scale-110" />
                    </Link>
                  </div>
                </div>
                <h3 className="text-heading text-3xl font-bold text-gray-950 lg:text-4xl">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-950">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

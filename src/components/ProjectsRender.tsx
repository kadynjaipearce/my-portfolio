import React from "react";

import Image from "next/image";
import Link from "next/link";
import Category from "@/components/Category";
import { BlogpostProps } from "@/lib/types";
import { FaArrowRight } from "react-icons/fa";
import { CategoryName } from "@/lib/types";

export default function ProjectsRender({ data, type }: BlogpostProps) {
  return (
    <div className="-my-8 divide-y-4 divide-gray-100">
      {data.map((item) => {
        return (
          <div className="py-10" key={item.id}>
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row-reverse ">
              <Link href={`/${type}/${item.slug}`} className="max-w-lg">
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
                  <Category category={item.category as CategoryName} />
                  <Link
                    href={`/${type}/${item.slug}`}
                    className="flex leading-8 font-bold hover:bg-gray-200 px-3 rounded-full ease-in-out duration-200 text-gray-950"
                  >
                    Learn More <FaArrowRight className="mt-2 ml-2" />
                  </Link>
                </div>
                <h3 className="text-3xl font-bold text-heading lg:text-4xl lg:text-left text-center text-gray-950">
                  {item.title}
                </h3>

                <p className="text-lg lg:text-left text-center text-gray-950">
                  {item.body.slice(0, 200)}...
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

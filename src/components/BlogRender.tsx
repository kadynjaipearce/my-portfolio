import Link from "next/link";
import React from "react";
import Category from "@/components/Category";
import { BlogpostProps } from "@/lib/types";
import { FaArrowRight } from "react-icons/fa";
import { CategoryName } from "@/lib/types";

export default function BlogRender({ data, type }: BlogpostProps) {
  return (
    <div className="px-6 py-10">
      <div className="-my-8 divide-y-4 divide-gray-100">
        {data.map((item) => {
          return (
            <div className="flex flex-wrap py-10 md:flex-nowrap" key={item.id}>
              <div className="mb-6 flex flex-shrink-0 flex-col">
                <div className="md:w-48 lg:w-64">
                  <Category category={item.category as CategoryName} />
                </div>
                <span className="mt-3 text-sm font-semibold text-gray-900 lg:ml-2">
                  {item.createdAt.toDateString()}
                </span>
              </div>
              <div className="-mt-2 md:flex-grow">
                <h2 className="title-font mb-2 text-3xl font-bold text-gray-900">
                  {item.title}
                </h2>
                <p className="">{item.body.slice(0, 350)}...</p>
                <Link
                  href={`/${type}/${item.slug}`}
                  className="mt-4 inline-flex items-center font-bold leading-8"
                >
                  Learn More
                  <FaArrowRight className="ml-2 mt-[2px]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

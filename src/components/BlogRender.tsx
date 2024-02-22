import Link from "next/link";
import React from "react";
import Category from "@/components/Category";
import { BlogpostProps } from "@/lib/types";
import { FaArrowRight } from "react-icons/fa";
import { CategoryName } from "@/lib/types";

export default function BlogRender({ blog, type }: BlogpostProps) {
  return (
    <div className="px-6 py-10">
      <div className="-my-8 divide-y-4 divide-gray-100">
        {blog.map((data) => {
          return (
            <div className="flex flex-wrap py-10 md:flex-nowrap" key={data.id}>
              <div className="mb-6 flex flex-shrink-0 flex-col">
                <div className="md:w-48 lg:w-64">
                  <Category category={data.category as CategoryName} />
                </div>
                <span className="mt-3 text-sm font-semibold text-gray-900 lg:ml-2">
                  {data.createdAt.toDateString()}
                </span>
              </div>
              <div className="-mt-2 md:flex-grow">
                <h2 className="title-font mb-2 text-3xl font-bold text-gray-900">
                  {data.title}
                </h2>
                <p className="">{data.body}</p>
                <Link
                  href={`/${type}/${data.slug}`}
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

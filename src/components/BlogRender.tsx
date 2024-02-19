import Link from "next/link";
import React from "react";
import Category from "@/components/Category";
import { BlogpostProps } from "@/lib/types";
import { FaArrowRight } from "react-icons/fa";
import { CategoryName } from "@/lib/types";

export default function BlogRender({ data, type }: BlogpostProps) {
  return (
    <div className="py-10 px-6">
      <div className="-my-8 divide-y-4 divide-gray-100">
        {data.map((item) => {
          return (
            <div className="py-10 flex flex-wrap md:flex-nowrap" key={item.id}>
              <div className="mb-6 flex-shrink-0 flex flex-col">
                <div className="lg:w-64 md:w-48">
                  <Category category={item.category as CategoryName} />
                </div>
                <span className="mt-3 text-gray-900 text-sm lg:ml-2 font-semibold">
                  {item.createdAt.toDateString()}
                </span>
              </div>
              <div className="md:flex-grow -mt-2">
                <h2 className="text-3xl font-bold text-gray-900 title-font mb-2">
                  {item.title}
                </h2>
                <p className="">{item.body.slice(0, 350)}...</p>
                <Link
                  href={`/learning/${item.slug}`}
                  className="inline-flex items-center mt-4 leading-8 font-bold"
                >
                  Learn More
                  <FaArrowRight className="mt-[2px] ml-2 hover:tra" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

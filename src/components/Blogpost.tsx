import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiExternalLinkLine,
} from "react-icons/ri";

interface BlogData {
  id: string;
  slug: string;
  img: string;
  title: string;
  body: string;
  category: string;
  githubUrl: string;
  websiteUrl: string;
  createdAt: Date;
}

interface BlogpostProps {
  data: BlogData[];
}

export default function Blogpost({ data }: BlogpostProps) {
  return (
    <div>
      {!data ? (
        <div>
          <h1>No data</h1>
        </div>
      ) : (
        <div>
          <div className="flex flex-col md:flex-row my-10 gap-5">
            {data.map((item) => {
              return (
                <div
                  className="w-full md:w-1/3 lg:w-1/2  border-2 rounded-xl my-5"
                  key={item.id}
                >
                  <div>
                    <Image
                      src={"/complier.webp"}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-t-xl p-1"
                    ></Image>
                  </div>
                  <div className="p-3 md:p-7">
                    <div className="flex justify-between text-lg lg:text-3xl">
                      <h1 className="font-bold">{item.title}</h1>
                      <div className="flex space-x-4 mt-1 md:mt-0">
                        <Link href={item?.githubUrl}>
                          <RiGithubLine />
                        </Link>
                        <Link href={item?.slug}>
                          <RiExternalLinkLine className="hover:bg-gray-200 rounded-full" />
                        </Link>
                      </div>
                    </div>
                    <div className="flex space-x-1 lg:space-x-4 mt-3">
                      <Link
                        href="https://github.com/kadynjaipearce"
                        className="flex items-center rounded border-2 border-neutral-200 bg-neutral-200 px-2 font-semibold text-neutral-600 shadow-sm text-xs md:text-lg"
                      >
                        <RiGithubLine className="mr-2 text-sm" />{" "}
                        <h1>Github</h1>
                      </Link>

                      <Link
                        href="https://www.instagram.com/kadynpearce/"
                        className="flex items-center rounded border-2 border-pink-200 bg-pink-200 px-2 font-semibold text-pink-600 shadow-sm text-xs md:text-lg"
                      >
                        <RiInstagramLine className="mr-2 text-sm" />{" "}
                        <h1>Instagram</h1>
                      </Link>

                      <Link
                        href="https://www.linkedin.com/in/kadyn-jai-pearce-9b4ab6208/"
                        className="flex items-center rounded border-2 border-blue-200 bg-blue-200 px-2 font-semibold text-blue-600 shadow-sm text-xs md:text-lg"
                      >
                        <RiLinkedinFill className="mr-2 text-sm" />{" "}
                        <h1>Linkedin</h1>
                      </Link>
                    </div>
                    <hr className="my-5" />
                    <div className="text-sm">{item.body.slice(0, 200)}...</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

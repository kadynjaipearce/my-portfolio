import Link from "next/link";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import Container from "./Container";
import Image from "next/image";

export default function Hero() {
  return (
    <Container>
      <div className="flex my-10 md:my-40 gap-10">
        <div className="flex-grow w-3/5">
          <div className=" text-center lg:text-left">
            <h1 className="text-7xl lg:text-8xl font-bold text-gray-950">
              Hi, I&apos;m Kadyn-Jai Pearce a software engineer
            </h1>
            <hr className="mt-10" />
            <h2 className="mt-7 text-gray-900 font-medium">
              I&apos;m a computer science student at Edith Cowan University,
              proficient in web development with a growing interest in low-level
              programming and AI. Besides coding, I enjoy gaming, reading, and
              kickboxing, which enhance my problem-solving skills and
              discipline. Passionate about using technology for innovation,
              I&apos;m keen to work on challenging and exciting projects.
            </h2>
          </div>

          <div className="my-5">
            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              <Link
                href="https://github.com/kadynjaipearce"
                className="flex p-1 items-center rounded-full border-2 border-neutral-200 bg-neutral-200 px-2 text-sm font-semibold text-neutral-600 shadow-sm"
              >
                <RiGithubLine className="mr-2 text-lg" /> <h1>Github</h1>
              </Link>

              <Link
                href="https://www.instagram.com/kadynpearce/"
                className="flex p-1 items-center rounded-full border-2 border-violet-200 bg-violet-200 px-2 text-sm font-semibold text-violet-600 shadow-sm"
              >
                <RiInstagramLine className="mr-2 text-lg" /> <h1>Instagram</h1>
              </Link>

              <Link
                href="https://www.linkedin.com/in/kadyn-jai-pearce-9b4ab6208/"
                className="flex p-1 items-center rounded-full border-2 border-blue-200 bg-blue-200 px-2 text-sm font-semibold text-blue-600 shadow-sm"
              >
                <RiLinkedinBoxFill className="mr-2 text-lg" /> <h1>Linkedin</h1>
              </Link>
            </div>

            <div className="space-y-4 my-10 text-gray-900 lg:max-w-[200px] ">
              <div className="space-x-6 flex p-1 items-center rounded-full border-2 border-neutral-200 bg-neutral-200 px-2 text-sm font-semibold text-neutral-600 shadow-sm">
                <HiOutlineLocationMarker className="text-2xl text-gray-950" />
                <div className="font-medium ">Perth, Australia</div>
              </div>

              <div className="space-x-6 flex p-1 items-center rounded-full border-2 border-neutral-200 bg-neutral-200 px-2 text-sm font-semibold text-neutral-600 shadow-sm">
                <div className="flex items-center justify-center w-6 h-6">
                  <span className="relative flex w-3 h-3">
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                    <span className="relative inline-flex w-3 h-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>

                <div className="font-medium">Available to Work.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 hidden lg:block">
          <div>
            <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg w-full h-[580px]">
              {/* Mimic of a macOS window toolbar */}
              <div className="flex justify-between mb-4">
                <div className="flex space-x-2">
                  {/* Window controls */}
                  <div className="w-3 h-3 bg-gray-950 hover:bg-red-500 rounded-full hover:cursor-pointer ease-in-out duration-200"></div>
                  <div className="w-3 h-3 bg-gray-950 hover:bg-yellow-500 rounded-full hover:cursor-pointer ease-in-out duration-200"></div>
                  <div className="w-3 h-3 bg-gray-950 hover:bg-green-500 rounded-full hover:cursor-pointer ease-in-out duration-200"></div>
                </div>
              </div>
              {/* Content area */}
              <div>
                <pre>
                  <code>
                    {`class Person
{
  public:
    name: "Kadyn-Jai Pearce"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import hljs from "highlight.js";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import "highlight.js/styles/github-dark.css";

export default function Hero() {
  const code =
    "class Person\n{\n  public:\n    std::string name = 'Kadyn-Jai Pearce';\n    int age = 28;\n    std::string occupation = 'Software Developer';\n    std::string hobbies = 'Coding, Hiking, Photography';\n    std::string about = 'Passionate software developer ';\n\n    Person() {}\n\n    void displayAboutMe() {\n        std::cout << 'Name: ' << name << '\\n'\n                  << 'Age: ' << age << '\\n'\n                  << 'Occupation: ' << occupation << '\\n'\n                  << 'Hobbies: ' << hobbies << '\\n'\n                  << 'About: ' << about << std::endl;\n    }\n};";
  const js = hljs.highlight(code, { language: "c++" }).value;
  return (
    <Container>
      <div className="my-10 flex gap-10 md:mb-20 md:mt-40">
        <div className="w-3/5 flex-grow">
          <div>
            <h1 className="text-[69px] font-bold leading-[1] text-gray-950 lg:text-8xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Kadyn-Jai Pearce
              </span>{" "}
              a software engineer
            </h1>
            <h2 className="mt-7 max-w-3xl font-medium text-gray-900">
              I&apos;m a computer science student at Edith Cowan University,
              proficient in web development with a growing interest in low-level
              programming and AI. Besides coding, I enjoy gaming, reading, and
              kickboxing, which enhance my problem-solving skills and
              discipline. Passionate about using technology for innovation,
              I&apos;m keen to work on challenging and exciting projects.
            </h2>
          </div>

          <div className="my-5">
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="https://github.com/kadynjaipearce"
                className="flex items-center rounded-full border-2 border-neutral-200 bg-neutral-200 p-1 px-2 text-sm font-semibold text-neutral-600 shadow-sm hover:scale-105"
              >
                <RiGithubLine className="mr-2 text-lg" /> <h1>Github</h1>
              </Link>

              <Link
                href="https://www.instagram.com/kadynpearce/"
                className="flex items-center rounded-full border-2 border-violet-200 bg-violet-200 p-1 px-2 text-sm font-semibold text-violet-600 shadow-sm hover:scale-105"
              >
                <RiInstagramLine className="mr-2 text-lg" /> <h1>Instagram</h1>
              </Link>

              <Link
                href="https://www.linkedin.com/in/kadynpearce/"
                className="flex items-center rounded-full border-2 border-blue-200 bg-blue-200 p-1 px-2 text-sm font-semibold text-blue-600 shadow-sm hover:scale-105"
              >
                <RiLinkedinBoxFill className="mr-2 text-lg" /> <h1>Linkedin</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden w-2/5 lg:block">
          <div>
            <div className="h-[580px] w-full rounded-lg bg-gray-900 p-4 text-white shadow-lg">
              {/* Mimic of a macOS window toolbar */}
              <div className="mb-4 flex justify-between">
                <div className="flex space-x-2">
                  {/* Window controls */}
                  <div className="h-3 w-3 rounded-full bg-gray-950 duration-200 ease-in-out hover:cursor-pointer hover:bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-950 duration-200 ease-in-out hover:cursor-pointer hover:bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-950 duration-200 ease-in-out hover:cursor-pointer hover:bg-green-500"></div>
                </div>
              </div>
              {/* Content area */}
              <div>
                <pre>
                  <code className="language-cpp">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: js,
                      }}
                    />
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

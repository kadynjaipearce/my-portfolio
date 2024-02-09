import Link from "next/link";
import React from "react";
import Container from "./Container";
import { RiGithubLine, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="py-5 border-t">
      <Container>
        <div className="mx-auto flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
          <div className="flex flex-col items-center space-x-0 space-y-4 lg:flex-row lg:space-x-14 lg:space-y-0">
            <div className="pl-0 sm:pl-4 font-semibold">
              Developed By Kadyn-Jai Pearce &copy; {new Date().getFullYear()}
            </div>
          </div>

          <div className="flex space-x-5 text-3xl">
            <Link
              href="https://github.com/kadynjaipearce"
              className="hover:bg-gray-200 rounded-full p-1"
            >
              <RiGithubLine />
            </Link>

            <Link
              href="https://www.instagram.com/kadynpearce/"
              className="hover:bg-gray-200 rounded-full p-1"
            >
              <RiInstagramLine className="" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/kadyn-jai-pearce-9b4ab6208/"
              className="hover:bg-gray-200 rounded-full p-1"
            >
              <RiLinkedinFill className="" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

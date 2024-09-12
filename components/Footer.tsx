import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { RiGithubLine, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="border-t py-4">
      <Container>
        <div className="mx-auto flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
          <div className="flex flex-col items-center space-x-0 space-y-4 lg:flex-row lg:space-y-0">
            <div className=" text-center font-semibold md:text-left">
              Developed By Kadyn-Jai Pearce &copy; {new Date().getFullYear()}
            </div>
          </div>

          <div className="flex space-x-5 text-3xl">
            <Link
              href="https://github.com/kadynjaipearce"
              className="p-1 hover:scale-110"
            >
              <RiGithubLine />
            </Link>

            <Link
              href="https://www.instagram.com/kadynpearce/"
              className="p-1 hover:scale-110"
            >
              <RiInstagramLine className="" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/kadynpearce/"
              className="p-1 hover:scale-110"
            >
              <RiLinkedinFill className="" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

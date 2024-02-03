import Link from "next/link";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiGithubLine, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import Container from "./Container";
import Image from "next/image";

export default function Hero() {
  return (
    <Container>
      <div className="flex my-10 md:my-40 ">
        <div className="flex-grow">
          <div className="font-bold text-[60px] md:text-8xl inter">
            <span className="font-bold text-transparent inter  bg-gradient-to-r from-[#3EA7C9] to-[#CA11E8] bg-clip-text">
              Welcome,
            </span>{" "}
            I&apos;m <br /> Kadyn-Jai Pearce, <br /> a Software Engineer.
          </div>

          <div className="my-10 space-y-4">
            <div className="flex items-center space-x-6">
              <HiOutlineLocationMarker className="text-2xl" />

              <div className="p-[1.5px] py-4 bg-black rounded-full dark:bg-white"></div>
              <div className="font-medium ">Perth, Australia</div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center justify-center w-6 h-6">
                <span className="relative flex w-3 h-3">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                  <span className="relative inline-flex w-3 h-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>

              <div className="p-[1.5px] py-4 bg-black rounded-full dark:bg-white"></div>
              <div className="font-medium">Available to Work.</div>
            </div>

            <div className="flex space-x-5 text-3xl">
              <Link href="https://github.com/kadynjaipearce">
                <RiGithubLine className="" />
              </Link>

              <Link href="https://www.instagram.com/kadynpearce/">
                <RiInstagramLine className="" />
              </Link>

              <Link href="https://www.linkedin.com/in/kadyn-jai-pearce-9b4ab6208/">
                <RiLinkedinFill className="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 hidden mt-24 xl:mt-10 lg:block">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3EA7C9] to-[#CA11E8] blur-[106px]"></div>

            <Image
              src={"/image.png"}
              layout="fill"
              objectFit="cover"
              alt=""
              className="left-0 p-10 rounded-full"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/typescript.svg"}
                alt=""
                width={500}
                height={500}
                className="absolute w-24 h-24 -top-10 -left-8"
              ></Image>
              <Image
                src={"/python.svg"}
                alt=""
                width={500}
                height={500}
                className="absolute right-0 w-24 h-24 top-20"
              ></Image>
              <Image
                src={"/cpp.svg"}
                alt=""
                width={500}
                height={500}
                className="absolute w-24 h-24 -left-12 bottom-4"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

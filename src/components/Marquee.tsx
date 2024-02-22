import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Container from "@/components/Container";

export default function Marquees() {
  return (
    <Container>
      <Marquee
        className="top-[20px]"
        gradientColor="#fff"
        gradient
        pauseOnHover
        gradientWidth={100}
      >
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/nextjs.svg"
              className="mx-auto h-20 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/nodejs.svg"
              className="mx-auto -mt-5 h-16 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/bash.svg"
              className="mx-auto h-20 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/git.svg"
              className="mx-auto h-16 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/react.svg"
              className="mx-auto h-24 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/typescript.svg"
              className="mx-auto h-20 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/openai.svg"
              className="mx-auto h-14 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/cpp.svg"
              className="mx-auto h-20 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/python.svg"
              className="mx-auto h-20 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/solidity.svg"
              className="mx-auto h-20 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
      </Marquee>
    </Container>
  );
}

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
          <Link href={"https://www.nextjs.org"}>
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
          <Link href={"https://nodejs.org/en"}>
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
          <Link href={"https://www.gnu.org/software/bash"}>
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
          <Link href={"https://git-scm.com/"}>
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
          <Link href={"https://www.rust-lang.org/"}>
            <Image
              src="/rust.svg"
              className="mx-auto h-32 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://react.dev/"}>
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
          <Link href={"https://www.typescriptlang.org/"}>
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
          <Link href={"https://aws.amazon.com/"}>
            <Image
              src="/aws.svg"
              className="mx-auto h-20 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://cloud.google.com/"}>
            <Image
              src="/cloud.svg"
              className="mx-auto h-20 w-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 grayscale transition duration-200 hover:grayscale-0">
          <Link href={"https://openai.com/"}>
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
          <Link href={"https://www.python.org/"}>
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
          <Link href={"https://learn.microsoft.com/en-us/cpp/?view=msvc-170"}>
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
          <Link href={"https://soliditylang.org/"}>
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

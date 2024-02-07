import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Container from "./Container";

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
        <div className="mx-10 transition duration-200 grayscale hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/microsoft.svg"
              className="w-auto h-20 mx-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 transition duration-200 grayscale hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/microsoft.svg"
              className="w-auto h-20 mx-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 transition duration-200 grayscale hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/microsoft.svg"
              className="w-auto h-20 mx-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 transition duration-200 grayscale hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/microsoft.svg"
              className="w-auto h-20 mx-auto"
              alt="client logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="mx-10 transition duration-200 grayscale hover:grayscale-0">
          <Link href={"https://www.microsoft.com/en-au/"}>
            <Image
              src="/microsoft.svg"
              className="w-auto h-20 mx-auto"
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

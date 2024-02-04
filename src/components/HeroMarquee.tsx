import React from "react";
import Container from "./Container";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

export default function Gradient() {
  return (
    <div className="overflow-x-clip">
      <div className=" w-full px-0 mx-0 bg-black dark:bg-white h-[120px] bg-gradient-to-r from-[#3EA7C9] to-[#CA11E8]">
        <div className="w-[105%] -ml-3 h-[120px] bg-black dark:bg-white -rotate-[2deg] relative top-12">
          <Container>
            <div className="">
              <Marquee
                className="top-[18px]"
                gradientColor="#000"
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
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

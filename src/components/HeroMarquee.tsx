import React from "react";
import Container from "./Container";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

export default function Gradient({ height }: { height: string }) {
  return (
    <div className="overflow-x-clip">
      <div className=" w-full px-0 mx-0 bg-black h-[120px] bg-gradient-to-r from-[#3EA7C9] to-[#CA11E8]">
        <div className="w-[105%] -ml-3 h-[120px] bg-black -rotate-[2deg] relative top-12">
          <Container>
            <div className="">
              <Marquee
                className=""
                gradientColor="#000"
                gradient
                pauseOnHover
                gradientWidth={100}
              >
                <div className="p-4 mx-10 transition duration-200 grayscale hover:grayscale-0">
                  <Link href={"https://www.microsoft.com/en-au/"}>
                    <Image
                      src="/microsoft.svg"
                      className="w-auto h-20 mx-auto"
                      loading="lazy"
                      alt="client logo"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                </div>
                <div className="p-4 mx-10 transition duration-200 grayscale hover:grayscale-0">
                  <Link href={"https://react.dev/"}>
                    <Image
                      src="/react.svg"
                      className="w-auto mx-auto h-22"
                      loading="lazy"
                      alt="client logo"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                </div>
                <div className="p-4 mx-10 transition duration-200 grayscale hover:grayscale-0">
                  <Image
                    src="/google.svg"
                    className="w-auto h-12 m-auto"
                    loading="lazy"
                    alt="client logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="p-4 mx-10 transition duration-200 grayscale hover:grayscale-0">
                  <Image
                    src="/ge.svg"
                    className="w-auto h-12 mx-auto"
                    loading="lazy"
                    alt="client logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="p-4 mx-10 transition duration-200 grayscale hover:grayscale-0">
                  <Image
                    src="/netflix.svg"
                    className="w-auto h-8 m-auto"
                    loading="lazy"
                    alt="client logo"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="p-4 mx-10 transition duration-200 grayscale hover:grayscale-0">
                  <Image
                    src="/google-cloud.svg"
                    className="w-auto h-12 mx-auto"
                    loading="lazy"
                    alt="client logo"
                    width={1000}
                    height={1000}
                  />
                </div>
              </Marquee>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

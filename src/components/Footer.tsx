import Link from "next/link";
import React from "react";
import Container from "./Container";
import { RiGithubLine, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="py-14 bg-neutral-50">
      <Container>
        <div className="mx-auto flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
          <div className="flex flex-col items-center space-x-0 space-y-4 lg:flex-row lg:space-x-14 lg:space-y-0">
            <div className="pl-0 sm:pl-4 font-semibold">
              $ {""}
              <Link
                href={"/"}
                className="hover:underline text-[16px] lg:text-[18px] "
              >
                kadynpearce.dev
              </Link>
            </div>

            <div className="flex flex-col space-y-2 text-center text-sm font-semibold lg:flex-row lg:space-x-6 lg:space-y-0 lg:text-center">
              <h1>
                <span className="text-blue-300">Ethereum:</span>{" "}
                <Link
                  href={
                    "https://etherscan.io/address/0xb990f68D825c5c908B6ca6701165c623329Aecd3"
                  }
                >
                  enxrm.eth
                </Link>
              </h1>
              <h1>
                <span className="text-orange-300">Bitcoin:</span>{" "}
                <Link
                  href={
                    "https://www.blockchain.com/explorer/addresses/btc/bc1qm967lhk7s8lae7zyqsttwe4ez9cpwnwghr5zpf"
                  }
                >
                  {" "}
                  bc1qm967lhk7s8lae7zyqsttwe4ez9cpwnwghr5zpf
                </Link>
              </h1>
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

"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import { useSearchParams } from "next/navigation";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiGithubLine, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";

import Link from "next/link";

export default function Page() {
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email");

  const [data, setData] = useState({
    name: "",
    email: userEmail ?? "",
    message: "",
  });

  async function handleSendEmail() {
    try {
      const res = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      });

      if (res.ok) {
        let data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <Container>
      <div className="flex items-center my-40">
        <div className="flex flex-col md:flex-row items-center gap-16 bg-neutral-100 p-10 rounded-xl">
          <div>
            <h1 className="text-7xl font-bold text-neutral-900">Contact Me</h1>
            <hr className="my-5" />
            <p className="mt-3 text-neutral-800 font-semibold text-2xl">
              Interested in collaborating? Have a job opportunity? or just want
              to ask me a question? I&apos;d love to hear from you.
            </p>
            <div className="space-y-4 my-10 text-gray-900 lg:max-w-[200px] ">
              <div className="space-x-6 flex p-1 items-center rounded-full border-2 border-neutral-200 bg-neutral-200 px-2 text-sm font-semibold text-neutral-600 shadow-sm">
                <HiOutlineLocationMarker className="text-2xl text-gray-950" />
                <div className="font-medium ">Perth, Australia</div>
              </div>

              <div className="space-x-6 flex p-1 items-center rounded-full border-2 border-neutral-200 bg-neutral-200 px-2 text-sm font-semibold text-neutral-600 shadow-sm">
                <div className="flex items-center justify-center w-6 h-6">
                  <span className="relative flex w-3 h-3">
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                    <span className="relative inline-flex w-3 h-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>

                <div className="font-medium">Available to Work.</div>
              </div>
            </div>
            <div>
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
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg">
            <h1 className="text-3xl font-bold">Send Me a Message :)</h1>
            <form className="mt-7 space-y-4" onSubmit={handleSendEmail}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full rounded-md py-3 px-4 text-sm outline-gray-900"
                value={data.name}
                onChange={handleInputChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md py-3 px-4 text-sm outline-gray-900"
                value={data.email}
                onChange={handleInputChange}
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full rounded-md py-3 px-4 text-sm outline-gray-900"
                value={data.name}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                className="w-full rounded-md px-4 text-sm pt-3 outline-gray-900"
                value={data.message}
                onChange={handleInputChange}
              ></textarea>
              <button
                onClick={handleSendEmail}
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

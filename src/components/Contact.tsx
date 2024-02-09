"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [data, setData] = useState({
    email: "",
  });

  const router = useRouter();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevent the default form submission
    router.push(`/contact-me?email=${data.email}`); // Programmatically navigate
  };
  return (
    <Container>
      <div className="my-20">
        <section className="p-8 md:py-20 bg-neutral-50">
          <div className=" mx-auto flex max-w-6xl flex-col items-center text-center sm:bg-layer-2 sm:py-12 sm:px-6 md:py-18 lg:px-32 2xl:px-64">
            <h2 className="mt-6 text-3xl font-semibold text-heading md:text-4xl">
              Want to work together?
            </h2>

            <p className="mt-4 text-lg font-medium">
              Enter your email below, and you&apos;ll be directed to the contact
              page, where you can send me a message.
            </p>

            <form
              className="mt-8 flex w-full flex-col gap-2 sm:w-auto sm:flex-row"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="sr-only block text-sm font-semibold text-heading"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm md:w-64"
                />
              </div>
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-blue-500 bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
              >
                Button
              </button>
            </form>
          </div>
        </section>
      </div>
    </Container>
  );
}

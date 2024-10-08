"use client";
import React, { useState } from "react";
import Container from "@/components/Container";

export default function Page() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  async function handleSendEmail(event: React.FormEvent) {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to send email");
      }

      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSuccess(true);
    } catch (error: unknown) {
      console.error(error);
      setErrorMessage((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact">
      <Container mobileFull={true}>
        <div className="mt-20 flex items-center lg:mb-20">
          <div className="flex flex-col items-center gap-16 bg-neutral-50 p-6 py-10 pt-10 lg:flex-row lg:rounded-3xl lg:p-10">
            <div className="p-4">
              <h1 className="text-left text-5xl font-bold  text-neutral-800 md:text-7xl lg:text-left">
                Contact Me
              </h1>
              <p className="mt-3 text-left text-xl font-semibold text-neutral-800 lg:text-left ">
                Interested in collaborating? Have a job opportunity? or just
                want to ask me a question? I&apos;d love to hear from you.
              </p>
              <div className="my-7 space-y-4 lg:max-w-[200px] ">
                <div className="flex items-center space-x-6 rounded-full border-green-100 bg-green-100 p-1 px-2 text-sm font-semibold text-green-600 shadow-sm">
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                    </span>
                  </div>

                  <div className="font-medium">Available to Work.</div>
                </div>
              </div>
            </div>
            <div className=" rounded-lg">
              {errorMessage && (
                <div className="mb-5 text-center font-semibold text-red-500">
                  {errorMessage}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSendEmail}>
                <input
                  name="name"
                  type="name"
                  placeholder="Name"
                  className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none  focus:ring-2 focus:ring-neutral-900"
                  value={data.name}
                  onChange={handleInputChange}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none  focus:ring-2 focus:ring-neutral-900"
                  value={data.email}
                  onChange={handleInputChange}
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-none  focus:ring-2 focus:ring-neutral-900"
                  value={data.subject}
                  onChange={handleInputChange}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className="w-full resize-none rounded-md bg-gray-100 px-4 pt-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
                  value={data.message}
                  onChange={handleInputChange}
                ></textarea>
                <button
                  disabled={loading || success}
                  onClick={handleSendEmail}
                  type="button"
                  className={`${
                    loading
                      ? "bg-blue-400"
                      : success
                        ? "bg-green-600"
                        : "bg-neutral-800 hover:bg-neutral-900"
                  } flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold text-white duration-200 ease-in-out disabled:cursor-not-allowed`}
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
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      data-original="#000000"
                    />
                  </svg>
                  {loading ? "Sending" : success ? `Sent` : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

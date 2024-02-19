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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  async function handleSendEmail(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setErrorMessage(""); // Reset error message state
    try {
      const res = await fetch("/api/send-email", {
        // Use relative URL for API calls
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to send email"); // Use server-provided message or a default one
      }

      // If successful, reset form and possibly set success message
      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: unknown) {
      console.error(error);
      setErrorMessage((error as Error).message);
    } finally {
      setLoading(false); // Ensure loading is always reset
    }
  }

  return (
    <section id="contact">
      <Container mobileFull={true}>
        <div className="flex items-center mt-20 lg:mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 bg-neutral-50 lg:p-10 p-6 pt-10 lg:rounded-3xl py-10">
            <div className="p-4">
              <h1 className="md:text-7xl text-5xl font-bold  text-left lg:text-left text-neutral-800">
                Contact Me
              </h1>
              <p className="mt-3 text-neutral-800 font-semibold text-xl text-left lg:text-left ">
                Interested in collaborating? Have a job opportunity? or just
                want to ask me a question? I&apos;d love to hear from you.
              </p>
              <div className="space-y-4 my-7 lg:max-w-[200px] ">
                <div className="space-x-6 flex p-1 items-center rounded-full px-2 text-sm font-semibold text-green-600 shadow-sm border-green-100 bg-green-100">
                  <div className="flex items-center justify-center w-6 h-6">
                    <span className="relative flex w-3 h-3">
                      <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                      <span className="relative inline-flex w-3 h-3 rounded-full bg-emerald-500"></span>
                    </span>
                  </div>

                  <div className="font-medium">Available to Work.</div>
                </div>
              </div>
            </div>
            <div className=" rounded-lg">
              {errorMessage && (
                <div className="text-red-500 text-center mb-5 font-semibold">
                  {errorMessage}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSendEmail}>
                <input
                  name="name"
                  type="name"
                  placeholder="Name"
                  className="w-full rounded-md py-3 px-4 text-sm outline-neutral-800 bg-gray-100"
                  value={data.name}
                  onChange={handleInputChange}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md py-3 px-4 text-sm outline-neutral-800 bg-gray-100"
                  value={data.email}
                  onChange={handleInputChange}
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md py-3 px-4 text-sm outline-neutral-800 bg-gray-100"
                  value={data.subject}
                  onChange={handleInputChange}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-md px-4 text-sm pt-3 outline-neutral-800 bg-gray-100 resize-none"
                  value={data.message}
                  onChange={handleInputChange}
                ></textarea>
                <button
                  disabled={loading}
                  onClick={handleSendEmail}
                  type="button"
                  className={`${
                    loading ? "bg-green-500" : "bg-neutral-800"
                  } text-white hover:bg-neutral-900 font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full ease-in-out duration-200 disabled:cursor-not-allowed`}
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
                  {loading ? "Sending" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

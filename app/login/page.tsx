"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { confirmSignIn, signIn } from "aws-amplify/auth";
import { RiAccountCircleLine } from "react-icons/ri";
import Container from "@/components/Container";
import next from "next";

export default function Page() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | null>();

  async function handleSubmit(formData: FormData) {
    try {
      const rawFormData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      const { nextStep } = await signIn({
        username: rawFormData.email,
        password: rawFormData.password,
      });

      if (nextStep.signInStep == "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED") {
        await confirmSignIn({
          challengeResponse: rawFormData.password,
        });
      }

      if (nextStep.signInStep != "DONE") return console.log(nextStep);

      router.push("/dashboard");
    } catch (error) {
      setErrorMessage(`${error}`);
    }
  }

  return (
    <Container mobileFull={true}>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md rounded-lg bg-white p-6">
          {errorMessage && (
            <div className="mb-5 text-center font-semibold text-red-500">
              {errorMessage}
            </div>
          )}
          <form className="space-y-4" action={handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-neutral-800"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-md bg-gray-100 px-4 py-3 text-sm outline-neutral-800"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-neutral-800 px-4 py-3 text-sm font-semibold text-white duration-200 ease-in-out hover:bg-neutral-900 disabled:cursor-not-allowed"
            >
              <RiAccountCircleLine className="mr-2 text-xl" />
              Sign In
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

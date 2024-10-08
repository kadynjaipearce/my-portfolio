import React from "react";
import { MdErrorOutline } from "react-icons/md";
import Container from "@/components/Container";

interface errorMessage {
  error: string;
}

export default function ErrorComponent({ error }: errorMessage) {
  return (
    <Container>
      <div className="mt-20 flex items-center justify-center rounded-md border border-red-400 bg-red-100 px-6 py-4 text-red-700">
        <MdErrorOutline className="mx-2 inline text-2xl" />
        <span className="font-semibold">{error}</span>
      </div>
    </Container>
  );
}

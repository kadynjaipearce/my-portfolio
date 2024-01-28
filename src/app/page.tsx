import Hero from "@/components/Hero";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";

let res = async () => {
  let response = await fetch("http://localhost:3000/api/download", {
    method: "GET",
  });
  return response;
};

export default function Home() {
  return (
    <main className="flex dark:text-white dark:bg-black">
      <Hero></Hero>
    </main>
  );
}

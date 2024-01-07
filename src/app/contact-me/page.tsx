import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const metadata = {
  title: "contact-me",
  description: "Generated by create next app",
};

export default function page() {
  return (
    <div>
      <div className="flex">
        <div>
          <Link href={"https://github.com/Enxrm"} className="flex">
            <FaGithub className="text-3xl"></FaGithub>
            <p className="mt-1">Github</p>
          </Link>
        </div>

        <FaLinkedin></FaLinkedin>
        <FaInstagram></FaInstagram>
      </div>
    </div>
  );
}

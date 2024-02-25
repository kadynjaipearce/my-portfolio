import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "kadynpearce", template: "kadynpearce/%s" },
  description:
    "I'm a computer science student at Edith Cowan University, proficient in web development with a growing interest in low-level programming and AI. Besides coding, I enjoy gaming, reading, and kickboxing, which enhance my problem-solving skills and discipline. Passionate about using technology for innovation, I'm keen to work on challenging and exciting projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-au">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

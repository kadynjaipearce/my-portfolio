"use client";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConfigAmplifyClientSide from "@/components/configAmplify";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-au">
      <body>
        <ConfigAmplifyClientSide></ConfigAmplifyClientSide>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

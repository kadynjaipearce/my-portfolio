"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-au">
      <body>
        <ConfigureAmplifyClientSide />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Hero from "@/components/Hero";
import Gradient from "@/components/Gradient";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className=" dark:text-white dark:bg-black">
      <Hero />
      <Gradient height="60" />
      <Experience />
    </main>
  );
}

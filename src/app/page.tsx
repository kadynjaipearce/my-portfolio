import Hero from "@/components/Hero";
import HeroMarquee from "@/components/HeroMarquee";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className=" dark:text-white dark:bg-black">
      <Hero />
      <HeroMarquee height="60" />
      <Experience />
      <Education />
    </main>
  );
}

import Hero from "@/components/Hero";
import HeroMarquee from "@/components/HeroMarquee";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="dark:text-white dark:bg-black">
      <Hero />
      <HeroMarquee />
      <Education />

      <Experience />
      <Contact />
    </main>
  );
}

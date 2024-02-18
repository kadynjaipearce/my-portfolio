import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Education />
      <Experience />
      <Contact />
    </main>
  );
}

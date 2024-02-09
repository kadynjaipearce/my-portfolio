import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Marquees from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquees />
      <Education />
      <Experience />
      <Contact />
    </main>
  );
}

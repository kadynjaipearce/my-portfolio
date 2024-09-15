import Hero from "@/components/Hero";
// import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Education></Education>
      <Experience></Experience>
      <Contact />
    </main>
  );
}

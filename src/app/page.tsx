import BackgroundOrbs from "@/components/BackgroundOrbs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import ScrollSequence from "@/components/ScrollSequence";

export default function Home() {
  return (
    <main className="relative bg-[#030014]">
      <BackgroundOrbs />
      <ScrollSequence />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

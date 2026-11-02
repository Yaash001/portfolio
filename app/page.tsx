
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollMotion from "../components/ScrollMotion";
import PortfolioGate from "../components/PortfolioGate";

export default function Home() {
  return (
    <PortfolioGate>
      <>
        <Navbar />

        <ScrollMotion>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </ScrollMotion>
      </>
    </PortfolioGate>
  );
}

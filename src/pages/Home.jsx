import Hero from "../sections/Hero";
import TechMarquee from "../components/TechMarquee";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Certifications from "../sections/Certifications";
import Education from "../sections/Education";
import CurrentlyLearning from "../sections/CurrentlyLearning";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <CurrentlyLearning />
      <Contact />
    </>
  );
}

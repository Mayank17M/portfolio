import About from "@/components/About";
import Contact from "@/components/Contact";
import Currently from "@/components/Currently";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Education />
        <hr className="section-divider" />
        <Currently />
        <hr className="section-divider" />
        <Hobbies />
        <hr className="section-divider" />
        <Contact />
      </main>
    </>
  );
}

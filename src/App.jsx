import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Intelligence from "./components/Intelligence";
import Experience from "./components/Experience";
import GithubSection from "./components/GithubSection";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-bg text-ink">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Intelligence />
        <Experience />
        <GithubSection />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

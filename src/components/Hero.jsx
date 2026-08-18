import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileDown } from "lucide-react";
import BackgroundFX from "./BackgroundFX";
import ProfilePhoto from "./ProfilePhoto";
import MagneticButton from "./MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20"
    >
      <BackgroundFX />

      <div className="container-px relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-violet-soft"
          >
            Chirayu Lokhande — AI/ML • Data Science • Data Analytics
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl"
          >
            Turning Data
            <br />
            Into <span className="text-gradient">Intelligence.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg"
          >
            B.Tech Computer Science graduate building intelligent systems,
            data-driven applications and AI-powered experiences.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              as="a"
              href="#projects"
              data-cursor-hover
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              data-cursor-hover
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="glow-border inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-ink"
            >
              Let's Connect
            </MagneticButton>

            <MagneticButton
              as="a"
              href="/resume.pdf"
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              <FileDown size={16} />
              Resume
            </MagneticButton>
            
          </motion.div>
          
          
          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/Chirayu0703"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition-colors hover:border-violet-soft hover:text-ink"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/chirayulokhande07"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink-muted transition-colors hover:border-violet-soft hover:text-ink"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        <ProfilePhoto />
      </div>
    </section>
  );
}

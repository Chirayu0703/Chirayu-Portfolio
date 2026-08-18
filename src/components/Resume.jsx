import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function Resume() {
  return (
    <section className="relative py-24">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="glow-border relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-line bg-surface px-8 py-16 text-center md:py-20">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-surface-2 text-violet-soft"
          >
            <FileText size={26} />
          </motion.div>

          <h2 className="max-w-lg text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Want the full story?
          </h2>
          <p className="max-w-md text-sm text-ink-muted md:text-base">
            Take a closer look at my experience, projects and technical journey.
          </p>

          <MagneticButton
            as="a"
            href="/resume.pdf"
            download
            data-cursor-hover
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-medium text-bg"
          >
            <Download size={16} />
            Download Resume
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

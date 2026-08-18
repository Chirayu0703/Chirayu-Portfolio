import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { useCounter } from "../hooks/useCounter";

const stats = [
  { target: 1, suffix: "+", label: "Data Analytics Experience", infinite: false },
  { target: 10, suffix: "+", label: "Projects", infinite: false },
  { target: 10, suffix: "+", label: "Technologies", infinite: false },
  { target: 0, suffix: "", label: "Curiosity", infinite: true },
];

function StatCard({ stat, start, index }) {
  const value = useCounter(stat.target, start);
  return (
    <Reveal delay={index * 0.08} className="rounded-2xl border border-line bg-surface p-6">
      <div className="font-display text-4xl font-semibold text-gradient md:text-5xl">
        {stat.infinite ? "∞" : `${String(value).padStart(2, "0")}${stat.suffix}`}
      </div>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
        {stat.label}
      </p>
    </Reveal>
  );
}

export default function About() {
  const [inView, setInView] = useState(false);

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-soft">
                About
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
                More Than Just a{" "}
                <span className="text-gradient">Developer.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                Hi, I'm Chirayu — a Computer Science graduate passionate about
                Data Science, Artificial Intelligence and building practical
                technology that solves real-world problems.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "B.Tech in Computer Science",
                  "Big Data Analysis specialization",
                  "Data Analyst internship experience",
                  "AI/ML learning journey",
                  "Generative AI & RAG systems",
                  "Dashboard development",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-ink-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-soft" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <motion.div
            onViewportEnter={() => setInView(true)}
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-2 gap-4 self-start"
          >
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} start={inView} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

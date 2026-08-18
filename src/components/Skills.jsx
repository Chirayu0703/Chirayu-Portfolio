import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { skillCategories } from "../data/skills";

export default function Skills() {
  const [activeCat, setActiveCat] = useState(skillCategories[0].id);
  const [hovered, setHovered] = useState(null);

  const current = skillCategories.find((c) => c.id === activeCat);

  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-soft">
            Skills
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            What I Work <span className="text-gradient">With.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              data-cursor-hover
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                activeCat === cat.id
                  ? "text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {activeCat === cat.id && (
                <motion.span
                  layoutId="skill-cat-active"
                  className="absolute inset-0 rounded-full border border-violet-soft/40 bg-surface-2"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{cat.label}</span>
            </button>
          ))}
        </Reveal>

        <div className="mt-10 min-h-[220px] rounded-3xl border border-line bg-surface p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-6 font-mono text-xs uppercase tracking-wider text-ink-dim">
                {current.note}
              </p>
              <div className="flex flex-wrap gap-3">
                {current.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHovered(skill.name)}
                    onMouseLeave={() => setHovered(null)}
                    data-cursor-hover
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="cursor-default rounded-full border border-line bg-surface-2 px-4 py-2 text-sm text-ink transition-colors group-hover:border-violet-soft"
                    >
                      {skill.name}
                    </motion.div>

                    <AnimatePresence>
                      {hovered === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.95 }}
                          transition={{ duration: 0.18 }}
                          className="glass absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-[220px] -translate-x-1/2 rounded-lg border border-line px-3 py-2 text-xs text-ink-muted"
                        >
                          {skill.desc}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

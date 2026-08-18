import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import RAGPipeline from "./RAGPipeline";

export default function ProjectCard({ project, onOpen, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="glow-border group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface"
    >
      <button
        onClick={() => onOpen(project)}
        data-cursor-hover
        className="absolute inset-0 z-10"
        aria-label={`Open details for ${project.title}`}
      />

      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line bg-surface-2 p-8">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet/20 via-transparent to-cyan/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="pointer-events-none absolute left-5 top-5 font-mono text-xs text-ink-dim">
          {project.number}
        </span>

        {project.isRag ? (
          <div className="w-full">
            <RAGPipeline variant="mini" />
          </div>
        ) : (
          <motion.h3
            className="pointer-events-none select-none text-center font-display text-2xl font-semibold text-ink-dim transition-transform duration-500 group-hover:scale-105 group-hover:text-ink/80"
          >
            {project.title}
          </motion.h3>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-ink-dim">{project.tagline}</p>
          </div>
          <motion.span
            className="mt-1 shrink-0 text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-soft"
          >
            <ArrowUpRight size={20} />
          </motion.span>
        </div>

        <p className="text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-muted transition-colors group-hover:border-violet-soft/50"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="relative z-20 mt-2 flex items-center gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs text-ink-muted transition-colors hover:border-violet-soft hover:text-ink"
          >
            <Github size={14} /> Code
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs text-ink-muted transition-colors hover:border-violet-soft hover:text-ink"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line/50 px-3.5 py-1.5 font-mono text-[11px] text-ink-dim">
              Demo on request
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

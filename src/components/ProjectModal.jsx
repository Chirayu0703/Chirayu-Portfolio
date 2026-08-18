import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-surface p-6 md:p-10"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-2 text-ink-muted transition-colors hover:text-ink"
            >
              <X size={16} />
            </button>

            <span className="font-mono text-xs uppercase tracking-wider text-violet-soft">
              {project.number} · Project
            </span>
            <h3
              id="project-modal-title"
              className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              <Block title="Problem" text={project.detail.problem} />
              <Block title="Solution" text={project.detail.solution} />
              <ListBlock title="Architecture" items={project.detail.architecture} />
              <ListBlock title="Key Features" items={project.detail.features} />
              <Block title="Results" text={project.detail.results} />
            </div>

            <div className="mt-9 flex flex-wrap gap-3 border-t border-line pt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg"
              >
                <Github size={16} /> View Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({ title, text }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wider text-ink-dim">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}

function ListBlock({ title, items }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wider text-ink-dim">
        {title}
      </h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-ink-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

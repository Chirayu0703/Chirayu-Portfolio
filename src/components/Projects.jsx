import { useState } from "react";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-soft">
              Projects
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              Things I've <span className="text-gradient">Built.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-muted">
            A selection of AI, data science and analytics work — from ML pricing
            models to RAG chatbots and BI dashboards.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

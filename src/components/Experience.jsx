import Reveal from "./Reveal";
import Education from "./Education";

const responsibilities = [
  "Data analysis on real business datasets",
  "Interactive dashboard development",
  "Exploratory data analysis (EDA)",
  "Translating data into business insights",
  "Data visualization for stakeholders",
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-soft">
            Experience
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
            Where I've <span className="text-gradient">Worked.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-16 md:grid-cols-[1fr_320px]">
          <ol className="relative border-l border-line pl-8">
            <Reveal as="li" className="relative pb-2">
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-bg bg-violet-soft shadow-[0_0_0_4px_rgba(124,92,255,0.15)]" />
              <p className="font-mono text-xs uppercase tracking-wider text-ink-dim">
                Apr 2025 – Jun 2025 · Remote
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                Data Analyst Intern
              </h3>
              <p className="text-sm text-ink-muted">Unified Mentor</p>

              <ul className="mt-4 space-y-2">
                {responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </ol>

          <Education />
        </div>
      </div>
    </section>
  );
}

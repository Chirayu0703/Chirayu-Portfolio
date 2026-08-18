import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Reveal delay={0.15}>
      <div className="glow-border rounded-2xl border border-line bg-surface p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-violet-soft">
          <GraduationCap size={18} />
        </div>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ink-dim">
          Education
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">
          B.Tech — Computer Science
        </h3>
        <p className="mt-1 text-sm text-ink-muted">
          Specialization in Big Data Analysis
        </p>
        <p className="mt-3 text-sm text-ink-dim">Parul University</p>
      </div>
    </Reveal>
  );
}

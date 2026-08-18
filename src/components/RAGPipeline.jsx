import { motion } from "framer-motion";

const STAGES = [
  { id: "query", label: "User Query" },
  { id: "embedding", label: "Embedding" },
  { id: "vector", label: "Vector Database" },
  { id: "retrieval", label: "Retrieval" },
  { id: "context", label: "Context" },
  { id: "llm", label: "LLM" },
  { id: "answer", label: "Answer" },
];

/**
 * variant="full" renders a vertical labeled flow with glowing nodes and
 * a traveling pulse — used as the site's signature AI section.
 * variant="mini" renders a compact horizontal strip for the project card.
 */
export default function RAGPipeline({ variant = "full" }) {
  if (variant === "mini") {
    const mini = ["Query", "Embedding", "Vector Search", "Context", "LLM", "Answer"];
    return (
      <div className="flex items-center gap-1.5 overflow-x-auto py-1">
        {mini.map((label, i) => (
          <div key={label} className="flex shrink-0 items-center gap-1.5">
            <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] text-ink-muted">
              {label}
            </span>
            {i < mini.length - 1 && (
              <motion.span
                className="h-px w-4 bg-gradient-to-r from-violet to-cyan"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-md">
      <svg
        viewBox="0 0 320 640"
        className="absolute left-1/2 top-0 h-full -translate-x-1/2 opacity-70"
        aria-hidden="true"
      >
        <line
          x1="160"
          y1="20"
          x2="160"
          y2="620"
          stroke="url(#ragline)"
          strokeWidth="2"
          strokeDasharray="6 8"
        />
        <defs>
          <linearGradient id="ragline" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7c5cff" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <motion.circle
          r="4"
          fill="#22d3ee"
          initial={{ cy: 20 }}
          animate={{ cy: 620 }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
          cx="160"
        />
      </svg>

      <ul className="relative flex flex-col gap-[46px] py-2">
        {STAGES.map((stage, i) => (
          <motion.li
            key={stage.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -18 : 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-center justify-center"
          >
            <div className="glass glow-border relative flex items-center gap-3 rounded-2xl border border-line px-5 py-3">
              <motion.span
                className="h-2 w-2 rounded-full bg-violet-soft"
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
              />
              <span className="font-mono text-xs uppercase tracking-wider text-ink">
                {stage.label}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

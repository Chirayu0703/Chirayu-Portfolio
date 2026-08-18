import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Swap this for a real headshot any time — see src/assets/profile.png
const PROFILE_SRC = new URL("../assets/profile.png", import.meta.url).href;

const labels = [
  { text: "AI/ML", top: "4%", left: "-14%", delay: 0 },
  { text: "DATA SCIENCE", top: "18%", right: "-22%", delay: 0.4 },
  { text: "RAG", bottom: "30%", left: "-20%", delay: 0.8 },
  { text: "PYTHON", bottom: "6%", right: "-10%", delay: 1.2 },
  { text: "POWER BI", top: "48%", left: "-24%", delay: 1.6 },
];

export default function ProfilePhoto() {
  const ref = useRef(null);
  const [imgError, setImgError] = useState(false);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 14);
    rx.set(-py * 14);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="relative mx-auto w-full max-w-[360px]"
    >
      {/* glow aura */}
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet/30 via-cyan/10 to-transparent blur-3xl" />

      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ perspective: 900 }}
        className="relative animate-float"
      >
        <motion.div
          style={{ rotateX: srx, rotateY: sry }}
          className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line bg-surface"
        >
          {/* animated gradient border */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] p-[2px]">
            <div className="h-full w-full rounded-[2rem] bg-[conic-gradient(from_0deg,#7c5cff,#22d3ee,#7c5cff)] animate-spin-slow opacity-70" />
          </div>

          <div className="absolute inset-[2px] overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
            {!imgError ? (
              <img
                src={PROFILE_SRC}
                alt="Portrait of Chirayu Lokhande"
                onError={() => setImgError(true)}
                className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-115"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface-2 to-surface text-center">
                <span className="font-display text-6xl text-gradient">CL</span>
                <span className="max-w-[70%] font-mono text-[11px] uppercase tracking-wider text-ink-dim">
                  Add photo at /src/assets/profile.png
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* floating labels */}
        {labels.map((l) => (
          <motion.span
            key={l.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: l.delay + 0.6, duration: 0.5 },
              y: { delay: l.delay, duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              top: l.top,
              left: l.left,
              right: l.right,
              bottom: l.bottom,
            }}
            className="glass glow-border absolute hidden rounded-full px-3 py-1.5 font-mono text-[10px] tracking-wider text-ink-muted shadow-lg sm:block"
          >
            {l.text}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

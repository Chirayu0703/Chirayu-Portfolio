import { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Wraps its children in a button/anchor that nudges toward the cursor
 * on hover. Falls back to a plain static element on touch devices.
 */
export default function MagneticButton({
  as = "button",
  className = "",
  children,
  strength = 18,
  ...props
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  const handleMove = (e) => {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({
      x: (relX / rect.width) * strength,
      y: (relY / rect.height) * strength,
    });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  // const Component = motion[as] || motion.button;
  const Component = as === "a" ? motion.a : motion.button;
  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

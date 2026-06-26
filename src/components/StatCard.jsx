import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function StatCard({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);
  const numericTarget = parseFloat(value);
  const isNumeric = !Number.isNaN(numericTarget);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const controls = animate(0, numericTarget, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v * 100) / 100),
    });
    return () => controls.stop();
  }, [inView, isNumeric, numericTarget]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      className="glass glow-border rounded-2xl border border-[var(--color-border)] p-6 text-center"
    >
      <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {isNumeric ? display : value}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-[var(--color-secondary)]">{label}</div>
    </motion.div>
  );
}

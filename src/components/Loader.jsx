import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "booting portfolio.exe",
  "loading neural_modules...",
  "compiling experience.jsx",
  "ready.",
];

export default function Loader({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      const exitTimer = setTimeout(() => {
        setShow(false);
        onDone?.();
      }, 350);
      return () => clearTimeout(exitTimer);
    }
    const timer = setTimeout(() => setLineIndex((i) => i + 1), 360);
    return () => clearTimeout(timer);
  }, [lineIndex, onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]"
        >
          <div className="w-[300px] font-mono-sig text-sm text-[var(--color-secondary)] sm:w-[360px]">
            {LINES.slice(0, lineIndex).map((line, idx) => (
              <div key={idx} className="mb-1.5 flex items-center gap-2">
                <span className="text-[var(--color-accent)]">$</span>
                <span className={idx === lineIndex - 1 ? "text-[var(--color-text)]" : ""}>
                  {line}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-accent)]">$</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className="inline-block h-4 w-2 bg-[var(--color-accent)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

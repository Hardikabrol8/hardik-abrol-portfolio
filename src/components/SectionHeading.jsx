import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../animations/variants";

/**
 * Every section opens with a terminal-style "command" eyebrow instead of a
 * generic numbered label — a nod to Hardik's CLI / engineering background.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={isCenter ? "text-center" : "text-left"}
    >
      {eyebrow && (
        <div
          className={`mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/60 px-4 py-1.5 font-mono-sig text-[13px] text-[var(--color-accent)] ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse-slow" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl ${
          isCenter ? "mx-auto max-w-2xl" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base text-[var(--color-secondary)] sm:text-lg ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

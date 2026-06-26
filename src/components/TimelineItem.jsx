import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { fadeUp, staggerContainer, viewportOnce } from "../animations/variants";

export default function TimelineItem({ item }) {
  return (
    <motion.div variants={fadeUp} className="relative pl-12">
      <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-card)] text-[var(--color-accent)]">
        <FiBriefcase className="text-sm" />
      </span>
      {/* connecting line handled by parent container's divide / border-left */}

      <div className="glass glow-border rounded-2xl border border-[var(--color-border)] p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
            {item.role}
          </h3>
          {item.current && (
            <span className="rounded-full bg-[var(--color-accent)]/15 px-3 py-1 font-mono-sig text-xs text-[var(--color-accent)]">
              current
            </span>
          )}
        </div>
        <p className="mt-1 text-sm font-medium text-[var(--color-secondary)]">
          {item.company} · {item.location}
        </p>
        <p className="mt-1 font-mono-sig text-xs text-[var(--color-secondary)]">{item.period}</p>

        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-4 space-y-2"
        >
          {item.points.map((point, idx) => (
            <motion.li
              key={idx}
              variants={fadeUp}
              className="flex gap-2 text-sm leading-relaxed text-[var(--color-secondary)]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary-light)]" />
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

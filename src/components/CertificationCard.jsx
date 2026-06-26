import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { fadeUp } from "../animations/variants";

export default function CertificationCard({ cert }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -5 }}>
      <div className="glass glow-border flex h-full flex-col rounded-2xl border border-[var(--color-border)] p-6">
        <div className="flex items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary-light)]">
            <FiAward className="text-xl" />
          </span>
          <span className="font-mono-sig text-xs text-[var(--color-secondary)]">{cert.date}</span>
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold text-[var(--color-text)]">
          {cert.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-secondary)]">{cert.provider}</p>
        <p className="mt-1 font-mono-sig text-xs text-[var(--color-accent)]">{cert.type}</p>

        <ul className="mt-4 flex-1 space-y-1.5">
          {cert.points.map((point, idx) => (
            <li key={idx} className="flex gap-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary-light)]" />
              {point}
            </li>
          ))}
        </ul>

        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]"
        >
          View credential <FiExternalLink />
        </a>
      </div>
    </motion.div>
  );
}

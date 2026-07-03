import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink, FiPackage, FiFileText, FiChevronDown } from "react-icons/fi";
import TechBadge from "./TechBadge";
import { fadeUp } from "../animations/variants";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      variants={fadeUp}
      style={{ perspective: 1200 }}
      className={project.featured ? "lg:col-span-2" : ""}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass glow-border group relative h-full overflow-hidden rounded-2xl border border-[var(--color-border)] p-7"
      >
        {/* placeholder project "image" — abstract gradient panel with index mark */}
        <div className="relative mb-6 flex h-36 items-center justify-between overflow-hidden rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-primary)]/25 via-[var(--color-card)] to-[var(--color-accent)]/15 px-6">
          <span className="font-mono-sig text-5xl font-bold text-white/10">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[var(--color-accent)]/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">
            {project.title}
          </h3>
          {project.featured && (
            <span className="whitespace-nowrap rounded-full bg-[var(--color-primary)]/20 px-3 py-1 font-mono-sig text-[11px] text-[var(--color-primary-light)]">
              featured
            </span>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">{project.tagline}</p>

        <p className="mt-4 text-sm leading-relaxed text-[var(--color-secondary)]">{project.description}</p>

        {project.metrics?.length > 0 && (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-[var(--color-border)] bg-white/[0.02] px-2 py-2 text-center">
                <div className="font-display text-sm font-semibold text-[var(--color-accent)]">{m.value}</div>
                <div className="mt-0.5 text-[10px] leading-tight text-[var(--color-secondary)]">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]"
        >
          {expanded ? "Hide details" : "View detailed overview"}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="mt-4 space-y-4 border-t border-[var(--color-border)] pt-4">
            <p className="text-sm leading-relaxed text-[var(--color-secondary)]">{project.overview}</p>

            <div>
              <p className="mb-2 font-mono-sig text-xs text-[var(--color-accent)]">$ features --list</p>
              <ul className="space-y-1.5">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[var(--color-secondary)]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-primary-light)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-1.5 font-mono-sig text-xs text-[var(--color-accent)]">$ challenges --solved</p>
              <p className="text-sm leading-relaxed text-[var(--color-secondary)]">{project.challenges}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[var(--color-border)] pt-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
          >
            <FiGithub /> Source
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {project.pypiUrl && (
            <a
              href={project.pypiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
            >
              <FiPackage /> PyPI
            </a>
          )}
          {project.apiDocsUrl && (
            <a
              href={project.apiDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
            >
              <FiFileText /> API Docs
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/education";
import { fadeUp, staggerContainer, viewportOnce } from "../animations/variants";

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow="$ cat education.log"
          title="Education"
          subtitle="The formal track record behind the projects above."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-12 space-y-6 border-l border-[var(--color-border)] sm:ml-4"
        >
          {education.map((edu) => (
            <motion.div key={edu.id} variants={fadeUp} className="relative pl-10">
              <span className="absolute left-0 top-1 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-card)] text-[var(--color-accent)]">
                <FiBookOpen className="text-sm" />
              </span>
              <div className="glass glow-border rounded-2xl border border-[var(--color-border)] p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
                    {edu.school}
                  </h3>
                  <span className="rounded-full bg-[var(--color-primary)]/15 px-3 py-1 font-mono-sig text-xs text-[var(--color-primary-light)]">
                    {edu.detail}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-secondary)]">{edu.degree}</p>
                <p className="mt-1 text-sm text-[var(--color-secondary)]">{edu.location}</p>
                <p className="mt-1 font-mono-sig text-xs text-[var(--color-secondary)]">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

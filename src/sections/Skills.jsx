import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { skillGroups } from "../data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "../animations/variants";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow="$ cat skills.json"
          title="Skills & Technologies"
          subtitle="Extracted from real project work — resume bullets and the repos that back them up."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.id} variants={fadeUp}>
              <GlassCard className="h-full p-6">
                <p className="font-mono-sig text-xs text-[var(--color-accent)]">{group.prompt}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-text)]">
                  {group.label}
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <motion.div
                      key={name}
                      whileHover={{ y: -4, scale: 1.06 }}
                      className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-3 py-2 text-sm text-[var(--color-secondary)] transition-colors hover:border-[var(--color-accent)]/60 hover:text-[var(--color-text)]"
                    >
                      <Icon className="text-base text-[var(--color-accent)]" />
                      {name}
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

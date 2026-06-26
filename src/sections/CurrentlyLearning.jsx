import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import GithubActivity from "../components/GithubActivity";
import { currentlyLearning } from "../data/currentlyLearning";
import { fadeUp, staggerContainer, viewportOnce } from "../animations/variants";

export default function CurrentlyLearning() {
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow="$ tail -f learning.log"
          title="Currently Learning & Coding Activity"
          subtitle="What's actively in progress, plus a live pulse from GitHub."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap gap-3"
        >
          {currentlyLearning.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="group rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-4 py-3 transition-colors hover:border-[var(--color-accent)]/50"
            >
              <span className="font-mono-sig text-sm text-[var(--color-text)]">{item.label}</span>
              <p className="mt-0.5 text-xs text-[var(--color-secondary)]">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14">
          <GithubActivity />
        </div>
      </Container>
    </section>
  );
}

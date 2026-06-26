import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import StatCard from "../components/StatCard";
import { aboutText, stats } from "../data/about";
import { fadeUp, staggerContainer, viewportOnce } from "../animations/variants";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow={aboutText.eyebrow}
          title="About Me"
          subtitle="A quick rundown of who I am and what I'm building toward."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-5"
          >
            <motion.h3 variants={fadeUp} className="font-display text-xl font-medium leading-snug text-[var(--color-text)] sm:text-2xl">
              {aboutText.heading}
            </motion.h3>
            {aboutText.paragraphs.map((p, idx) => (
              <motion.p key={idx} variants={fadeUp} className="leading-relaxed text-[var(--color-secondary)]">
                {p}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 self-start"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <StatCard value={s.value} suffix={s.suffix} label={s.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

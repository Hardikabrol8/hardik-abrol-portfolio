import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/experience";
import { staggerContainer, viewportOnce } from "../animations/variants";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow="$ git log --oneline experience"
          title="Experience"
          subtitle="Where I've put engineering practice to work outside the classroom."
        />

        <motion.div
          variants={staggerContainer(0.18)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-12 space-y-8 border-l border-[var(--color-border)] pl-0 sm:ml-4"
        >
          {experience.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

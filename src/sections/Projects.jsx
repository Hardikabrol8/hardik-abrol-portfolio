import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { staggerContainer, viewportOnce } from "../animations/variants";

const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow="$ ls -la projects/"
          title="Featured Projects"
          subtitle="A showcase of software engineering, database design, and machine learning projects I've built from the ground up."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {sorted.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

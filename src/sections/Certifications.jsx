import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import CertificationCard from "../components/CertificationCard";
import { certifications } from "../data/certifications";
import { staggerContainer, viewportOnce } from "../animations/variants";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow="$ verify --credentials"
          title="Certifications"
          subtitle="Formal coursework that backs up the hands-on project work."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

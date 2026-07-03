import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { socials } from "../data/socials";
import { fadeUp, slideInLeft, staggerContainer, viewportOnce } from "../animations/variants";

const DETAILS = [
  { Icon: FiGithub, label: "GitHub", value: "Hardikabrol8", href: socials.github },
  { Icon: FiLinkedin, label: "LinkedIn", value: "hardik-abrol", href: socials.linkedin },
  { Icon: FiInstagram, label: "Instagram", value: "hardik_.abrol", href: socials.instagram },
  { Icon: FiMail, label: "Email", value: socials.email, href: `mailto:${socials.email}` },
  { Icon: FiMapPin, label: "Location", value: socials.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <Container>
        <SectionHeading
          eyebrow="$ ping hardik"
          title="Let's Build Something"
          subtitle="Open to internships, collaborations, and interesting problems. Reach out below."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-3"
          >
            {DETAILS.map((d) => {
              const content = (
                <div className="glass flex items-center gap-4 rounded-xl border border-[var(--color-border)] p-4 transition-colors hover:border-[var(--color-accent)]/50">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-primary-light)]">
                    <d.Icon />
                  </span>
                  <div>
                    <div className="text-xs text-[var(--color-secondary)]">{d.label}</div>
                    <div className="text-sm font-medium text-[var(--color-text)]">{d.value}</div>
                  </div>
                </div>
              );
              return (
                <motion.div key={d.label} variants={fadeUp}>
                  {d.href ? (
                    <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={slideInLeft} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

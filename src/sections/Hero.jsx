import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from "react-icons/fi";
import { SiPython, SiReact, SiPytorch, SiLangchain } from "react-icons/si";
import Container from "../components/Container";
import Button from "../components/Button";
import TypingText from "../components/TypingText";
import NeuralCanvas from "../components/NeuralCanvas";
import { socials } from "../data/socials";
import { fadeUp, slideInRight, staggerContainer, viewportOnce } from "../animations/variants";
import profileImg from "../assets/images/profile.jpg";


const ROLES = ["Machine Learning Engineer", "React Developer", "AI Enthusiast", "FastAPI Developer", "LangChain Builder", "Deep Learning Practitioner"];

const ORBIT_ICONS = [
  { Icon: SiPython, style: { top: "-6%", left: "50%" }, color: "#3776AB" },
  { Icon: SiReact, style: { top: "50%", left: "104%" }, color: "#61DAFB" },
  { Icon: SiPytorch, style: { top: "104%", left: "50%" }, color: "#EE4C2C" },
  { Icon: SiLangchain, style: { top: "50%", left: "-4%" }, color: "#1C3C3C" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <NeuralCanvas className="absolute inset-0 h-full w-full opacity-70" />

      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/60 px-4 py-1.5 font-mono-sig text-[13px] text-[var(--color-accent)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse-slow" />
            available for opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.08] text-[var(--color-text)] sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Hardik Abrol</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-3 text-lg text-[var(--color-secondary)] sm:text-xl">
            Computer Engineering Student · Data Science Enthusiast
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 h-7 font-mono-sig text-base sm:text-lg">
            <span className="text-[var(--color-secondary)]">{"> "}</span>
            <TypingText phrases={ROLES} />
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-secondary)] sm:text-lg">
            I build AI-powered applications, scalable web experiences, and intelligent
            software solutions that solve real-world problems.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Button as="a" href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }} icon={FiArrowRight} variant="primary">
              View Projects
            </Button>
            <Button as="a" href={socials.resume} target="_blank" rel="noopener noreferrer" icon={FiDownload} variant="outline">
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
            {[
              { Icon: FiGithub, href: socials.github, label: "GitHub" },
              { Icon: FiLinkedin, href: socials.linkedin, label: "LinkedIn" },
              { Icon: FiMail, href: `mailto:${socials.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, color: "var(--color-accent)" }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-secondary)] transition-colors"
              >
                <Icon className="text-lg" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto hidden h-[340px] w-[340px] sm:block lg:h-[380px] lg:w-[380px]"
        >
          {/* glowing rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[var(--color-accent)]/30"
          />
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[var(--color-primary)]/40 to-[var(--color-accent)]/30 blur-2xl" />

          <div className="glass absolute inset-8 overflow-hidden rounded-full border border-[var(--color-border)] shadow-2xl shadow-black/40">
            <img 
              src={profileImg} 
              alt="Hardik Abrol" 
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {ORBIT_ICONS.map(({ Icon, style }, idx) => (
            <motion.div
              key={idx}
              style={style}
              className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5 + idx, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="glass flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-border)] text-2xl text-[var(--color-text)] shadow-lg shadow-black/30">
                <Icon />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

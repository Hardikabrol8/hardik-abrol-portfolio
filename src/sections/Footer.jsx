import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart } from "react-icons/fi";
import Container from "../components/Container";
import { navLinks } from "../constants/navLinks";
import { socials } from "../data/socials";

export default function Footer() {
  function handleNavClick(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="relative border-t border-[var(--color-border)] py-12">
      <Container className="flex flex-col items-center gap-8 text-center">
        <button onClick={() => handleNavClick("home")} className="font-display text-xl font-semibold text-[var(--color-text)]">
          Hardik<span className="text-[var(--color-accent)]">.</span>Abrol
        </button>

        <nav className="flex flex-wrap justify-center gap-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-sm text-[var(--color-secondary)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {[
            { Icon: FiGithub, href: socials.github },
            { Icon: FiLinkedin, href: socials.linkedin },
            { Icon: FiInstagram, href: socials.instagram },
            { Icon: FiMail, href: `mailto:${socials.email}` },
          ].map(({ Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="flex items-center gap-1.5 font-mono-sig text-xs text-[var(--color-secondary)]">
          Made with <FiHeart className="text-[var(--color-accent)]" /> by Hardik Abrol · {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}

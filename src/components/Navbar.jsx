import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";
import Button from "./Button";
import { navLinks } from "../constants/navLinks";
import { useActiveSection } from "../hooks/useActiveSection";
import { socials } from "../data/socials";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(id) {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav border-b border-[var(--color-border)]/80 py-3" : "py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        <button
          onClick={() => handleNavClick("home")}
          className="font-display text-lg font-semibold tracking-tight text-[var(--color-text)]"
        >
          Hardik<span className="text-[var(--color-accent)]">.</span>Abrol
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeId === link.id
                  ? "text-[var(--color-text)]"
                  : "text-[var(--color-secondary)] hover:text-[var(--color-text)]"
              }`}
            >
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.06] ring-1 ring-[var(--color-accent)]/40"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as="a" href={socials.resume} target="_blank" rel="noopener noreferrer" variant="outline">
            Resume
          </Button>
        </div>

        <button
          className="text-2xl text-[var(--color-text)] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/[0.98] backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`rounded-lg px-3 py-3 text-left text-sm font-medium ${
                    activeId === link.id
                      ? "bg-white/[0.06] text-[var(--color-text)]"
                      : "text-[var(--color-secondary)]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                as="a"
                href={socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="mt-2 w-full"
              >
                Resume
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

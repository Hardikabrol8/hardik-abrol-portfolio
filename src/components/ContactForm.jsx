import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import Button from "./Button";
import { socials } from "../data/socials";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ state: "error", message: "Please fill in every field before sending." });
      return;
    }

    if (!isConfigured) {
      // Graceful fallback: EmailJS keys haven't been configured yet, so open
      // the visitor's mail client instead of silently failing.
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
      setStatus({
        state: "info",
        message: "EmailJS isn't configured yet — opening your email client instead.",
      });
      return;
    }

    setStatus({ state: "loading", message: "" });
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus({ state: "success", message: "Message sent — I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try emailing me directly." });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass glow-border rounded-2xl border border-[var(--color-border)] p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--color-secondary)]">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-secondary)]/60 focus:border-[var(--color-accent)]"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-secondary)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-secondary)]/60 focus:border-[var(--color-accent)]"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--color-secondary)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="What would you like to talk about?"
          className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-secondary)]/60 focus:border-[var(--color-accent)]"
        />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <Button as="button" type="submit" icon={FiSend} variant="primary">
          {status.state === "loading" ? "Sending..." : "Send Message"}
        </Button>

        <AnimatePresence mode="wait">
          {status.message && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className={`flex items-center gap-1.5 text-sm ${
                status.state === "success"
                  ? "text-[var(--color-accent)]"
                  : status.state === "error"
                  ? "text-rose-400"
                  : "text-[var(--color-secondary)]"
              }`}
            >
              {status.state === "success" ? <FiCheckCircle /> : status.state === "error" ? <FiAlertCircle /> : null}
              {status.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

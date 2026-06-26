import { useEffect, useState } from "react";

/**
 * Minimal typewriter effect — types each phrase, pauses, deletes, moves on.
 * Implemented by hand so we don't pull in an extra dependency for one effect.
 */
export default function TypingText({ phrases, typingSpeed = 60, deletingSpeed = 35, pause = 1400 }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timer;

    if (!deleting && text.length < current.length) {
      timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="font-mono-sig text-[var(--color-accent)]">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse-slow bg-[var(--color-accent)]">
        &nbsp;
      </span>
    </span>
  );
}

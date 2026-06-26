import { useEffect, useRef } from "react";

/**
 * A soft radial glow that follows the cursor across the whole page.
 * Pure CSS transform updates (no React state) to stay perfectly smooth.
 */
export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch devices

    let raf = null;
    let target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let current = { ...target };

    function onMove(e) {
      target = { x: e.clientX, y: e.clientY };
    }

    function animate() {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.x - 250}px, ${current.y - 250}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full opacity-[0.07] mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, var(--color-accent) 0%, var(--color-primary) 45%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}

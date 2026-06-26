import { useEffect, useRef } from "react";

/**
 * Signature visual: a lightweight neural-network field — nodes drift slowly
 * and connect to nearby neighbors, brightening near the cursor. It's a
 * direct nod to Hardik's ML focus rather than a generic decorative blob.
 */
export default function NeuralCanvas({ className }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height, dpr;
    let nodes = [];
    let animationId;
    let reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const PRIMARY = "79, 70, 229";
    const ACCENT = "34, 211, 238";

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const count = Math.max(28, Math.floor((width * height) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 1,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
        }
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.35;
            ctx.strokeStyle = `rgba(${PRIMARY}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const dxm = a_x_safe(nodes[i].x) - mouse.current.x;
        const dym = nodes[i].y - mouse.current.y;
        const distM = Math.sqrt(dxm * dxm + dym * dym);
        const near = distM < 160;

        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, near ? nodes[i].r + 1.4 : nodes[i].r, 0, Math.PI * 2);
        ctx.fillStyle = near ? `rgba(${ACCENT}, 0.9)` : `rgba(${ACCENT}, 0.55)`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(step);
    }

    // helper kept tiny to avoid referencing nodes[i].x twice confusingly above
    function a_x_safe(x) {
      return x;
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function handleMouseLeave() {
      mouse.current = { x: -9999, y: -9999 };
    }

    resize();
    step();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

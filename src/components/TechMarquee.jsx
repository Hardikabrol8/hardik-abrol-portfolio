import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiHuggingface,
  SiPytorch,
  SiScikitlearn,
  SiJupyter,
  SiStreamlit,
  SiLangchain,
} from "react-icons/si";

const STACK = [
  { Icon: SiPython, label: "Python" },
  { Icon: SiCplusplus, label: "C++" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiReact, label: "React" },
  { Icon: SiFastapi, label: "FastAPI" },
  { Icon: SiFlask, label: "Flask" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: SiPandas, label: "Pandas" },
  { Icon: SiNumpy, label: "NumPy" },
  { Icon: SiPytorch, label: "PyTorch" },
  { Icon: SiScikitlearn, label: "Scikit-learn" },
  { Icon: SiHuggingface, label: "Hugging Face" },
  { Icon: SiLangchain, label: "LangChain" },
  { Icon: SiStreamlit, label: "Streamlit" },
  { Icon: SiJupyter, label: "Jupyter" },
  { Icon: SiGit, label: "Git" },
  { Icon: SiGithub, label: "GitHub" },
];

/**
 * Tech stack marquee — driven by GSAP for a perfectly smooth, pause-on-hover
 * infinite scroll (rather than the CSS keyframe used elsewhere on the page).
 */
export default function TechMarquee() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    return () => tweenRef.current?.kill();
  }, []);

  return (
    <div className="relative overflow-hidden border-y border-[var(--color-border)] bg-white/[0.02] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />

      <div
        ref={trackRef}
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.resume()}
        className="flex w-max items-center gap-12 will-change-transform"
      >
        {[...STACK, ...STACK].map(({ Icon, label }, idx) => (
          <div key={idx} className="flex items-center gap-2 whitespace-nowrap text-[var(--color-secondary)]">
            <Icon className="text-xl text-[var(--color-accent)]" />
            <span className="font-mono-sig text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

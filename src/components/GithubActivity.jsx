import { motion } from "framer-motion";
import { FiGithub, FiUsers, FiBox } from "react-icons/fi";
import { useGithubStats } from "../hooks/useGithubStats";
import { fadeUp, staggerContainer, viewportOnce } from "../animations/variants";

const USERNAME = "Hardikabrol8";

export default function GithubActivity() {
  const { stats } = useGithubStats(USERNAME);

  const counters = [
    { icon: FiBox, label: "Public Repositories", value: stats.public_repos },
    { icon: FiUsers, label: "Followers", value: stats.followers },
    { icon: FiGithub, label: "GitHub Handle", value: `@${USERNAME}` },
  ];

  return (
    <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
      <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
        {counters.map((c) => (
          <div
            key={c.label}
            className="glass glow-border rounded-2xl border border-[var(--color-border)] p-5 text-center"
          >
            <c.icon className="mx-auto mb-2 text-xl text-[var(--color-accent)]" />
            <div className="font-display text-2xl font-bold text-[var(--color-text)]">{c.value}</div>
            <div className="mt-1 text-xs text-[var(--color-secondary)]">{c.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="glass rounded-2xl border border-[var(--color-border)] p-4">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=22D3EE&icon_color=4F46E5&text_color=94A3B8`}
            alt="Hardik Abrol's GitHub stats"
            loading="lazy"
            className="mx-auto w-full max-w-md"
          />
        </div>
        <div className="glass rounded-2xl border border-[var(--color-border)] p-4">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=22D3EE&text_color=94A3B8`}
            alt="Hardik Abrol's most used languages"
            loading="lazy"
            className="mx-auto w-full max-w-md"
          />
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-5 glass overflow-x-auto rounded-2xl border border-[var(--color-border)] p-4">
        <img
          src={`https://ghchart.rshah.org/22D3EE/${USERNAME}`}
          alt="Hardik Abrol's GitHub contribution graph"
          loading="lazy"
          className="mx-auto min-w-[640px]"
        />
      </motion.div>
    </motion.div>
  );
}

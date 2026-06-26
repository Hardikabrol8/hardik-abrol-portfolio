export default function TechBadge({ label }) {
  return (
    <span className="rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1 font-mono-sig text-xs text-[var(--color-secondary)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
      {label}
    </span>
  );
}

import { cn } from "../utils/cn";

export default function GlassCard({ children, className, hover = true }) {
  return (
    <div
      className={cn(
        "glass glow-border rounded-2xl border border-[var(--color-border)]",
        hover && "transition-transform duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

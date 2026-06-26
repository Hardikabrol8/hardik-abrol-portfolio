import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const variants = {
  primary:
    "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white shadow-lg shadow-indigo-900/40 hover:shadow-indigo-700/50",
  outline:
    "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ghost: "text-[var(--color-secondary)] hover:text-[var(--color-text)]",
};

export default function Button({
  as = "a",
  href,
  onClick,
  type = "button",
  children,
  icon: Icon,
  variant = "primary",
  className,
  target,
  rel,
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300",
    variants[variant],
    className
  );

  const content = (
    <>
      {Icon && <Icon className="text-base" />}
      {children}
    </>
  );

  const MotionTag = motion[as === "a" ? "a" : "button"];

  return (
    <MotionTag
      href={as === "a" ? href : undefined}
      onClick={onClick}
      type={as === "button" ? type : undefined}
      target={target}
      rel={rel}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {content}
    </MotionTag>
  );
}

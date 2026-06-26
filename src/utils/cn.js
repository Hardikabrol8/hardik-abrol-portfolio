/**
 * Lightweight className combiner — joins truthy class strings together.
 * Avoids pulling in a dependency just for conditional Tailwind classes.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

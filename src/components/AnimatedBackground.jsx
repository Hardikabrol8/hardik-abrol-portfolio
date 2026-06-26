export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--color-bg)]">
      {/* base grid */}
      <div className="absolute inset-0 grid-fade" />

      {/* floating gradient blobs */}
      <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[var(--color-primary)]/30 blur-[110px] animate-blob" />
      <div
        className="absolute top-1/3 right-[-120px] h-[460px] w-[460px] rounded-full bg-[var(--color-accent)]/20 blur-[120px] animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-160px] left-1/3 h-[380px] w-[380px] rounded-full bg-[var(--color-primary-light)]/20 blur-[100px] animate-blob"
        style={{ animationDelay: "-12s" }}
      />

      {/* vignette to keep edges calm */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_0%,var(--color-bg)_85%)]" />
    </div>
  );
}

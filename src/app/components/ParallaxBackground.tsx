interface ParallaxBackgroundProps {
  className?: string;
}

/**
 * Site-wide ambient background.
 * Clean dark gradient + soft radial glow + very subtle noise for depth.
 * No geometric patterns, grids, or repeating shapes.
 */
export function ParallaxBackground({ className = '' }: ParallaxBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base gradient — near-black with subtle surface lift */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            145deg,
            var(--color-bg-surface) 0%,
            var(--color-bg-base) 45%,
            var(--color-bg-surface-inset) 100%
          )`,
        }}
      />

      {/* Primary radial glow — top-right, warm teal accent */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          width: '70vw',
          height: '70vw',
          top: '-15vw',
          right: '-15vw',
          background: `radial-gradient(ellipse at center, var(--color-accent-fill-xs) 0%, transparent 68%)`,
          filter: 'blur(32px)',
        }}
      />

      {/* Secondary radial glow — bottom-left, softer echo */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          width: '55vw',
          height: '55vw',
          bottom: '-10vw',
          left: '-8vw',
          background: `radial-gradient(ellipse at center, var(--color-accent-fill-xs) 0%, transparent 65%)`,
          filter: 'blur(48px)',
        }}
      />

      {/* Noise texture — barely-visible grain for cinematic depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          opacity: 0.018,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
    </div>
  );
}

interface ParallaxBackgroundProps {
  className?: string;
}

/**
 * Site-wide ambient background. Uses CSS animations instead of Motion infinite
 * loops to cut main-thread / TBT cost while keeping the same layered look.
 */
export function ParallaxBackground({ className = '' }: ParallaxBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <div
          className="parallax-bg-grid-drift absolute inset-0 opacity-[0.03] transform-gpu"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(29, 205, 159, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(29, 205, 159, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transformStyle: 'preserve-3d',
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ perspective: '1200px' }}>
        {[...Array(3)].map((_, i) => (
          <div
            key={`cube-${i}`}
            className="absolute transform-gpu"
            style={{
              width: 60 + i * 15,
              height: 60 + i * 15,
              left: `${(i * 17 + 5) % 85}%`,
              top: `${(i * 23 + 10) % 80}%`,
              transformStyle: 'preserve-3d',
              transform: `rotateX(${18 + i * 4}deg) rotateY(${-10 - i * 3}deg) translateZ(0)`,
            }}
          >
            <div
              className="absolute inset-0 bg-[#1DCD9F]/[0.02] border border-[#1DCD9F]/[0.08]"
              style={{ transform: 'translateZ(30px)' }}
            />
            <div
              className="absolute inset-0 bg-[#1DCD9F]/[0.015] border border-[#1DCD9F]/[0.06]"
              style={{ transform: 'rotateY(90deg) translateZ(30px)' }}
            />
            <div
              className="absolute inset-0 bg-[#1DCD9F]/[0.01] border border-[#1DCD9F]/[0.04]"
              style={{ transform: 'rotateX(90deg) translateZ(30px)' }}
            />
          </div>
        ))}
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.015]"
        style={{ mixBlendMode: 'screen' }}
      >
        <defs>
          <pattern id="isometric" x="0" y="0" width="100" height="173.2" patternUnits="userSpaceOnUse">
            <path d="M0,86.6 L50,0 L100,86.6" stroke="rgba(29, 205, 159, 0.3)" strokeWidth="0.5" fill="none" />
            <path d="M0,86.6 L50,173.2 L100,86.6" stroke="rgba(29, 205, 159, 0.3)" strokeWidth="0.5" fill="none" />
            <path d="M50,0 L50,173.2" stroke="rgba(29, 205, 159, 0.2)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isometric)" />
      </svg>

      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[15%] h-[600px] w-[600px] rounded-full bg-[#1DCD9F]/[0.015] blur-3xl transform-gpu" />
        <div className="absolute right-[10%] bottom-[20%] h-[700px] w-[700px] rounded-full bg-[#1DCD9F]/[0.015] blur-3xl transform-gpu" />
        <div className="absolute top-[50%] left-[50%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1DCD9F]/[0.01] blur-3xl transform-gpu" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full opacity-[0.1] transform-gpu"
            style={{
              width: 3,
              height: 3,
              left: `${(i * 23 + 10) % 90}%`,
              top: `${(i * 31 + 15) % 80}%`,
              background: 'rgba(29, 205, 159, 0.08)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

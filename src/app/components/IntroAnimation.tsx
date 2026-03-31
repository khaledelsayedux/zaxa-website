import { useEffect, useState } from 'react';
import { brandLogoMint as newLogo } from '@/assets/images';

interface IntroAnimationProps {
  onComplete: () => void;
}

const PARTICLES: { left: string; top: string; dur: number; delay: number }[] = [
  { left: '12%', top: '18%', dur: 4.6, delay: 0.2 },
  { left: '88%', top: '22%', dur: 5.2, delay: 0.9 },
  { left: '34%', top: '72%', dur: 4.8, delay: 1.1 },
  { left: '76%', top: '58%', dur: 5.0, delay: 0.5 },
];

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const exitMs = reduce ? 450 : 2400;
    const doneMs = reduce ? 800 : 2900;

    const tExit = window.setTimeout(() => setExiting(true), exitMs);
    const tDone = window.setTimeout(() => onComplete(), doneMs);

    return () => {
      window.clearTimeout(tExit);
      window.clearTimeout(tDone);
    };
  }, [onComplete]);

  return (
    <div
      className={`intro-shell fixed inset-0 z-[100] flex items-center justify-center bg-[#000000] overflow-hidden ${exiting ? 'intro-shell-exit' : ''}`}
      style={{
        perspective: '2000px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      <div className="intro-bg-drift absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
        <div className="intro-backdrop-art" />
      </div>

      <div
        className="intro-orb-a absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#1DCD9F]/10 rounded-full blur-[72px] transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      />
      <div
        className="intro-orb-b absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#1DCD9F]/8 rounded-full blur-[72px] transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      />

      <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="intro-particle absolute w-0.5 h-0.5 bg-[#1DCD9F]/30 rounded-full"
            style={{
              left: p.left,
              top: p.top,
              transformStyle: 'preserve-3d',
              ['--intro-p-dur' as string]: `${p.dur}s`,
              ['--intro-p-delay' as string]: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div
        className="intro-content-drift relative z-10 flex flex-col items-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="intro-logo-reveal relative mb-12" style={{ transformStyle: 'preserve-3d' }}>
          <div
            className="intro-ring-a absolute -inset-12 rounded-full border border-[#1DCD9F]/20"
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-30px)' }}
          />
          <div
            className="intro-ring-b absolute -inset-16 rounded-full border border-[#1DCD9F]/10"
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-60px)' }}
          />

          <div
            className="intro-glow-a absolute -inset-8 bg-gradient-to-r from-[#1DCD9F]/20 via-emerald-400/20 to-[#169976]/20 rounded-full opacity-40 blur-2xl transform-gpu"
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-20px)' }}
          />
          <div
            className="intro-glow-b absolute -inset-10 bg-gradient-to-r from-emerald-400/15 via-[#1DCD9F]/15 to-teal-400/15 rounded-full opacity-30 blur-xl transform-gpu"
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-40px)' }}
          />

          <div className="intro-logo-float relative" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}>
            <div
              className="intro-logo-shadow-pulse absolute inset-0"
              style={{
                filter: 'blur(12px)',
                background: 'radial-gradient(circle, rgba(29, 205, 159, 0.3) 0%, transparent 70%)',
                transform: 'translateZ(-10px) scale(1.1)',
              }}
            />
            <img
              src={newLogo}
              alt="Zaxa Studio"
              className="h-24 w-24 relative z-10"
              style={{
                filter: 'drop-shadow(0 8px 24px rgba(29, 205, 159, 0.35))',
                transform: 'translateZ(0)',
              }}
            />
          </div>
        </div>

        <div className="intro-brand text-center mb-8">
          <h1 className="text-7xl font-light tracking-[-0.02em] mb-3" style={{ fontFamily: "'Cairo', sans-serif" }}>
            <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
              Zaxa
            </span>
          </h1>
          <div className="intro-brand-line h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#1DCD9F]/50 to-transparent mb-4" />
          <p
            className="intro-brand-tag text-zinc-400 text-sm tracking-[0.4em] uppercase font-light"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            Engineering Studio
          </p>
        </div>

        <div className="intro-progress-block w-80">
          <div className="h-px bg-zinc-800/50 rounded-full overflow-hidden relative">
            <div className="intro-progress-fill h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-green-500 rounded-full relative">
              <div className="intro-progress-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            </div>
          </div>
          <div
            className="mt-6 text-center text-zinc-600 text-xs tracking-wider uppercase"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            <span className="intro-init-pulse">Initializing</span>
          </div>
        </div>
      </div>

      <div className="absolute top-12 left-12 w-16 h-16 border-l border-t border-zinc-700/40 intro-corner-tl" />
      <div className="absolute top-12 right-12 w-16 h-16 border-r border-t border-zinc-700/40 intro-corner-tr" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border-l border-b border-zinc-700/40 intro-corner-bl" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-r border-b border-zinc-700/40 intro-corner-br" />
    </div>
  );
}

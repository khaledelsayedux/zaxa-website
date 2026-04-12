import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { HeroVideo } from '../components/HeroVideo';
import { useTheme } from '@/app/contexts/ThemeContext';
import { usePlayTabSound } from '@/app/hooks/usePlayTabSound';

// Shared noise texture used by both CTA links
const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`;

type HomePageHeroProps = {
  playTabSound?: () => void;
};

export function HomePageHero({ playTabSound: externalPlayTabSound }: HomePageHeroProps) {
  const { theme } = useTheme();
  const internalPlayTabSound = usePlayTabSound();
  const playTabSound = externalPlayTabSound ?? internalPlayTabSound;

  const isDark = theme === 'dark';

  return (
    <section
      className={`relative h-screen flex items-center justify-center overflow-hidden ${
        isDark
          ? 'bg-[#000000]'
          : 'bg-gradient-to-br from-[#FAFAFA] via-[#F0FFFB] to-[#FFFFFF]'
      }`}
    >
      <HeroVideo />

      <div className="relative max-w-7xl mx-auto text-center px-6 z-30">
        <div className="mb-4 md:mb-6">
          <span
            className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase ${
              isDark ? 'text-[#1DCD9F]/80' : 'text-[#1DCD9F]'
            }`}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            [ ZAXA STUDIO ]
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-tight ${
            isDark ? 'text-[#FFFFFF]' : 'text-[#000000]'
          }`}
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          End-to-End Solutions{' '}
          <span className="relative inline-block whitespace-nowrap">
            <span className="text-[#1DCD9F]">for Growth</span>
            <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1DCD9F]" aria-hidden="true" />
          </span>
        </h1>

        <p
          className={`text-[16px] md:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          We bring strategy, design, technology, and growth together to create, optimize, and scale
          products, brands, and experiences that perform.
        </p>

        <div className="mt-4 md:mt-6 flex items-center justify-center gap-4 flex-wrap">
          {/* Primary CTA — glass ghost variant */}
          <Link
            to="/services"
            onClick={playTabSound}
            className="group relative px-8 md:px-10 py-3 md:py-4 rounded-lg min-h-[48px] md:min-h-[56px] touch-manipulation transition-all duration-300 ease-out overflow-hidden text-[#5FEFBF] inline-flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1DCD9F] focus-visible:ring-offset-2"
            style={{
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '-0.02em',
              background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px) saturate(140%)',
              WebkitBackdropFilter: 'blur(10px) saturate(140%)',
            }}
          >
            {/* Noise texture overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
              style={{ backgroundImage: NOISE_BG }}
            />
            {/* Inner highlight stroke */}
            <div
              aria-hidden="true"
              className="absolute inset-[0.5px] rounded-lg pointer-events-none"
              style={{
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.40)'}`,
              }}
            />
            {/* Top specular band */}
            <div
              aria-hidden="true"
              className="absolute top-[2px] left-[15%] right-[15%] h-[0.5px] rounded-lg pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, ${isDark ? 'rgba(255, 255, 255, 0.30)' : 'rgba(255, 255, 255, 0.50)'}, transparent)`,
              }}
            />
            {/* Hover teal ring */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"
              style={{ border: '1px solid rgba(29, 205, 159, 0.5)' }}
            />
            <span className="relative z-10">Explore Services</span>
          </Link>

          {/* Secondary CTA — teal-tinted glass variant */}
          <Link
            to="/contact"
            onClick={playTabSound}
            className={`group relative px-8 md:px-10 py-3 md:py-4 rounded-lg min-h-[48px] md:min-h-[56px] touch-manipulation transition-all duration-300 ease-out overflow-hidden inline-flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1DCD9F] focus-visible:ring-offset-2 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
            style={{
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '-0.02em',
              background: isDark ? 'rgba(29, 205, 159, 0.15)' : 'rgba(29, 205, 159, 0.20)',
              backdropFilter: 'blur(10px) saturate(140%)',
              WebkitBackdropFilter: 'blur(10px) saturate(140%)',
            }}
          >
            {/* Gradient sheen */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, transparent 60%)',
              }}
            />
            {/* Noise texture overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
              style={{ backgroundImage: NOISE_BG }}
            />
            {/* Inner highlight stroke */}
            <div
              aria-hidden="true"
              className="absolute inset-[0.5px] rounded-lg pointer-events-none"
              style={{
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.50)'}`,
              }}
            />
            {/* Top specular band */}
            <div
              aria-hidden="true"
              className="absolute top-[2px] left-[15%] right-[15%] h-[0.5px] rounded-lg pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, ${isDark ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.60)'}, transparent)`,
              }}
            />
            <span className="relative z-10 flex items-center gap-3">
              Start a Project
              <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { lazy, Suspense } from 'react';
import {
  aboutHeroImage,
  projectsHeroImage,
  contactHeroImage,
  servicesHeroImage,
} from '@/assets/images';

const LazyHomeHeroSvg = lazy(() => import('../../imports/Svg-1425-64'));

interface HeroBackgroundProps {
  className?: string;
  variant?: 'default' | 'about' | 'projects' | 'contact' | 'services';
}

const IMAGE_MAP: Partial<Record<NonNullable<HeroBackgroundProps['variant']>, string>> = {
  about:    aboutHeroImage,
  projects: projectsHeroImage,
  contact:  contactHeroImage,
  services: servicesHeroImage,
};

/** Glow anchor varies per page for subtle tonal accent on top of the photo. */
const GLOW_POSITIONS: Record<NonNullable<HeroBackgroundProps['variant']>, string> = {
  default:  '65% 30%',
  about:    '28% 38%',
  projects: '72% 26%',
  contact:  '50% 42%',
  services: '60% 32%',
};

/** Cheap placeholder while the home SVG chunk loads. */
function HomeHeroSvgFallback() {
  return (
    <div
      className="absolute inset-0 w-full min-h-full pointer-events-none"
      aria-hidden
      style={{ backgroundColor: 'var(--color-bg-base)' }}
    />
  );
}

/**
 * Per-page hero background.
 * Uses actual hero images for all non-default variants.
 * Overlays are minimal — just enough for text readability.
 */
export function HeroBackground({ className = '', variant = 'default' }: HeroBackgroundProps) {
  const imageSrc = IMAGE_MAP[variant];
  const glowPos  = GLOW_POSITIONS[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Image layer (or SVG for home) */}
      <div className="absolute inset-0 w-full min-h-full pointer-events-none">
        {variant === 'default' ? (
          <Suspense fallback={<HomeHeroSvgFallback />}>
            <LazyHomeHeroSvg />
          </Suspense>
        ) : (
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            aria-hidden
          />
        )}
      </div>

      {/* Minimal dark overlay — preserves image, ensures text contrast */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden
        style={{
          background: [
            'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.50) 100%)',
            `radial-gradient(ellipse 80% 60% at ${glowPos}, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 100%)`,
          ].join(', '),
        }}
      />

      {/* Bottom fade — clean transition into page content */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10"
        aria-hidden
        style={{
          height: '30%',
          background: 'linear-gradient(to bottom, transparent, var(--color-bg-base))',
        }}
      />

      {/* Subtle teal accent glow over the image — very low opacity */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden
        style={{
          background: `radial-gradient(ellipse 65% 50% at ${glowPos}, var(--color-accent-fill-xs) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

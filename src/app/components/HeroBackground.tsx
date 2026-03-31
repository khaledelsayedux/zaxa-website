import type { CSSProperties } from 'react';
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

/**
 * HeroBackground Component
 * 
 * Provides a fully static hero background across all pages.
 * No animations, transitions, or zoom effects.
 * Maintains responsive behavior and proper cropping for all screen sizes.
 */
const heroOverlayStyle: CSSProperties = {
  backgroundImage: [
    'linear-gradient(to bottom right, rgba(29, 205, 159, 0.05), transparent, transparent)',
    'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent, transparent)',
    'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))',
  ].join(', '),
};

/** Cheap placeholder while the home hero SVG chunk loads — matches dominant stops from Svg-1425-64 base layer + teal glows. */
function HomeHeroSvgFallback() {
  return (
    <div
      className="absolute inset-0 w-full min-h-full pointer-events-none"
      aria-hidden
      style={{
        backgroundColor: '#030104',
        backgroundImage: `
          linear-gradient(127deg, #0d0d0d 0%, #080609 52%, #030104 100%),
          radial-gradient(ellipse 100% 85% at 72% 28%, rgba(29, 205, 159, 0.09) 0%, transparent 55%),
          radial-gradient(ellipse 90% 75% at 18% 72%, rgba(13, 255, 229, 0.045) 0%, transparent 52%),
          radial-gradient(ellipse 70% 60% at 48% 48%, rgba(8, 125, 114, 0.055) 0%, transparent 58%)
        `,
      }}
    />
  );
}

export function HeroBackground({ className = '', variant = 'default' }: HeroBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Static background — home art is code-split; single-vector scene + paint containment. */}
      <div className="absolute inset-0 w-full min-h-full pointer-events-none">
        {variant === 'default' ? (
          <Suspense fallback={<HomeHeroSvgFallback />}>
            <LazyHomeHeroSvg />
          </Suspense>
        ) : (
          <img
            src={variant === 'about' ? aboutHeroImage : variant === 'projects' ? projectsHeroImage : variant === 'contact' ? contactHeroImage : servicesHeroImage}
            alt=""
            className="w-full h-full object-cover"
            style={{
              imageRendering: 'high-quality',
            }}
            loading="eager"
          />
        )}
      </div>

      {/* Single stacked overlay (was 3 layers) — same visual recipe, less compositing */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={heroOverlayStyle}
        aria-hidden
      />
    </div>
  );
}
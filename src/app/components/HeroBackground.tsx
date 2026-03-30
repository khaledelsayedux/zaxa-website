import heroImage from '@/assets/images/bece14f1ba1f5506c95720b35cc60cd5759e3cd2.png';
import abstractBg from '@/assets/images/29a0d31deef794d7e70acc854993cfed64850624.png';
import aboutHeroImage from '@/assets/images/3db7b22db9ae2218d7afa5997820aa9c8713bde5.png';
import projectsHeroImage from '@/assets/images/32d9171a7bda0e445a11a4a48cd7271d6841e54d.png';
import contactHeroImage from '@/assets/images/bb80af1c19e79013f2abf9f0a274b3c79e999bb3.png';
import servicesHeroImage from '@/assets/images/5f426a61a7bab5ef5e7bff12e01e000c4b1b8a24.png';
import Svg from '../../imports/Svg-1425-64';

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
export function HeroBackground({ className = '', variant = 'default' }: HeroBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient overlay for depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
      
      {/* Static background - SVG for home, images for other pages */}
      <div className="absolute inset-0 w-full h-full">
        {variant === 'default' ? (
          <Svg />
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

      {/* Subtle vignette for edge softening */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-10" />
      
      {/* Teal accent glow overlay matching brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1DCD9F]/5 via-transparent to-transparent z-10" />
    </div>
  );
}
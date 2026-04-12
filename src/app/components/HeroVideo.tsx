import { memo } from 'react';

interface HeroVideoProps {
  src?: string;
  className?: string;
}

/**
 * HeroVideo
 *
 * Full-screen background video for hero sections.
 * Sits at z-[1] so gradient overlays and content remain on top.
 * Includes a CSS-only dark gradient fallback for when the video
 * is unavailable, loading, or on reduced-motion preference.
 */
export const HeroVideo = memo(function HeroVideo({
  src = '/videos/hero.mp4',
  className = '',
}: HeroVideoProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 z-[1] overflow-hidden ${className}`}
      // CSS gradient acts as fallback before video loads or when unavailable
      style={{
        background:
          'linear-gradient(135deg, #0a0a0a 0%, #0d1210 50%, #080d0b 100%)',
      }}
    >
      {/* Background video — hidden for users who prefer reduced motion */}
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        // Fallback: if video fails to load the CSS background remains visible
        onError={(e) => {
          (e.currentTarget as HTMLVideoElement).style.display = 'none';
        }}
      />

      {/*
        Dark overlay — flat 65% base keeps the full hero readable,
        gradient shape (heavier at top/bottom) adds depth without looking flat.
        Teal radial preserves the brand accent at minimal cost.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 65% 55% at 50% 28%, rgba(29, 205, 159, 0.05) 0%, transparent 65%)',
            'linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.72) 100%)',
          ].join(', '),
        }}
      />

      {/* Bottom fade — smoothly dissolves the hero into the sections below */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.92) 75%, #000000 100%)',
          zIndex: 3,
        }}
      />
    </div>
  );
});

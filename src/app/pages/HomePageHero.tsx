import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { HeroVideo } from '../components/HeroVideo';
import { useTheme } from '@/app/contexts/ThemeContext';
import { usePlayTabSound } from '@/app/hooks/usePlayTabSound';

// Shared noise texture used by both CTA links
const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`;

// ─── Animation constants ──────────────────────────────────────────────────────
// Per-layer parallax lerp — different speeds create velocity-based depth cue.
// Background lags behind mid layer, reinforcing its perceived distance.
const BG_LERP  = 0.028; // background: heavy, distant, slow to react
const MID_LERP = 0.055; // mid layer: lighter, closer, more responsive
// Cursor glow lerp — intentionally slower than parallax for a trailing aura feel
const GLOW_LERP = 0.035;
// Physical size of the cursor glow orb (px) — used to centre it on cursor
const GLOW_RADIUS = 260; // half of 520 px
// Parallax layer offsets
const BG_PARALLAX  = 25;  // ±25 px  — background
const MID_PARALLAX = 60;  // ±60 px  — mid layer
const MID_ROTATION = 2;   // ±2 °    — planar rotation on mid layer
// Lighting orb (cursor-reactive ambient light)
const LIGHT_RADIUS = 460; // half of 920 px — covers most of the viewport

type HomePageHeroProps = {
  playTabSound?: () => void;
};

export function HomePageHero({ playTabSound: externalPlayTabSound }: HomePageHeroProps) {
  const { theme } = useTheme();
  const internalPlayTabSound = usePlayTabSound();
  const playTabSound = externalPlayTabSound ?? internalPlayTabSound;
  const isDark = theme === 'dark';

  // DOM layer refs — all animation writes go straight to the DOM, never setState
  const sectionRef  = useRef<HTMLElement>(null);
  const bgLayerRef  = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const glowRef     = useRef<HTMLDivElement>(null);
  // Lighting orb — large neutral light that shifts with cursor to simulate a moving source
  const lightRef    = useRef<HTMLDivElement>(null);

  // Per-layer parallax state — each layer lerps at its own speed toward the same target
  const parBg  = useRef({ x: 0, y: 0 }); // background current (slow lerp)
  const parMid = useRef({ x: 0, y: 0 }); // mid-layer current (faster lerp)
  const parTgt = useRef({ x: 0, y: 0 }); // shared mouse target

  // Glow interpolation state (separate, slower lerp)
  const glow    = useRef({ x: 0.5, y: 0.5 }); // normalised 0-1
  const glowTgt = useRef({ x: 0.5, y: 0.5 });
  const glowOn  = useRef(false); // whether cursor is inside the section

  // Cached section dimensions — updated on mousemove + resize
  // Reading these inside the RAF avoids layout-forcing getBoundingClientRect calls
  const sectSize = useRef({ w: 0, h: 0 });

  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Honour reduced-motion preference — skip the entire effect
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const section = sectionRef.current;
    if (!section) return;

    // Seed dimensions immediately so the first frame has valid values
    const seedRect = section.getBoundingClientRect();
    sectSize.current = { w: seedRect.width, h: seedRect.height };

    // ── Event handlers ────────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      // Cache dimensions while we already have the rect (no extra reflow)
      const rect = section.getBoundingClientRect();
      sectSize.current = { w: rect.width, h: rect.height };

      const nx = (e.clientX - rect.left) / rect.width;   // 0 → 1
      const ny = (e.clientY - rect.top)  / rect.height;

      parTgt.current.x = nx - 0.5;  // −0.5 → +0.5 for parallax
      parTgt.current.y = ny - 0.5;

      glowTgt.current.x = nx;
      glowTgt.current.y = ny;
      glowOn.current = true;
    };

    const onMouseLeave = () => {
      glowOn.current = false;
    };

    const onResize = () => {
      const r = section.getBoundingClientRect();
      sectSize.current = { w: r.width, h: r.height };
    };

    // ── RAF animation loop ────────────────────────────────────────────────────
    const animate = () => {
      // -- Per-layer parallax lerp (independent speeds → velocity depth cue)
      parBg.current.x  += (parTgt.current.x - parBg.current.x)  * BG_LERP;
      parBg.current.y  += (parTgt.current.y - parBg.current.y)  * BG_LERP;
      parMid.current.x += (parTgt.current.x - parMid.current.x) * MID_LERP;
      parMid.current.y += (parTgt.current.y - parMid.current.y) * MID_LERP;

      // -- Glow lerp (slower trailing feel)
      glow.current.x += (glowTgt.current.x - glow.current.x) * GLOW_LERP;
      glow.current.y += (glowTgt.current.y - glow.current.y) * GLOW_LERP;

      const t = performance.now() * 0.001; // seconds

      // -- Per-layer idle motion: each layer has its own two-frequency Lissajous path.
      //
      // Two sinusoids per axis per layer:
      //   • Fast oscillation (~30–40 s period)  → breathing / micro-motion
      //   • Slow oscillation (~160–225 s period) → appears as a directional drift
      //     over any 30 s window; too slow to perceive as looping
      //
      // Phase offsets (the additive constants) keep each layer desynchronised —
      // they are never at the same point in their cycle simultaneously.
      const bgIdleX  = Math.sin(t * 0.18 + 0.50) * 3.5  +  Math.sin(t * 0.028)         * 11;
      const bgIdleY  = Math.cos(t * 0.12 + 1.20) * 2.5  +  Math.cos(t * 0.022 + 0.70)  *  8;
      const midIdleX = Math.sin(t * 0.23 + 2.10) * 5.0  +  Math.sin(t * 0.038 + 1.50)  *  7;
      const midIdleY = Math.cos(t * 0.17 + 0.80) * 3.5  +  Math.cos(t * 0.032 + 0.30)  *  5;

      // Layer 1 — Background (recedes, slow mouse response, gentle ambient drift)
      if (bgLayerRef.current) {
        bgLayerRef.current.style.transform =
          `translate3d(${parBg.current.x * BG_PARALLAX + bgIdleX}px, ${parBg.current.y * BG_PARALLAX + bgIdleY}px, -40px) scale(1.05)`;
      }

      // Layer 2 — Mid-depth (advances, faster mouse response, more expressive drift)
      if (midLayerRef.current) {
        midLayerRef.current.style.transform =
          `translate3d(${parMid.current.x * MID_PARALLAX + midIdleX}px, ${parMid.current.y * MID_PARALLAX + midIdleY}px, 20px) rotate(${parMid.current.x * MID_ROTATION}deg) scale(1.1)`;
      }

      // Cursor glow + lighting — both share glow.current (same lerp, same position)
      const { w, h } = sectSize.current;
      const normX = glow.current.x;
      const normY = glow.current.y;
      const opacityVal = glowOn.current ? '1' : '0';

      if (glowRef.current) {
        const gx = normX * w - GLOW_RADIUS;
        const gy = normY * h - GLOW_RADIUS;
        glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
        glowRef.current.style.opacity = opacityVal;
      }

      // Lighting orb — larger, neutral, screen-blends above mid layer.
      // Moving the light source creates perceived surface normals on the orbs below.
      if (lightRef.current) {
        const lx = normX * w - LIGHT_RADIUS;
        const ly = normY * h - LIGHT_RADIUS;
        lightRef.current.style.transform = `translate3d(${lx}px, ${ly}px, 0)`;
        lightRef.current.style.opacity = opacityVal;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    section.addEventListener('mousemove',  onMouseMove,  { passive: true });
    section.addEventListener('mouseleave', onMouseLeave, { passive: true });
    window.addEventListener('resize',      onResize,     { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener('mousemove',  onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize',      onResize);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative h-screen flex items-center justify-center overflow-hidden ${
        isDark
          ? 'bg-background'
          : 'bg-gradient-to-br from-neutral-50 via-green-50 to-white'
      }`}
      // perspective: 900px — tighter frustum makes the translateZ depth more apparent
      style={{ perspective: '900px' }}
    >
      {/*
        ── Layer 1: Background ──────────────────────────────────────────────────
        Extends 6 % beyond the viewport on all sides.
        Covers ±25 px parallax drift + scale(1.05) expansion at any viewport size.
        Movement: ±25 px parallax + float drift + translateZ(-40px) depth recession
      */}
      <div
        ref={bgLayerRef}
        aria-hidden="true"
        className="absolute z-[1]"
        style={{
          inset: '-6%',
          willChange: 'transform',
          // Dims the background relative to the mid layer — widens perceived depth gap
          filter: 'brightness(0.88)',
        }}
      >
        <HeroVideo />

        {/* Warm accent glow baked into the background layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 45% at 50% 42%, var(--color-accent-fill-xs) 0%, transparent 72%)',
          }}
        />

        {/* Depth veil — extra dark layer to push the background further back */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.12)' }}
        />
      </div>

      {/*
        ── Cursor-reactive glow ─────────────────────────────────────────────────
        Lives between the bg and mid layers (z-[5]).  Starts at centre (via
        initial glow state 0.5 / 0.5) and lerps toward the cursor at GLOW_LERP
        speed — noticeably slower than the parallax, giving a trailing aura feel.
        Fades to opacity-0 when the cursor leaves the section.
      */}
      {/* Cursor glow — saturated green aura that trails the cursor */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="absolute top-0 left-0 z-[5] pointer-events-none rounded-full"
        style={{
          width:  `${GLOW_RADIUS * 2}px`,
          height: `${GLOW_RADIUS * 2}px`,
          transform: `translate3d(${-GLOW_RADIUS}px, ${-GLOW_RADIUS}px, 0)`,
          background:
            'radial-gradient(circle, var(--color-accent-fill-lg) 0%, var(--color-accent-fill-sm) 38%, transparent 68%)',
          filter: 'blur(44px)',
          opacity: 0,
          transition: 'opacity 0.6s ease',
          willChange: 'transform, opacity',
        }}
      />

      {/*
        ── Cursor lighting orb ──────────────────────────────────────────────────
        A large, softly blurred neutral-white radial that simulates a moving light
        source above the scene (z-[20], above the mid layer).  As it drifts across
        the decorative orbs beneath it, their illuminated side shifts — giving the
        impression of a real directional light rather than flat emissives.
        Uses mix-blend-mode:screen so it adds luminosity without washing out colour.
      */}
      <div
        ref={lightRef}
        aria-hidden="true"
        className="absolute top-0 left-0 z-[20] pointer-events-none rounded-full"
        style={{
          width:  `${LIGHT_RADIUS * 2}px`,
          height: `${LIGHT_RADIUS * 2}px`,
          transform: `translate3d(${-LIGHT_RADIUS}px, ${-LIGHT_RADIUS}px, 0)`,
          background:
            'radial-gradient(circle, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 42%, transparent 68%)',
          filter: 'blur(90px)',
          opacity: 0,
          transition: 'opacity 0.9s ease',
          willChange: 'transform, opacity',
          mixBlendMode: 'screen',
        }}
      />

      {/*
        ── Layer 2: Mid-depth decorative elements ───────────────────────────────
        All elements are soft-edged blurs so overflow clipping is invisible.
        Movement: ±22 px parallax + full float + translateZ(10px) depth advance + ±1° rotation
      */}
      <div
        ref={midLayerRef}
        aria-hidden="true"
        className="absolute inset-0 z-[10] pointer-events-none"
        style={{
          willChange: 'transform',
          // Brightens the mid layer relative to the darkened background
          filter: 'brightness(1.15)',
        }}
      >
        {/* Ambient orb — upper-left quadrant (boosted to --fill-md for crisper presence) */}
        <div
          className="absolute rounded-full"
          style={{
            width: '560px',
            height: '560px',
            top: '-18%',
            left: '-12%',
            background:
              'radial-gradient(circle, var(--color-accent-fill-md) 0%, var(--color-accent-fill-xs) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Ambient orb — lower-right quadrant */}
        <div
          className="absolute rounded-full"
          style={{
            width: '460px',
            height: '460px',
            bottom: '4%',
            right: '-10%',
            background:
              'radial-gradient(circle, var(--color-accent-fill-sm) 0%, transparent 65%)',
            filter: 'blur(68px)',
          }}
        />

        {/* Diffuse centre halo */}
        <div
          className="absolute rounded-full"
          style={{
            width: '700px',
            height: '700px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -52%)',
            background:
              'radial-gradient(circle, var(--color-accent-fill-sm) 0%, transparent 58%)',
            filter: 'blur(85px)',
          }}
        />

        {/* Faint brand watermark — subliminal depth cue */}
        <div className="absolute inset-0 flex items-center justify-center select-none">
          <span
            className="font-display text-foreground"
            style={{
              fontSize: 'clamp(96px, 15vw, 248px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              opacity: 0.018,
            }}
          >
            ZAXA
          </span>
        </div>
      </div>

      {/*
        ── Layer 3: Foreground content — stationary ─────────────────────────────
        No parallax transform applied.  The motion around it creates depth;
        the content itself stays locked for comfortable reading.
      */}
      <div className="relative max-w-7xl mx-auto text-center px-6 z-30">
        <div className="mb-4 md:mb-6">
          <span
            className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase ${
              isDark ? 'text-green-400/80' : 'text-green-400'
            }`}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            [ ZAXA STUDIO ]
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-tight ${
            isDark ? 'text-foreground' : 'text-background'
          }`}
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          End-to-End Solutions{' '}
          <span className="relative inline-block whitespace-nowrap">
            <span className="text-green-400">for Growth</span>
            <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-green-400" aria-hidden="true" />
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
            className="group relative px-8 md:px-10 py-3 md:py-4 rounded-lg min-h-[48px] md:min-h-[56px] touch-manipulation transition-all duration-300 ease-out overflow-hidden text-green-300 inline-flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
            style={{
              fontWeight: 600,
              fontSize: '16px',
              letterSpacing: '-0.02em',
              background: isDark ? 'var(--color-border-subtle)' : 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px) saturate(140%)',
              WebkitBackdropFilter: 'blur(10px) saturate(140%)',
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
              style={{ backgroundImage: NOISE_BG }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-[0.5px] rounded-lg pointer-events-none"
              style={{
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.40)'}`,
              }}
            />
            <div
              aria-hidden="true"
              className="absolute top-[2px] left-[15%] right-[15%] h-[0.5px] rounded-lg pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, ${isDark ? 'rgba(255, 255, 255, 0.30)' : 'rgba(255, 255, 255, 0.50)'}, transparent)`,
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"
              style={{ border: '1px solid var(--color-border-accent-strong)' }}
            />
            <span className="relative z-10">Explore Services</span>
          </Link>

          {/* Secondary CTA — teal-tinted glass variant */}
          <Link
            to="/contact"
            onClick={playTabSound}
            className={`group relative px-8 md:px-10 py-3 md:py-4 rounded-lg min-h-[48px] md:min-h-[56px] touch-manipulation transition-all duration-300 ease-out overflow-hidden inline-flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 ${
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
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, transparent 60%)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
              style={{ backgroundImage: NOISE_BG }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-[0.5px] rounded-lg pointer-events-none"
              style={{
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.50)'}`,
              }}
            />
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

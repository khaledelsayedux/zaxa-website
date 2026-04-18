import { createElement, lazy, Suspense } from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  Code,
  Palette,
  Sparkles,
  Rocket,
  Award,
  Target,
  TrendingUp,
  Shield,
  BarChart3,
  Box,
  Monitor,
} from 'lucide-react';
import { Button } from '../components/Button';
import { LazyWhenNearViewport } from '../components/LazyWhenNearViewport';
import { SectionReveal } from './home/SectionReveal';


const HomeProjectLogosSlider = lazy(() =>
  import('./home/HomeProjectLogosSlider').then((m) => ({ default: m.HomeProjectLogosSlider })),
);

const HomePageBelowFoldTailLazy = lazy(() =>
  import('./HomePageBelowFoldTail').then((m) => ({ default: m.HomePageBelowFoldTail })),
);

export type HomePageBelowFoldProps = {
  playTabSound: () => void;
};

export default function HomePageBelowFold({ playTabSound }: HomePageBelowFoldProps) {
  return (
    <>
      {/* Reserve layout; defer react-slick chunk + CSS until near viewport (below hero). */}
      <div className="min-h-[16rem]">
        <LazyWhenNearViewport rootMargin="200px 0px 0px 0px">
          <Suspense fallback={null}>
            <HomeProjectLogosSlider />
          </Suspense>
        </LazyWhenNearViewport>
      </div>

      {/* What We Solve Section */}
      <section className="py-32 sm:py-40 relative overflow-hidden bg-[var(--color-bg-surface)]">
        {/* Top ambient — continues the hero's accent light */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: '1100px',
            height: '480px',
            background: 'radial-gradient(ellipse 55% 55% at 50% 0%, var(--color-accent-fill-sm) 0%, transparent 70%)',
          }}
        />
        {/* Bottom ambient — depth and continuity */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: '800px',
            height: '300px',
            background: 'radial-gradient(ellipse 60% 60% at 50% 100%, var(--color-accent-fill-xs) 0%, transparent 70%)',
          }}
        />

        <SectionReveal>
          {/* Centered content container for titles */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            {/* Eyebrow pill */}
            <div className="mb-5 md:mb-8 flex justify-center">
              <span
                className="font-mono text-xs tracking-[0.25em] uppercase inline-flex items-center px-4 py-1.5 rounded-full"
                style={{
                  color: 'var(--color-text-accent)',
                  background: 'var(--color-accent-fill-xs)',
                  border: '1px solid var(--color-border-accent)',
                }}
              >
                WHAT WE DO
              </span>
            </div>

            {/* Section Title */}
            <h2 className="mb-16 text-center font-bold font-display text-6xl lg:text-7xl leading-[0.95] tracking-tighter">
              <span className="inline-block text-foreground">
                What We Help You{' '}
                <span
                  className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent"
                  style={{ textShadow: 'var(--glow-text-sm)' }}
                >
                  Achieve
                </span>
              </span>
            </h2>
          </div>

          {/* Full-width cards grid */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: Rocket,     text: 'Launch a new product faster' },
                { icon: Sparkles,   text: 'Improve an existing product experience' },
                { icon: TrendingUp, text: 'Scale your platform or infrastructure' },
                { icon: Award,      text: 'Build a strong brand and market presence' },
                { icon: Target,     text: 'Generate qualified leads and growth' },
                { icon: Shield,     text: 'Reduce risk and make smarter product decisions' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative will-change-transform
                    transition-transform duration-[400ms] ease-[var(--ease-default)]
                    hover:-translate-y-[6px] hover:scale-[1.01]
                    motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
                >
                  {/* Card */}
                  <div
                    className="relative h-full overflow-hidden rounded-3xl p-8 cursor-pointer
                      transition-[background-color,border-color,box-shadow] duration-[350ms] ease-[var(--ease-default)]
                      bg-[var(--glass-surface)] group-hover:bg-[var(--glass-surface-hover)]
                      border-[1.5px] border-[color:var(--color-border-default)]
                      group-hover:border-[color:var(--color-border-accent)]
                      shadow-[var(--shadow-card)] group-hover:shadow-[var(--shadow-card-accent)]"
                    style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
                  >
                    {/* Top-left corner depth gradient */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-55 pointer-events-none rounded-3xl transition-opacity duration-[350ms] group-hover:opacity-80"
                      style={{ background: 'linear-gradient(135deg, var(--glass-surface-hover) 0%, transparent 50%)' }}
                    />

                    {/* Corner bloom — reveals on hover */}
                    <div
                      aria-hidden="true"
                      className="absolute -top-16 -right-16 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms] ease-[var(--ease-default)] pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, var(--color-accent-fill-md) 0%, transparent 65%)',
                        filter: 'blur(28px)',
                      }}
                    />

                    {/* Top rim light */}
                    <div
                      aria-hidden="true"
                      className="absolute top-0 left-6 right-6 h-px pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms]"
                      style={{ background: 'linear-gradient(90deg, transparent, var(--color-border-accent-strong), transparent)' }}
                    />

                    {/* Bottom edge separator */}
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
                      style={{ background: 'linear-gradient(90deg, transparent, var(--color-border-subtle), transparent)' }}
                    />

                    {/* Number badge */}
                    <div
                      className="absolute top-5 right-5 w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold
                        opacity-25 group-hover:opacity-55 transition-opacity duration-[350ms]"
                      style={{ background: 'var(--color-accent-fill-md)', color: 'var(--color-text-accent)' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Left accent line */}
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-10 bottom-10 w-[1.5px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                      style={{ background: 'linear-gradient(to bottom, transparent, var(--color-border-accent-strong) 50%, transparent)' }}
                    />

                    {/* Content */}
                    <div className="relative">
                      {/* Icon */}
                      <div className="relative inline-flex items-center justify-center mb-7">
                        {/* Glow halo — expands on hover */}
                        <div
                          aria-hidden="true"
                          className="absolute -inset-2 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                          style={{ background: 'var(--color-accent-fill-sm)', filter: 'blur(12px)' }}
                        />
                        <div
                          className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl
                            transition-all duration-[350ms] ease-[var(--ease-default)]
                            group-hover:scale-110 group-hover:rotate-6
                            motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0"
                          style={{
                            background: 'var(--color-accent-fill-sm)',
                            border: '1px solid var(--color-border-accent)',
                            boxShadow: 'var(--glow-xs)',
                          }}
                        >
                          {/* Inner rim */}
                          <div
                            aria-hidden="true"
                            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
                          />
                          {createElement(item.icon, {
                            className: 'w-5 h-5 text-green-400 relative z-10',
                            strokeWidth: 1.7,
                          })}
                        </div>
                      </div>

                      {/* Card text */}
                      <p className="font-heading text-lg md:text-xl font-semibold leading-snug
                        transition-colors duration-[350ms] ease-[var(--ease-default)]
                        text-foreground/70 group-hover:text-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Services Overview Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 pointer-events-none" style={{ position: 'absolute' }}>
          {/* Gradient Orb - Top Left */}
          <div 
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[72px] transform-gpu"
            style={{
              background: 'radial-gradient(circle, rgba(29, 205, 159, 0.3), transparent 70%)',
            }}
          />
          {/* Gradient Orb - Bottom Right */}
          <div 
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-[64px] transform-gpu"
            style={{
              background: 'radial-gradient(circle, rgba(95, 239, 191, 0.25), transparent 70%)',
            }}
          />
        </div>

        <SectionReveal className="w-full relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-green-400/80 mb-6 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              [ OUR SERVICES ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-6 tracking-tight leading-[1.1]">
              Everything Your Product <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Needs to Succeed</span>
            </h2>
          </div>

          {/* Enhanced Services Grid */}
          <div className="mb-16">
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                icon: Code,
                title: 'Product & Software Engineering',
                iconColor: 'text-green-400',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/product-engineering'
              },
              {
                icon: Palette,
                title: 'Experience & Interface Systems',
                iconColor: 'text-green-400',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/experience-interface'
              },
              {
                icon: Sparkles,
                title: 'Brand, Marketing & Product Communication',
                iconColor: 'text-green-400',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/brand-marketing'
              },
              {
                icon: Box,
                title: 'Experiential & Spatial Design',
                iconColor: 'text-green-400',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/experiential-spatial'
              },
              {
                icon: Monitor,
                title: 'OOH-BTL & Digital Billboards',
                iconColor: 'text-green-400',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/ooh-btl-billboards'
              },
              {
                icon: BarChart3,
                title: 'Intelligence, Data & Automation',
                iconColor: 'text-green-400',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/intelligence-data'
              },
              {
                icon: TrendingUp,
                title: 'Sales Enablement & Product Growth',
                iconColor: 'text-green-400',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/sales-growth'
              },
              {
                icon: Shield,
                title: 'Security, Stability & Compliance',
                iconColor: 'text-green-400',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/security-compliance'
              }
            ].map((service) => (
              <div key={service.title} className="group relative">
                <Link to={service.path} className="block">
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-400 ease-out pointer-events-none transform-gpu"
                    style={{
                      background: `radial-gradient(circle at center, ${service.glowColor}, transparent 70%)`
                    }}
                  />
                  
                  {/* Card */}
                  <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 hover:border-green-400/40 transition-all duration-200 ease-out group-hover:translate-y-[-4px] overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none" />
                  
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    {/* Icon glow */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 transform-gpu"
                      style={{
                        background: service.glowColor
                      }}
                    />
                    
                    {/* Icon */}
                    <div className="relative w-12 h-12 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-green-400/30 group-hover:bg-white/[0.12] transition-all duration-200 ease-out">
                      {createElement(service.icon, { 
                        className: `w-6 h-6 ${service.iconColor}`,
                        strokeWidth: 1.5 
                      })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-[15px] font-semibold text-white/90 group-hover:text-green-300 transition-colors duration-300 leading-snug"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 text-green-400" strokeWidth={2} />
                  </div>
                </div>
                </Link>
              </div>
            ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link to="/services">
              <div className="relative group/cta transition-transform duration-150 ease-out hover:scale-105 active:scale-95 motion-reduce:hover:scale-100 motion-reduce:active:scale-100">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 via-green-300/20 to-green-400/20 rounded-2xl opacity-0 group-hover/cta:opacity-100 blur-lg transition-opacity duration-250 transform-gpu" />

                <Button variant="primary" className="relative px-8 md:px-10 py-3 md:py-4 min-h-[48px] md:min-h-[56px] text-base">
                  <span className="flex items-center gap-3">
                    <span className="font-semibold">Explore All Services</span>
                    <span className="cta-arrow-nudge inline-block">
                      <ArrowRight className="w-5 h-5" strokeWidth={2} />
                    </span>
                  </span>
                </Button>
              </div>
            </Link>
          </div>
        </SectionReveal>
      </section>

      <LazyWhenNearViewport rootMargin="320px">
        <Suspense fallback={null}>
          <HomePageBelowFoldTailLazy playTabSound={playTabSound} />
        </Suspense>
      </LazyWhenNearViewport>
    </>
  );
}

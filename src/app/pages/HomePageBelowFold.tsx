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
import { useTheme } from '@/app/contexts/ThemeContext';
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
  const { theme } = useTheme();

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
      <section className="py-32 sm:py-40 relative overflow-hidden">
        {/* Teal glow at top edge — continues the hero's ambient light */}
        {theme === 'dark' && (
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: '800px',
              height: '400px',
              background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(29, 205, 159, 0.06) 0%, transparent 70%)',
            }}
          />
        )}

        <SectionReveal>
          {/* Centered content container for titles */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            {/* Above Title */}
            <div className="mb-4 md:mb-6 flex justify-center">
              <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#1DCD9F]/80" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ WHAT WE DO ]
              </span>
            </div>

            {/* Section Title */}
            <h2
              className="mb-20 tracking-tight leading-[0.95] text-center font-bold"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '64px' }}
            >
              <span className="inline-block">
                What We Help You{' '}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Achieve
                </span>
              </span>
            </h2>
          </div>

          {/* Full-width cards grid - aligned with navbar */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Rocket, text: 'Launch a new product faster' },
                { icon: Sparkles, text: 'Improve an existing product experience' },
                { icon: TrendingUp, text: 'Scale your platform or infrastructure' },
                { icon: Award, text: 'Build a strong brand and market presence' },
                { icon: Target, text: 'Generate qualified leads and growth' },
                { icon: Shield, text: 'Reduce risk and make smarter product decisions' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative transition-transform duration-[250ms] ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02] motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
                >
                  {/* Card Container */}
                  <div
                    className={`relative h-full overflow-hidden rounded-3xl border p-8 cursor-pointer transition-colors duration-[250ms] ${
                      theme === 'dark'
                        ? 'border-white/[0.07] group-hover:border-[#1DCD9F]/25'
                        : 'border-[#1DCD9F]/[0.15] group-hover:border-[#1DCD9F]/40'
                    }`}
                    style={{
                      background: theme === 'dark'
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(255, 255, 255, 0.97)',
                      borderWidth: '1.5px',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                    }}
                  >
                    {/* Internal gradient for depth */}
                    <div
                      className="absolute inset-0 opacity-50 pointer-events-none"
                      style={{
                        background: theme === 'dark'
                          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 55%)'
                          : 'linear-gradient(135deg, rgba(29, 205, 159, 0.06) 0%, transparent 55%)',
                        borderRadius: '24px',
                      }}
                    />

                    {/* Corner bloom */}
                    <div
                      className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, rgba(29, 205, 159, 0.35) 0%, transparent 70%)',
                        filter: 'blur(24px)',
                      }}
                    />

                    {/* Bottom inner shadow */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{
                        background: theme === 'dark'
                          ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent)'
                          : 'linear-gradient(90deg, transparent, rgba(29, 205, 159, 0.08), transparent)',
                      }}
                    />

                    {/* Number badge */}
                    <div
                      className="absolute top-5 right-5 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold opacity-25 group-hover:opacity-45 transition-opacity duration-[250ms]"
                      style={{
                        background: theme === 'dark'
                          ? 'rgba(29, 205, 159, 0.12)'
                          : 'rgba(29, 205, 159, 0.08)',
                        color: theme === 'dark' ? 'rgba(29, 205, 159, 0.8)' : 'rgba(29, 205, 159, 1)',
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Decorative vertical line */}
                    <div
                      className="absolute left-0 top-8 bottom-8 w-[1.5px]"
                      style={{
                        background: 'linear-gradient(to bottom, transparent, rgba(29, 205, 159, 0.18) 50%, transparent)',
                      }}
                    />

                    {/* Content */}
                    <div className="relative">
                      {/* Icon */}
                      <div className="relative inline-flex items-center justify-center mb-6">
                        {/* Soft glow behind icon */}
                        <div
                          className="absolute inset-0 rounded-xl pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-[250ms]"
                          style={{
                            background: 'rgba(29, 205, 159, 0.12)',
                            filter: 'blur(10px)',
                          }}
                        />
                        <div
                          className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl transition-all duration-[250ms] ease-out group-hover:scale-110 group-hover:rotate-6 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0"
                          style={{
                            background: theme === 'dark'
                              ? 'rgba(29, 205, 159, 0.08)'
                              : 'rgba(29, 205, 159, 0.06)',
                            border: '1px solid rgba(29, 205, 159, 0.2)',
                            boxShadow: '0 0 14px rgba(29, 205, 159, 0.1)',
                          }}
                        >
                          {/* Top rim light */}
                          <div
                            className="absolute top-0 left-0 right-0 h-px"
                            style={{
                              background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, ${theme === 'dark' ? '0.35' : '0.65'}), transparent)`,
                            }}
                          />
                          {createElement(item.icon, {
                            className: 'w-6 h-6 text-teal-400 relative z-10 transition-colors duration-[250ms]',
                            strokeWidth: 1.8,
                          })}
                        </div>
                      </div>

                      {/* Text */}
                      <p
                        className={`text-lg md:text-xl leading-relaxed font-semibold transition-colors duration-[250ms] ${theme === 'dark' ? 'text-white/75 group-hover:text-white' : 'text-zinc-800 group-hover:text-zinc-950'}`}
                        style={{ fontFamily: "'Cairo', sans-serif", lineHeight: '1.65' }}
                      >
                        {item.text}
                      </p>
                    </div>

                    {/* Top rim light on card */}
                    <div
                      className="absolute top-0 left-8 right-8 h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, ${theme === 'dark' ? '0.22' : '0.55'}), transparent)`,
                      }}
                    />
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
            <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#1DCD9F]/80 mb-6 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
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
                iconColor: 'text-[#1DCD9F]',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/product-engineering'
              },
              {
                icon: Palette,
                title: 'Experience & Interface Systems',
                iconColor: 'text-[#1DCD9F]',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/experience-interface'
              },
              {
                icon: Sparkles,
                title: 'Brand, Marketing & Product Communication',
                iconColor: 'text-[#1DCD9F]',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/brand-marketing'
              },
              {
                icon: Box,
                title: 'Experiential & Spatial Design',
                iconColor: 'text-[#1DCD9F]',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/experiential-spatial'
              },
              {
                icon: Monitor,
                title: 'OOH-BTL & Digital Billboards',
                iconColor: 'text-[#1DCD9F]',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/ooh-btl-billboards'
              },
              {
                icon: BarChart3,
                title: 'Intelligence, Data & Automation',
                iconColor: 'text-[#1DCD9F]',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/intelligence-data'
              },
              {
                icon: TrendingUp,
                title: 'Sales Enablement & Product Growth',
                iconColor: 'text-[#1DCD9F]',
                glowColor: 'rgba(29, 205, 159, 0.15)',
                path: '/services/sales-growth'
              },
              {
                icon: Shield,
                title: 'Security, Stability & Compliance',
                iconColor: 'text-[#1DCD9F]',
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
                  <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 hover:border-[#1DCD9F]/40 transition-all duration-200 ease-out group-hover:translate-y-[-4px] overflow-hidden">
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
                    <div className="relative w-12 h-12 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#1DCD9F]/30 group-hover:bg-white/[0.12] transition-all duration-200 ease-out">
                      {createElement(service.icon, { 
                        className: `w-6 h-6 ${service.iconColor}`,
                        strokeWidth: 1.5 
                      })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-[15px] font-semibold text-white/90 group-hover:text-[#5FEFBF] transition-colors duration-300 leading-snug"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 text-[#1DCD9F]" strokeWidth={2} />
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
                <div className="absolute -inset-2 bg-gradient-to-r from-[#1DCD9F]/20 via-[#5FEFBF]/20 to-[#1DCD9F]/20 rounded-2xl opacity-0 group-hover/cta:opacity-100 blur-lg transition-opacity duration-250 transform-gpu" />

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

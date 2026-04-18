import { Link } from 'react-router';
import { SectionReveal } from './home/SectionReveal';
import { Rocket, Shield, Sparkles, Target, TrendingUp, Layers, Radio } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { whyChooseBackground as whyChooseBg } from '@/assets/images';

const benefits = [
  {
    icon: Target,
    title: 'End-to-End Ownership',
    description: 'Strategy, execution, and optimization in one place.',
    color: 'from-teal-400 to-emerald-500',
    iconColor: 'text-teal-400',
    borderColor: 'border-teal-500/30',
    glowColor: 'teal-500',
  },
  {
    icon: Layers,
    title: 'Product-First Thinking',
    description: 'Every decision supports usability, performance, and growth.',
    color: 'from-emerald-400 to-green-500',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    glowColor: 'emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Business Impact Focused',
    description: 'Success measured by outcomes, not deliverables.',
    color: 'from-teal-400 to-emerald-400',
    iconColor: 'text-teal-400',
    borderColor: 'border-teal-500/30',
    glowColor: 'teal-500',
  },
  {
    icon: Rocket,
    title: 'Scalable Systems',
    description: 'Solutions designed to grow with your product and operations.',
    color: 'from-emerald-400 to-teal-500',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    glowColor: 'emerald-500',
  },
];

export type HomePageBelowFoldTailProps = {
  playTabSound: () => void;
};

export function HomePageBelowFoldTail({ playTabSound }: HomePageBelowFoldTailProps) {
  const { theme } = useTheme();

  return (
    <>
      {/* Why Choose Zaxa Studio - Redesigned */}
      <section className="relative overflow-hidden px-[48px] py-[120px]">
        <img
          src={whyChooseBg}
          alt=""
          className="absolute inset-0 z-0 m-0 h-full w-full object-cover p-0"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          sizes="100vw"
        />
        
        <div className="w-full relative z-10 px-[0px] py-[100px]">
          <SectionReveal>
            <div className="text-center mb-20">
              <div className="mb-4 md:mb-6">
                <span className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-green-400/80' : 'text-green-400'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  [ WHY CHOOSE ZAXA STUDIO ]
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight">
                Built for <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Results</span>. Designed for <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Scale</span>.
              </h2>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group relative cursor-pointer overflow-hidden p-8 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2 hover:scale-[1.02] motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
                  style={{
                    background: theme === 'dark' 
                      ? 'rgba(255, 255, 255, 0.07)' 
                      : 'rgba(255, 255, 255, 0.97)',
                    border: theme === 'dark' 
                      ? '1.5px solid rgba(255, 255, 255, 0.12)' 
                      : '1.5px solid rgba(29, 205, 159, 0.15)',
                    borderRadius: '28px',
                  }}
                >
                {/* Internal gradient for depth */}
                <div 
                  className="absolute inset-0 opacity-60 pointer-events-none"
                  style={{
                    background: theme === 'dark' 
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, transparent 50%)' 
                      : 'linear-gradient(135deg, var(--color-accent-fill-sm) 0%, transparent 50%)',
                    borderRadius: '28px',
                  }}
                />
                
                {/* Corner bloom */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(29, 205, 159, 0.4) 0%, transparent 70%)',
                    filter: 'blur(22px)',
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(29, 205, 159, 0.06), transparent 40%)`,
                    borderRadius: '28px',
                  }}
                />

                {/* Bottom inner shadow */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{
                    background: theme === 'dark' 
                      ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)' 
                      : 'linear-gradient(90deg, transparent, rgba(29, 205, 159, 0.1), transparent)',
                  }}
                />

                <div className="relative flex flex-col gap-6">
                  {/* Icon Container with liquid glass */}
                  <div
                    className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0"
                    style={{
                      background: theme === 'dark' 
                        ? 'var(--color-accent-fill-md)' 
                        : 'rgba(29, 205, 159, 0.16)',
                      border: `1.5px solid rgba(29, 205, 159, ${theme === 'dark' ? '0.2' : '0.3'})`,
                    }}
                  >
                    {/* Top rim light */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, ${theme === 'dark' ? '0.4' : '0.7'}), transparent)`,
                      }}
                    />
                    <benefit.icon size={32} className={`${benefit.iconColor} relative z-10`} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className={`text-3xl font-semibold tracking-tight bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                      {benefit.title}
                    </h3>
                    <p 
                      className={`text-base leading-relaxed ${theme === 'dark' ? 'text-zinc-300 group-hover:text-zinc-200' : 'text-zinc-700 group-hover:text-zinc-800'}`} 
                      style={{ 
                        transition: 'color 0.3s ease-out',
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Top rim light on card */}
                <div 
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, ${theme === 'dark' ? '0.3' : '0.6'}), transparent)`,
                  }}
                />
              </div>
            ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative overflow-hidden px-[48px] py-[120px]">
        {/* Ambient Background Orbs */}
        <div className="relative">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[72px] pointer-events-none transform-gpu" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[72px] pointer-events-none transform-gpu" />
        </div>
        
        <SectionReveal className="w-full relative z-10" duration={0.45}>
          <div className="mb-24 text-center">
            <div className="mb-4 md:mb-6">
              <span className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-green-400/80' : 'text-green-400'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ HOW WE WORK ]
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight">
              A Clear <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Process</span>. No <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Surprises</span>.
            </h2>
          </div>

          <div className="relative mb-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                title: 'Understand',
                description: 'We dive into your business, product, market, and challenges to identify real priorities and opportunities.',
              },
              {
                number: '02',
                title: 'Define',
                description: 'We turn insights into a clear direction — strategy, scope, timelines, and success metrics aligned with business goals.',
              },
              {
                number: '03',
                title: 'Execute',
                description: 'Design, engineering, content, campaigns, and production — delivered with structured workflows and full visibility.',
              },
              {
                number: '04',
                title: 'Grow',
                description: 'We measure performance, optimize what works, and support continuous improvement and scaling.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group relative cursor-pointer overflow-hidden p-8 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2 hover:scale-[1.02] motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 md:p-10"
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.07)' 
                    : 'rgba(255, 255, 255, 0.97)',
                  border: theme === 'dark' 
                    ? '1.5px solid rgba(255, 255, 255, 0.12)' 
                    : '1.5px solid rgba(29, 205, 159, 0.15)',
                  borderRadius: '28px',
                }}
              >
                {/* Internal gradient for depth */}
                <div 
                  className="absolute inset-0 opacity-60 pointer-events-none"
                  style={{
                    background: theme === 'dark' 
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, transparent 50%)' 
                      : 'linear-gradient(135deg, var(--color-accent-fill-sm) 0%, transparent 50%)',
                    borderRadius: '28px',
                  }}
                />
                
                {/* Corner bloom */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(29, 205, 159, 0.4) 0%, transparent 70%)',
                    filter: 'blur(22px)',
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(29, 205, 159, 0.06), transparent 40%)`,
                    borderRadius: '28px',
                  }}
                />

                {/* Bottom inner shadow */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{
                    background: theme === 'dark' 
                      ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)' 
                      : 'linear-gradient(90deg, transparent, rgba(29, 205, 159, 0.1), transparent)',
                  }}
                />

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Number */}
                  <div 
                    className="text-[100px] md:text-[120px] font-bold leading-none mb-6 transition-all duration-250 ease-out group-hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #1DCD9F 0%, #17a37e 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      opacity: 0.06,
                    }}
                  >
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-3xl font-semibold text-green-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-zinc-300 group-hover:text-zinc-200' : 'text-zinc-700 group-hover:text-zinc-800'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* What You Can Expect */}
      <section className="relative px-[48px] py-[120px]">
        <SectionReveal className="w-full relative" duration={0.45}>
          <div className="mb-24 text-center">
            <div className="mb-4 md:mb-6">
              <span className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-green-400/80' : 'text-green-400'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ WHAT YOU CAN EXPECT ]
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-8 tracking-tight">
              Working With <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Zaxa</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              A partnership focused on clarity, speed, and long-term value.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Clear Communication', 
                description: 'No confusion, no guessing. You always know what\'s happening and what\'s next.',
                icon: Radio
              },
              { 
                title: 'Structured Execution', 
                description: 'Defined timelines, organized workflows, and a process you can rely on.',
                icon: Target
              },
              { 
                title: 'Business-First Thinking', 
                description: 'Every decision is aligned with your goals — not just design or development trends.',
                icon: TrendingUp
              },
              { 
                title: 'Scalable Solutions', 
                description: 'We build systems, products, and assets designed to grow with your business.',
                icon: Rocket
              },
              { 
                title: 'Ownership & Accountability', 
                description: 'We treat your project like our own, with full responsibility for quality and delivery.',
                icon: Shield
              },
              { 
                title: 'Long-Term Partnership', 
                description: 'Support beyond launch to help you evolve, improve, and scale.',
                icon: Sparkles
              }
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 p-8 transition-all duration-400 ease-out hover:-translate-y-2 hover:border-teal-500/30 motion-reduce:hover:translate-y-0"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon size={28} className="text-teal-400" />
                  </div>
                  <h3 className="text-2xl mb-3 group-hover:text-teal-100 transition-colors">{pillar.title}</h3>
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* Industry Expertise */}
      

      {/* CTA Section */}
      <section className="relative px-[48px] py-[120px]">
        <div className="w-full relative">
          <SectionReveal>
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-gradient-to-br from-teal-500/5 via-emerald-500/5 to-transparent p-8 text-center transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-teal-500/30 motion-reduce:hover:translate-y-0 sm:p-12 md:p-16 lg:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-teal-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 transform-gpu" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 transform-gpu" />

            <div className="relative z-10">
              <div className="mx-auto mb-6 inline-block transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-12 motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0">
                <Rocket size={40} className="sm:h-12 sm:w-12 md:h-14 md:w-14 mx-auto text-teal-400 transition-colors duration-300 group-hover:text-teal-300" />
              </div>
              <span 
                className="text-sm text-green-400 uppercase tracking-wider mb-4 block" 
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                READY TO BUILD WHAT'S NEXT?
              </span>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight group-hover:text-foreground transition-colors duration-300"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Launch faster. Scale smarter. Deliver with confidence.
              </h2>
              <p 
                className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed group-hover:text-zinc-300 transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                with a product designed to perform.
              </p>
              <Link
                to="/contact"
                onClick={playTabSound}
                className="group relative px-8 md:px-10 py-3 md:py-4 rounded-lg min-h-[48px] md:min-h-[56px] touch-manipulation transition-all duration-300 ease-out overflow-hidden text-green-300 hover:scale-[1.02] active:scale-[0.98] motion-safe:transition-transform motion-reduce:hover:scale-100 motion-reduce:active:scale-100 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                style={{
                  fontWeight: 600,
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                  background: theme === 'dark'
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(255, 255, 255, 0.12)',
                }}
              >
                {/* Noise/grain texture */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                  }}
                />
                
                {/* Inner highlight stroke */}
                <div 
                  className="absolute inset-[0.5px] rounded-lg pointer-events-none"
                  style={{
                    border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.40)'}`,
                  }}
                />
                
                {/* Top-edge specular light band */}
                <div 
                  className="absolute top-[2px] left-[15%] right-[15%] h-[0.5px] rounded-lg pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.30)' : 'rgba(255, 255, 255, 0.50)'}, transparent)`,
                  }}
                />
                
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-100 group-hover:opacity-100"
                  style={{
                    border: '1px solid rgba(29, 205, 159, 0.5)',
                  }}
                />

                <span className="relative z-10">
                  Start Your Project
                </span>
              </Link>
            </div>
            </div>
          </SectionReveal>
        </div>
      </section>

    </>
  );
}

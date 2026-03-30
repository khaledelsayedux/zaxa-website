import { MagneticButton } from './MagneticButton';
import { GSAPTextReveal } from './GSAPTextReveal';
import { GSAPScrollAnimation, GSAPParallaxScroll } from './GSAPScrollAnimations';
import { Code, Zap, MousePointer, Sparkles, Layers, Target } from 'lucide-react';

export function GSAPShowcase() {
  return (
    <div className="relative min-h-screen py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-black via-zinc-950 to-black scroll-container">
      <div className="relative max-w-[1400px] mx-auto space-y-40">
        {/* Hero Section */}
        <section className="text-center py-20">
          <GSAPTextReveal type="wave" className="text-6xl md:text-8xl mb-8 tracking-tight">
            GSAP Magic
          </GSAPTextReveal>
          <GSAPTextReveal type="slide" delay={0.5} className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
            Experience the power of advanced mouse interactions and scroll animations
          </GSAPTextReveal>
        </section>

        {/* Magnetic Buttons Section */}
        <GSAPScrollAnimation animation="slideUp" className="text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MousePointer className="text-teal-400" size={40} />
              <h2 className="text-5xl md:text-6xl">Magnetic Buttons</h2>
            </div>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Buttons that attract and follow your cursor with elastic physics
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <MagneticButton
              strength={0.3}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full text-white font-semibold text-lg shadow-lg shadow-teal-500/50 hover:shadow-teal-500/70 transition-shadow"
            >
              Subtle Magnetic
            </MagneticButton>

            <MagneticButton
              strength={0.5}
              className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-white font-semibold text-lg shadow-lg shadow-violet-500/50 hover:shadow-violet-500/70 transition-shadow"
            >
              Medium Magnetic
            </MagneticButton>

            <MagneticButton
              strength={0.7}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white font-semibold text-lg shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-shadow"
            >
              Strong Magnetic
            </MagneticButton>
          </div>
        </GSAPScrollAnimation>

        {/* Text Reveal Animations */}
        <GSAPScrollAnimation animation="fade">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-violet-400" size={40} />
              <h2 className="text-5xl md:text-6xl">Text Animations</h2>
            </div>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-16">
              Hover over each text to see character-level interactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl hover:border-teal-500/50 transition-colors">
              <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-4">Fade In</h3>
              <GSAPTextReveal type="fade" className="text-3xl">
                Beautiful Fade Animation
              </GSAPTextReveal>
            </div>

            <div className="p-12 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl hover:border-violet-500/50 transition-colors">
              <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-4">Slide Up</h3>
              <GSAPTextReveal type="slide" className="text-3xl">
                Smooth Slide Effect
              </GSAPTextReveal>
            </div>

            <div className="p-12 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl hover:border-emerald-500/50 transition-colors">
              <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-4">Split Reveal</h3>
              <GSAPTextReveal type="split" className="text-3xl">
                Dynamic Split Animation
              </GSAPTextReveal>
            </div>

            <div className="p-12 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl hover:border-purple-500/50 transition-colors">
              <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-4">Wave Effect</h3>
              <GSAPTextReveal type="wave" className="text-3xl">
                Flowing Wave Motion
              </GSAPTextReveal>
            </div>
          </div>
        </GSAPScrollAnimation>

        {/* Scroll Animations */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Layers className="text-cyan-400" size={40} />
            <h2 className="text-5xl md:text-6xl">Scroll Triggers</h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Elements that animate as you scroll through the page
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GSAPScrollAnimation animation="slideUp">
            <div className="p-10 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-3xl">
              <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Code className="text-teal-400" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Slide Up</h3>
              <p className="text-zinc-400">
                Smooth upward reveal animation on scroll
              </p>
            </div>
          </GSAPScrollAnimation>

          <GSAPScrollAnimation animation="scale">
            <div className="p-10 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl">
              <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-violet-400" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Scale In</h3>
              <p className="text-zinc-400">
                Elastic scale animation from center
              </p>
            </div>
          </GSAPScrollAnimation>

          <GSAPScrollAnimation animation="rotate">
            <div className="p-10 bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-3xl">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Rotate</h3>
              <p className="text-zinc-400">
                Rotating reveal with bounce effect
              </p>
            </div>
          </GSAPScrollAnimation>
        </div>

        {/* Parallax Scroll */}
        <div className="relative h-[600px] overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5" />
          
          <GSAPParallaxScroll speed={0.3} className="absolute inset-0">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-6xl mb-4">Layer 1</h2>
                <p className="text-zinc-400">Slow parallax</p>
              </div>
            </div>
          </GSAPParallaxScroll>

          <GSAPParallaxScroll speed={0.6} className="absolute inset-0">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-emerald-500/30 rounded-full" />
            </div>
          </GSAPParallaxScroll>

          <GSAPParallaxScroll speed={0.9} className="absolute inset-0">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 bg-teal-500/20 rounded-full blur-xl" />
            </div>
          </GSAPParallaxScroll>
        </div>

        {/* Interactive Cards */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl mb-6">Interactive Elements</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-16">
            Hover over cards and images to see cursor transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🎨', title: 'Hover Me', color: 'from-teal-500/20 to-emerald-500/20', border: 'border-teal-500/30' },
            { icon: '✨', title: 'Click Me', color: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-500/30' },
            { icon: '🚀', title: 'Drag Me', color: 'from-emerald-500/20 to-green-500/20', border: 'border-emerald-500/30' },
          ].map((card, index) => (
            <GSAPScrollAnimation key={card.title} animation="slideUp" start="top 90%">
              <div
                data-cursor="expand"
                data-cursor-text="View"
                className="p-12 bg-gradient-to-br hover-lift cursor-pointer group"
                style={{
                  background: `linear-gradient(135deg, ${card.color})`,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderRadius: '24px',
                }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl mb-4">{card.title}</h3>
                <p className="text-zinc-400">
                  See cursor transform on hover
                </p>
              </div>
            </GSAPScrollAnimation>
          ))}
        </div>

        {/* Magnetic Button Gallery */}
        <GSAPScrollAnimation animation="fade">
          <div className="p-16 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl text-center">
            <h2 className="text-4xl mb-8">Try the Magnetic Effect</h2>
            <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
              Move your cursor near these buttons and feel the magnetic attraction
            </p>
            
            <div className="flex flex-wrap justify-center gap-8">
              <MagneticButton className="px-10 py-5 bg-teal-500/10 border-2 border-teal-500/50 rounded-full text-teal-400 font-semibold hover:bg-teal-500/20 transition-colors">
                <span className="flex items-center gap-2">
                  <MousePointer size={20} />
                  Hover Me
                </span>
              </MagneticButton>

              <MagneticButton 
                strength={0.6}
                className="px-10 py-5 bg-violet-500/10 border-2 border-violet-500/50 rounded-full text-violet-400 font-semibold hover:bg-violet-500/20 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={20} />
                  Click Me
                </span>
              </MagneticButton>

              <MagneticButton 
                strength={0.5}
                className="px-10 py-5 bg-emerald-500/10 border-2 border-emerald-500/50 rounded-full text-emerald-400 font-semibold hover:bg-emerald-500/20 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Zap size={20} />
                  Touch Me
                </span>
              </MagneticButton>
            </div>
          </div>
        </GSAPScrollAnimation>

        {/* Performance Note */}
        <GSAPScrollAnimation animation="slideUp">
          <div className="p-12 bg-gradient-to-r from-teal-500/5 via-emerald-500/5 to-green-500/5 border border-zinc-800/50 rounded-3xl text-center">
            <h3 className="text-3xl mb-4">⚡ Performance Optimized</h3>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              All GSAP animations use hardware-accelerated transforms and are optimized for 60fps. 
              Magnetic effects use advanced spring physics for natural, fluid motion.
            </p>
          </div>
        </GSAPScrollAnimation>
      </div>
    </div>
  );
}
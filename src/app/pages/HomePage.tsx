import { motion, useSpring, useInView } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Code, Smartphone, Palette, Database, Zap, Rocket, Check, Star, Award, Target, TrendingUp, Sparkles, Clock, Users, Shield, Layers, BarChart3, Building2, ShoppingCart, Briefcase, Heart, Box, Video, Image, Film, Radio, PenTool, Monitor, Megaphone } from 'lucide-react';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { ProcessStep } from '../components/ProcessStep';
import { ParallaxSection } from '../components/ParallaxSection';
import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { HeroBackground } from '../components/HeroBackground';
import logoTeal from '@/assets/images/23db96b45eb4fb372575db8cd2406c9080db0c99.png';
import logoDark from '@/assets/images/5a6bab493f1c88e4c1a6b8e11e86bd6227b25c60.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import project logos
import dreamCairoLogo from '@/assets/images/29266ea4c20e125f1f55578c5ba3bdb1e1b79448.png';
import alameedLogo from '@/assets/images/80dc81d774432062c407dfc3f766ed3469e783b8.png';
import breemLogo from '@/assets/images/7037f5d4a7994f256eb47ce99b499a4495fddca5.png';
import effvisionLogo from '@/assets/images/75aea109dc2dfbe0eb7023b0276c8c165681716f.png';
import youmatsLogo from '@/assets/images/e851e9aaeca185caca637134e7c05080d8f43aac.png';
import myCashLogo from '@/assets/images/abe82cb3312cb701dda55376e9994bb9baf4a000.png';
import dubaiPoliceLogo from '@/assets/images/04b8fdc105b76cef7962feca82bcc7fd9706325c.png';
import mazaadyLogo from '@/assets/images/8c71093d76047adb119ae23c21c829e818310a85.png';
import bakkarLogo from '@/assets/images/fd66dd28971911b3e85cb93f03d79b4100d045ae.png';
import geometricBg from '@/assets/images/4af1450241f85ba2c58010a4fd3c3a41410ab31c.png';
import whyChooseBg from '@/assets/images/076720258facc8f370cc863fbf9b231cf9c08f8b.png';

const services = [
  {
    icon: Code,
    title: 'Enterprise Systems',
    description: 'Tailored solutions for your business',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: Palette,
    title: 'High-Fidelity Product Design',
    description: 'Beautiful, intuitive interfaces',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: Zap,
    title: 'System Infrastructure & API Design',
    description: 'Robust, scalable systems',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: 'logo', // Special case - will render as logo image with animation
    title: '3D Visualization & Rendering',
    description: 'Photorealistic 3D assets and spatial design for immersive product experiences',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: Video,
    title: 'Professional Video Production',
    description: 'Cinematic editing and post-production for enterprise brand narratives',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: Image,
    title: 'Visual Identity & Graphics',
    description: 'Strategic brand systems and scalable design frameworks',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: Film,
    title: 'Motion Graphics & Animation',
    description: 'Kinetic typography and animated interfaces for high-impact storytelling',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: Radio,
    title: 'Media Strategy & Distribution',
    description: 'Multi-channel content orchestration and performance-driven media campaigns',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: PenTool,
    title: 'Strategic Copywriting',
    description: 'Enterprise messaging architecture and conversion-optimized content frameworks',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: Megaphone,
    title: 'OOH-BTL',
    description: 'Out-of-home and below-the-line marketing campaigns',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
  {
    icon: Monitor,
    title: 'Billboards - Digital Screens',
    description: 'Dynamic digital outdoor advertising and display solutions',
    gradient: 'from-[#222222] to-[#2a2a2a]',
  },
];

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

const techStack = [
  {
    category: 'Infrastructure & Orchestration',
    subtitle: 'The "Foundation" of your digital backbone',
    technologies: [
      'AWS (Amazon Web Services)',
      'Docker',
      'PostgreSQL (Database Architecture)',
      'MongoDB (Data Structure)',
    ],
  },
  {
    category: 'Logic & Core Engineering',
    subtitle: 'The "Nervous System" that powers the business logic',
    technologies: [
      'Node.js',
      'Python',
      'GraphQL',
      'REST API (Integration Protocols)',
    ],
  },
  {
    category: 'Interface & Interaction',
    subtitle: 'The "Skin" that users engage with',
    technologies: [
      'React',
      'Next.js',
      'TypeScript (For Type-Safe Architecture)',
      'TailwindCSS',
    ],
  },
];

export function HomePage() {
  const { theme } = useTheme();
  const audioContextRef = useRef<AudioContext | null>(null);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    // Initialize Web Audio API for hero button
    if (typeof window !== 'undefined' && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }, []);

  // Simple glass tap sound (same as HOME tab)
  const playTabSound = () => {
    if (!audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.frequency.value = 1800;
    osc.type = 'sine';
    
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    
    osc.start(now);
    osc.stop(now + 0.04);
  };



  return (
    <div className="relative">
      <SEO />
      {/* Hero Section */}
      <section className={`relative h-screen flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-[#000000]' : 'bg-gradient-to-br from-[#FAFAFA] via-[#F0FFFB] to-[#FFFFFF]'}`}>
        {/* Static Hero Background */}
        <HeroBackground />

        <div className="relative max-w-7xl mx-auto text-center px-6 z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {/* Label */}
            <motion.div 
              className="mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <span className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-[#1DCD9F]/80' : 'text-[#1DCD9F]'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ ZAXA STUDIO ]
              </span>
            </motion.div>
            
            <motion.h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-tight ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              End-to-End Solutions <span className="relative inline-block whitespace-nowrap">
                <span className="text-[#1DCD9F]">for Growth</span>
                <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1DCD9F]" />
              </span>
            </motion.h1>
            
            <motion.p 
              className={`text-[16px] md:text-xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              We bring strategy, design, technology, and growth together to create, optimize, and scale products, brands, and experiences that perform.
            </motion.p>

            {/* CTAs with Sound */}
            <motion.div 
              className="mt-4 md:mt-6 flex items-center justify-center gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Secondary CTA - Explore Services */}
              <Link to="/services">
                <motion.button
                  onClick={playTabSound}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 600, damping: 25 }}
                  className="group relative px-8 md:px-10 py-3 md:py-4 rounded-lg min-h-[48px] md:min-h-[56px] touch-manipulation transition-all duration-300 ease-out overflow-hidden text-[#5FEFBF]"
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    letterSpacing: '-0.02em',
                    // Subtle glass effect matching Contact Us button
                    background: theme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(28px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                  }}
                >
                  {/* Frost diffusion overlay */}
                  <div 
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: 'transparent',
                    }}
                  />
                  
                  {/* Noise/grain texture */}
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
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
                  
                  {/* Hover brightness effect with teal tint */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"
                    style={{
                      border: '1px solid rgba(29, 205, 159, 0.5)',
                      background: 'transparent',
                    }}
                  />
                  
                  <span className="relative z-10">
                    Explore Services
                  </span>
                </motion.button>
              </Link>

              {/* Primary CTA - Start a Project */}
              <Link to="/contact">
                <motion.button
                  onClick={playTabSound}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 600, damping: 25 }}
                  className={`group relative px-8 md:px-10 py-3 md:py-4 rounded-lg min-h-[48px] md:min-h-[56px] touch-manipulation transition-all duration-300 ease-out overflow-hidden ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    letterSpacing: '-0.02em',
                    // iOS-26 Teal Liquid Glass - Primary Button
                    background: theme === 'dark'
                      ? 'rgba(29, 205, 159, 0.15)'
                      : 'rgba(29, 205, 159, 0.20)',
                    backdropFilter: 'blur(28px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                  }}
                >
                  {/* Frost diffusion overlay (10%) */}
                  <div 
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, transparent 60%)',
                    }}
                  />
                  
                  {/* Noise/grain texture (3%) */}
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
                      border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.50)'}`,
                    }}
                  />
                  
                  {/* Top-edge specular light band */}
                  <div 
                    className="absolute top-[2px] left-[15%] right-[15%] h-[0.5px] rounded-lg pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.60)'}, transparent)`,
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Start a Project
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Logos Slider */}
      <section className="py-20 px-6 relative overflow-hidden">
        
        <div className="w-full relative z-10">
          <Slider
            {...{
              dots: false,
              infinite: true,
              speed: 3000,
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 0,
              cssEase: 'linear',
              pauseOnHover: true,
              arrows: false,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                  }
                }
              ]
            }}
          >
            {[
              { logo: dreamCairoLogo, name: 'Dream Cairo', invert: false },
              { logo: alameedLogo, name: 'Alameed Coffee', invert: false },
              { logo: breemLogo, name: 'Breem', invert: false },
              { logo: effvisionLogo, name: 'Efficient Vision', invert: false },
              { logo: youmatsLogo, name: 'YouMats', invert: false },
              { logo: myCashLogo, name: 'MyCash', invert: false },
              { logo: dubaiPoliceLogo, name: 'Dubai Police', invert: false },
              { logo: mazaadyLogo, name: 'Mazaady', invert: false },
              { logo: bakkarLogo, name: 'Bakkar', invert: false },
            ].map((project, index) => (
              <div key={index} className="px-4">
                <div className="flex items-center justify-center h-24 transition-all duration-200 ease-out">
                  <img 
                    src={project.logo} 
                    alt={project.name}
                    className="max-h-16 max-w-full object-contain"
                    style={project.invert ? { filter: 'invert(1) brightness(1.2)' } : {}}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-32 sm:py-40 relative overflow-hidden">
        {/* Ambient Background Gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{ position: 'absolute' }}>
          
        </div>

        {/* Centered content container for titles */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, root: null }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Above Title */}
            <div className="mb-4 md:mb-6 flex justify-center">
              <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#1DCD9F]/80" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ WHAT WE DO ]
              </span>
            </div>

            {/* Section Title */}
            <motion.h2 
              className="mb-20 tracking-tight leading-[0.95] text-center font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
              style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '64px' }}
            >
              <span className="inline-block">
                What We Help You{' '}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Achieve
                </span>
              </span>
            </motion.h2>
          </motion.div>
        </div>

        {/* Full-width cards grid - aligned with navbar */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Cards Grid */}
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Rocket,
                  text: 'Launch a new product faster',
                  delay: 0,
                  gradient: 'from-[#1DCD9F]/20 to-transparent'
                },
                {
                  icon: Sparkles,
                  text: 'Improve an existing product experience',
                  delay: 0.1,
                  gradient: 'from-[#5FEFBF]/20 to-transparent'
                },
                {
                  icon: TrendingUp,
                  text: 'Scale your platform or infrastructure',
                  delay: 0.2,
                  gradient: 'from-[#1DCD9F]/20 to-transparent'
                },
                {
                  icon: Award,
                  text: 'Build a strong brand and market presence',
                  delay: 0.3,
                  gradient: 'from-[#5FEFBF]/20 to-transparent'
                },
                {
                  icon: Target,
                  text: 'Generate qualified leads and growth',
                  delay: 0.4,
                  gradient: 'from-[#1DCD9F]/20 to-transparent'
                },
                {
                  icon: Shield,
                  text: 'Reduce risk and make smarter product decisions',
                  delay: 0.5,
                  gradient: 'from-[#5FEFBF]/20 to-transparent'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: item.delay * 0.6, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 600, damping: 18 }
                  }}
                >
                  {/* Card Container */}
                  <div 
                    className="relative h-full overflow-hidden rounded-2xl border backdrop-blur-xl p-6 cursor-pointer"
                    style={{
                      background: theme === 'dark' 
                        ? 'rgba(255, 255, 255, 0.04)' 
                        : 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(32px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(32px) saturate(150%)',
                      borderColor: theme === 'dark' 
                        ? 'rgba(255, 255, 255, 0.12)' 
                        : 'rgba(29, 205, 159, 0.18)',
                      borderWidth: '1.5px',
                    }}
                  >
                    {/* Internal gradient for depth */}
                    <div 
                      className="absolute inset-0 opacity-60 pointer-events-none"
                      style={{
                        background: theme === 'dark' 
                          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, transparent 50%)' 
                          : 'linear-gradient(135deg, rgba(29, 205, 159, 0.08) 0%, transparent 50%)',
                        borderRadius: '16px',
                      }}
                    />
                    
                    {/* Corner bloom */}
                    <div 
                      className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, rgba(29, 205, 159, 0.4) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                      }}
                    />

                    {/* Ambient glow on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(29, 205, 159, 0.06), transparent 40%)`,
                        borderRadius: '16px',
                        transition: 'opacity 0.4s ease-out',
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

                    {/* Number badge */}
                    <div 
                      className="absolute top-4 right-4 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      style={{
                        background: theme === 'dark'
                          ? 'rgba(29, 205, 159, 0.15)'
                          : 'rgba(29, 205, 159, 0.1)',
                        color: theme === 'dark' ? 'rgba(29, 205, 159, 0.8)' : 'rgba(29, 205, 159, 1)',
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Decorative vertical line - static */}
                    <div 
                      className="absolute left-0 top-6 bottom-6 w-[1.5px]"
                      style={{
                        background: 'linear-gradient(to bottom, transparent, rgba(29, 205, 159, 0.2) 50%, transparent)',
                      }}
                    />

                    {/* Content */}
                    <div className="relative">
                      {/* Icon */}
                      <div className="relative inline-flex items-center justify-center mb-5">
                        <motion.div 
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm overflow-hidden"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 8,
                            transition: { type: 'spring', stiffness: 500, damping: 22 }
                          }}
                          style={{
                            background: theme === 'dark'
                              ? 'rgba(29, 205, 159, 0.1)'
                              : 'rgba(29, 205, 159, 0.08)',
                            border: '1px solid rgba(29, 205, 159, 0.2)',
                          }}
                        >
                          {/* Top rim light */}
                          <div 
                            className="absolute top-0 left-0 right-0 h-px"
                            style={{
                              background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, ${theme === 'dark' ? '0.4' : '0.7'}), transparent)`,
                            }}
                          />
                          {React.createElement(item.icon, { 
                            className: "w-6 h-6 text-teal-400 relative z-10 transition-colors duration-300",
                            strokeWidth: 1.8
                          })}
                        </motion.div>
                      </div>

                      {/* Text */}
                      <p 
                        className={`text-base md:text-lg leading-relaxed font-medium transition-colors duration-300 ${theme === 'dark' ? 'text-white/85 group-hover:text-white' : 'text-zinc-900 group-hover:text-zinc-950'}`}
                        style={{ fontFamily: "'Cairo', sans-serif" }}
                      >
                        {item.text}
                      </p>
                    </div>

                    {/* Top rim light on card */}
                    <div 
                      className="absolute top-0 left-8 right-8 h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, ${theme === 'dark' ? '0.3' : '0.6'}), transparent)`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 pointer-events-none" style={{ position: 'absolute' }}>
          {/* Gradient Orb - Top Left */}
          <div 
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(29, 205, 159, 0.3), transparent 70%)',
            }}
          />
          {/* Gradient Orb - Bottom Right */}
          <div 
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(95, 239, 191, 0.25), transparent 70%)',
            }}
          />
        </div>

        <div className="w-full relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-16"
          >
            <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#1DCD9F]/80 mb-6 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              [ OUR SERVICES ]
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-6 tracking-tight leading-[1.1]">
              Everything Your Product <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Needs to Succeed</span>
            </h2>
          </motion.div>

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
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.35, 
                  delay: index * 0.03,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="group relative"
              >
                <Link to={service.path} className="block">
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-400 ease-out pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${service.glowColor}, transparent 70%)`
                    }}
                  />
                  
                  {/* Card */}
                  <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 hover:border-[#1DCD9F]/40 transition-all duration-200 ease-out backdrop-blur-sm group-hover:translate-y-[-4px] overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none" />
                  
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    {/* Icon glow */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                      style={{
                        background: service.glowColor
                      }}
                    />
                    
                    {/* Icon */}
                    <div className="relative w-12 h-12 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#1DCD9F]/30 group-hover:bg-white/[0.12] transition-all duration-200 ease-out">
                      {React.createElement(service.icon, { 
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
              </motion.div>
            ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/cta"
              >
                {/* Button glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#1DCD9F]/20 via-[#5FEFBF]/20 to-[#1DCD9F]/20 rounded-2xl opacity-0 group-hover/cta:opacity-100 blur-xl transition-opacity duration-250" />
                
                <Button variant="primary" className="relative px-8 md:px-10 py-3 md:py-4 min-h-[48px] md:min-h-[56px] text-base">
                  <span className="flex items-center gap-3">
                    <span className="font-semibold">Explore All Services</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5" strokeWidth={2} />
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Zaxa Studio - Redesigned */}
      <section className="relative overflow-hidden px-[48px] py-[120px]">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 m-[0px] p-[0px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${whyChooseBg})`,
          }}
        >
          {/* Removed dark overlay - now using pure teal/white premium glass design */}
        </div>
        
        <div className="w-full relative z-10 px-[0px] py-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <div className="mb-4 md:mb-6">
              <span className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-[#1DCD9F]/80' : 'text-[#1DCD9F]'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ WHY CHOOSE ZAXA STUDIO ]
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight">
              Built for <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Results</span>. Designed for <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Scale</span>.
            </h2>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 600, damping: 18 }
                }}
                className="group relative p-8 overflow-hidden cursor-pointer"
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.04)' 
                    : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
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
                      : 'linear-gradient(135deg, rgba(29, 205, 159, 0.08) 0%, transparent 50%)',
                    borderRadius: '28px',
                  }}
                />
                
                {/* Corner bloom */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(29, 205, 159, 0.4) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                {/* Ambient glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(29, 205, 159, 0.06), transparent 40%)`,
                    borderRadius: '28px',
                    transition: 'opacity 0.4s ease-out',
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
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 8,
                      transition: { type: 'spring', stiffness: 600, damping: 18 }
                    }}
                    style={{
                      background: theme === 'dark' 
                        ? 'rgba(29, 205, 159, 0.08)' 
                        : 'rgba(29, 205, 159, 0.12)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
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
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className={`text-3xl font-semibold tracking-tight bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent drop-shadow-sm`}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative overflow-hidden px-[48px] py-[120px]">
        {/* Ambient Background Orbs */}
        <div className="relative">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
        
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="mb-4 md:mb-6">
              <span className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-[#1DCD9F]/80' : 'text-[#1DCD9F]'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ HOW WE WORK ]
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight">
              A Clear <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Process</span>. No <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Surprises</span>.
            </h2>
          </motion.div>

          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="group relative p-8 md:p-10 overflow-hidden cursor-pointer"
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.04)' 
                    : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
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
                      : 'linear-gradient(135deg, rgba(29, 205, 159, 0.08) 0%, transparent 50%)',
                    borderRadius: '28px',
                  }}
                />
                
                {/* Corner bloom */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(29, 205, 159, 0.4) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                {/* Ambient glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(29, 205, 159, 0.06), transparent 40%)`,
                    borderRadius: '28px',
                    transition: 'opacity 0.4s ease-out',
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
                    <h3 className="text-3xl font-semibold text-[#1DCD9F] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-zinc-300 group-hover:text-zinc-200' : 'text-zinc-700 group-hover:text-zinc-800'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            
          </motion.div>
        </div>
      </section>

      {/* 8-Week Sprint Process - HIDDEN FOR NOW */}
      {false && <section className="py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-8 tracking-tight">
              The <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">8-Week Sprint</span>
            </h2>
            <p className="text-[16px] text-zinc-400 leading-relaxed">
              From strategic discovery to production deployment—disciplined, partner-led, enterprise-grade
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                week: 'WEEKS 1-2',
                phase: 'Discovery & Strategy',
                icon: Target,
                bgGradient: 'from-teal-500/5 to-emerald-500/5',
                hoverGradient: 'from-teal-500/10 to-emerald-500/10',
                iconBg: 'from-teal-500/20 to-emerald-500/20',
                iconBorder: 'border-teal-500/30',
                iconColor: 'text-teal-400',
                hoverBorder: 'hover:border-teal-500/30',
                hoverText: 'group-hover:text-teal-100',
                tasks: ['Market analysis', 'Technical feasibility', 'Architecture planning', 'UX research']
              },
              {
                week: 'WEEKS 3-4',
                phase: 'Core Engineering',
                icon: Layers,
                bgGradient: 'from-emerald-500/5 to-green-600/5',
                hoverGradient: 'from-emerald-500/10 to-green-600/10',
                iconBg: 'from-emerald-500/20 to-green-600/20',
                iconBorder: 'border-emerald-500/30',
                iconColor: 'text-emerald-400',
                hoverBorder: 'hover:border-emerald-500/30',
                hoverText: 'group-hover:text-emerald-100',
                tasks: ['Database design', 'API development', 'Infrastructure setup', 'Security protocols']
              },
              {
                week: 'WEEKS 5-6',
                phase: 'Interface & Integration',
                icon: Code,
                bgGradient: 'from-teal-500/5 to-emerald-500/5',
                hoverGradient: 'from-teal-500/10 to-emerald-500/10',
                iconBg: 'from-teal-500/20 to-emerald-500/20',
                iconBorder: 'border-teal-500/30',
                iconColor: 'text-teal-400',
                hoverBorder: 'hover:border-teal-500/30',
                hoverText: 'group-hover:text-teal-100',
                tasks: ['UI development', 'System integration', 'Performance tuning', 'Quality assurance']
              },
              {
                week: 'WEEKS 7-8',
                phase: 'Testing & Deployment',
                icon: Rocket,
                bgGradient: 'from-emerald-500/5 to-green-500/5',
                hoverGradient: 'from-emerald-500/10 to-green-500/10',
                iconBg: 'from-emerald-500/20 to-green-500/20',
                iconBorder: 'border-emerald-500/30',
                iconColor: 'text-emerald-400',
                hoverBorder: 'hover:border-emerald-500/30',
                hoverText: 'group-hover:text-emerald-100',
                tasks: ['Load testing', 'Security audit', 'Production deploy', 'Post-launch support']
              }
            ].map((stage, index) => (
              <motion.div
                key={stage.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 500, damping: 22 } }}
                className="group relative p-8 overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(28px)',
                  WebkitBackdropFilter: 'blur(28px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  transition: 'all 0.5s ease',
                }}
              >
                {/* Internal gradient for depth */}
                <div 
                  className="absolute inset-0 opacity-50 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 60%)',
                    borderRadius: '24px',
                  }}
                />
                
                {/* Corner bloom */}
                <div 
                  className="absolute -top-16 -right-16 w-32 h-32 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${stage.iconColor === 'text-teal-400' ? 'rgba(29, 205, 159, 0.5)' : 'rgba(16, 185, 129, 0.5)'} 0%, transparent 70%)`,
                    filter: 'blur(35px)',
                  }}
                />

                {/* Bottom inner shadow */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
                  }}
                />

                {/* Top rim light */}
                <div 
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)',
                  }}
                />
                
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                    style={{
                      background: `rgba(29, 205, 159, 0.1)`,
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: `1.5px solid ${stage.iconColor === 'text-teal-400' ? 'rgba(29, 205, 159, 0.25)' : 'rgba(16, 185, 129, 0.25)'}`,
                    }}
                  >
                    {/* Top rim light for icon */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
                      }}
                    />
                    <stage.icon size={28} className={stage.iconColor} />
                  </div>
                  
                  <div className="text-xs text-teal-400 font-semibold tracking-wider mb-2">{stage.week}</div>
                  <h3 className="text-2xl mb-4 text-zinc-100 transition-colors">{stage.phase}</h3>
                  
                  <ul className="space-y-2">
                    {stage.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm group-hover:text-zinc-200 transition-colors">
                        <span className="text-teal-400 mt-1">▹</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>}

      {/* What You Can Expect */}
      <section className="relative px-[48px] py-[120px]">
        <div className="w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="mb-4 md:mb-6">
              <span className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-[#1DCD9F]/80' : 'text-[#1DCD9F]'}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ WHAT YOU CAN EXPECT ]
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mb-8 tracking-tight">
              Working With <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Zaxa</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              A partnership focused on clarity, speed, and long-term value.
            </p>
          </motion.div>

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
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 500, damping: 22 } }}
                className="group relative p-8 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 border border-zinc-800/50 rounded-3xl hover:border-teal-500/30 transition-all duration-400 ease-out overflow-hidden"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon size={28} className="text-teal-400" />
                  </div>
                  <h3 className="text-2xl mb-3 group-hover:text-teal-100 transition-colors">{pillar.title}</h3>
                  <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      

      {/* CTA Section */}
      <section className="relative px-[48px] py-[120px]">
        <div className="w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 500, damping: 22 } }}
            className="group relative p-8 sm:p-12 md:p-16 lg:p-20 bg-gradient-to-br from-teal-500/5 via-emerald-500/5 to-transparent border border-zinc-800/50 rounded-3xl text-center overflow-hidden hover:border-teal-500/30 transition-all duration-400 ease-out"
          >
            {/* Background gradient effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></motion.div>

            {/* Animated glow orbs */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            ></motion.div>

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <Rocket size={40} className="sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-6 sm:mb-8 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
              </motion.div>
              <span 
                className="text-sm text-[#1DCD9F] uppercase tracking-wider mb-4 block" 
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                READY TO BUILD WHAT'S NEXT?
              </span>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight group-hover:text-[#E2E8F0] transition-colors duration-300"
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
              <Link to="/contact">
                <motion.button
                  onClick={playTabSound}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 600, damping: 25 }}
                  className="group relative px-8 md:px-10 py-3 md:py-4 rounded-lg min-h-[48px] md:min-h-[56px] touch-manipulation transition-all duration-300 ease-out overflow-hidden text-[#5FEFBF]"
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    letterSpacing: '-0.02em',
                    // Subtle glass effect matching Explore Services button
                    background: theme === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(28px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                  }}
                >
                  {/* Frost diffusion overlay */}
                  <div 
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: 'transparent',
                    }}
                  />
                  
                  {/* Noise/grain texture */}
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
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
                  
                  {/* Hover brightness effect with teal tint */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"
                    style={{
                      border: '1px solid rgba(29, 205, 159, 0.5)',
                      background: 'transparent',
                    }}
                  />
                  
                  <span className="relative z-10">
                    Start Your Project
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
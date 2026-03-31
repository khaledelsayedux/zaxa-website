import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Code, Smartphone, Palette, Database, Zap, FolderOpen, Check, ArrowRight, Rocket } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { Link } from 'react-router';
import { useState, useRef, useEffect } from 'react';
import { Button } from '../components/Button';
import { useTheme } from '@/app/contexts/ThemeContext';
import { HeroBackground } from '../components/HeroBackground';
import { services, type Service } from '@/app/data/servicesData';
import { BlueprintOverlay } from './ServicesPage';
import {
  dreamCairoLogo,
  alameedCoffeeLogo as alameedLogo,
  breemLogo,
  efficientVisionLogo as effvisionLogo,
  youmatsLogo,
  mycashLogo as myCashLogo,
  dubaiPoliceLogo,
  mazaadyLogo,
  bakkarLogo,
  alameedCoffeeHero as alameedImage,
  youmatsHero as youmatsImage,
  dreamCairoHero as dreamCairoImage,
  breemHero as breemImage,
  efficientVisionHero as effvisionImage,
  bakkarHero as bakkarImage,
  mycashHero as myCashImage,
  dubaiPoliceHero as dubaiPoliceImage,
  mazaadyHero as mazaadyImage,
} from '@/assets/images';

const realProjects = [
  {
    title: 'YouMats.com',
    description: 'A comprehensive e-commerce platform for premium prayer mats with advanced filtering, secure checkout, and inventory management.',
    category: 'E-Commerce',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    image: youmatsImage,
    url: 'https://youmats.com',
    logo: youmatsLogo,
    caseStudyUrl: '/case-studies/youmats',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Alameed Coffee',
    description: 'Premium coffee e-commerce platform featuring authentic Middle Eastern coffee blends with seamless online shopping experience and multilingual support.',
    category: 'E-Commerce',
    tags: ['React', 'Node.js', 'E-Commerce', 'Multilingual'],
    image: alameedImage,
    url: 'https://alameedcoffee.com',
    logo: alameedLogo,
    caseStudyUrl: '/case-studies/alameed-coffee',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Breem',
    description: 'Financial technology platform revolutionizing payments and money transfers with secure, instant transactions.',
    category: 'FinTech',
    tags: ['Flutter', 'Firebase', 'Payments', 'Security'],
    image: breemImage,
    url: 'https://breem.com',
    logo: breemLogo,
    caseStudyUrl: '/case-studies/breem',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Dream Cairo',
    description: 'Innovative real estate platform showcasing luxury properties in Cairo with immersive 3D tours and virtual viewings.',
    category: 'Real Estate',
    tags: ['React', '3D', 'WebGL', 'Virtual Tours'],
    image: dreamCairoImage,
    url: 'https://dreamcairo.com',
    logo: dreamCairoLogo,
    caseStudyUrl: '/case-studies/dream-cairo',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Efficient Vision',
    description: 'Enterprise resource planning solution streamlining operations, inventory, and workforce management.',
    category: 'Enterprise',
    tags: ['React', 'Node.js', 'ERP', 'Dashboard'],
    image: effvisionImage,
    url: 'https://efficientvision.com',
    logo: effvisionLogo,
    caseStudyUrl: '/case-studies/efficient-vision',
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'Bakkar',
    description: 'B2B wholesale marketplace connecting suppliers with retailers through an efficient digital platform.',
    category: 'B2B Marketplace',
    tags: ['React', 'Node.js', 'B2B', 'Marketplace'],
    image: bakkarImage,
    url: 'https://bakkar.com',
    logo: bakkarLogo,
    caseStudyUrl: '/case-studies/bakkar',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'MyCash',
    description: 'Digital wallet and payment gateway enabling seamless transactions and financial services.',
    category: 'FinTech',
    tags: ['Flutter', 'Payment Gateway', 'Security'],
    image: myCashImage,
    url: null,
    logo: myCashLogo,
    caseStudyUrl: null,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Dubai Police',
    description: 'Government digital services platform modernizing public safety and civic engagement.',
    category: 'Government',
    tags: ['React', 'Security', 'Public Services'],
    image: dubaiPoliceImage,
    url: null,
    logo: dubaiPoliceLogo,
    caseStudyUrl: null,
    gradient: 'from-red-500 to-rose-600',
  },
  {
    title: 'Mazaady',
    description: 'Online auction platform bringing traditional bidding into the digital age.',
    category: 'E-Commerce',
    tags: ['React', 'Real-time', 'Auctions'],
    image: mazaadyImage,
    url: null,
    logo: mazaadyLogo,
    caseStudyUrl: null,
    gradient: 'from-yellow-500 to-amber-600',
  },
];

// Service ID to route mapping
const getServiceRoute = (serviceId: string): string => {
  const routeMap: Record<string, string> = {
    '01': '/services/product-engineering',
    '02': '/services/experience-interface',
    '03': '/services/brand-marketing',
    '04': '/services/security-compliance',
    '05': '/services/intelligence-data',
    '06': '/services/experiential-spatial',
    '07': '/services/sales-growth',
    '08': '/services/ooh-btl-billboards',
  };
  return routeMap[serviceId] || '/services';
};

export function ProjectsPage() {
  const { theme } = useTheme();
  const [expandedService, setExpandedService] = useState<Service | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize Web Audio API for CTA button
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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
        {/* Static Hero Background */}
        <HeroBackground variant="projects" />
        
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
              <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-[#1DCD9F]/80 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ PROJECT ARCHIVE ]
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-tight text-[#FFFFFF]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              PROJECT <span className="relative inline-block">
                <span className="text-[#1DCD9F]">PORTFOLIO</span>
                <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1DCD9F]" />
              </span>
            </motion.h1>
            
            {/* Filter buttons */}
            <motion.div 
              className="mt-8 md:mt-16 flex flex-col items-center gap-2 md:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <span className="text-[10px] md:text-xs tracking-widest text-[#1DCD9F]/60 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Explore Projects
              </span>
              <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#1DCD9F]/60 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 tracking-tight">
              Featured <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed px-4">
              Crafted with passion by our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12">
            {realProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-40 px-6 sm:px-8 lg:px-12 bg-zinc-900/30">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
              Services We <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for your digital needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <Link
                key={service.id}
                to={getServiceRoute(service.id)}
                className="block h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-full p-10 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl hover:border-teal-500/50 hover:bg-teal-500/[0.08] transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-50" />
                  
                  {/* Hover gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></motion.div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, transparent, rgba(29, 205, 159, 0.3), transparent)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  ></motion.div>

                  {/* L-Bracket Corners */}
                  <motion.div 
                    className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-zinc-400/60 group-hover:border-zinc-200/90 transition-colors duration-400" 
                  />
                  <motion.div 
                    className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-zinc-400/60 group-hover:border-zinc-200/90 transition-colors duration-400" 
                  />
                  <motion.div 
                    className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-zinc-400/60 group-hover:border-zinc-200/90 transition-colors duration-400" 
                  />
                  <motion.div 
                    className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-zinc-400/60 group-hover:border-zinc-200/90 transition-colors duration-400" 
                  />

                  {/* Expand Icon - Top Right */}
                  <motion.div
                    className="absolute top-4 right-4 z-20 w-10 h-10 border-2 border-white/60 bg-zinc-800 rounded flex items-center justify-center group-hover:border-white group-hover:scale-110 transition-all duration-300"
                  >
                    <ArrowRight 
                      className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" 
                    />
                  </motion.div>

                  {/* Background Icon - Large and Rotating on Hover */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-[0.03] transition-opacity duration-400"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <service.icon size={200} className="text-white" strokeWidth={0.5} />
                    </motion.div>
                  </motion.div>

                  <div className="relative z-10">
                    {/* Icon with Multi-layer Glow - matching service detail pages */}
                    <motion.div 
                      className="relative inline-flex items-center justify-center mb-8"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Multi-layer glow effect */}
                      <div className="absolute inset-0 w-20 h-20 rounded-3xl bg-teal-400/30 blur-2xl animate-pulse transform-gpu" />
                      <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-teal-300/20 blur-xl transform-gpu" />
                      
                      {/* Icon container */}
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 via-emerald-400/10 to-transparent border border-teal-500/30 flex items-center justify-center overflow-hidden">
                        {/* Animated gradient overlay */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-tr from-teal-500/0 via-teal-400/20 to-teal-500/0"
                          animate={{ 
                            backgroundPosition: ['0% 0%', '100% 100%'],
                          }}
                          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        />
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <service.icon className="relative w-8 h-8 text-teal-400" strokeWidth={1.5} />
                      </div>
                    </motion.div>

                    {/* Title and mission */}
                    <h3 className="text-2xl mb-3 group-hover:text-teal-100 transition-colors duration-300">{service.title}</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      {service.mission}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform-gpu"
                  ></motion.div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-16"
          >
            <Link to="/services">
              <Button className="group">
                View More Services
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blueprint Overlay */}
      <AnimatePresence>
        {expandedService && (
          <BlueprintOverlay 
            service={expandedService} 
            onClose={() => setExpandedService(null)} 
          />
        )}
      </AnimatePresence>

      {/* Industries with Hovers */}
      <section className="py-40 px-6 sm:px-8 lg:px-12 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Diverse <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed">
              Expertise across multiple industries
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['E-Commerce', 'Healthcare', 'Finance', 'Education', 'Logistics', 'SaaS', 'Enterprise', 'Startups'].map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="group relative p-6 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl hover:border-teal-500/50 hover:bg-white/[0.05] transition-all duration-300 text-lg cursor-pointer overflow-hidden shadow-[0_4px_16px_0_rgba(29,205,159,0.12)]"
                >
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-50" />
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></motion.div>
                  <span className="relative z-10 group-hover:text-teal-200 transition-colors duration-300">{industry}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 sm:px-8 lg:px-12">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -6 }}
            className="group relative p-8 sm:p-12 md:p-16 lg:p-20 bg-gradient-to-br from-teal-500/5 via-emerald-500/5 to-transparent border border-zinc-800/50 rounded-3xl text-center overflow-hidden hover:border-teal-500/30 transition-all duration-500"
          >
            {/* Background gradient effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Animated glow orbs */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform-gpu"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform-gpu"
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
            />

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
                  className={`group relative px-8 md:px-10 py-3 md:py-4 rounded-lg min-h-[48px] md:min-h-[56px] touch-manipulation transition-all duration-300 overflow-hidden ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    letterSpacing: '-0.02em',
                    // iOS-26 Teal Liquid Glass - matches Button component exactly
                    background: theme === 'dark'
                      ? 'rgba(29, 205, 159, 0.15)'
                      : 'rgba(29, 205, 159, 0.20)',
                    backdropFilter: 'blur(28px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                    boxShadow: theme === 'dark'
                      ? '0 4px 12px rgba(29, 205, 159, 0.12), 0 2px 6px rgba(29, 205, 159, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                      : '0 4px 12px rgba(29, 205, 159, 0.10), 0 2px 6px rgba(29, 205, 159, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.40)',
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
                  
                  {/* Hover brightness effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"
                    style={{
                      background: theme === 'dark'
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(255, 255, 255, 0.15)',
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Project
                    <ArrowRight size={18} strokeWidth={2.5} />
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
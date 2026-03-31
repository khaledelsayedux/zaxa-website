import { motion, useInView, AnimatePresence } from 'motion/react';
import React, { useState, useRef, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, X, Code2, Zap, Palette, Shield, Cpu, TrendingUp, Rocket } from 'lucide-react';
import { Button } from '../components/Button';
import { useTheme } from '@/app/contexts/ThemeContext';
import { HeroBackground } from '../components/HeroBackground';
import { services, type Service } from '@/app/data/servicesData';

interface ServiceCardProps {
  service: Service;
  index: number;
  onExpand: () => void;
}

function ServiceCard({ service, index, onExpand }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-100px"
  });

  return (
    <motion.div
      ref={ref}
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onExpand}
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Card Container - Enhanced with premium styling */}
        <div 
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-md group-hover:border-[#1DCD9F]/40 transition-all duration-250"
        >
          {/* L-bracket corners - Premium detail */}
          <div className="absolute -top-2 -left-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#1DCD9F] to-transparent" />
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#1DCD9F] to-transparent" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#1DCD9F] to-transparent" />
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#1DCD9F] to-transparent" />
          </div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#1DCD9F] to-transparent" />
            <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-[#1DCD9F] to-transparent" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#1DCD9F] to-transparent" />
            <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[#1DCD9F] to-transparent" />
          </div>

          {/* Ambient glow on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(29, 205, 159, 0.15), transparent 70%)',
            }}
          />

          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Content - Redesigned Layout */}
          <div className="relative p-8 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Column - Header Info */}
              <div className="lg:w-[400px] flex-shrink-0">
                {/* Icon with enhanced glow */}
                <motion.div 
                  className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#1DCD9F]/10 border border-[#1DCD9F]/20 mb-6 group-hover:scale-110 group-hover:bg-[#1DCD9F]/20 transition-all duration-200"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 600, damping: 18 }}
                >
                  {/* Icon glow layers */}
                  <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-[#1DCD9F]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-[#5FEFBF]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {React.createElement(service.icon as any, { 
                    className: "relative w-10 h-10 text-[#1DCD9F] group-hover:text-[#5FEFBF] transition-colors duration-300",
                    strokeWidth: 1.5 
                  })}
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white group-hover:text-[#5FEFBF] transition-colors duration-300 leading-tight"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base md:text-lg text-white/70 mb-8 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {service.mission}
                </p>

                {/* View Details Button with arrow animation */}
                <motion.div 
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1DCD9F]/10 border border-[#1DCD9F]/30 text-[#1DCD9F] group-hover:bg-[#1DCD9F]/20 group-hover:border-[#1DCD9F]/50 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    Explore Service
                  </span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Column - All Capabilities in organized grid */}
              <div className="flex-1">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <h4 
                      className="text-xs text-[#1DCD9F] uppercase tracking-[0.2em] font-bold"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      Core Capabilities
                    </h4>
                  </div>
                </div>

                {/* All services displayed in a beautiful grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.chips.map((chip, idx) => (
                    <motion.div
                      key={idx}
                      className="group/item relative flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-[#1DCD9F]/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.3 + (idx * 0.05) }}
                    >
                      {/* Capability indicator dot */}
                      <div className="relative flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#1DCD9F]/60 group-hover/item:bg-[#1DCD9F] group-hover/item:scale-125 transition-all duration-300" />
                        <div className="absolute w-2 h-2 rounded-full bg-[#1DCD9F]/20 animate-ping" />
                      </div>
                      
                      {/* Capability text */}
                      <span 
                        className="text-sm text-white/70 group-hover/item:text-white/90 transition-colors duration-300 leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {chip}
                      </span>

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1DCD9F] to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1DCD9F] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

interface ServiceDetailModalProps {
  service: Service;
  onClose: () => void;
}

function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/10 rounded-3xl"
        style={{
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
        }}
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
        >
          <X className="w-6 h-6 text-white/70 group-hover:text-white group-hover:rotate-90 transition-all duration-300" />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#1DCD9F]/10 border border-[#1DCD9F]/20 mb-6">
              {React.createElement(service.icon as any, { 
                className: "w-10 h-10 text-[#1DCD9F]",
                strokeWidth: 1.5 
              })}
            </div>
            <h2 
              className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              {service.title}
            </h2>
            <p 
              className="text-lg md:text-xl text-white/70 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {service.blueprint.hook}
            </p>
          </div>

          {/* Pathways */}
          {(service.blueprint.pathwayA || service.blueprint.pathwayB) && (
            <div className="mb-8 space-y-4">
              <h3 
                className="text-sm font-bold text-[#1DCD9F] uppercase tracking-wider mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                How We Work
              </h3>
              
              {service.blueprint.pathwayA && (
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {service.blueprint.pathwayA.title}
                  </h4>
                  <p 
                    className="text-sm text-white/70"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.blueprint.pathwayA.description}
                  </p>
                </div>
              )}

              {service.blueprint.pathwayB && (
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {service.blueprint.pathwayB.title}
                  </h4>
                  <p 
                    className="text-sm text-white/70"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.blueprint.pathwayB.description}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Deliverables */}
          <div className="mb-8">
            <h3 
              className="text-sm font-bold text-[#1DCD9F] uppercase tracking-wider mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Deliverables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.blueprint.deliverables.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1DCD9F] flex-shrink-0" />
                  <span 
                    className="text-sm text-white/80"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* All Services */}
          <div className="mb-8">
            <h3 
              className="text-sm font-bold text-[#1DCD9F] uppercase tracking-wider mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Services Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.chips.map((chip, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1DCD9F]/60 flex-shrink-0" />
                  <span 
                    className="text-sm text-white/70"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {chip}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/50 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Investment Range
                </p>
                <p className="text-lg font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  {service.blueprint.pricing}
                </p>
              </div>
              <Link to="/contact" className="w-full md:w-auto">
                <Button variant="primary" className="w-full md:w-auto">
                  Start Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Export as BlueprintOverlay for backwards compatibility with ProjectsPage
export const BlueprintOverlay = ServiceDetailModal;

export default function ServicesPage() {
  const navigate = useNavigate();
  const { theme } = useTheme();
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

  // Map service IDs to their detail page routes
  const getServiceRoute = (serviceId: string) => {
    const routeMap: { [key: string]: string } = {
      '01': '/services/product-engineering',
      '02': '/services/experience-interface',
      '03': '/services/brand-marketing',
      '04': '/services/security-compliance',
      '05': '/services/intelligence-data',
      '06': '/services/experiential-spatial',
      '07': '/services/sales-growth',
      '08': '/services/ooh-btl-billboards'
    };
    return routeMap[serviceId] || '/services';
  };

  return (
    <>
      <SEO 
        title="Services - Zaxa Studio"
        description="Comprehensive digital services from product engineering to brand strategy"
      />

      <div className="relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
          {/* Hero Background */}
          <HeroBackground variant="services" />
          
          {/* Gradient overlay for depth and text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]" />
          
          {/* Subtle vignette for edge softening */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-[1]" />
          
          {/* Teal accent glow overlay matching brand colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1DCD9F]/5 via-transparent to-transparent z-[1]" />

          <div className="relative max-w-7xl mx-auto text-center px-6 z-10">
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
                <span 
                  className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-[#1DCD9F]/80 uppercase" 
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  [ OUR SERVICES ]
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
                YOUR PRODUCT. <span className="relative inline-block">
                  <span className="text-[#1DCD9F]">FULLY COVERED.</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1DCD9F]" />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-[16px] md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                We handle the engineering, design, and growth so you don't have to juggle different agencies. We cover every step of your journey from concept to launch, so you can stay focused on the vision.
              </motion.p>

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
                <span 
                  className="text-[10px] md:text-xs tracking-widest text-[#1DCD9F]/60 uppercase" 
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Explore our services
                </span>
                <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#1DCD9F]/60 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-24 md:py-32">
          <div className="w-full">
            {/* Section Header */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Label with decorative line */}
                <div className="flex items-center gap-4">
                  <span 
                    className="text-[10px] md:text-xs text-[#1DCD9F]/80 uppercase tracking-[0.2em] font-medium" 
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    What We Offer
                  </span>
                </div>

                {/* Description */}
                <p 
                  className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Strategic capabilities designed to cover every aspect of your digital journey
                </p>
              </motion.div>
            </div>

            {/* Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onExpand={() => navigate(getServiceRoute(service.id))}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
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
              whileHover={{ y: -6 }}
              className="group relative p-8 sm:p-12 md:p-16 lg:p-20 bg-gradient-to-br from-teal-500/5 via-emerald-500/5 to-transparent border border-zinc-800/50 rounded-3xl text-center overflow-hidden hover:border-teal-500/30 transition-all duration-500"
            >
              {/* Background gradient effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

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
              />
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
    </>
  );
}

export { ServicesPage };
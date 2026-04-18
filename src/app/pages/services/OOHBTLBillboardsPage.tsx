import { motion } from 'motion/react';
import { SEO } from '@/app/components/SEO';
import { Link } from 'react-router';
import { ArrowLeft, Monitor, Film, Target, Megaphone } from 'lucide-react';
import { Button } from '@/app/components/Button';
import React from 'react';
import { ParallaxBackground } from '@/app/components/ParallaxBackground';

// Service offerings within OOH-BTL & Digital Billboards
const billboardServices = [
  {
    id: 'digital-billboard-campaigns',
    title: 'Digital Billboard Campaigns',
    icon: Film,
    purpose: 'Deliver dynamic, high-visibility brand exposure using digital outdoor screens.',
    whenNeeded: [
      'Time-sensitive promotions or launches',
      'High-frequency brand visibility in prime locations'
    ],
    capabilities: [
      'Creative adaptation for digital formats',
      'Screen format optimization',
      'Media planning and scheduling',
      'Location and timing strategy'
    ],
    outcomes: [
      'High-reach visual impact',
      'Flexible, real-time campaign visibility'
    ]
  },
  {
    id: 'static-billboard-design',
    title: 'Static Billboard Design',
    icon: Monitor,
    purpose: 'Create bold, memorable outdoor visuals that capture attention instantly.',
    whenNeeded: [
      'Long-term brand awareness campaigns',
      'Presence in strategic outdoor locations'
    ],
    capabilities: [
      'Billboard concept and layout design',
      'Message simplification for distance viewing',
      'Format and size optimization',
      'Print-ready production files'
    ],
    outcomes: [
      'Strong brand recall',
      'Clear, high-impact outdoor communication'
    ]
  },
  {
    id: 'transit-advertising',
    title: 'Transit Advertising',
    icon: Target,
    purpose: 'Extend brand exposure across moving audiences and high-traffic routes.',
    whenNeeded: [
      'City-wide awareness campaigns',
      'Reaching daily commuters and urban audiences'
    ],
    capabilities: [
      'Vehicle branding (buses, metro, taxis, etc.)',
      'Route and coverage planning',
      'Visual adaptation for transit formats',
      'Production-ready artwork'
    ],
    outcomes: [
      'Wide geographic reach',
      'Continuous brand visibility throughout the day'
    ]
  },
  {
    id: 'street-furniture-advertising',
    title: 'Street Furniture Advertising',
    icon: Megaphone,
    purpose: 'Place brand messages directly within everyday public environments.',
    whenNeeded: [
      'Targeting pedestrians in key urban areas',
      'Supporting local or retail campaigns'
    ],
    capabilities: [
      'Bus shelters, kiosks, and urban panels design',
      'Location-based messaging adaptation',
      'Format optimization for street-level visibility'
    ],
    outcomes: [
      'Contextual, high-frequency exposure',
      'Strong local presence'
    ]
  },
  {
    id: 'point-of-sale-materials',
    title: 'Point-of-Sale Materials',
    icon: Target,
    purpose: 'Influence purchase decisions at the moment of interaction.',
    whenNeeded: [
      'Retail promotions or product launches',
      'In-store brand visibility and engagement'
    ],
    capabilities: [
      'Display stands and retail graphics',
      'Shelf talkers and promotional materials',
      'Print-ready production design'
    ],
    outcomes: [
      'Increased product visibility',
      'Higher in-store conversion'
    ]
  },
  {
    id: 'guerrilla-marketing',
    title: 'Guerrilla Marketing Campaigns',
    icon: Film,
    purpose: 'Create unconventional, attention-grabbing brand experiences that generate buzz.',
    whenNeeded: [
      'Launches that need strong public attention',
      'Viral or shareable brand moments'
    ],
    capabilities: [
      'Creative concept development',
      'Location and execution planning',
      'Experience and interaction design',
      'Campaign documentation for digital use'
    ],
    outcomes: [
      'High audience engagement',
      'Organic social reach and word-of-mouth'
    ]
  },
  {
    id: 'btl-event-activations',
    title: 'BTL Event Activations',
    icon: Megaphone,
    purpose: 'Connect directly with audiences through immersive brand experiences.',
    whenNeeded: [
      'Product launches or demonstrations',
      'Community engagement or sampling campaigns'
    ],
    capabilities: [
      'Activation concept and experience design',
      'Booth or setup visuals',
      'Audience interaction planning',
      'On-ground execution support'
    ],
    outcomes: [
      'Direct customer engagement',
      'Strong brand experience and recall'
    ]
  }
];

export default function OOHBTLBillboardsPage() {
  return (
    <>
      <SEO 
        title="OOH-BTL & Digital Billboards - Zaxa Studio"
        description="Design high-impact outdoor and below-the-line advertising campaigns that capture attention and drive results in the physical world."
      />

      <div className="relative min-h-screen bg-background">
        {/* Parallax Background with Animated Cubes */}
        <ParallaxBackground className="fixed inset-0 z-0" />

        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-32 pb-24">
          {/* Consistent max-width container */}
          <div className="max-w-[1400px] mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <Link 
                to="/services"
                className="inline-flex items-center gap-2 text-white/60 hover:text-green-400 transition-colors duration-300 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Back to Services
                </span>
              </Link>
            </motion.div>

            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-32 relative"
            >
              {/* Large rotating background icon */}
              <motion.div 
                className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] text-white/[0.02] pointer-events-none z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <Monitor className="w-full h-full" strokeWidth={0.5} />
              </motion.div>

              {/* Main Hero Content - Centered Single Column */}
              <div className="max-w-5xl relative">
                {/* Icon with Glow */}
                <motion.div 
                  className="relative inline-flex items-center justify-center mb-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Multi-layer glow effect */}
                  <div className="absolute inset-0 w-24 h-24 rounded-3xl bg-green-400/30 blur-3xl animate-pulse" />
                  <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-green-300/20 blur-2xl" />
                  
                  {/* Icon container */}
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400/20 via-green-300/10 to-transparent border border-green-400/30 flex items-center justify-center overflow-hidden group backdrop-blur-sm">
                    {/* Animated gradient overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-green-400/0 via-green-400/20 to-green-400/0"
                      animate={{ 
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    />
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <Monitor className="relative w-10 h-10 text-green-400" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Title with gradient text effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-10"
                >
                  <h1
                    className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.85] relative inline-block"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    OOH-BTL & Digital Billboards
                  </h1>
                </motion.div>

                {/* Description - Smaller text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-16"
                >
                  {/* Premium divider */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-[2px] bg-gradient-to-r from-green-400 via-green-400/50 to-transparent" />
                    <div className="w-1 h-1 rounded-full bg-green-400/50" />
                  </div>
                  <p 
                    className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    This service helps brands reach audiences in the physical world through high-impact outdoor and on-ground campaigns. From large-scale billboards to targeted activations, it increases visibility, strengthens brand presence, and drives real-world engagement.
                  </p>
                </motion.div>

                {/* When Needed Section - Enhanced Premium Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="group relative max-w-4xl"
                >
                  {/* Removed outer ambient glow - keeps effect inside card only */}
                  
                  {/* L-bracket corners - More refined */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-transparent" />
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-green-400 to-transparent" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-green-400 to-transparent" />
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-green-400 to-transparent" />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-green-400 to-transparent" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-green-400 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-green-400 to-transparent" />
                  </div>

                  {/* Card content */}
                  <div className="relative p-10 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden group-hover:border-green-400/50 group-hover:bg-gradient-to-br group-hover:from-green-400/10 group-hover:via-green-400/5 group-hover:to-transparent transition-all duration-500">
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-green-400/10 to-transparent" />
                    
                    {/* Removed inner glow effect */}
                    
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-8">
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-green-400"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <h2 
                          className="text-xs text-green-400 uppercase tracking-[0.2em] font-bold"
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        >
                          When You Need This
                        </h2>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-green-400/20 to-transparent" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                          'Launching a product, campaign, or promotion',
                          'Expanding brand awareness in specific locations',
                          'Supporting digital campaigns with offline visibility',
                          'Driving foot traffic or local engagement',
                          'Building strong market presence in high-traffic areas'
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-green-400/20 to-green-400/5 border border-green-400/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-gradient-to-br group-hover/item:from-green-400/30 group-hover/item:to-green-400/10 group-hover/item:scale-110 group-hover/item:border-green-400/50 transition-all duration-300">
                              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span 
                              className="text-base text-white/70 leading-relaxed group-hover/item:text-white/90 transition-colors duration-300"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-12"
            >
              {/* Section Header with Line */}
              <div className="flex items-center gap-6 mb-12">
                <div className="flex-shrink-0">
                  <h2 
                    className="text-3xl md:text-5xl font-bold text-white"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    Services
                  </h2>
                  <p 
                    className="text-sm text-white/50 mt-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Out-of-home and digital billboard capabilities
                  </p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                {billboardServices.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.15] via-white/[0.10] to-white/[0.05] border border-white/10 backdrop-blur-sm overflow-hidden group-hover:border-green-400/40 group-hover:from-white/[0.18] group-hover:via-white/[0.12] group-hover:to-white/[0.06] transition-all duration-500"
                    style={{
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)',
                    }}
                  >
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    
                    <div className="relative p-8">
                      {/* Card Header - Icon and Title */}
                      <div className="mb-8">
                        {/* Icon with glow effect */}
                        <motion.div 
                          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-400/10 border border-green-400/20 mb-6 group-hover:scale-110 group-hover:bg-green-400/20 transition-all duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          {React.createElement(service.icon, { 
                            className: "w-8 h-8 text-green-400",
                            strokeWidth: 1.5 
                          })}
                        </motion.div>
                        
                        {/* Title */}
                        <h3 
                          className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300"
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        >
                          {service.title}
                        </h3>
                        
                        {/* Purpose */}
                        <p 
                          className="text-base text-white/60 leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {service.purpose}
                        </p>
                      </div>

                      {/* When Needed Section */}
                      <div className="mb-6 pb-6 border-b border-white/5">
                        <h4 
                          className="text-xs text-green-400 uppercase tracking-wider mb-3 font-bold"
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        >
                          When Needed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.whenNeeded.map((item, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              <div className="w-1 h-1 rounded-full bg-green-400" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Capabilities Section */}
                      <div className="mb-6">
                        <h4 
                          className="text-xs text-green-400 uppercase tracking-wider mb-3 font-bold"
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        >
                          What We Do
                        </h4>
                        <div className="space-y-2">
                          {service.capabilities.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 text-sm text-white/70 leading-relaxed"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcomes Section */}
                      <div className="pt-6 border-t border-white/5">
                        <h4 
                          className="text-xs text-green-400 uppercase tracking-wider mb-3 font-bold"
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        >
                          Outcomes
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.outcomes.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-400/5 border border-green-400/10"
                            >
                              <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
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
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-20"
            >
              {/* Decorative divider */}
              <div className="flex items-center gap-4 mb-12">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* CTA Card - Now full width within container */}
              <div className="group relative">
                {/* L-bracket corners */}
                <div className="absolute -top-3 -left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-green-400" />
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-green-400" />
                </div>
                <div className="absolute -top-3 -right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-green-400" />
                  <div className="absolute top-0 right-0 w-[2px] h-full bg-green-400" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-400" />
                  <div className="absolute bottom-0 left-0 w-[2px] h-full bg-green-400" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-green-400" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-full bg-green-400" />
                </div>

                {/* Main CTA Card */}
                <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-green-400/10 via-green-400/5 to-transparent border border-green-400/20 overflow-hidden group-hover:border-green-400/40 transition-all duration-300">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="flex-1">
                      <h3 
                        className="text-3xl md:text-4xl mb-4 tracking-tight leading-tight text-white"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        Ready to Amplify Your Brand Presence
                      </h3>
                      <p 
                        className="text-base md:text-lg text-white/60 max-w-xl"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Create high-impact outdoor and digital campaigns that capture attention and drive measurable results.
                      </p>
                    </div>

                    {/* CTA Button with hover effect */}
                    <Link to="/contact" className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="primary" className="whitespace-nowrap px-8 py-6 text-base group/btn">
                          <span className="flex items-center gap-2">
                            Launch Your Campaign
                            <motion.span
                              className="inline-block"
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.span>
                          </span>
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
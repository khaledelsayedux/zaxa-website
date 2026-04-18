import { motion } from 'motion/react';
import { SEO } from '@/app/components/SEO';
import { Link } from 'react-router';
import { ArrowLeft, TrendingUp, Target, Users, LineChart } from 'lucide-react';
import { Button } from '@/app/components/Button';
import React from 'react';
import { ParallaxBackground } from '@/app/components/ParallaxBackground';

// Service offerings within Sales Enablement & Product Growth
const salesServices = [
  {
    id: 'sales-strategy-planning',
    title: 'Sales Strategy & Planning',
    icon: Target,
    purpose: 'Define a clear sales approach to target the right audience and maximize conversions.',
    whenNeeded: [
      'Launching a new product or service',
      'Scaling or optimizing sales operations',
      'Entering new markets'
    ],
    capabilities: [
      'Go-to-market planning',
      'Sales workflow mapping',
      'Target audience definition',
      'KPI and performance metric setup'
    ],
    outcomes: [
      'More predictable revenue streams',
      'Efficient sales processes',
      'Clear understanding of market approach'
    ]
  },
  {
    id: 'lead-generation-nurturing',
    title: 'Lead Generation & Nurturing',
    icon: Users,
    purpose: 'Build and maintain a pipeline of potential customers to convert into loyal clients.',
    whenNeeded: [
      'Expanding the customer base',
      'Targeting new market segments',
      'Supporting sales teams with qualified prospects'
    ],
    capabilities: [
      'Prospect identification and segmentation',
      'Lead scoring and qualification',
      'Nurturing campaigns via email, content, or digital channels',
      'Pipeline management'
    ],
    outcomes: [
      'Increased qualified leads',
      'Higher conversion rates',
      'Strengthened customer relationships'
    ]
  },
  {
    id: 'product-service-selling-support',
    title: 'Product & Service Selling Support',
    icon: TrendingUp,
    purpose: 'Provide operational and tactical support to help sales teams sell effectively.',
    whenNeeded: [
      'Presenting products/services to clients or prospects',
      'Supporting demos, pitches, or campaigns',
      'Requiring materials or processes for smooth sales execution'
    ],
    capabilities: [
      'Sales materials creation (presentations, datasheets)',
      'Product demos and walkthroughs',
      'Coordination with marketing and product teams',
      'Support for digital or offline sales channels'
    ],
    outcomes: [
      'Improved sales performance',
      'Consistent messaging across teams',
      'Higher close rates and revenue'
    ]
  },
  {
    id: 'market-insights-feedback',
    title: 'Market Insights & Feedback Loops',
    icon: LineChart,
    purpose: 'Collect actionable feedback from the market and customers to improve sales and product decisions.',
    whenNeeded: [
      'Refining sales strategy or campaigns',
      'Updating products or services based on customer needs',
      'Understanding market trends and competitor activity'
    ],
    capabilities: [
      'Customer and prospect interviews',
      'Market trend analysis',
      'Competitor benchmarking',
      'Sales and product feedback integration'
    ],
    outcomes: [
      'Smarter sales and product decisions',
      'Better alignment with market needs',
      'Increased customer satisfaction'
    ]
  }
];

export default function SalesGrowthPage() {
  return (
    <>
      <SEO 
        title="Sales Enablement & Product Growth - Zaxa Studio"
        description="Align strategy, processes, and execution to accelerate revenue, strengthen client relationships, and ensure products/services reach their full market potential."
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
                <TrendingUp className="w-full h-full" strokeWidth={0.5} />
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
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top right, rgba(29, 205, 159, 0) 0%, rgba(29, 205, 159, 0.2) 50%, rgba(29, 205, 159, 0) 100%)',
                        backgroundSize: '200% 200%',
                      }}
                      animate={{ 
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    />
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <TrendingUp className="relative w-10 h-10 text-green-400" strokeWidth={1.5} />
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
                    Sales Enablement & Product Growth
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
                    Align strategy, processes, and execution to accelerate revenue, strengthen client relationships, and ensure products/services reach their full market potential.
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
                          'Accelerating revenue and sales growth',
                          'Building effective lead generation pipelines',
                          'Supporting sales teams with strategy and materials',
                          'Collecting market feedback for product improvement'
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
                    Sales enablement and growth capabilities
                  </p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                {salesServices.map((service, idx) => (
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
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.15] via-white/[0.10] to-white/[0.05] border border-white/10 backdrop-blur-sm hover:border-green-400/40 hover:from-white/[0.18] hover:via-white/[0.12] hover:to-white/[0.06] transition-all duration-500"
                    style={{
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)',
                    }}
                  >
                    {/* Enhanced glow effect on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-green-400/0 via-green-400/0 to-green-400/0 group-hover:from-green-400/20 group-hover:via-green-400/10 group-hover:to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                    
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-green-400/0 group-hover:from-green-400/8 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-3xl" />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                    
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
                  {/* Removed background decoration */}
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="flex-1">
                      <h3 
                        className="text-3xl md:text-4xl mb-4 tracking-tight leading-tight text-white"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        Ready to Drive Conversions & Growth
                      </h3>
                      <p 
                        className="text-base md:text-lg text-white/60 max-w-xl"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Turn strategies into measurable results with solutions that sell your product effectively and efficiently.
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
                            Activate Your Sales
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
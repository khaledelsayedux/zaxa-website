import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, ExternalLink, Circle, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useRef, useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  url?: string | null;
  logo?: string;
  caseStudyUrl: string | null;
  gradient: string;
  index: number;
  status?: 'live' | 'in-progress' | 'concept';
}

export function ProjectCard({
  title,
  description,
  category,
  tags,
  image,
  url,
  logo,
  caseStudyUrl,
  gradient,
  index,
  status,
}: ProjectCardProps) {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    // Only navigate if caseStudyUrl exists
    if (!caseStudyUrl) return;
    
    // Store card position for transition
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      sessionStorage.setItem('cardTransition', JSON.stringify({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      }));
    }
    navigate(caseStudyUrl);
  };

  // Determine platform from category
  const isMobile = category.includes('Mobile') || category.includes('App');
  
  // Determine project status
  const projectStatus = status || (url ? 'live' : 'concept');
  
  // Status configuration
  const statusConfig = {
    live: {
      color: 'fill-emerald-400 text-emerald-400',
      label: 'Live',
      shouldPulse: true,
    },
    'in-progress': {
      color: 'fill-[#1DCD9F] text-[#1DCD9F]',
      label: 'In Progress',
      shouldPulse: true,
    },
    concept: {
      color: 'fill-amber-400 text-amber-400',
      label: 'Concept',
      shouldPulse: false,
    },
  };

  const currentStatus = statusConfig[projectStatus];

  return (
    <motion.div
      ref={cardRef}
      layout
      layoutId={`project-card-${title}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      style={{
        perspective: 1000,
      }}
      className={`relative w-full ${caseStudyUrl ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        className="relative h-full"
      >
        {/* Main Card Container - New Horizontal Layout with Liquid Glass */}
        <motion.div 
          className="relative min-h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_4px_16px_0_rgba(29,205,159,0.12)]"
          animate={{
            borderColor: isHovered ? 'rgba(29, 205, 159, 0.5)' : 'rgba(255, 255, 255, 0.1)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-50" />
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/30 via-[#0A111F]/20 to-[#020617]/30" />
          
          {/* Ambient Gradient Orb */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.03] blur-3xl`}
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.08 : 0.03,
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Grid Layout - Image on Left, Content on Right for Large Screens */}
          <div className="relative h-full flex flex-col lg:flex-row">
            
            {/* Left Side - Large Cover Image */}
            <div className="relative lg:w-[60%] h-[350px] lg:h-full">
              <div className="relative w-full h-full">
                <ImageWithFallback
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Status & Platform Badges - Floating on Image */}
              <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
                {/* Status Indicator */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A111F]/80 backdrop-blur-md border border-[#1E293B]/60">
                  <motion.div
                    animate={
                      currentStatus.shouldPulse
                        ? {
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Circle
                      size={6}
                      className={currentStatus.color}
                    />
                  </motion.div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E2E8F0]/80 font-medium">
                    {currentStatus.label}
                  </span>
                </div>

                {/* Platform Badge */}
                <div className="px-3 py-1.5 rounded-full bg-[#0A111F]/80 backdrop-blur-md border border-[#1E293B]/60">
                  <span className="text-[10px] uppercase tracking-widest text-[#E2E8F0]/80 font-medium">
                    {isMobile ? 'Mobile' : 'Web'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="relative lg:w-[40%] flex flex-col justify-between p-8 lg:p-10">
              
              {/* Top Section - Logo & Category */}
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  {/* Logo */}
                  {logo && (
                    <motion.div
                      className={`flex items-center justify-center ${
                        title === 'Mazaady' || title === 'Bakkar' || title === 'YouMats.com'
                          ? 'w-24 h-24 lg:w-28 lg:h-28'
                          : 'w-16 h-16 lg:w-20 lg:h-20'
                      }`}
                      animate={{
                        scale: isHovered ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <ImageWithFallback
                        src={logo}
                        alt={`${title} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.div>
                  )}

                  {/* Category Badge */}
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#E2E8F0]/40 font-medium">
                    {category}
                  </span>
                </div>

                {/* Title */}
                <motion.h3
                  className="text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight text-[#FFFFFF]"
                  layoutId={`project-title-${title}`}
                >
                  {title}
                </motion.h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-[#E2E8F0]/70 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Bottom Section - Tags & CTA */}
              <div className="space-y-4 mt-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1.5 rounded-lg bg-[#1E293B]/40 border border-[#1E293B]/60 text-[#E2E8F0]/80"
                    >
                      {tag}
                    </span>
                  ))}
                  {tags.length > 4 && (
                    <span className="text-[11px] px-3 py-1.5 rounded-lg bg-[#1E293B]/40 border border-[#1E293B]/60 text-[#E2E8F0]/60">
                      +{tags.length - 4}
                    </span>
                  )}
                </div>

                {/* View Project CTA */}
                <motion.div
                  className="flex items-center gap-2 text-[#1DCD9F]"
                  animate={{
                    x: isHovered ? 4 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium">View Case Study</span>
                  <motion.div
                    animate={{
                      x: isHovered ? 4 : 0,
                      y: isHovered ? -4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* Subtle Border Glow on Hover */}
          <motion.div
            className="absolute inset-0 rounded-[32px] pointer-events-none"
            animate={{
              boxShadow: isHovered
                ? '0 20px 60px rgba(29, 205, 159, 0.25), inset 0 0 0 1px rgba(29, 205, 159, 0.3)'
                : '0 8px 24px rgba(29, 205, 159, 0.2)',
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock, Circle, Target } from 'lucide-react';
import { ReactNode, useState, useEffect } from 'react';
import { Link } from 'react-router';

interface ProjectDetailLayoutProps {
  title: string;
  category: string;
  description: string;
  image: string;
  logo?: string;
  url?: string;
  tags: string[];
  gradient: string;
  isLive?: boolean;
  isMobile?: boolean;
  children: ReactNode;
  metrics?: {
    timeline?: string;
    team?: string;
    objective?: string;
  };
}

export function ProjectDetailLayout({
  title,
  category,
  description,
  image,
  logo,
  url,
  tags,
  gradient,
  isLive = false,
  isMobile = false,
  children,
  metrics,
}: ProjectDetailLayoutProps) {
  const [isReady, setIsReady] = useState(false);
  const [cardPosition, setCardPosition] = useState<any>(null);

  useEffect(() => {
    // Get stored card position for transition
    const stored = sessionStorage.getItem('cardTransition');
    if (stored) {
      setCardPosition(JSON.parse(stored));
      sessionStorage.removeItem('cardTransition');
    }
    
    // Trigger entry animation
    setTimeout(() => setIsReady(true), 50);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Shared Element Transition */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20"
        initial={
          cardPosition
            ? {
                position: 'fixed',
                top: cardPosition.top,
                left: cardPosition.left,
                width: cardPosition.width,
                height: cardPosition.height,
                borderRadius: 24,
              }
            : { opacity: 0, scale: 0.9 }
        }
        animate={{
          position: 'relative',
          top: 'auto',
          left: 'auto',
          width: '100%',
          height: 'auto',
          borderRadius: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-raised via-surface-raised to-background" />
        
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 blur-3xl`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--color-border-default) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-border-default) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Back Button */}
        <motion.div
          className="absolute top-8 left-8 z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/projects">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-raised/80 backdrop-blur-sm border border-surface-overlay/50 text-foreground hover:border-green-400/50 transition-colors"
              whileHover={{ scale: 1.05, x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back to Projects</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Main Content Container */}
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              className="lg:col-span-5 z-20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isReady ? 1 : 0, x: isReady ? 0 : -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Status & Platform */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={
                      isLive
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
                      size={8}
                      className={`${
                        isLive ? 'fill-emerald-400 text-emerald-400' : 'fill-amber-400 text-amber-400'
                      }`}
                    />
                  </motion.div>
                  <span className="text-xs uppercase tracking-wider text-foreground/60 font-medium">
                    {isLive ? 'Live Production' : 'Concept'}
                  </span>
                </div>

                <div className="h-4 w-px bg-surface-overlay/50" />

                <span className="text-xs uppercase tracking-wider text-foreground/60 font-medium">
                  {isMobile ? '📱 Mobile Platform' : '💻 Web Platform'}
                </span>
              </div>

              {/* Logo */}
              {logo && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 10 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-surface-raised/80 backdrop-blur-sm border border-surface-overlay/50 p-4 flex items-center justify-center">
                    <img src={logo} alt={`${title} logo`} className="w-full h-full object-contain" />
                  </div>
                </motion.div>
              )}

              {/* Title */}
              <motion.h1
                className="text-5xl lg:text-7xl mb-4 tracking-tight leading-tight"
                layoutId={`project-title-${title}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isReady ? 1 : 0 }}
                transition={{ delay: 0.35 }}
              >
                {title}
              </motion.h1>

              {/* Category */}
              <motion.p
                className="text-sm uppercase tracking-widest text-foreground/40 mb-6 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: isReady ? 1 : 0 }}
                transition={{ delay: 0.45 }}
              >
                {category}
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-xl text-foreground/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 10 }}
                transition={{ delay: 0.5 }}
              >
                {description}
              </motion.p>

              {/* Tags */}
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 10 }}
                transition={{ delay: 0.55 }}
              >
                {tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-surface-overlay/40 border border-surface-overlay/50 text-foreground/70 text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* Metrics */}
              {metrics && (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 10 }}
                  transition={{ delay: 0.65 }}
                >
                  {metrics.timeline && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-raised/50 border border-surface-overlay/30">
                      <Calendar size={20} className="text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-foreground/40 uppercase tracking-wider mb-1">Timeline</p>
                        <p className="text-sm text-foreground/80">{metrics.timeline}</p>
                      </div>
                    </div>
                  )}
                  {metrics.team && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-raised/50 border border-surface-overlay/30">
                      <Users size={20} className="text-violet-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-foreground/40 uppercase tracking-wider mb-1">Team</p>
                        <p className="text-sm text-foreground/80">{metrics.team}</p>
                      </div>
                    </div>
                  )}
                  {metrics.objective && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-raised/50 border border-surface-overlay/30">
                      <Target size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-foreground/40 uppercase tracking-wider mb-1">Objective</p>
                        <p className="text-sm text-foreground/80">{metrics.objective}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Live Link */}
              {url && (
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-400/10 border border-green-400/30 text-green-400 hover:bg-green-400/20 hover:border-green-400/50 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 10 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium">Visit Live Site</span>
                  <ExternalLink size={18} />
                </motion.a>
              )}
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{
                opacity: isReady ? 1 : 0,
                x: isReady ? 0 : 30,
                scale: isReady ? 1 : 0.9,
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Main Device Mockup */}
              <div className="relative">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={image} alt={title} className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Floating Accent Element */}
                <motion.div
                  className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
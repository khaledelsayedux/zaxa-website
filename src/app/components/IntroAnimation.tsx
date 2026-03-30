import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import newLogo from '@/assets/images/dfc379eba9e748e0b82e7c362c80d60dcd067da3.png';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    // Stage 0: Logo appears
    const timer1 = setTimeout(() => setStage(1), 600);
    
    // Stage 1: Text appears
    const timer2 = setTimeout(() => setStage(2), 1200);
    
    // Stage 2: Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3;
      });
    }, 25);
    
    // Stage 3: Fade out and complete
    const timer3 = setTimeout(() => {
      setStage(3);
      setTimeout(onComplete, 500);
    }, 2400);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000] overflow-hidden"
          style={{
            perspective: '2000px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {/* 3D Background Container */}
          <motion.div
            className="absolute inset-0"
            animate={{
              rotateX: [0, 2, 0, -2, 0],
              rotateY: [0, -2, 0, 2, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Sophisticated Grid Pattern with 3D depth */}
            <motion.div 
              className="absolute inset-0 opacity-[0.015]" 
              style={{
                backgroundImage: `linear-gradient(rgba(29, 205, 159, 0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(29, 205, 159, 0.3) 1px, transparent 1px)`,
                backgroundSize: '80px 80px',
                transform: 'translateZ(-100px)',
              }} 
            />

            {/* Hexagonal Pattern Overlay with depth */}
            <motion.div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25v50L50 100 6.7 75V25z' fill='none' stroke='%231DCD9F' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px',
                transform: 'translateZ(-50px)',
              }}
              animate={{
                opacity: [0.02, 0.04, 0.02]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* 3D Gradient Orbs with depth layers */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#1DCD9F]/10 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.12, 0.08],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              transform: 'translateZ(-200px)',
              transformStyle: 'preserve-3d',
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#1DCD9F]/8 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.12, 0.08],
              rotateZ: [360, 180, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              transform: 'translateZ(-150px)',
              transformStyle: 'preserve-3d',
            }}
          />

          {/* 3D Floating Particles with depth */}
          <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-[#1DCD9F]/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  z: [0, Math.random() * 100 - 50, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main Content with 3D Transform */}
          <motion.div 
            className="relative z-10 flex flex-col items-center"
            style={{
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 3, 0, -3, 0],
              rotateY: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Logo with 3D Depth Design */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, z: -200 }}
              animate={{ 
                scale: stage >= 0 ? 1 : 0.8,
                opacity: stage >= 0 ? 1 : 0,
                z: stage >= 0 ? 0 : -200,
                rotateY: stage >= 0 ? [0, 360] : 0,
              }}
              transition={{ 
                scale: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
                z: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
                rotateY: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] },
              }}
              className="relative mb-12"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* 3D Ring Layers with depth */}
              <motion.div
                className="absolute -inset-12 rounded-full border border-[#1DCD9F]/20"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.4, 0.2],
                  rotateX: [0, 360],
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotateX: { duration: 8, repeat: Infinity, ease: "linear" },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(-30px)',
                }}
              />

              {/* Second 3D Ring */}
              <motion.div
                className="absolute -inset-16 rounded-full border border-[#1DCD9F]/10"
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.1, 0.2, 0.1],
                  rotateY: [0, 360],
                }}
                transition={{
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(-60px)',
                }}
              />

              {/* Refined 3D Glow with depth layers */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-[#1DCD9F]/20 via-emerald-400/20 to-[#169976]/20 rounded-full opacity-40 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotateZ: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(-20px)',
                }}
              />

              {/* Additional glow layer for more depth */}
              <motion.div
                className="absolute -inset-10 bg-gradient-to-r from-emerald-400/15 via-[#1DCD9F]/15 to-teal-400/15 rounded-full opacity-30 blur-2xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.4, 0.2],
                  rotateZ: [360, 180, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(-40px)',
                }}
              />

              {/* Logo Container with 3D float effect */}
              <motion.div 
                className="relative"
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(50px)',
                }}
              >
                {/* 3D Shadow layers */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    filter: 'blur(20px)',
                    background: 'radial-gradient(circle, rgba(29, 205, 159, 0.3) 0%, transparent 70%)',
                    transform: 'translateZ(-10px) scale(1.1)',
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <img 
                  src={newLogo} 
                  alt="Zaxa Studio" 
                  className="h-24 w-24 relative z-10"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(29, 205, 159, 0.4)) drop-shadow(0 0 20px rgba(29, 205, 159, 0.3))',
                    transform: 'translateZ(0)',
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Brand Text - Enterprise Grade */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: stage >= 1 ? 1 : 0,
                y: stage >= 1 ? 0 : 20
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center mb-8"
            >
              <motion.h1 
                className="text-7xl font-light tracking-[-0.02em] mb-3"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                  Zaxa
                </span>
              </motion.h1>
              <motion.div
                className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#1DCD9F]/50 to-transparent mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: stage >= 1 ? 1 : 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              <motion.p 
                className="text-zinc-400 text-sm tracking-[0.4em] uppercase font-light"
                style={{ fontFamily: "'Cairo', sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: stage >= 1 ? 1 : 0 }}
                transition={{ delay: 0.4 }}
              >
                Engineering Studio
              </motion.p>
            </motion.div>

            {/* Sleek Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: stage >= 2 ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="w-80"
            >
              <div className="h-px bg-zinc-800/50 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-green-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                >
                  {/* Subtle Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>

              {/* Minimal Loading Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: stage >= 2 ? 1 : 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center text-zinc-600 text-xs tracking-wider uppercase"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Initializing
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Refined Corner Accents */}
          <motion.div
            className="absolute top-12 left-12 w-16 h-16 border-l border-t border-zinc-700/40"
            initial={{ opacity: 0, x: -10, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
          <motion.div
            className="absolute top-12 right-12 w-16 h-16 border-r border-t border-zinc-700/40"
            initial={{ opacity: 0, x: 10, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-12 left-12 w-16 h-16 border-l border-b border-zinc-700/40"
            initial={{ opacity: 0, x: -10, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-12 right-12 w-16 h-16 border-r border-b border-zinc-700/40"
            initial={{ opacity: 0, x: 10, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

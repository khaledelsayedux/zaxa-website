import { motion } from 'motion/react';

interface ParallaxBackgroundProps {
  className?: string;
}

export function ParallaxBackground({ className = '' }: ParallaxBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* 3D Perspective Grid */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(29, 205, 159, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(29, 205, 159, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateX: [0, 2, 0],
            rotateY: [0, -1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating 3D Cubes */}
      <div className="absolute inset-0 pointer-events-none" style={{ perspective: '1200px' }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`cube-${i}`}
            className="absolute"
            style={{
              width: 60 + i * 15,
              height: 60 + i * 15,
              left: `${(i * 17 + 5) % 85}%`,
              top: `${(i * 23 + 10) % 80}%`,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              z: [0, 50, 0],
            }}
            transition={{
              duration: 25 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          >
            {/* Cube faces */}
            <div className="absolute inset-0 bg-[#1DCD9F]/[0.02] border border-[#1DCD9F]/[0.08] backdrop-blur-sm"
              style={{ transform: 'translateZ(30px)' }} 
            />
            <div className="absolute inset-0 bg-[#1DCD9F]/[0.015] border border-[#1DCD9F]/[0.06]"
              style={{ transform: 'rotateY(90deg) translateZ(30px)' }} 
            />
            <div className="absolute inset-0 bg-[#1DCD9F]/[0.01] border border-[#1DCD9F]/[0.04]"
              style={{ transform: 'rotateX(90deg) translateZ(30px)' }} 
            />
          </motion.div>
        ))}
      </div>

      {/* Isometric Lines Pattern */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      >
        <defs>
          <pattern id="isometric" x="0" y="0" width="100" height="173.2" patternUnits="userSpaceOnUse">
            <path d="M0,86.6 L50,0 L100,86.6" stroke="rgba(29, 205, 159, 0.3)" strokeWidth="0.5" fill="none"/>
            <path d="M0,86.6 L50,173.2 L100,86.6" stroke="rgba(29, 205, 159, 0.3)" strokeWidth="0.5" fill="none"/>
            <path d="M50,0 L50,173.2" stroke="rgba(29, 205, 159, 0.2)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isometric)" />
      </svg>

      {/* Static gradient orbs - no mouse parallax */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-[#1DCD9F]/[0.015] rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-[700px] h-[700px] bg-[#1DCD9F]/[0.015] rounded-full blur-3xl" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1DCD9F]/[0.01] rounded-full blur-3xl" />
      </div>

      {/* Minimal particles - static positions with slow animations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: 3,
              height: 3,
              left: `${(i * 23 + 10) % 90}%`,
              top: `${(i * 31 + 15) % 80}%`,
              background: 'rgba(29, 205, 159, 0.08)',
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Static grid removed */}
    </div>
  );
}
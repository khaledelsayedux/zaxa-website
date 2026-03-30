import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function ParallaxCard({ children, className = '' }: ParallaxCardProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Simple gradient glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(29, 205, 159, 0.1), transparent 70%)',
        }}
      />
      
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
import { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';

interface HoverEffect3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function HoverEffect3D({ children, className = '' }: HoverEffect3DProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div 
      className={`hover-3d-container ${className}`}
      style={{ 
        perspective: '1000px',
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div ref={innerRef} className="hover-3d-inner" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}
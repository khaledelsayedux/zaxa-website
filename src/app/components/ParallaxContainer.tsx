import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export function ParallaxContainer({ 
  children, 
  className = '' 
}: ParallaxContainerProps) {
  return (
    <div className={`scroll-container ${className}`} style={{ position: 'relative' }}>
      <motion.div>
        {children}
      </motion.div>
    </div>
  );
}
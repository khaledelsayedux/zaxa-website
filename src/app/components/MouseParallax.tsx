import { ReactNode, CSSProperties } from 'react';
import { useMouseParallax } from '../hooks/useMouseParallax';

interface MouseParallaxProps {
  children: ReactNode;
  intensity?: number;
  smooth?: number;
  inverted?: boolean;
  className?: string;
}

export function MouseParallax({ 
  children, 
  intensity = 20, 
  smooth = 10,
  inverted = false,
  className = '' 
}: MouseParallaxProps) {
  const mousePosition = useMouseParallax({ intensity, smooth, inverted });

  const style: CSSProperties = {
    transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
    willChange: 'transform',
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

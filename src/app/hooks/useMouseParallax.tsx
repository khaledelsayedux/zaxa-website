import { useState, useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface ParallaxOptions {
  intensity?: number;
  smooth?: number;
  inverted?: boolean;
}

export function useMouseParallax(options: ParallaxOptions = {}) {
  const { intensity = 20, smooth = 10, inverted = false } = options;
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();
  const lastUpdateTime = useRef<number>(0);
  const throttleDelay = 16; // ~60fps

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdateTime.current < throttleDelay) return;
      lastUpdateTime.current = now;

      const x = (e.clientX / window.innerWidth - 0.5) * intensity;
      const y = (e.clientY / window.innerHeight - 0.5) * intensity;
      
      setTargetPosition({
        x: inverted ? -x : x,
        y: inverted ? -y : y,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [intensity, inverted, throttleDelay]);

  useEffect(() => {
    const animate = () => {
      setMousePosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        
        // Skip update if change is very small
        if (Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) {
          return prev;
        }

        return {
          x: prev.x + dx / smooth,
          y: prev.y + dy / smooth,
        };
      });
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [targetPosition, smooth]);

  return mousePosition;
}
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function LiquidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize points in a circle
    const numPoints = 20;
    const radius = 30;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      pointsRef.current.push({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
      });
    }

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points
      pointsRef.current.forEach((point, i) => {
        const angle = (i / numPoints) * Math.PI * 2;
        const targetX = mouseRef.current.x + Math.cos(angle) * radius;
        const targetY = mouseRef.current.y + Math.sin(angle) * radius;

        // Spring physics
        const dx = targetX - point.x;
        const dy = targetY - point.y;
        const spring = 0.15;
        const friction = 0.8;

        point.vx += dx * spring;
        point.vy += dy * spring;
        point.vx *= friction;
        point.vy *= friction;
        point.x += point.vx;
        point.y += point.vy;
      });

      // Draw liquid blob
      if (pointsRef.current.length > 0) {
        ctx.fillStyle = 'rgba(29, 205, 159, 0.3)';
        ctx.strokeStyle = 'rgba(22, 153, 118, 0.6)';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);

        for (let i = 0; i < pointsRef.current.length; i++) {
          const current = pointsRef.current[i];
          const next = pointsRef.current[(i + 1) % pointsRef.current.length];

          const cpx = (current.x + next.x) / 2;
          const cpy = (current.y + next.y) / 2;

          ctx.quadraticCurveTo(current.x, current.y, cpx, cpy);
        }

        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Add glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(29, 205, 159, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] mix-blend-screen hidden lg:block"
    />
  );
}
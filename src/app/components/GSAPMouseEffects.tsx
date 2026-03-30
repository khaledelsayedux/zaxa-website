import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function GSAPMouseEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = cursorFollowerRef.current;

    if (!cursor || !follower) return;

    // Set initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      // Animate main cursor (instant)
      gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power3.out',
      });

      // Animate follower cursor (delayed, smooth)
      gsap.to(follower, {
        duration: 0.8,
        x: e.clientX,
        y: e.clientY,
        ease: 'power3.out',
      });
    };

    // Handle hover effects on interactive elements
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        scale: 1.5,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-teal-400 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      />
      {/* Follower cursor ring */}
      <div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-violet-400 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      />
    </>
  );
}
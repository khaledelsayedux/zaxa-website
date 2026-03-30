import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'reveal';
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
}

export function GSAPScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade',
  start = 'top 80%',
  end = 'bottom 20%',
  scrub = false,
  pin = false,
  markers = false
}: GSAPScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Refresh ScrollTrigger to recalculate positions
    ScrollTrigger.refresh();

    let initialState = {};
    let animateState = {};

    switch (animation) {
      case 'fade':
        initialState = { opacity: 0 };
        animateState = { opacity: 1, duration: 1 };
        break;
      case 'slideUp':
        initialState = { opacity: 0, y: 100 };
        animateState = { opacity: 1, y: 0, duration: 1, ease: 'power3.out' };
        break;
      case 'slideLeft':
        initialState = { opacity: 0, x: 100 };
        animateState = { opacity: 1, x: 0, duration: 1, ease: 'power3.out' };
        break;
      case 'slideRight':
        initialState = { opacity: 0, x: -100 };
        animateState = { opacity: 1, x: 0, duration: 1, ease: 'power3.out' };
        break;
      case 'scale':
        initialState = { opacity: 0, scale: 0.5 };
        animateState = { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.5)' };
        break;
      case 'rotate':
        initialState = { opacity: 0, rotation: -45, scale: 0.8 };
        animateState = { opacity: 1, rotation: 0, scale: 1, duration: 1, ease: 'back.out(2)' };
        break;
      case 'reveal':
        initialState = { clipPath: 'inset(0 100% 0 0)' };
        animateState = { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power4.out' };
        break;
    }

    gsap.set(element, initialState);

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: start,
      end: end,
      scrub: scrub,
      pin: pin,
      markers: markers,
      onEnter: () => {
        gsap.to(element, animateState);
      },
      onLeaveBack: () => {
        if (!scrub) {
          gsap.to(element, { ...initialState, duration: 0.5 });
        }
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [animation, start, end, scrub, pin, markers]);

  return (
    <div ref={elementRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}

// Parallax scroll component
interface GSAPParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function GSAPParallaxScroll({ 
  children, 
  className = '',
  speed = 0.5
}: GSAPParallaxScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}
import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface GSAPTextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  type?: 'fade' | 'slide' | 'split' | 'wave';
}

export function GSAPTextReveal({ 
  children, 
  className = '', 
  delay = 0,
  stagger = 0.03,
  type = 'slide'
}: GSAPTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const text = container.textContent || '';
    const chars = text.split('');
    
    // Clear and rebuild with spans
    container.innerHTML = '';
    
    const charElements = chars.map((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.classList.add('char');
      container.appendChild(span);
      return span;
    });

    // Set initial state based on type
    if (type === 'fade') {
      gsap.set(charElements, { opacity: 0 });
      gsap.to(charElements, {
        opacity: 1,
        duration: 0.8,
        stagger: stagger,
        delay: delay,
        ease: 'power2.out',
      });
    } else if (type === 'slide') {
      gsap.set(charElements, { opacity: 0, y: 30 });
      gsap.to(charElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: stagger,
        delay: delay,
        ease: 'back.out(1.5)',
      });
    } else if (type === 'split') {
      gsap.set(charElements, { opacity: 0, scaleY: 0 });
      gsap.to(charElements, {
        opacity: 1,
        scaleY: 1,
        duration: 0.6,
        stagger: stagger,
        delay: delay,
        ease: 'elastic.out(1, 0.5)',
      });
    } else if (type === 'wave') {
      gsap.set(charElements, { opacity: 0, y: -50, rotation: -20 });
      gsap.to(charElements, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1,
        stagger: stagger,
        delay: delay,
        ease: 'elastic.out(1, 0.5)',
      });
    }

    // Hover effect
    const handleMouseEnter = (index: number) => {
      gsap.to(charElements[index], {
        y: -10,
        color: '#3b82f6',
        duration: 0.3,
        ease: 'back.out(2)',
      });
    };

    const handleMouseLeave = (index: number) => {
      gsap.to(charElements[index], {
        y: 0,
        color: '',
        duration: 0.3,
        ease: 'back.out(2)',
      });
    };

    charElements.forEach((el, index) => {
      el.addEventListener('mouseenter', () => handleMouseEnter(index));
      el.addEventListener('mouseleave', () => handleMouseLeave(index));
    });

    return () => {
      charElements.forEach((el, index) => {
        el.removeEventListener('mouseenter', () => handleMouseEnter(index));
        el.removeEventListener('mouseleave', () => handleMouseLeave(index));
      });
    };
  }, [delay, stagger, type]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}
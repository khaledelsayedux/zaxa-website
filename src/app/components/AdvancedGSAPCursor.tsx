import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function AdvancedGSAPCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const [cursorText, setCursorText] = useState('');
  const [cursorMode, setCursorMode] = useState<'default' | 'link' | 'button' | 'drag' | 'view' | 'expand'>('default');

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = cursorFollowerRef.current;
    const cursorTextEl = cursorTextRef.current;

    if (!cursor || !follower || !cursorTextEl) return;

    // Set initial position with transform origin
    gsap.set([cursor, follower, cursorTextEl], { 
      xPercent: -50, 
      yPercent: -50,
      transformOrigin: 'center center'
    });

    let mouseX = 0;
    let mouseY = 0;
    let isVisible = false;

    // Smooth mouse tracking with velocity
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        gsap.to([cursor, follower], {
          opacity: 1,
          duration: 0.3
        });
      }

      // Instant cursor movement with elastic easing
      gsap.to(cursor, {
        duration: 0.6,
        x: mouseX,
        y: mouseY,
        ease: 'power3.out',
      });

      // Smooth follower with delay
      gsap.to(follower, {
        duration: 1.2,
        x: mouseX,
        y: mouseY,
        ease: 'power4.out',
      });

      // Cursor text follows smoothly
      gsap.to(cursorTextEl, {
        duration: 0.8,
        x: mouseX,
        y: mouseY,
        ease: 'power3.out',
      });

      // Create trail effect
      createTrail(mouseX, mouseY);
    };

    // Mouse enter/leave viewport
    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        scale: 1,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3
      });
      isVisible = false;
    };

    // Trail effect
    let lastTrailTime = 0;
    const trailDelay = 30; // milliseconds

    const createTrail = (x: number, y: number) => {
      const now = Date.now();
      if (now - lastTrailTime < trailDelay) return;
      lastTrailTime = now;

      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(29, 205, 159, 0.6), rgba(22, 153, 118, 0.3));
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
      `;
      document.body.appendChild(trail);

      gsap.to(trail, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => trail.remove()
      });
    };

    // Handle interactive elements - Links
    const handleLinkEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute('data-cursor-text') || 'Click';
      
      setCursorMode('link');
      setCursorText(text);

      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.3,
        ease: 'back.out(2)',
      });

      gsap.to(follower, {
        scale: 2.5,
        borderColor: '#3b82f6',
        borderWidth: 3,
        duration: 0.4,
        ease: 'back.out(1.5)',
      });

      gsap.to(cursorTextEl, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };

    const handleLinkLeave = () => {
      setCursorMode('default');
      setCursorText('');

      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(2)',
      });

      gsap.to(follower, {
        scale: 1,
        borderColor: '#8b5cf6',
        borderWidth: 2,
        duration: 0.4,
        ease: 'back.out(1.5)',
      });

      gsap.to(cursorTextEl, {
        scale: 0,
        opacity: 0,
        duration: 0.2
      });
    };

    // Handle buttons with magnetic effect
    const handleButtonEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      
      setCursorMode('button');

      gsap.to(cursor, {
        scale: 3,
        backgroundColor: 'rgba(29, 205, 159, 0.2)',
        duration: 0.3,
        ease: 'back.out(2)',
      });

      gsap.to(follower, {
        scale: 3,
        borderColor: '#06b6d4',
        borderWidth: 2,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
      });

      // Magnetic effect
      const handleMagnet = (e: MouseEvent) => {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );

        if (distance < 100) {
          const strength = (100 - distance) / 100;
          const deltaX = (e.clientX - centerX) * strength * 0.3;
          const deltaY = (e.clientY - centerY) * strength * 0.3;

          gsap.to(target, {
            x: deltaX,
            y: deltaY,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      };

      target.addEventListener('mousemove', handleMagnet);
      target.addEventListener('mouseleave', () => {
        target.removeEventListener('mousemove', handleMagnet);
        gsap.to(target, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    };

    const handleButtonLeave = () => {
      setCursorMode('default');

      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'rgba(29, 205, 159, 1)',
        duration: 0.3,
        ease: 'back.out(2)',
      });

      gsap.to(follower, {
        scale: 1,
        borderColor: '#8b5cf6',
        borderWidth: 2,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    // Handle images/cards with expand effect
    const handleExpandEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const text = target.getAttribute('data-cursor-text') || 'View';
      
      setCursorMode('expand');
      setCursorText(text);

      gsap.to(cursor, {
        scale: 0,
        duration: 0.2,
      });

      gsap.to(follower, {
        scale: 4,
        borderColor: '#a855f7',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)',
      });

      gsap.to(cursorTextEl, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };

    const handleExpandLeave = () => {
      setCursorMode('default');
      setCursorText('');

      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });

      gsap.to(follower, {
        scale: 1,
        borderColor: '#8b5cf6',
        backgroundColor: 'transparent',
        duration: 0.4,
      });

      gsap.to(cursorTextEl, {
        scale: 0,
        opacity: 0,
        duration: 0.2
      });
    };

    // Handle draggable elements
    const handleDragEnter = () => {
      setCursorMode('drag');
      setCursorText('Drag');

      gsap.to(cursor, {
        scale: 0.3,
        duration: 0.2,
      });

      gsap.to(follower, {
        scale: 2,
        borderColor: '#22d3ee',
        borderStyle: 'dashed',
        rotation: 45,
        duration: 0.4,
        ease: 'back.out(2)',
      });

      gsap.to(cursorTextEl, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };

    const handleDragLeave = () => {
      setCursorMode('default');
      setCursorText('');

      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });

      gsap.to(follower, {
        scale: 1,
        borderColor: '#8b5cf6',
        borderStyle: 'solid',
        rotation: 0,
        duration: 0.4,
      });

      gsap.to(cursorTextEl, {
        scale: 0,
        opacity: 0,
        duration: 0.2
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Interactive elements
    const links = document.querySelectorAll('a:not(button)');
    const buttons = document.querySelectorAll('button, [role="button"], .magnetic-button');
    const expandables = document.querySelectorAll('[data-cursor="expand"], .hover-expand, img, .parallax-card');
    const draggables = document.querySelectorAll('[draggable="true"], .draggable');

    links.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkEnter);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    buttons.forEach((el) => {
      el.addEventListener('mouseenter', handleButtonEnter as EventListener);
      el.addEventListener('mouseleave', handleButtonLeave);
    });

    expandables.forEach((el) => {
      el.addEventListener('mouseenter', handleExpandEnter);
      el.addEventListener('mouseleave', handleExpandLeave);
    });

    draggables.forEach((el) => {
      el.addEventListener('mouseenter', handleDragEnter);
      el.addEventListener('mouseleave', handleDragLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);

      links.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkEnter);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });

      buttons.forEach((el) => {
        el.removeEventListener('mouseenter', handleButtonEnter as EventListener);
        el.removeEventListener('mouseleave', handleButtonLeave);
      });

      expandables.forEach((el) => {
        el.removeEventListener('mouseenter', handleExpandEnter);
        el.removeEventListener('mouseleave', handleExpandLeave);
      });

      draggables.forEach((el) => {
        el.removeEventListener('mouseenter', handleDragEnter);
        el.removeEventListener('mouseleave', handleDragLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-[#1DCD9F] rounded-full pointer-events-none z-[10000] mix-blend-screen hidden lg:block opacity-0 shadow-[0_0_20px_rgba(29,205,159,0.6)]"
        style={{ willChange: 'transform' }}
      />
      
      {/* Follower cursor ring */}
      <div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-violet-400 rounded-full pointer-events-none z-[10000] mix-blend-screen hidden lg:block opacity-0"
        style={{ willChange: 'transform' }}
      />

      {/* Cursor text label */}
      <div
        ref={cursorTextRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden lg:block opacity-0 scale-0"
        style={{ willChange: 'transform' }}
      >
        <div className="relative">
          <div className="absolute top-6 left-0 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full text-white text-sm font-semibold whitespace-nowrap shadow-md shadow-teal-500/40">
            {cursorText}
          </div>
        </div>
      </div>
    </>
  );
}
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  /** Initial vertical offset in px */
  y?: number;
  duration?: number;
};

const ease = 'cubic-bezier(0.25, 0.1, 0.25, 1)';

/**
 * Single intersection-triggered reveal per block — same feel as before without
 * Framer Motion / per-item whileInView subscriptions in parent sections.
 */
export function SectionReveal({ children, className, y = 20, duration = 0.38 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: '0px 0px -48px 0px', threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0,0,0)' : `translate3d(0,${y}px,0)`,
    transition: `opacity ${duration}s ${ease}, transform ${duration}s ${ease}`,
    willChange: visible ? undefined : 'opacity, transform',
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

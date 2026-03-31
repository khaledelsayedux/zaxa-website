import { useEffect, useRef, useState, type ReactNode } from 'react';

type LazyWhenNearViewportProps = {
  children: ReactNode;
  /** Load chunk when this much of the viewport ahead (CSS IntersectionObserver rootMargin). */
  rootMargin?: string;
};

/**
 * Defers mounting children until the sentinel nears the viewport so dynamic imports
 * and below-the-fold React trees do not compete with the main thread during LCP.
 */
export function LazyWhenNearViewport({ children, rootMargin = '280px' }: LazyWhenNearViewportProps) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || active) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [active, rootMargin]);

  return (
    <>
      <div ref={sentinelRef} className="pointer-events-none h-1 w-full shrink-0 opacity-0" aria-hidden />
      {active ? children : null}
    </>
  );
}

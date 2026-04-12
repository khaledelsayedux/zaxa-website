import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '@/app/contexts/ThemeContext';
import { usePlayTabSound } from '@/app/hooks/usePlayTabSound';
import { logoTeal } from '@/assets/images';

type PillMetrics = { left: number; top: number; width: number; height: number; visible: boolean };

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/career', label: 'Careers' },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const playTabSound = usePlayTabSound();
  const navTrackRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [pill, setPill] = useState<PillMetrics>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    visible: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const syncPill = useCallback(() => {
    const track = navTrackRef.current;
    if (!track || track.offsetParent === null) {
      setPill((p) => ({ ...p, visible: false }));
      return;
    }

    const activeLink = NAV_LINKS.find((l) => location.pathname === l.path);
    if (!activeLink) {
      setPill((p) => ({ ...p, visible: false }));
      return;
    }

    const el = linkRefs.current.get(activeLink.path);
    if (!el) {
      setPill((p) => ({ ...p, visible: false }));
      return;
    }

    const tr = track.getBoundingClientRect();
    const r = el.getBoundingClientRect();

    setPill({
      left: r.left - tr.left + track.scrollLeft,
      top: r.top - tr.top + track.scrollTop,
      width: r.width,
      height: r.height,
      visible: true,
    });
  }, [location.pathname]);

  useLayoutEffect(() => {
    syncPill();
  }, [syncPill]);

  useEffect(() => {
    const track = navTrackRef.current;
    if (!track || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => syncPill());
    ro.observe(track);
    window.addEventListener('resize', syncPill);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncPill);
    };
  }, [syncPill]);

  return (
    <nav
      className={`shell-nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out`}
      style={{
        backdropFilter: scrolled ? 'blur(80px) saturate(200%) brightness(110%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(80px) saturate(200%) brightness(110%)' : 'none',
        backgroundColor: scrolled
          ? theme === 'dark'
            ? 'rgba(0, 0, 0, 0.25)'
            : 'rgba(255, 255, 255, 0.45)'
          : 'transparent',
        borderBottom: 'none',
        boxShadow: 'none',
      }}
    >
      <Helmet>
        <link rel="preload" as="image" href={logoTeal} />
      </Helmet>
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-transparent via-[#1DCD9F] to-transparent transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled ? 'scale-x-100' : 'scale-x-0'
        }`}
      />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          className={`flex items-center transition-all duration-200 ease-out ${
            scrolled ? 'h-16 sm:h-18 md:h-20' : 'h-20 sm:h-24 md:h-28'
          }`}
        >
          <Link to="/" className="relative flex items-center space-x-4 group">
            <div className="relative motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out hover:scale-110 active:scale-[0.92]">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#1DCD9F] via-[#169976] to-[#1DCD9F] rounded-2xl blur-lg opacity-0 group-hover:opacity-[0.01] transform-gpu shell-spin-60" />

              <div className="relative p-2 rounded-2xl">
                <img
                  src={logoTeal}
                  alt="Zaxa Studio"
                  className="h-11 w-11 relative z-10"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
            <div
              ref={navTrackRef}
              className="relative flex items-center gap-1 px-2 py-2 rounded-lg"
              style={{
                background:
                  theme === 'dark' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.04)',
                boxShadow:
                  theme === 'dark'
                    ? 'inset 0 1px 3px rgba(0, 0, 0, 0.4)'
                    : 'inset 0 1px 2px rgba(0, 0, 0, 0.08)',
              }}
            >
              {pill.visible && (
                <div
                  className="pointer-events-none absolute rounded-lg overflow-hidden transition-[left,top,width,height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    left: pill.left,
                    top: pill.top,
                    width: pill.width,
                    height: pill.height,
                    background:
                      theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(28px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <div
                    className="absolute inset-[0.5px] rounded-lg pointer-events-none"
                    style={{
                      border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.50)'}`,
                    }}
                  />
                </div>
              )}

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  ref={(node) => {
                    if (node) linkRefs.current.set(link.path, node);
                    else linkRefs.current.delete(link.path);
                  }}
                  to={link.path}
                  onClick={playTabSound}
                  className="relative px-5 py-2.5 group min-w-[90px] flex items-center justify-center motion-safe:transition-transform motion-safe:duration-300 hover:scale-[1.02]"
                >
                  <span
                    className={`relative z-10 transition-all duration-300 text-base ${
                      isActive(link.path)
                        ? 'font-medium text-white'
                        : `font-light ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`
                    }`}
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased',
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Link to="/contact">
              <Button variant="secondary">Contact Us</Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto p-3 rounded-xl glass-card text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 relative overflow-hidden group motion-safe:hover:scale-105 active:scale-[0.92]"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border-[#1DCD9F]/20 glass-premium ${
          isOpen ? 'max-h-[min(90vh,720px)] opacity-100 border-t' : 'max-h-0 opacity-0 border-t border-transparent pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-3">
          {NAV_LINKS.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 rounded-2xl transition-all duration-300 text-base relative overflow-hidden group ${
                  isActive(link.path)
                    ? 'glass-card text-[#5FEFBF] font-medium'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white glass font-light'
                }`}
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                <span className="relative z-10">{link.label}</span>
                {!isActive(link.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1DCD9F]/10 to-[#169976]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </Link>
            </div>
          ))}
          <div className="pt-2 space-y-3">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" className="w-full justify-center">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

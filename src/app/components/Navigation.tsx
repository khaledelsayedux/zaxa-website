import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '@/app/contexts/ThemeContext';
import logoTeal from '@/assets/images/23db96b45eb4fb372575db8cd2406c9080db0c99.png';
import logoDark from '@/assets/images/5a6bab493f1c88e4c1a6b8e11e86bd6227b25c60.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initialize Web Audio API for tab sounds
    if (typeof window !== 'undefined' && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple glass tap sound
  const playTabSound = () => {
    if (!audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.frequency.value = 1800;
    osc.type = 'sine';
    
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    
    osc.start(now);
    osc.stop(now + 0.04);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/career', label: 'Careers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out`}
      style={{
        backdropFilter: scrolled ? 'blur(80px) saturate(200%) brightness(110%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(80px) saturate(200%) brightness(110%)' : 'none',
        backgroundColor: scrolled 
          ? (theme === 'dark' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.45)')
          : 'transparent',
        borderBottom: 'none',
        boxShadow: 'none',
      }}
    >
      {/* Animated gradient line on top */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1DCD9F] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
      
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className={`flex items-center transition-all duration-200 ease-out ${
          scrolled ? 'h-16 sm:h-18 md:h-20' : 'h-20 sm:h-24 md:h-28'
        }`}>
          {/* Logo - Premium Design */}
          <Link to="/" className="relative flex items-center space-x-4 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="relative"
            >
              {/* Glow effect behind logo */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#1DCD9F] via-[#169976] to-[#1DCD9F] rounded-2xl blur-xl opacity-0 group-hover:opacity-[0.01]"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Logo container */}
              <div className="relative p-2 rounded-2xl">
                <img 
                  src={logoTeal} 
                  alt="Zaxa Studio" 
                  className="h-11 w-11 relative z-10" 
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Centered - iOS-26 Liquid Glass Capsule */}
          <div className="hidden md:flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
            {/* Soft inset track beneath tabs */}
            <div 
              className="relative flex items-center gap-1 px-2 py-2 rounded-lg"
              style={{
                background: theme === 'dark' 
                  ? 'rgba(0, 0, 0, 0.15)'
                  : 'rgba(0, 0, 0, 0.04)',
                boxShadow: theme === 'dark'
                  ? 'inset 0 1px 3px rgba(0, 0, 0, 0.4)'
                  : 'inset 0 1px 2px rgba(0, 0, 0, 0.08)',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={playTabSound}
                  className="relative px-5 py-2.5 group min-w-[90px] flex items-center justify-center"
                >
                  <motion.span
                    className={`relative z-10 transition-all duration-300 text-base ${
                      isActive(link.path)
                        ? 'font-medium'
                        : 'text-white font-light'
                    }`}
                    style={{ 
                      fontFamily: "'Cairo', sans-serif",
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased',
                      color: isActive(link.path) ? '#FFFFFF' : undefined,
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {link.label}
                  </motion.span>
                  
                  {/* Active pill - iOS-26 Liquid Glass */}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={false}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 500, 
                        damping: 35,
                        mass: 0.8
                      }}
                      style={{
                        // Subtle glass effect matching Contact Us button
                        background: theme === 'dark'
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(28px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                      }}
                    >
                      {/* Noise/grain texture (3%) */}
                      <div 
                        className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                        }}
                      />
                      
                      {/* Inner highlight stroke (1px white @ 15%) */}
                      <div 
                        className="absolute inset-[0.5px] rounded-lg pointer-events-none"
                        style={{
                          border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.50)'}`,
                        }}
                      />
                    </motion.div>
                  )}
                  
                  {/* Hover effect - subtle brightness increase */}
                  {!isActive(link.path) && (
                    null
                  )}
                </Link>
              ))}
            </div>
          </div>
            
          {/* CTA Button - Right aligned */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Link to="/contact">
              <Button variant="secondary">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto p-3 rounded-xl glass-card text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden border-t border-[#1DCD9F]/20 glass-premium"
          >
            <div className="px-6 py-8 space-y-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
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
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#1DCD9F]/10 to-[#169976]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-2 space-y-3"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  <Button variant="secondary" className="w-full justify-center">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
import { useEffect, useRef, useState } from 'react';
import {
  socialLinkedin as linkedinIcon,
  socialFacebook as facebookIcon,
  socialInstagram as instagramIcon,
  socialX as xIcon,
  socialThreads as threadsIcon,
  brandLogoMint as logoMint,
} from '@/assets/images';
import { Link } from 'react-router';
import { Mail, MapPin, Info, Headphones, Briefcase, Users, Code, Palette, Megaphone, Box, Monitor, TrendingUp, Shield, Database, Building2, FolderOpen, UserPlus, FileText, Lock, ArrowRight } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRootRef = useRef<HTMLElement>(null);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const el = footerRootRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFooterInView(true);
      },
      { threshold: 0.06, rootMargin: '80px 0px 0px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const footerLinks = {
    company: [
      { label: 'About us', path: '/about', icon: Building2 },
      { label: 'Our Services', path: '/services', icon: Briefcase },
      { label: 'Our Projects', path: '/projects', icon: FolderOpen },
      { label: 'Contact us', path: '/contact', icon: Mail },
      { label: 'Careers', path: '/career', icon: UserPlus },
    ],
    services: [
      { label: 'Engineering', path: '/services/product-engineering', icon: Code },
      { label: 'UX & UI Systems', path: '/services/experience-interface', icon: Palette },
      { label: 'Branding & Marketing', path: '/services/brand-marketing', icon: Megaphone },
      { label: '3D Spatial Design', path: '/services/experiential-spatial', icon: Box },
      { label: 'Digital Displays', path: '/services/ooh-btl-billboards', icon: Monitor },
      { label: 'Sales & Growth', path: '/services/sales-growth', icon: TrendingUp },
      { label: 'Security & Compliance', path: '/services/security-compliance', icon: Shield },
      { label: 'Data & Automation', path: '/services/intelligence-data', icon: Database },
    ],
    legal: [
      { label: 'Terms of Partnership', path: '/terms', icon: FileText },
      { label: 'Privacy Policy', path: '/privacy', icon: Lock },
    ],
    social: [
      { icon: linkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/company/zaxa-studio', color: 'hover:text-green-400', isImage: true },
      { icon: instagramIcon, label: 'Instagram', href: 'https://instagram.com/zaxastudio_', color: 'hover:text-pink-500', isImage: true },
      { icon: facebookIcon, label: 'Facebook', href: 'https://facebook.com/zaxastudio', color: 'hover:text-green-400', isImage: true },
      { icon: xIcon, label: 'X', href: 'https://x.com/zaxastudio', color: 'hover:text-green-400', isImage: true },
      { icon: threadsIcon, label: 'Threads', href: 'https://threads.com/@zaxastudio_', color: 'hover:text-green-400', isImage: true },
    ],
  };

  const departmentContacts = [
    {
      icon: Info,
      label: 'General Inquiries',
      email: 'info@zaxastudio.com',
      href: 'mailto:info@zaxastudio.com',
    },
    {
      icon: Headphones,
      label: 'Technical Support',
      email: 'support@zaxastudio.com',
      href: 'mailto:support@zaxastudio.com',
    },
    {
      icon: Briefcase,
      label: 'Career Opportunities',
      email: 'careers@zaxastudio.com',
      href: 'mailto:careers@zaxastudio.com',
    },
    {
      icon: Users,
      label: 'Human Resources',
      email: 'hr@zaxastudio.com',
      href: 'mailto:hr@zaxastudio.com',
    },
  ];

  return (
    <footer 
      ref={footerRootRef}
      className="relative overflow-hidden border-t border-white/10"
      style={{
        background: 'linear-gradient(180deg, var(--color-bg-base) 0%, var(--color-bg-surface) 100%)',
      }}
    >
      {/* Abstract Patterns Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--color-accent-fill-xs) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-fill-xs) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-green-400/20 to-transparent rotate-45 origin-left" />
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-green-400/15 to-transparent -rotate-45 origin-right" />
          <div className="absolute top-2/3 left-1/4 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-green-500/15 to-transparent rotate-12 origin-left" />
        </div>
        
        {/* Circular patterns */}
        <div className="absolute top-20 right-1/4 w-48 h-48 rounded-full border border-green-400/10 shell-spin-60" />
        <div className="absolute bottom-32 left-1/3 w-32 h-32 rounded-full border border-green-500/10 shell-spin-40-rev" />
        
        {/* Dot pattern clusters */}
        <div className="absolute bottom-48 right-40">
          {[...Array(9)].map((_, i) => (
            <div key={`dot-br-${i}`} className="absolute w-1 h-1 rounded-full bg-green-500/20" style={{
              left: `${(i % 3) * 20}px`,
              top: `${Math.floor(i / 3) * 20}px`
            }} />
          ))}
        </div>
        
        {/* Abstract geometric shapes */}
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-green-400/8 rotate-45" />
        
        {/* Subtle line accents */}
        <div className="absolute top-12 right-12 w-32 h-[1px] bg-gradient-to-r from-green-400/20 to-transparent" />
        <div className="absolute bottom-24 left-16 w-40 h-[1px] bg-gradient-to-l from-green-500/20 to-transparent" />
      </div>

      {/* Ambient Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large teal orb - bottom left */}
        <div
          className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full shell-footer-orb-a"
          style={{
            background: 'radial-gradient(circle, rgba(29, 205, 159, 0.15) 0%, rgba(29, 205, 159, 0.05) 40%, transparent 70%)',
            filter: 'blur(32px)',
          }}
        />

        {/* Medium emerald orb - top right */}
        <div
          className="absolute -top-32 -right-32 w-72 h-72 rounded-full shell-footer-orb-b"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)',
            filter: 'blur(28px)',
          }}
        />

        {/* Small teal orb - center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full shell-footer-orb-c"
          style={{
            background: 'radial-gradient(circle, var(--color-accent-fill-sm) 0%, rgba(29, 205, 159, 0.02) 50%, transparent 70%)',
            filter: 'blur(24px)',
          }}
        />
      </div>

      {/* Animated gradient line on top */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] shell-line-grow"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(29, 205, 159, 0.4) 20%, rgba(29, 205, 159, 0.8) 50%, rgba(29, 205, 159, 0.4) 80%, transparent 100%)',
        }}
      />
      
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative motion-safe:transition-transform motion-safe:duration-300 hover:scale-110 hover:rotate-12">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-[0.01] transform-gpu shell-spin-60" />

                <div className="relative p-3 rounded-2xl">
                  <img 
                    src={logoMint} 
                    alt="Zaxa Studio" 
                    className="h-16 w-16 object-contain relative z-10"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div>
                <span className="text-4xl tracking-tight text-white" style={{ fontFamily: "'Cairo', sans-serif" }}>
                  Zaxa Studio
                </span>
                <p className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-medium" style={{ fontFamily: "'Cairo', sans-serif" }}>
                  Digital Engineering Studio
                </p>
              </div>
            </Link>

            {/* Contact Information with Icons */}
            <div className="space-y-3 mb-3">
              <a 
                href="mailto:contact@zaxastudio.com"
                className="group flex items-center gap-3 text-zinc-400 hover:text-green-400 transition-all duration-300 motion-safe:hover:translate-x-1"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                <div 
                  className="w-10 h-10 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center group-hover:bg-green-400/20 group-hover:border-green-400/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-base">contact@zaxastudio.com</span>
              </a>

              <div 
                className="group flex items-center gap-3 text-zinc-400 motion-safe:hover:translate-x-1 transition-transform duration-300"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                <div 
                  className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg]"
                >
                  <MapPin size={18} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-base">Cairo, Egypt</span>
              </div>
            </div>

            {/* Stay Updated - Moved here */}
            <div
              className={`pt-6 max-w-sm transition-all duration-[800ms] ease-out ${
                footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <h4 className="text-xl font-semibold mb-2 text-white tracking-tight" style={{ fontFamily: "'Cairo', sans-serif" }}>Stay Updated</h4>
              
              <form>
                <div className="relative group">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Your email address"
                    autoComplete="email"
                    className="w-full px-5 py-3.5 pr-14 bg-zinc-900/90 border border-zinc-800/60 rounded-2xl focus:outline-none focus:border-green-400/50 focus:bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300 group-hover:border-green-400/30 text-sm shadow-lg shadow-black/20"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  />
                  
                  {/* Subtle glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                  
                  {/* Inner shadow for depth */}
                  <div
                    className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                  
                  {/* Arrow CTA Button */}
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded-xl transition-all duration-300 shadow-lg shadow-green-400/20 motion-safe:hover:scale-105 motion-safe:hover:translate-x-0.5 active:scale-95"
                  >
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl mb-8 font-semibold" style={{ fontFamily: "'Cairo', sans-serif" }}>Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li
                  key={link.path}
                  className="motion-safe:hover:translate-x-1 transition-transform duration-300"
                >
                  <Link
                    to={link.path}
                    className="group flex items-center gap-3 text-zinc-400 hover:text-green-400 transition-all duration-300 text-base"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    <div className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <link.icon size={14} className="text-zinc-600 group-hover:text-green-400 transition-colors duration-300" strokeWidth={2} />
                    </div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links - Card-based layout with icons */}
          <div className="lg:col-span-2">
            <h3 className="text-xl mb-8 font-semibold" style={{ fontFamily: "'Cairo', sans-serif" }}>Services</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
              {footerLinks.services.map((service, index) => (
                <li
                  key={service.label}
                  className={`motion-safe:hover:translate-x-1 transition-all duration-500 ease-out ${
                    footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: footerInView ? `${index * 50}ms` : '0ms' }}
                >
                  <Link 
                    to={service.path} 
                    className="group relative flex items-center gap-3 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div 
                      className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center"
                    >
                      <service.icon size={14} className="text-zinc-600 group-hover:text-green-400 transition-colors duration-300" strokeWidth={2} />
                    </div>

                    {/* Label */}
                    <span 
                      className="relative text-base text-zinc-400 group-hover:text-green-400 transition-colors duration-300"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div 
          className={`h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8 origin-center transition-transform duration-1000 ease-out ${
            footerInView ? 'scale-x-100' : 'scale-x-0'
          }`}
        />

        {/* Bottom Section: Copyright & Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Legal Links */}
          <div 
            className={`flex flex-wrap items-center gap-2 md:gap-3 text-sm transition-opacity duration-[600ms] ease-out ${
              footerInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            <span className="text-zinc-500">
              © {currentYear} Zaxa Studio. All rights reserved.
            </span>
            <span className="text-zinc-700">•</span>
            <Link 
              to="/terms"
              className="text-zinc-500 hover:text-green-400 transition-colors duration-300"
            >
              Terms of Partnership
            </Link>
            <span className="text-zinc-700">•</span>
            <Link 
              to="/privacy"
              className="text-zinc-500 hover:text-green-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Social Media Links */}
          <div 
            className="flex items-center gap-4"
          >
            {footerLinks.social.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-14 h-14 flex items-center justify-center bg-white/[0.05] border border-white/10 rounded-xl hover:border-green-400/40 transition-all duration-300 overflow-hidden motion-safe:hover:scale-110 motion-safe:hover:-translate-y-0.5 active:scale-95 ${
                  footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: footerInView ? `${200 + index * 100}ms` : '0ms' }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                {social.isImage ? (
                  typeof social.icon === 'string' ? (
                    <img 
                      src={social.icon} 
                      alt={social.label}
                      className="relative z-10 w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="relative z-10 w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-5 h-5">
                        <social.icon />
                      </div>
                    </div>
                  )
                ) : (
                  <social.icon size={20} className={`relative z-10 text-zinc-400 group-hover:text-green-400 transition-colors`} />
                )}

                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 12px rgba(29, 205, 159, 0.4)'
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
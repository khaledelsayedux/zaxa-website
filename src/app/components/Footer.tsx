import linkedinIcon from '@/assets/images/9e01a83703a50b555e3a4297fdc2284f5a04f654.png';
import facebookIcon from '@/assets/images/a50ae61a94988e6c1da2a7a47707c3b6c08f50c9.png';
import instagramIcon from '@/assets/images/33cf6f93a96acb11b051433f76a5ee59f7a87a8f.png';
import xIcon from '@/assets/images/cdb84874018c2658ab07e35ee24aecd7cb132810.png';
import threadsIcon from '@/assets/images/723b0a4187d07fbc06057581e2bb44b9ca59c3f7.png';
import logoTeal from '@/assets/images/23db96b45eb4fb372575db8cd2406c9080db0c99.png';
import logoDark from '@/assets/images/5a6bab493f1c88e4c1a6b8e11e86bd6227b25c60.png';
import logoNew from '@/assets/images/d865bc9f348a5f1ca41d888da68aec25a684eaf3.png';
import logoMint from '@/assets/images/dfc379eba9e748e0b82e7c362c80d60dcd067da3.png';
import arrowIcon from '@/assets/images/92be6346d23de05d14f64392c587ff9adaaaf76a.png';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Facebook, Linkedin, Instagram, Mail, MapPin, Phone, Info, Headphones, Briefcase, Users, Code, Palette, Megaphone, Box, Monitor, TrendingUp, Shield, Database, Building2, FolderOpen, UserPlus, FileText, Lock, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '@/app/contexts/ThemeContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

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
      { icon: linkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/company/zaxa-studio', color: 'hover:text-[#1DCD9F]', isImage: true },
      { icon: instagramIcon, label: 'Instagram', href: 'https://instagram.com/zaxastudio_', color: 'hover:text-pink-500', isImage: true },
      { icon: facebookIcon, label: 'Facebook', href: 'https://facebook.com/zaxastudio', color: 'hover:text-[#1DCD9F]', isImage: true },
      { icon: xIcon, label: 'X', href: 'https://x.com/zaxastudio', color: 'hover:text-[#1DCD9F]', isImage: true },
      { icon: threadsIcon, label: 'Threads', href: 'https://threads.com/@zaxastudio_', color: 'hover:text-[#1DCD9F]', isImage: true },
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
      className="relative overflow-hidden border-t border-white/10"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
      }}
    >
      {/* Abstract Patterns Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(29, 205, 159, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(29, 205, 159, 0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#1DCD9F]/20 to-transparent rotate-45 origin-left" />
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[#1DCD9F]/15 to-transparent -rotate-45 origin-right" />
          <div className="absolute top-2/3 left-1/4 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#169976]/15 to-transparent rotate-12 origin-left" />
        </div>
        
        {/* Circular patterns */}
        <motion.div
          className="absolute top-20 right-1/4 w-48 h-48 rounded-full border border-[#1DCD9F]/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-32 h-32 rounded-full border border-[#169976]/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Dot pattern clusters */}
        <div className="absolute bottom-48 right-40">
          {[...Array(9)].map((_, i) => (
            <div key={`dot-br-${i}`} className="absolute w-1 h-1 rounded-full bg-[#169976]/20" style={{
              left: `${(i % 3) * 20}px`,
              top: `${Math.floor(i / 3) * 20}px`
            }} />
          ))}
        </div>
        
        {/* Abstract geometric shapes */}
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-[#1DCD9F]/8 rotate-45" />
        
        {/* Subtle line accents */}
        <div className="absolute top-12 right-12 w-32 h-[1px] bg-gradient-to-r from-[#1DCD9F]/20 to-transparent" />
        <div className="absolute bottom-24 left-16 w-40 h-[1px] bg-gradient-to-l from-[#169976]/20 to-transparent" />
      </div>

      {/* Ambient Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large teal orb - bottom left */}
        <motion.div
          className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(29, 205, 159, 0.15) 0%, rgba(29, 205, 159, 0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Medium emerald orb - top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-72 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Small teal orb - center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(29, 205, 159, 0.08) 0%, rgba(29, 205, 159, 0.02) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Animated gradient line on top */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(29, 205, 159, 0.4) 20%, rgba(29, 205, 159, 0.8) 50%, rgba(29, 205, 159, 0.4) 80%, transparent 100%)',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />
      
      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 12 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Glow effect */}
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
                
                <div className="relative p-3 rounded-2xl">
                  <img 
                    src={logoMint} 
                    alt="Zaxa Studio" 
                    className="h-16 w-16 object-contain relative z-10" 
                  />
                </div>
              </motion.div>
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
              <motion.a 
                href="mailto:contact@zaxastudio.com"
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-zinc-400 hover:text-[#1DCD9F] transition-all duration-300"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-[#1DCD9F]/10 border border-[#1DCD9F]/20 flex items-center justify-center group-hover:bg-[#1DCD9F]/20 group-hover:border-[#1DCD9F]/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </motion.div>
                <span className="text-base">contact@zaxastudio.com</span>
              </motion.a>

              <motion.div 
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-zinc-400"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-[#169976]/10 border border-[#169976]/20 flex items-center justify-center group-hover:bg-[#169976]/20 group-hover:border-[#169976]/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MapPin size={18} className="group-hover:scale-110 transition-transform" />
                </motion.div>
                <span className="text-base">Cairo, Egypt</span>
              </motion.div>
            </div>

            {/* Stay Updated - Moved here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="pt-6 max-w-sm"
            >
              <h4 className="text-xl font-semibold mb-2 text-white tracking-tight" style={{ fontFamily: "'Cairo', sans-serif" }}>Stay Updated</h4>
              
              <form>
                <div className="relative group">
                  {/* Input field with enhanced styling */}
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-5 py-3.5 pr-14 bg-zinc-900/90 border border-zinc-800/60 rounded-2xl focus:outline-none focus:border-[#1DCD9F]/50 focus:bg-zinc-900 text-white placeholder-zinc-500 transition-all duration-300 group-hover:border-[#1DCD9F]/30 text-sm shadow-lg shadow-black/20"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  />
                  
                  {/* Subtle glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1DCD9F]/0 via-[#1DCD9F]/5 to-[#1DCD9F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                  
                  {/* Inner shadow for depth */}
                  <div
                    className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                  
                  {/* Arrow CTA Button */}
                  <motion.button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#1DCD9F] to-[#169976] hover:from-[#1ab890] hover:to-[#137a5f] text-white rounded-xl transition-all duration-300 shadow-lg shadow-[#1DCD9F]/20"
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl mb-8 font-semibold" style={{ fontFamily: "'Cairo', sans-serif" }}>Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <motion.li 
                  key={link.path}
                  whileHover={{ x: 5 }}
                >
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-zinc-400 hover:text-[#1DCD9F] transition-all duration-300 text-base"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      <motion.div 
                        className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center"
                      >
                        <link.icon size={14} className="text-zinc-600 group-hover:text-[#1DCD9F] transition-colors duration-300" strokeWidth={2} />
                      </motion.div>
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="group flex items-center gap-3 text-zinc-400 hover:text-[#1DCD9F] transition-all duration-300 text-base"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      <motion.div 
                        className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center"
                      >
                        <link.icon size={14} className="text-zinc-600 group-hover:text-[#1DCD9F] transition-colors duration-300" strokeWidth={2} />
                      </motion.div>
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services Links - Card-based layout with icons */}
          <div className="lg:col-span-2">
            <h3 className="text-xl mb-8 font-semibold" style={{ fontFamily: "'Cairo', sans-serif" }}>Services</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
              {footerLinks.services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    to={service.path} 
                    className="group relative flex items-center gap-3 transition-all duration-300"
                  >
                    {/* Icon */}
                    <motion.div 
                      className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center"
                    >
                      <service.icon size={14} className="text-zinc-600 group-hover:text-[#1DCD9F] transition-colors duration-300" strokeWidth={2} />
                    </motion.div>

                    {/* Label */}
                    <span 
                      className="relative text-base text-zinc-400 group-hover:text-[#1DCD9F] transition-colors duration-300"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {service.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Section: Copyright & Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Legal Links */}
          <motion.div 
            className="flex flex-wrap items-center gap-2 md:gap-3 text-sm"
            style={{ fontFamily: "'Cairo', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-zinc-500">
              © {currentYear} Zaxa Studio. All rights reserved.
            </span>
            <span className="text-zinc-700">•</span>
            <Link 
              to="/terms"
              className="text-zinc-500 hover:text-[#1DCD9F] transition-colors duration-300"
            >
              Terms of Partnership
            </Link>
            <span className="text-zinc-700">•</span>
            <Link 
              to="/privacy"
              className="text-zinc-500 hover:text-[#1DCD9F] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </motion.div>

          {/* Social Media Links */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {footerLinks.social.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center bg-white/[0.05] border border-white/10 rounded-xl hover:border-[#1DCD9F]/40 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1DCD9F]/10 to-[#169976]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                {social.isImage ? (
                  typeof social.icon === 'string' ? (
                    <img 
                      src={social.icon} 
                      alt={social.label}
                      className="relative z-10 w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="relative z-10 w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-5 h-5">
                        <social.icon />
                      </div>
                    </div>
                  )
                ) : (
                  <social.icon size={20} className={`relative z-10 text-zinc-400 group-hover:text-[#1DCD9F] transition-colors`} />
                )}

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 12px rgba(29, 205, 159, 0.4)'
                  }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Users, Briefcase, HeadphonesIcon, Info, CheckCircle, Paperclip, X, FileText, Image as ImageIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { useState, useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { HeroBackground } from '../components/HeroBackground';
import {
  socialLinkedin as linkedinIcon,
  socialFacebook as facebookIcon,
  socialInstagram as instagramIcon,
  socialX as xIcon,
  socialThreads as threadsIcon,
} from '@/assets/images';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@zaxastudio.com',
    href: 'mailto:contact@zaxastudio.com',
    color: 'from-teal-500/20 to-emerald-500/20',
    hoverColor: 'hover:border-teal-500/40',
    iconColor: 'text-teal-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Maadi, Cairo, Egypt',
    href: null,
    color: 'from-emerald-500/20 to-green-600/20',
    hoverColor: 'hover:border-emerald-500/40',
    iconColor: 'text-emerald-400',
  },
];

const departmentEmails = [
  {
    icon: Info,
    label: 'General Inquiries',
    value: 'info@zaxastudio.com',
    href: 'mailto:info@zaxastudio.com',
    description: 'For general questions and information'
  },
  {
    icon: HeadphonesIcon,
    label: 'Technical Support',
    value: 'support@zaxastudio.com',
    href: 'mailto:support@zaxastudio.com',
    description: 'For technical assistance and support'
  },
  {
    icon: Briefcase,
    label: 'Career Opportunities',
    value: 'careers@zaxastudio.com',
    href: 'mailto:careers@zaxastudio.com',
    description: 'Join our team of innovators'
  },
  {
    icon: Users,
    label: 'Human Resources',
    value: 'hr@zaxastudio.com',
    href: 'mailto:hr@zaxastudio.com',
    description: 'HR inquiries and employee matters'
  },
];

const socialLinks = [
  {
    icon: linkedinIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/zaxa-studio',
    color: 'hover:bg-teal-500/20 hover:border-teal-500/50',
    isImage: true,
  },
  {
    icon: instagramIcon,
    label: 'Instagram',
    href: 'https://instagram.com/zaxastudio_',
    color: 'hover:bg-emerald-500/20 hover:border-emerald-500/50',
    isImage: true,
  },
  {
    icon: facebookIcon,
    label: 'Facebook',
    href: 'https://facebook.com/zaxastudio',
    color: 'hover:bg-teal-600/20 hover:border-teal-600/50',
    isImage: true,
  },
  {
    icon: xIcon,
    label: 'X',
    href: 'https://x.com/zaxastudio',
    color: 'hover:bg-teal-500/20 hover:border-teal-500/50',
    isImage: true,
  },
  {
    icon: threadsIcon,
    label: 'Threads',
    href: 'https://threads.com/@zaxastudio_',
    color: 'hover:bg-emerald-500/20 hover:border-emerald-500/50',
    isImage: true,
  },
];

export function ContactPage() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Handle scroll to hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for page to fully load
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setAttachedFiles([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setAttachedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return ImageIcon;
    }
    return FileText;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="relative scroll-container">
      <SEO
        title="Contact Us | Zaxa Studio"
        description="Get in touch with Zaxa Studio. From product engineering to design, branding, and marketing — let's turn your ideas into impact."
        url="/contact"
      />
      {/* Hero Section - Improved */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
        {/* Static Hero Background */}
        <HeroBackground variant="contact" />
        
        <div className="relative max-w-7xl mx-auto text-center px-6 z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {/* Label */}
            <motion.div 
              className="mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-[#1DCD9F]/80 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ GET IN TOUCH ]
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 tracking-tight leading-tight text-[#FFFFFF]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              LET'S TURN IDEAS INTO <span className="relative inline-block">
                <span className="text-[#1DCD9F]">IMPACT</span>
                <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1DCD9F]" />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-[16px] md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              From product engineering to design, branding, and marketing, we create solutions that perform, scale, and resonate with your users. Reach out to explore how we can bring your vision to life.
            </motion.p>

            <motion.div 
              className="mt-8 md:mt-16 flex flex-col items-center gap-2 md:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.6,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <span className="text-[10px] md:text-xs tracking-widest text-[#1DCD9F]/60 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Get Started
              </span>
              <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#1DCD9F]/60 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section - Redesigned */}
      <section id="contact-form" className="py-10 md:py-20 lg:py-32 px-6 sm:px-8 lg:px-12 relative">
        
        <div className="w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-10">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl mb-6 tracking-tight">
                  Get In Touch
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  Ready to transform your vision into reality? Reach out and let's start the conversation.
                </p>
              </motion.div>

              {/* Contact Cards - Improved Design */}
              <div className="space-y-5">
                {contactInfo.map((item, index) => {
                const MotionEl = item.href ? motion.a : motion.div;
                return (
                  <MotionEl
                    key={item.label}
                    {...(item.href ? {
                      href: item.href,
                      target: item.href.startsWith('http') ? '_blank' : undefined,
                      rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                    } : {})}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className={`group relative flex items-center gap-5 p-6 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl lg:rounded-2xl ${item.hoverColor} hover:bg-white/[0.05] transition-all duration-300 overflow-hidden shadow-[0_4px_16px_0_rgba(29,205,159,0.12)] ${item.href ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-50" />
                    
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Icon container */}
                    <motion.div 
                      className={`relative flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br ${item.color} border border-zinc-700/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <item.icon size={28} className={`${item.iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={2} />
                    </motion.div>

                    {/* Content */}
                    <div className="relative flex-1">
                      <div className="text-sm text-zinc-500 mb-1 uppercase tracking-wider">{item.label}</div>
                      <div className="text-white text-lg font-medium group-hover:text-teal-300 transition-colors">
                        {item.value}
                      </div>
                    </div>

                    {/* Arrow indicator for clickable items */}
                    {item.href && (
                      <motion.div
                        className="relative text-zinc-600 group-hover:text-teal-400 transition-colors"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        aria-hidden="true"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    )}
                  </MotionEl>
                );
              })}
              </div>

              {/* Social Links - Redesigned */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl mb-5 tracking-tight">Follow Our Journey</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.15 }}
                      className={`group relative flex-1 aspect-square rounded-lg lg:rounded-2xl bg-zinc-900/60 border border-zinc-800/60 ${social.color} flex items-center justify-center transition-all duration-300 overflow-hidden`}
                      aria-label={social.label}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-emerald-500/0 group-hover:from-teal-500/20 group-hover:to-emerald-500/20 transition-all duration-300"
                      />
                      
                      {social.isImage ? (
                        typeof social.icon === 'string' ? (
                          <img src={social.icon} alt={social.label} className="relative z-10 w-5 h-5 object-contain" loading="lazy" decoding="async" />
                        ) : (
                          <div className="relative z-10 w-3 h-3 flex items-center justify-center">
                            <div className="w-3 h-3">
                              <social.icon />
                            </div>
                          </div>
                        )
                      ) : (
                        <social.icon size={12} className="relative z-10 text-zinc-400 group-hover:text-teal-400 transition-colors" strokeWidth={2} />
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form (3 cols) */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="group relative p-6 lg:p-12 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl lg:rounded-3xl overflow-hidden hover:border-teal-500/50 hover:bg-white/[0.05] transition-all duration-500 shadow-[0_4px_16px_0_rgba(29,205,159,0.12)]">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-50" />
                
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DCD9F]/5 rounded-full blur-2xl transform-gpu" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#169976]/5 rounded-full blur-2xl transform-gpu" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex flex-col items-center justify-center text-center py-16 space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                      <CheckCircle size={40} className="text-teal-400" />
                    </div>
                    <h3 className="text-3xl tracking-tight text-white">Message Sent!</h3>
                    <p className="text-zinc-400 text-lg max-w-sm">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-teal-400 hover:text-teal-300 text-sm transition-colors duration-300 underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                <form onSubmit={handleSubmit} className="relative space-y-8">
                  <div>
                    <h3 className="text-3xl mb-3 tracking-tight">Start Your Project</h3>
                    <p className="text-zinc-400 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-base mb-3 text-zinc-400 font-medium">
                        Full Name *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-4 bg-zinc-900/60 border border-zinc-800/60 rounded-xl text-white text-base placeholder-zinc-600 focus:outline-none focus:border-teal-500/60 focus:bg-zinc-900/80 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-base mb-3 text-zinc-400 font-medium">
                        Email Address *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-4 bg-zinc-900/60 border border-zinc-800/60 rounded-xl text-white text-base placeholder-zinc-600 focus:outline-none focus:border-teal-500/60 focus:bg-zinc-900/80 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base mb-3 text-zinc-400 font-medium">
                      Project Details *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-zinc-900/60 border border-zinc-800/60 rounded-xl text-white text-base placeholder-zinc-600 focus:outline-none focus:border-teal-500/60 focus:bg-zinc-900/80 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* File Upload Section */}
                  <div>
                    <label htmlFor="files" className="block text-base mb-3 text-zinc-400 font-medium">
                      Attach Files (Images & Documents)
                    </label>
                    
                    {/* File Upload Area */}
                    <div className="relative">
                      <input
                        type="file"
                        id="files"
                        name="files"
                        multiple
                        accept="image/*,.pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <motion.div
                        whileHover={{ scale: 1.01, borderColor: 'rgba(29, 205, 159, 0.5)' }}
                        className="relative px-6 py-8 bg-zinc-900/40 border-2 border-dashed border-zinc-800/60 rounded-xl hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex flex-col items-center justify-center gap-3 text-center">
                          <motion.div
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center"
                          >
                            <Paperclip size={24} className="text-teal-400" />
                          </motion.div>
                          <div>
                            <p className="text-base text-zinc-300 mb-1">
                              <span className="text-teal-400 font-medium">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-sm text-zinc-500">
                              Images, PDFs, Documents (Max 10MB each)
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Attached Files List */}
                    {attachedFiles.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 space-y-2"
                      >
                        <p className="text-sm text-zinc-400 mb-3">
                          Attached Files ({attachedFiles.length})
                        </p>
                        {attachedFiles.map((file, index) => {
                          const FileIcon = getFileIcon(file);
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="group flex items-center gap-3 bg-zinc-900/50 border border-zinc-800/50 rounded-xl px-4 py-3 hover:bg-zinc-900/70 hover:border-teal-500/30 transition-all duration-300"
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                                <FileIcon size={18} className="text-teal-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-zinc-300 truncate font-medium">{file.name}</p>
                                <p className="text-xs text-zinc-500">{formatFileSize(file.size)}</p>
                              </div>
                              <motion.button
                                type="button"
                                onClick={() => removeFile(index)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300"
                              >
                                <X size={16} />
                              </motion.button>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full justify-center text-lg py-5 relative overflow-hidden group">
                      <span className="flex items-center gap-3 relative z-10">
                        Send Message
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          aria-hidden="true"
                        >
                          <Send size={20} />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps - Enhanced */}
      <section className="py-10 md:py-20 lg:py-32 px-6 sm:px-8 lg:px-12 relative">
        
        <div className="w-full relative">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl mb-6 tracking-tight">
                What Happens Next
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Your project journey begins with clarity and confidence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[ 
                {
                  step: '01',
                  title: 'Discovery Call',
                  description: 'We explore your vision, goals, and requirements to understand exactly what success looks like.',
                },
                {
                  step: '02',
                  title: 'Tailored Proposal',
                  description: 'Receive a detailed plan with scope, timeline, and investment — everything laid out transparently.',
                },
                {
                  step: '03',
                  title: 'Project Kickoff',
                  description: 'Our team gets to work, executing with focus, speed, and attention to your product\'s growth.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="group relative p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-xl lg:rounded-3xl hover:border-teal-500/40 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  {/* Animated hover gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Step number with enhanced styling */}
                  <div className="relative mb-8">
                    <motion.div 
                      className="inline-block text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-emerald-400 to-green-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
                    >
                      {item.step}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl mb-4 tracking-tight font-semibold group-hover:text-teal-100 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent group-hover:via-teal-500/50 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department Emails Section - Redesigned */}
      <section className="py-10 md:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-zinc-950/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(29,205,159,0.03),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.02),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
              Department Contacts
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Connect with the right team for your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentEmails.map((email, index) => (
              <motion.a
                key={email.label}
                href={email.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative flex flex-col p-8 bg-zinc-900/60 border border-zinc-800/60 rounded-xl lg:rounded-2xl hover:border-teal-500/40 transition-all duration-300 cursor-pointer overflow-hidden w-full"
              >
                {/* Hover gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Icon */}
                <motion.div
                  className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                >
                  <email.icon size={26} className="text-teal-400 group-hover:text-teal-300 transition-colors" strokeWidth={2} />
                </motion.div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-300 transition-colors">{email.label}</h3>
                  <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{email.description}</p>
                  <div className="text-sm text-teal-400 group-hover:text-teal-300 transition-colors font-medium">
                    {email.value}
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-teal-500/30 group-hover:bg-teal-400/60 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { motion } from 'motion/react';
import { Shield, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information that you provide directly to us, including name, email address, phone number, company name, and project requirements. We also collect data through cookies and similar technologies to improve your experience on our website.'
  },
  {
    title: 'How We Use Your Information',
    content: 'We use the information we collect to provide, maintain, and improve our services, communicate with you about projects and updates, respond to your inquiries, and analyze usage patterns to enhance user experience.'
  },
  {
    title: 'Data Security',
    content: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. All data is encrypted in transit and at rest.'
  },
  {
    title: 'Third-Party Services',
    content: 'We may use third-party services for analytics, hosting, and communication. These services are carefully vetted and required to maintain the confidentiality of your information.'
  },
  {
    title: 'Your Rights',
    content: 'You have the right to access, correct, or delete your personal information. You may also opt-out of marketing communications at any time. Contact us to exercise these rights.'
  },
  {
    title: 'Cookies',
    content: 'Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.'
  },
  {
    title: 'Data Retention',
    content: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes.'
  },
  {
    title: 'International Data Transfers',
    content: 'Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.'
  },
  {
    title: 'Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.'
  },
];

export function PrivacyPage() {
  return (
    <div className="relative scroll-container">
      <SEO 
        title="Privacy Policy"
        description="Privacy policy for ZAXA Studio - Learn how we protect and handle your data"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
        {/* Background Image - using solid color for legal pages */}
        <div className="absolute inset-0 bg-[#000000]" />
        
        {/* Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        
        {/* Subtle Gradient Orbs */}
        <motion.div 
          className="absolute top-20 -left-40 w-96 h-96 bg-[#1DCD9F]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 -right-40 w-96 h-96 bg-[#1DCD9F]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Scan-Light Pulse */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(226, 232, 240, 0.15) 0%, rgba(226, 232, 240, 0.08) 30%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
          className="relative max-w-7xl mx-auto text-center px-6 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 md:mb-6"
            >
              <span className="text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-[#1DCD9F]/80 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                [ DATA INTEGRITY PROTOCOLS ]
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-tight text-[#FFFFFF]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              PRIVACY <span className="relative inline-block">
                <span className="text-[#1DCD9F]">POLICY</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#1DCD9F]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[16px] md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            >
              Our commitment to data integrity is engineered into every layer of our code. Review the architectural standards we use to safeguard your information.
            </motion.p>

            <motion.div 
              className="mt-8 md:mt-16 flex flex-col items-center gap-2 md:gap-3" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span className="text-[10px] md:text-xs tracking-widest text-[#1DCD9F]/60 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Review Policy
              </span>
              <motion.div 
                className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#1DCD9F]/60 to-transparent" 
                animate={{ height: [48, 64, 48] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-zinc-500 text-lg">Last Updated: January 2026</p>
            <p className="text-teal-400 text-base mt-2">Framework: Zero Ambiguity Data Architecture.</p>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 p-8 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 border border-zinc-800/50 rounded-3xl"
          >
            <p className="text-zinc-300 text-lg leading-relaxed">
              At ZAXA Studio, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services or visit our website.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative bg-gradient-to-br from-teal-500/5 to-emerald-500/5 border border-zinc-800/50 rounded-3xl p-8 overflow-hidden hover:border-teal-500/30 transition-all duration-500"
              >
                {/* Background Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 12 }}
                      className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center"
                    >
                      <ChevronRight size={18} className="text-teal-400" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-teal-100 transition-colors duration-300">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed pl-12 group-hover:text-zinc-300 transition-colors duration-300">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl"
          >
            <p className="text-zinc-400 text-lg leading-relaxed">
              For privacy-related inquiries or to exercise your data rights, please contact us at{' '}
              <a href="mailto:privacy@zaxastudio.com" className="text-teal-400 hover:text-teal-300 transition-colors underline">
                privacy@zaxastudio.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { motion } from 'motion/react';
import { FileText, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing and using ZAXA Studio\'s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
  },
  {
    title: 'Services Description',
    content: 'ZAXA Studio provides professional software development, design, and consulting services. Our deliverables and timelines are defined in individual project agreements and statements of work.'
  },
  {
    title: 'Client Responsibilities',
    content: 'Clients must provide timely feedback, necessary resources, and access to required systems. Delays caused by client inaction may result in adjusted timelines and additional costs.'
  },
  {
    title: 'Intellectual Property',
    content: 'Upon full payment, clients receive ownership of custom-built deliverables. ZAXA Studio retains rights to proprietary frameworks, tools, and methodologies used in project delivery.'
  },
  {
    title: 'Payment Terms',
    content: 'Payment schedules are outlined in project agreements. Late payments may incur interest charges. ZAXA Studio reserves the right to suspend work for overdue accounts.'
  },
  {
    title: 'Confidentiality',
    content: 'Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation survives termination of the agreement.'
  },
  {
    title: 'Warranties and Disclaimers',
    content: 'We provide professional services with reasonable care and skill. However, we do not guarantee uninterrupted operation or complete freedom from errors in delivered software.'
  },
  {
    title: 'Limitation of Liability',
    content: 'ZAXA Studio\'s liability is limited to the amount paid for services. We are not liable for indirect, consequential, or incidental damages arising from service use.'
  },
  {
    title: 'Termination',
    content: 'Either party may terminate the agreement with written notice. Clients are responsible for payment of work completed up to the termination date.'
  },
  {
    title: 'Modifications to Terms',
    content: 'We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.'
  },
];

export function TermsPage() {
  return (
    <div className="relative scroll-container">
      <SEO 
        title="Terms & Conditions"
        description="Terms and conditions for ZAXA Studio's services"
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
                [ LEGAL FRAMEWORK ]
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight leading-tight text-[#FFFFFF]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              TERMS & <span className="relative inline-block">
                <span className="text-[#1DCD9F]">CONDITIONS</span>
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
              Engineered legal structure governing all interactions with ZAXA Studio's services, platforms, and client engagements.
            </motion.p>

            <motion.div 
              className="mt-8 md:mt-16 flex flex-col items-center gap-2 md:gap-3" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <span className="text-[10px] md:text-xs tracking-widest text-[#1DCD9F]/60 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Review Terms
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
            <p className="text-zinc-500 text-lg">Protocol 1.0</p>
            <p className="text-teal-400 text-base mt-2">Architectural Partnership Agreement</p>
          </motion.div>

          {/* Terms Sections */}
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
              If you have any questions about these Terms & Conditions, please contact us at{' '}
              <a href="mailto:legal@zaxastudio.com" className="text-teal-400 hover:text-teal-300 transition-colors underline">
                legal@zaxastudio.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
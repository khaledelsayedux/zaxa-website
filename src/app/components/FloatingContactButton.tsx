import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Mail } from 'lucide-react';

export function FloatingContactButton() {
  return (
    <Link to="/contact#contact-form">
      <motion.div
        className="group fixed bottom-8 right-8 w-14 h-14 bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_4px_16px_0_rgba(29,205,159,0.15)] transition-all duration-300 overflow-hidden z-[60] cursor-pointer"
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent opacity-60 pointer-events-none" />
        
        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1DCD9F]/30 to-[#169976]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Icon */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Mail size={24} className="text-white" strokeWidth={2.5} />
        </motion.div>

        {/* Glow ring */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[#1DCD9F] to-[#169976] rounded-2xl blur-lg opacity-0 group-hover:opacity-60 -z-10"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-1.5 bg-[#0A111F]/90 backdrop-blur-xl border border-white/10 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="text-xs text-white/90">Send Message</span>
        </div>
      </motion.div>
    </Link>
  );
}

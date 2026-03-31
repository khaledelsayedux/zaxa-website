import { Link } from 'react-router';
import { Mail } from 'lucide-react';

export function FloatingContactButton() {
  return (
    <Link to="/contact#contact-form">
      <div
        className="shell-fab-enter group fixed bottom-8 right-8 w-14 h-14 bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_4px_16px_0_rgba(29,205,159,0.15)] transition-all duration-300 overflow-hidden z-[60] cursor-pointer motion-safe:hover:scale-110 motion-safe:hover:-translate-y-1 active:scale-95"
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.05] to-transparent opacity-60 pointer-events-none" />

        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DCD9F]/30 to-[#169976]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shell-float-y-slow" />

        {/* Icon */}
        <div className="relative z-10 shell-float-y-medium">
          <Mail size={24} className="text-white" strokeWidth={2.5} />
        </div>

        {/* Glow ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#1DCD9F] to-[#169976] rounded-2xl blur-lg opacity-0 group-hover:opacity-60 -z-10 shell-pulse-scale" />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-1.5 bg-[#0A111F]/90 backdrop-blur-md border border-white/10 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="text-xs text-white/90">Send Message</span>
        </div>
      </div>
    </Link>
  );
}

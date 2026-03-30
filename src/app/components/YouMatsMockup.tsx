import { motion } from 'motion/react';
import youmatsScreenshot from '@/assets/images/675d18e682f7235cc52573b6f642971348abd2a1.png';

export function YouMatsMockup() {
  return (
    <div className="relative w-full">
      {/* Browser Mockup Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#232323] rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Browser Chrome */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-[#2D2D30] border-b border-[#3E3E42]">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#28CA42] hover:bg-[#28CA42]/80 transition-colors cursor-pointer" />
          </div>

          {/* Address Bar */}
          <div className="flex-1 mx-6 px-4 py-2 bg-[#1E1E1E] rounded-lg flex items-center border border-[#404040]">
            <svg
              className="w-3.5 h-3.5 text-emerald-500 mr-2.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-sm text-zinc-300 font-mono tracking-wide">https://youmats.com</span>
          </div>

          {/* Browser Actions */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#3E3E42] flex items-center justify-center hover:bg-[#4E4E52] transition-colors cursor-pointer">
              <div className="w-1 h-1 rounded-full bg-zinc-500" />
            </div>
            <div className="w-6 h-6 rounded bg-[#3E3E42] flex items-center justify-center hover:bg-[#4E4E52] transition-colors cursor-pointer">
              <div className="w-1 h-1 rounded-full bg-zinc-500" />
            </div>
          </div>
        </div>

        {/* Screenshot Content - Aggressively Cropped to Show Product Details */}
        <div className="relative w-full bg-white">
          <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
            {/* Heavily cropped screenshot focusing on product grid */}
            <img
              src={youmatsScreenshot}
              alt="YouMats E-commerce Platform - Product Catalog"
              className="absolute w-full"
              style={{
                top: '-25%', // Crop heavily from top
                left: '0%',
                height: '160%', // Zoom in significantly to show details
                objectFit: 'cover',
                objectPosition: 'center 40%', // Focus on main product area
              }}
            />
            
            {/* Subtle gradient overlays for polished look */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Bottom edge shadow for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent" />
      </motion.div>

      {/* Realistic shadow beneath mockup */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-black/30 blur-3xl rounded-full" />
    </div>
  );
}
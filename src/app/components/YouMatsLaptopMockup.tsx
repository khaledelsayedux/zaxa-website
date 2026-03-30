import { motion } from 'motion/react';
import youmatsScreenshot from '@/assets/images/675d18e682f7235cc52573b6f642971348abd2a1.png';

/**
 * Premium MacBook Pro mockup for YouMats construction materials e-commerce platform
 * Portfolio-ready presentation with realistic device mockup and professional lighting
 */
export function YouMatsLaptopMockup() {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* Soft Studio Background Gradient */}
        <div className="absolute inset-0 -top-32 -bottom-32 bg-gradient-to-br from-zinc-50 via-white to-zinc-50/30 rounded-[60px] blur-3xl opacity-60" />

        {/* MacBook Pro Container */}
        <div className="relative">
          {/* Screen Housing */}
          <div className="relative bg-[#1a1a1a] rounded-t-[20px] shadow-2xl overflow-hidden border-t-[12px] border-x-[12px] border-[#1a1a1a]">
            {/* Top Bezel with Notch */}
            <div className="absolute top-0 left-0 right-0 h-7 bg-[#1a1a1a] z-30 flex items-center justify-center">
              <div className="w-32 h-6 bg-black rounded-b-2xl flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a]" />
              </div>
            </div>

            {/* Screen Display Area */}
            <div className="relative bg-white" style={{ aspectRatio: '16/10' }}>
              {/* macOS Chrome - Safari-style */}
              <div className="absolute top-7 left-0 right-0 h-11 bg-[#f6f6f6] border-b border-zinc-200/80 z-20 flex items-center px-4 gap-3">
                {/* macOS Traffic Lights */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
                </div>

                {/* Address Bar - Safari Style */}
                <div className="flex-1 mx-8 px-4 py-1.5 bg-white rounded-md flex items-center border border-zinc-200/60 shadow-sm">
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
                  <span className="text-xs text-zinc-600 font-medium">youmats.com</span>
                </div>
              </div>

              {/* YouMats Website Screenshot */}
              <div className="absolute top-[72px] left-0 right-0 bottom-0 bg-white overflow-hidden">
                <motion.img
                  src={youmatsScreenshot}
                  alt="YouMats Construction Materials E-commerce Platform - Building Materials & Kitchen Solutions"
                  className="w-full h-full object-cover object-top"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Realistic Screen Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] via-transparent to-white/[0.03] pointer-events-none" />
            </div>
          </div>

          {/* Laptop Base - Bottom Section */}
          <div className="relative">
            {/* Keyboard Base Top */}
            <div className="relative h-3 bg-gradient-to-b from-[#d8dade] to-[#c2c4c8] shadow-lg">
              {/* Hinge Detail */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-1 bg-[#3a3a3a] rounded-full shadow-inner" />
            </div>

            {/* Keyboard Base Bottom */}
            <div className="relative -mt-0.5 px-4">
              <div className="h-1.5 bg-gradient-to-b from-[#c2c4c8] to-[#989ca4] rounded-b-[28px]" />
            </div>
          </div>

          {/* Professional Shadow System - Multi-layered */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[92%] h-4 bg-black/15 blur-xl rounded-full" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/10 blur-2xl rounded-full" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[65%] h-8 bg-black/5 blur-3xl rounded-full" />
        </div>

        {/* Ambient Studio Lighting - Subtle Teal Accent */}
        <motion.div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-teal-400/[0.04] rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Secondary Accent Light */}
        <motion.div
          className="absolute -bottom-16 right-0 w-[500px] h-[500px] bg-emerald-400/[0.03] rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </div>
  );
}
import { motion } from 'motion/react';
import { Briefcase, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';

export function CareersPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Careers | Zaxa Studio"
        description="Join Zaxa Studio — a team of product builders, designers, and engineers shaping the future of digital experiences."
        url="/career"
      />
      {/* Ambient gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-400/10 via-green-500/5 to-transparent rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none transform-gpu" style={{ animationDuration: '8s' }} />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-green-400/8 via-transparent to-transparent rounded-full blur-2xl opacity-30 animate-pulse pointer-events-none transform-gpu" style={{ animationDuration: '12s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mx-[0px] mt-[80px] mb-[128px]"
        >
          

          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight leading-[0.9] max-w-5xl"
            style={{ fontFamily: "'Cairo', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Shape Tomorrow,
            <br />
            <span className="text-green-400">Today</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-zinc-400 mb-16 leading-relaxed max-w-3xl"
            style={{ fontFamily: "'Cairo', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Explore opportunities to be part of a team that builds digital products that perform, scale, and inspire.
          </motion.p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group/stat"
            >
              <div className="absolute -top-2 -left-2 w-6 h-6 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-green-400 to-transparent" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-green-400 to-transparent" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2" style={{ fontFamily: "'Cairo', sans-serif" }}>50+</div>
              <div className="text-sm text-zinc-500" style={{ fontFamily: "'Cairo', sans-serif" }}>Projects Delivered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group/stat"
            >
              <div className="absolute -top-2 -left-2 w-6 h-6 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-green-400 to-transparent" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-green-400 to-transparent" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2" style={{ fontFamily: "'Cairo', sans-serif" }}>30+</div>
              <div className="text-sm text-zinc-500" style={{ fontFamily: "'Cairo', sans-serif" }}>Team Members</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative group/stat"
            >
              <div className="absolute -top-2 -left-2 w-6 h-6 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-green-400 to-transparent" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-green-400 to-transparent" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2" style={{ fontFamily: "'Cairo', sans-serif" }}>7+</div>
              <div className="text-sm text-zinc-500" style={{ fontFamily: "'Cairo', sans-serif" }}>Countries Served</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Join Zaxa Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -8, scale: 1.01, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
          className="mb-32 relative"
        >
          <div className="relative group/card">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-green-500/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover/card:opacity-40 group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-1000 ease-out transform-gpu" />

            <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/10 group-hover/card:border-green-400/30 group-hover/card:bg-gradient-to-br group-hover/card:from-white/[0.10] group-hover/card:via-white/[0.06] group-hover/card:to-white/[0.03] p-12 overflow-hidden transition-all duration-500">
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              
              {/* Rotating background icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -right-12 -top-12 opacity-5"
              >
                <Briefcase size={200} className="text-green-400" />
              </motion.div>

              <div className="relative z-10">
                <h3 
                  className="text-3xl mb-6 tracking-tight"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  Why Join Zaxa?
                </h3>

                <div className="space-y-6">
                  {[
                    { icon: '🚀', title: 'Innovation First', desc: 'Work on cutting-edge projects that push boundaries' },
                    { icon: '🌍', title: 'Global Impact', desc: 'Create solutions that reach users worldwide' },
                    { icon: '💡', title: 'Creative Freedom', desc: 'Bring your ideas to life in a collaborative environment' },
                    { icon: '📈', title: 'Career Growth', desc: 'Continuous learning and professional development' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-2xl group-hover/item:scale-110 group-hover/item:bg-green-400/20 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1" style={{ fontFamily: "'Cairo', sans-serif" }}>
                          {item.title}
                        </div>
                        <div className="text-sm text-zinc-400" style={{ fontFamily: "'Cairo', sans-serif" }}>
                          {item.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Open Positions - Empty State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 
            className="text-4xl md:text-5xl mb-12 tracking-tight"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            Open Positions
          </h2>

          {/* Empty State */}
          <div className="relative group">
            <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/10 group-hover:border-green-400/30 group-hover:shadow-[0_0_40px_rgba(29,205,159,0.15)] group-hover:scale-[1.02] p-16 text-center transition-all duration-500 ease-out overflow-hidden">
              {/* Ambient glow on hover */}
              <div className="absolute -inset-8 bg-gradient-to-br from-green-400/10 via-green-500/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none transform-gpu" />
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              
              

              <h3 
                className="text-3xl mb-4 tracking-tight"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                No Open Positions Right Now
              </h3>
              <p 
                className="text-zinc-400 text-lg max-w-2xl mx-auto"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                There are currently no job opportunities available. New openings will be posted here as they become available. Stay tuned for future roles and opportunities to collaborate with our team.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
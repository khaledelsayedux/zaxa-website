import { motion } from 'motion/react';
import { MouseParallax } from './MouseParallax';
import { ParallaxContainer } from './ParallaxContainer';
import { ParallaxCard } from './ParallaxCard';
import { ParallaxBackground } from './ParallaxBackground';
import { Code, Layers, MousePointer, Sparkles } from 'lucide-react';

export function ParallaxShowcase() {
  return (
    <div className="min-h-screen py-20 px-6 sm:px-8 lg:px-12">
      {/* Parallax Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mb-40">
        <ParallaxBackground />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                Parallax Effects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Experience immersive multi-layered animations
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto space-y-40">
        {/* Mouse Parallax Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <MousePointer className="text-teal-400" size={32} />
              <h2 className="text-5xl md:text-6xl tracking-tight">Mouse Parallax</h2>
            </div>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Elements that follow your cursor movement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Layer 1', intensity: 10, icon: '🌟', color: 'from-teal-500 to-emerald-500' },
              { title: 'Layer 2', intensity: 20, icon: '✨', color: 'from-emerald-500 to-green-500' },
              { title: 'Layer 3', intensity: 30, icon: '💫', color: 'from-violet-500 to-purple-500' },
            ].map((item, index) => (
              <MouseParallax
                key={item.title}
                intensity={item.intensity}
                smooth={15}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl hover:border-teal-500/50 transition-all duration-300`}
                >
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl mb-2">{item.title}</h3>
                  <p className="text-zinc-400">
                    Intensity: {item.intensity}px
                  </p>
                  <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${item.color}`} />
                </motion.div>
              </MouseParallax>
            ))}
          </div>
        </section>

        {/* Scroll Parallax Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Layers className="text-cyan-400" size={32} />
              <h2 className="text-5xl md:text-6xl tracking-tight">Scroll Parallax</h2>
            </div>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Multi-layered depth as you scroll
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ParallaxContainer speed={0.3} direction="up">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-3xl"
              >
                <div className="text-5xl mb-6">⬆️</div>
                <h3 className="text-3xl mb-4">Upward Motion</h3>
                <p className="text-zinc-400 text-lg">
                  This element moves up as you scroll down
                </p>
              </motion.div>
            </ParallaxContainer>

            <ParallaxContainer speed={0.3} direction="down">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl"
              >
                <div className="text-5xl mb-6">⬇️</div>
                <h3 className="text-3xl mb-4">Downward Motion</h3>
                <p className="text-zinc-400 text-lg">
                  This element moves down as you scroll down
                </p>
              </motion.div>
            </ParallaxContainer>
          </div>
        </section>

        {/* Interactive Parallax Cards */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Code className="text-violet-400" size={32} />
              <h2 className="text-5xl md:text-6xl tracking-tight">3D Tilt Cards</h2>
            </div>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Hover to see the 3D perspective effect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Subtle Tilt', 
                intensity: 8, 
                icon: Code,
                gradient: 'from-teal-500/20 to-emerald-500/20',
                border: 'border-teal-500/30'
              },
              { 
                title: 'Medium Tilt', 
                intensity: 15, 
                icon: Layers,
                gradient: 'from-emerald-500/20 to-green-500/20',
                border: 'border-emerald-500/30'
              },
              { 
                title: 'Strong Tilt', 
                intensity: 22, 
                icon: Sparkles,
                gradient: 'from-violet-500/20 to-purple-500/20',
                border: 'border-violet-500/30'
              },
            ].map((item, index) => (
              <ParallaxCard
                key={item.title}
                intensity={item.intensity}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-10 bg-gradient-to-br ${item.gradient} border ${item.border} rounded-3xl h-full transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20`}
                >
                  <item.icon size={48} className="mb-6 text-teal-400" />
                  <h3 className="text-2xl mb-4">{item.title}</h3>
                  <p className="text-zinc-400 mb-6">
                    Tilt intensity: {item.intensity}°
                  </p>
                  <div className="space-y-2">
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-400 to-emerald-400"
                        style={{ width: `${(item.intensity / 22) * 100}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              </ParallaxCard>
            ))}
          </div>
        </section>

        {/* Combined Effects Demo */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-pink-400" size={32} />
              <h2 className="text-5xl md:text-6xl tracking-tight">Combined Effects</h2>
            </div>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Multiple parallax techniques working together
            </p>
          </motion.div>

          <ParallaxContainer speed={0.5}>
            <div className="relative">
              {/* Background layer with mouse parallax */}
              <MouseParallax intensity={30} smooth={20} className="absolute -inset-40 -z-10">
                <div className="w-full h-full">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
                </div>
              </MouseParallax>

              {/* Main content with 3D card */}
              <ParallaxCard intensity={12}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-16 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-md border border-zinc-700/50 rounded-3xl"
                >
                  <div className="text-center">
                    <h3 className="text-4xl mb-6">
                      <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                        Ultimate Parallax
                      </span>
                    </h3>
                    <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                      This card combines scroll parallax, mouse parallax, and 3D tilt effects for an immersive experience
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      {['Scroll', 'Mouse', '3D Tilt', 'Backdrop'].map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-300"
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ParallaxCard>
            </div>
          </ParallaxContainer>
        </section>

        {/* Performance Info */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl text-center"
          >
            <h3 className="text-3xl mb-6">⚡ Performance Optimized</h3>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              All parallax effects use hardware-accelerated CSS transforms (translate3d) 
              and requestAnimationFrame for buttery-smooth 60fps performance across all devices.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
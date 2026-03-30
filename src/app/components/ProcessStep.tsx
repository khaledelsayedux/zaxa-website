import { motion } from 'motion/react';
import { useTheme } from '@/app/contexts/ThemeContext';

interface ProcessStepProps {
  step: {
    number: string;
    title: string;
    description: string;
    color: string;
    glowColor: string;
  };
  index: number;
  isLast: boolean;
}

export function ProcessStep({ step, index, isLast }: ProcessStepProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative"
    >
      {/* Connecting Line (except for last item) */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          className="absolute left-[40px] lg:left-[48px] top-full w-0.5 h-6 origin-top"
          style={{
            background: `linear-gradient(180deg, ${step.glowColor}, transparent)`,
          }}
        />
      )}

      <div className="flex items-start gap-6 lg:gap-8">
        {/* Large Number Badge */}
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 }
          }}
          className="flex-shrink-0 relative"
        >
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle, ${step.glowColor} 0%, transparent 70%)`,
              filter: 'blur(30px)',
              transform: 'scale(1.5)',
            }}
          />
          
          <div
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(135deg, rgba(29, 205, 159, 0.05) 0%, rgba(16, 185, 129, 0.08) 100%)'
                : 'linear-gradient(135deg, rgba(29, 205, 159, 0.1) 0%, rgba(16, 185, 129, 0.15) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: `2px solid transparent`,
              backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.9)'}, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.9)'}), linear-gradient(135deg, rgba(29, 205, 159, 0.3), rgba(16, 185, 129, 0.3))`,
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: theme === 'dark'
                ? `0 20px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                : `0 20px 50px rgba(29, 205, 159, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
            }}
          >
            {/* Shimmer Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.15) 50%, transparent)',
                animation: 'shimmer 2s infinite',
              }}
            />
            
            <span 
              className={`text-4xl lg:text-5xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent relative z-10`}
              style={{
                textShadow: '0 0 40px rgba(29, 205, 159, 0.5)',
              }}
            >
              {step.number}
            </span>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          whileHover={{ 
            x: 10,
            transition: { duration: 0.3, ease: 'easeOut' }
          }}
          className="flex-1 relative group/card"
        >
          <div
            className="relative p-6 lg:p-8 overflow-hidden"
            style={{
              background: theme === 'dark'
                ? 'rgba(0, 0, 0, 0.3)'
                : 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: `1.5px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(29, 205, 159, 0.2)'}`,
              borderRadius: '32px',
              boxShadow: theme === 'dark'
                ? '0 24px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                : '0 24px 60px rgba(29, 205, 159, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)',
            }}
          >
            {/* Decorative Corner Accent */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 opacity-30"
              style={{
                background: `radial-gradient(circle at top right, ${step.glowColor}, transparent 70%)`,
              }}
            />
            
            {/* Ambient Hover Glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${step.glowColor}, transparent 50%)`,
                borderRadius: '32px',
              }}
            />

            {/* Top Rim Light */}
            <div 
              className="absolute top-0 left-12 right-12 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, ${theme === 'dark' ? '0.2' : '0.6'}), transparent)`,
              }}
            />

            {/* Left Decorative Line */}
            <div 
              className="absolute left-0 top-8 bottom-8 w-1 rounded-full"
              style={{
                background: `linear-gradient(180deg, transparent, ${step.glowColor}, transparent)`,
              }}
            />

            <div className="relative space-y-3">
              <h3 
                className={`text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                style={{
                  textShadow: `0 0 40px ${step.glowColor}`,
                }}
              >
                {step.title}
              </h3>
              <p 
                className={`text-base lg:text-lg leading-relaxed ${theme === 'dark' ? 'text-zinc-300 group-hover/card:text-zinc-200' : 'text-zinc-700 group-hover/card:text-zinc-800'}`}
                style={{
                  transition: 'color 0.3s ease',
                  textShadow: theme === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.5)' : 'none',
                }}
              >
                {step.description}
              </p>
            </div>

            {/* Bottom Subtle Shadow */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.3), transparent)'
                  : 'linear-gradient(90deg, transparent, rgba(29, 205, 159, 0.1), transparent)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
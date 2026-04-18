import { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ExternalLink, Target, Check, Zap, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';

interface CaseStudyData {
  title: string;
  subtitle: string;
  category: string;
  client?: string;
  duration?: string;
  tags: string[];
  heroImage: string;
  logo?: string;
  url?: string;
  overview: string;
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon?: React.ComponentType<{ size?: number; className?: string }>;
    }>;
  };
  results: {
    title: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
    description: string;
  };
  images: string[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  gradient: string;
}

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

export function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center overflow-hidden relative py-20"
      >
        {/* Hero Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(155deg, var(--color-bg-surface) 0%, var(--color-bg-base) 55%, var(--color-bg-surface-inset) 100%)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 75% 60% at 65% 30%, var(--color-accent-fill-sm) 0%, transparent 65%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.35) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0" style={{ height: '35%', background: 'linear-gradient(to bottom, transparent, var(--color-bg-base))' }} />
        </div>
        
        <div 
          className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link to="/projects">
              <motion.div
                className="inline-flex items-center gap-2 mb-8 text-zinc-400 hover:text-white transition-colors"
                whileHover={{ x: -4 }}
              >
                <ArrowLeft size={20} />
              </motion.div>
            </Link>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-full text-sm">
                {data.category}
              </span>
            </motion.div>

            {/* Logo */}
            {data.logo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8 flex justify-center"
              >
                <img 
                  src={data.logo} 
                  alt={`${data.title} logo`}
                  className="h-16 w-auto object-contain"
                />
              </motion.div>
            )}

            {/* Title */}
            <h1 className="text-[64px] mb-6 tracking-tight">
              {data.title}
            </h1>
            <p className="text-[16px] text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-8">
              {data.subtitle}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {data.client && (
                <div className="text-center">
                  <div className="text-sm text-zinc-500 mb-1">Client</div>
                  <div className="text-lg">{data.client}</div>
                </div>
              )}
              {data.duration && (
                <div className="text-center">
                  <div className="text-sm text-zinc-500 mb-1">Duration</div>
                  <div className="text-lg">{data.duration}</div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            {data.url && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <Button>
                    Visit Live Site
                    <ExternalLink size={20} />
                  </Button>
                </a>
              </motion.div>
            )}

            {/* Hero Project Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16 max-w-6xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-zinc-800/50">
                <img 
                  src={data.heroImage} 
                  alt={`${data.title} preview`}
                  className="w-full h-auto object-contain bg-zinc-900/50"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-black">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
              Project <span className={`bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}>Overview</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-6">
              {data.overview}
            </p>
            <div className="flex flex-wrap gap-3">
              {data.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 text-sm bg-zinc-900/50 border border-zinc-800/50 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-zinc-900/30">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target size={32} className="text-green-400" />
                <h2 className="text-4xl md:text-5xl tracking-tight">
                  The <span className={`bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}>Challenge</span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-8">
                {data.challenge.description}
              </p>
              <ul className="space-y-4">
                {data.challenge.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-lg text-zinc-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden h-[500px]"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, var(--color-bg-surface-raised) 0%, var(--color-bg-surface) 100%)',
                }}
              >
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 10% 20%, var(--color-accent-fill-sm) 0%, transparent 60%)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target size={120} className="text-green-400/20" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-black">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden lg:order-1 h-[500px]"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, var(--color-bg-surface-raised) 0%, var(--color-bg-surface) 100%)',
                }}
              >
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 90% 20%, var(--color-accent-fill-sm) 0%, transparent 60%)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap size={120} className="text-violet-400/20" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap size={32} className="text-violet-400" />
                <h2 className="text-4xl md:text-5xl tracking-tight">
                  Our <span className={`bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}>Solution</span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-8">
                {data.solution.description}
              </p>
              <ul className="space-y-4">
                {data.solution.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check size={20} className="text-violet-400 flex-shrink-0 mt-1" />
                    <span className="text-lg text-zinc-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-zinc-900/30">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Key <span className={`bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}>Features</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              {data.features.title}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.items.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl hover:border-green-400/30 transition-all duration-300"
              >
                {feature.icon && (
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/10 to-green-500/10 flex items-center justify-center">
                    <feature.icon size={28} className="text-green-400" />
                  </div>
                )}
                <h3 className="text-2xl mb-3 group-hover:text-foreground transition-colors">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-black">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp size={32} className="text-green-400" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
                The <span className={`bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}>Results</span>
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              {data.results.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {data.results.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative p-10 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-zinc-800/50 rounded-3xl text-center overflow-hidden group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></motion.div>
                <div className="relative">
                  <div className={`text-5xl md:text-6xl mb-3 font-light bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}>
                    {metric.value}
                  </div>
                  <div className="text-lg text-zinc-400">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Results Pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden h-[600px] relative"
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, var(--color-bg-surface-raised) 0%, var(--color-bg-surface) 100%)',
              }}
            >
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, var(--color-accent-fill-sm) 0%, transparent 60%)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <TrendingUp size={140} className="text-green-400/15" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-zinc-900/30">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Technologies <span className={`bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}>Used</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {data.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-8 py-4 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl hover:border-green-400/30 transition-all duration-300 text-lg"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {data.testimonial && (
        <section className="py-32 px-6 sm:px-8 lg:px-12 bg-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-12 md:p-16 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-zinc-800/50 rounded-3xl"
            >
              <div className="text-6xl text-teal-400/20 mb-6">"</div>
              <p className="text-2xl md:text-3xl text-zinc-300 mb-8 leading-relaxed">
                {data.testimonial.quote}
              </p>
              <div>
                <div className="text-xl font-medium mb-1">{data.testimonial.author}</div>
                <div className="text-zinc-500">{data.testimonial.role}</div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32 px-6 sm:px-8 lg:px-12 bg-zinc-900/30">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed">
              Let's build something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button>Get in Touch</Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects">
                  <Button variant="outline" className="!border-0">View More Projects</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
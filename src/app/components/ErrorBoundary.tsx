import { useRouteError, Link, isRouteErrorResponse } from 'react-router';
import { motion } from 'motion/react';
import { Home, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export function ErrorBoundary() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  if (isNotFound) {
    // Render the NotFoundPage content directly for 404 errors
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Ambient gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1DCD9F]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 
                className="text-[120px] md:text-[180px] lg:text-[240px] font-bold leading-none tracking-tighter"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                <span className="bg-gradient-to-r from-[#1DCD9F] via-emerald-400 to-[#1DCD9F] bg-clip-text text-transparent">
                  404
                </span>
              </h1>
            </motion.div>

            {/* Label */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span 
                className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-[#1DCD9F]/80 uppercase" 
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                [ PAGE NOT FOUND ]
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight text-white"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Looks like you've ventured into uncharted territory
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/">
                <Button variant="primary" className="group">
                  <Home size={18} className="mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="secondary" className="group">
                  View Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  // For other errors, show a generic error page
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(226, 232, 240, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Error Icon */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <AlertTriangle size={80} className="text-red-500 relative z-10" />
            </div>
          </motion.div>

          {/* Label */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span 
              className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-red-500/80 uppercase" 
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              [ ERROR ]
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight text-white"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Oops! Something went wrong
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We encountered an unexpected error. Please try refreshing the page or return to the homepage.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/">
              <Button variant="primary" className="group">
                <Home size={18} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-all duration-300"
            >
              Refresh Page
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

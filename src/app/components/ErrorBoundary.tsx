import { useRouteError, Link, isRouteErrorResponse } from 'react-router';
import { Home, AlertTriangle } from 'lucide-react';
import { Button } from './Button';

export function ErrorBoundary() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  if (isNotFound) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--color-border-default) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-border-default) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl shell-error-orb"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div>
            <div
              className="mb-8 shell-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <h1 
                className="text-[120px] md:text-[180px] lg:text-[240px] font-bold leading-none tracking-tighter"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                  404
                </span>
              </h1>
            </div>

            <div
              className="mb-6 shell-fade-in-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <span 
                className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-green-400/80 uppercase" 
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                [ PAGE NOT FOUND ]
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight text-white shell-fade-in-up"
              style={{ fontFamily: "'Inter Tight', sans-serif", animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              Looks like you've ventured into uncharted territory
            </h2>

            <p
              className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed shell-fade-in-up"
              style={{ fontFamily: "'Inter', sans-serif", animationDelay: '0.5s', animationFillMode: 'both' }}
            >
              The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 shell-fade-in-up"
              style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
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
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(var(--color-border-default) 1px, transparent 1px),
                         linear-gradient(90deg, var(--color-border-default) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div>
          <div
            className="mb-8 flex justify-center shell-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl shell-error-icon-glow"
              />
              <AlertTriangle size={80} className="text-red-500 relative z-10" />
            </div>
          </div>

          <div
            className="mb-6 shell-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <span 
              className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] text-red-500/80 uppercase" 
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              [ ERROR ]
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-6 tracking-tight text-white shell-fade-in-up"
            style={{ fontFamily: "'Inter Tight', sans-serif", animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Oops! Something went wrong
          </h2>

          <p
            className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed shell-fade-in-up"
            style={{ fontFamily: "'Inter', sans-serif", animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            We encountered an unexpected error. Please try refreshing the page or return to the homepage.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 shell-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <Link to="/">
              <Button variant="primary" className="group">
                <Home size={18} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

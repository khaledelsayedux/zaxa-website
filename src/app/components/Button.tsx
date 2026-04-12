import { ReactNode } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import { usePlayTabSound } from '@/app/hooks/usePlayTabSound';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'destructive';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  pill?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  pill = false,
}: ButtonProps) {
  const { theme } = useTheme();
  const playTabSound = usePlayTabSound();

  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    playTabSound();
    if (onClick) onClick();
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`
        group relative px-8 md:px-10 py-3 md:py-4
        transition-all duration-300 ease-out
        inline-flex items-center justify-center gap-3 
        font-medium
        min-h-[48px] md:min-h-[56px]
        touch-manipulation
        disabled:cursor-not-allowed
        disabled:opacity-50
        overflow-hidden
        motion-safe:transition-transform
        ${disabled ? '' : 'hover:scale-[1.02] active:scale-[0.98]'}
        motion-reduce:hover:scale-100 motion-reduce:active:scale-100
        ${pill ? 'rounded-full' : 'rounded-lg'}
        text-[#5FEFBF]
        ${className}
      `}
      style={{
        fontWeight: 600,
        fontSize: '16px',
        letterSpacing: '-0.02em',
        // Subtle glass effect matching Explore Services button
        background: theme === 'dark'
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(14px) saturate(140%)',
        WebkitBackdropFilter: 'blur(14px) saturate(140%)',
        boxShadow: 'none',
      }}
    >
      {/* Frost diffusion overlay */}
      <div 
        className={`absolute inset-0 pointer-events-none ${pill ? 'rounded-full' : 'rounded-lg'}`}
        style={{
          background: 'transparent',
        }}
      />
      
      {/* Noise/grain texture */}
      <div 
        className={`absolute inset-0 opacity-[0.03] pointer-events-none ${pill ? 'rounded-full' : 'rounded-lg'} mix-blend-overlay`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Inner highlight stroke */}
      <div 
        className={`absolute inset-[0.5px] pointer-events-none ${pill ? 'rounded-full' : 'rounded-lg'}`}
        style={{
          border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.40)'}`,
        }}
      />
      
      {/* Top-edge specular light band */}
      <div 
        className={`absolute top-[2px] left-[15%] right-[15%] h-[0.5px] pointer-events-none ${pill ? 'rounded-full' : 'rounded-lg'}`}
        style={{
          background: `linear-gradient(90deg, transparent, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.30)' : 'rgba(255, 255, 255, 0.50)'}, transparent)`,
        }}
      />
      
      {/* Hover brightness effect with teal tint */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none ${pill ? 'rounded-full' : 'rounded-lg'}`}
        style={{
          border: '1px solid rgba(29, 205, 159, 0.5)',
          background: 'transparent',
        }}
      />
      
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
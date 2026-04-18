"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "motion/react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { cn } from "./utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const { theme } = useTheme();
  
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-auto w-fit items-center justify-center rounded-lg p-2 flex gap-1",
        className,
      )}
      style={{
        // Soft inset track beneath tabs
        background: theme === 'dark' 
          ? 'rgba(0, 0, 0, 0.15)'
          : 'rgba(0, 0, 0, 0.04)',
        boxShadow: theme === 'dark'
          ? 'inset 0 1px 3px rgba(0, 0, 0, 0.4)'
          : 'inset 0 1px 2px rgba(0, 0, 0, 0.08)',
      }}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { theme } = useTheme();
  
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative px-5 py-2.5 text-base font-medium whitespace-nowrap transition-all duration-300 rounded-lg inline-flex items-center justify-center gap-1.5 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      style={{
        fontFamily: "'Cairo', sans-serif",
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
      }}
      {...props}
    >
      {/* Text content */}
      <motion.span
        className={cn(
          "relative z-10 transition-all duration-300",
          props['data-state'] === 'active'
            ? 'text-zinc-900 dark:text-white'
            : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
        )}
        whileHover={{ scale: 1.02 }}
      >
        {props.children}
      </motion.span>
      
      {/* Active pill - iOS-26 Liquid Glass (Solid Teal/Mint - no gradient) */}
      {props['data-state'] === 'active' && (
        <motion.div
          layoutId="activeTabPill"
          className="absolute inset-0 rounded-lg overflow-hidden"
          initial={false}
          transition={{ 
            type: 'spring', 
            stiffness: 500, 
            damping: 35,
            mass: 0.8
          }}
          style={{
            // Primary glass layer (Solid Teal/Mint - no gradient)
            background: theme === 'dark'
              ? 'rgba(29, 205, 159, 0.24)'
              : 'rgba(29, 205, 159, 0.30)',
            backdropFilter: 'blur(28px) saturate(180%)',
            WebkitBackdropFilter: 'blur(28px) saturate(180%)',
            boxShadow: theme === 'dark'
              ? '0 6px 18px var(--color-accent-fill-lg), 0 2px 8px rgba(29, 205, 159, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
              : '0 6px 18px var(--color-accent-fill-md), 0 2px 8px var(--color-accent-fill-sm), inset 0 1px 0 rgba(255, 255, 255, 0.40)',
          }}
        >
          {/* Secondary backing layer (8% opacity for depth) */}
          <div 
            className="absolute inset-0"
            style={{
              background: theme === 'dark'
                ? 'var(--color-accent-fill-md)'
                : 'rgba(29, 205, 159, 0.15)',
              zIndex: -1,
            }}
          />
          
          {/* Frost diffusion overlay (10%) */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, transparent 60%)',
            }}
          />
          
          {/* Noise/grain texture (3%) */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Inner highlight stroke (1px white @ 15%) */}
          <div 
            className="absolute inset-[0.5px] rounded-lg pointer-events-none"
            style={{
              border: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.50)'}`,
            }}
          />
          
          {/* Top-edge specular light band */}
          <div 
            className="absolute top-[2px] left-[15%] right-[15%] h-[0.5px] rounded-lg pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.60)'}, transparent)`,
            }}
          />
        </motion.div>
      )}
      
      {/* Hover effect - subtle brightness increase */}
      {props['data-state'] !== 'active' && (
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-100"
          style={{
            background: theme === 'dark'
              ? 'var(--color-border-subtle)'
              : 'rgba(0, 0, 0, 0.03)',
          }}
        />
      )}
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
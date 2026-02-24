'use client';

import { motion } from 'framer-motion';

export function Skeleton({
  className = '',
  variant = 'default',
  width,
  height,
  animated = true,
  style,
}) {
  const baseStyles = 'bg-white/5';
  const variantStyles = {
    default: 'rounded',
    circular: 'rounded-full',
    text: 'rounded h-4',
    rectangular: 'rounded-lg',
  };

  return (
    <motion.div
      initial={animated ? { opacity: 0.5 } : undefined}
      animate={animated ? { opacity: [0.5, 0.8, 0.5] } : undefined}
      transition={animated ? { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } : undefined}
      className={`${baseStyles} ${variantStyles[variant]} skeleton-shimmer ${className}`}
      style={{ width, height, ...style }}
    />
  );
}

// Pre-built skeleton patterns
export function CardSkeleton({ className = '' }) {
  return (
    <div className={`glass-panel rounded-xl p-6 space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton variant="circular" className="w-8 h-8" />
      </div>
      <Skeleton className="h-8 w-32" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  );
}

export function MetricSkeleton() {
  return (
    <div className="glass-panel p-4 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <Skeleton variant="circular" className="w-4 h-4" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className="h-8 w-20" />
    </div>
  );
}

export function FeatureCardSkeleton() {
  return (
    <div className="glass-panel p-6 rounded-xl space-y-4">
      <Skeleton className="w-12 h-12 rounded-xl" />
      <Skeleton className="h-5 w-32" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-3/5" />
      </div>
    </div>
  );
}

export function TeamMemberSkeleton() {
  return (
    <div className="glass-panel p-6 rounded-xl space-y-4 text-center">
      <Skeleton variant="circular" className="w-24 h-24 mx-auto" />
      <Skeleton className="h-5 w-32 mx-auto" />
      <Skeleton className="h-4 w-24 mx-auto" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5 mx-auto" />
      </div>
    </div>
  );
}

export function NavSkeleton() {
  return (
    <div className="flex items-center justify-between p-4">
      <Skeleton className="h-8 w-32" />
      <div className="flex gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-4 w-16" />
        ))}
      </div>
      <Skeleton className="h-10 w-24 rounded-full" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="space-y-8 py-20 text-center">
      <Skeleton className="h-4 w-32 mx-auto rounded-full" />
      <div className="space-y-4">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-12 w-1/2 mx-auto" />
      </div>
      <div className="space-y-2 max-w-2xl mx-auto">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6 mx-auto" />
      </div>
      <div className="flex gap-4 justify-center">
        <Skeleton className="h-12 w-36 rounded-full" />
        <Skeleton className="h-12 w-36 rounded-full" />
      </div>
    </div>
  );
}

// Loading overlay with spinner
export function LoadingOverlay({ message = 'Loading...' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-[var(--aegis-void)]/80 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="text-center space-y-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-10 h-10 border-2 border-[var(--aegis-accent)]/30 border-t-[var(--aegis-accent)] rounded-full mx-auto"
        />
        <p className="text-[var(--aegis-text-muted)] text-sm font-mono">{message}</p>
      </div>
    </motion.div>
  );
}

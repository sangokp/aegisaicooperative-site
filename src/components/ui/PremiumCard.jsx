'use client';

import { motion } from 'framer-motion';

export function PremiumCard({
  children,
  className = '',
  hover = true,
  glow = false,
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        glass-panel rounded-2xl p-6
        ${hover ? 'glass-panel-hover cursor-pointer' : ''}
        ${glow ? 'hover-glow' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Metric card with animated number
export function MetricCard({
  icon,
  label,
  value,
  trend,
  trendUp,
  className = '',
}) {
  return (
    <PremiumCard className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[var(--aegis-text-muted)]">
          {icon && <span className="text-[var(--aegis-accent)]">{icon}</span>}
          <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
        </div>
        {trend && (
          <span className={`text-xs font-medium ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
            {trendUp ? '+' : ''}{trend}
          </span>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl font-bold text-[var(--aegis-text-primary)]"
      >
        {value}
      </motion.div>
    </PremiumCard>
  );
}

// Glass panel variant
export function GlassPanel({
  children,
  className = '',
  blur = 'md',
  ...props
}) {
  const blurMap = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`
        bg-white/5 border border-white/10 rounded-xl
        ${blurMap[blur]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Feature card with icon
export function FeatureCard({
  icon,
  title,
  description,
  className = '',
}) {
  return (
    <PremiumCard hover glow className={className}>
      <div className="space-y-4">
        {icon && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-12 h-12 rounded-xl bg-[var(--aegis-accent)]/10 flex items-center justify-center text-[var(--aegis-accent)]"
          >
            {icon}
          </motion.div>
        )}
        <h3 className="text-lg font-semibold text-[var(--aegis-text-primary)]">{title}</h3>
        <p className="text-sm text-[var(--aegis-text-muted)] leading-relaxed">{description}</p>
      </div>
    </PremiumCard>
  );
}

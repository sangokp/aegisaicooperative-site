'use client';

import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-[var(--aegis-accent)] text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]',
  secondary: 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[var(--aegis-accent)]/30',
  ghost: 'bg-transparent text-white/60 hover:text-white hover:bg-white/5',
  danger: 'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2.5',
};

export function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      disabled={disabled || loading}
      className={`
        relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-[var(--aegis-accent)]/50 focus:ring-offset-2 focus:ring-offset-[var(--aegis-void)]
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {/* Glow effect on hover */}
      <motion.span
        className="absolute inset-0 rounded-lg opacity-0"
        style={{
          background: variant === 'primary'
            ? 'radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <span className="relative flex items-center gap-inherit">
        {loading ? (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full"
          />
        ) : (
          <>
            {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
          </>
        )}
      </span>
    </motion.button>
  );
}

// Icon-only button variant
const iconSizes = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

export function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  tooltip,
  className = '',
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      title={tooltip}
      className={`
        inline-flex items-center justify-center rounded-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-[var(--aegis-accent)]/50
        ${variants[variant]}
        ${iconSizes[size]}
        ${className}
      `}
      {...props}
    >
      {icon}
    </motion.button>
  );
}

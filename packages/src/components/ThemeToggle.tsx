'use client';

/**
 * AEGIS Theme Toggle Component
 * Animated button to switch between light and dark themes
 */

import { useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { DayNightTransition } from './DayNightTransition';

export interface ThemeToggleProps {
  /** Additional CSS classes */
  className?: string;
  /** Button size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show the full-screen celestial animation */
  showAnimation?: boolean;
  /** Accessible label for the button */
  ariaLabel?: string;
  /** Custom styling variant */
  variant?: 'default' | 'ghost' | 'outline';
}

const sizes = {
  sm: { button: 'w-8 h-8', icon: 14, glow: 'blur-[8px]' },
  md: { button: 'w-10 h-10', icon: 18, glow: 'blur-[10px]' },
  lg: { button: 'w-12 h-12', icon: 22, glow: 'blur-[12px]' },
};

/**
 * Theme toggle button with animated sun/moon icons
 */
export function ThemeToggle({
  className = '',
  size = 'md',
  showAnimation = true,
  ariaLabel = 'Toggle theme',
  variant = 'default',
}: ThemeToggleProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { resolvedTheme, toggleTheme, isTransitioning, transitionOrigin, reducedMotion } = useTheme();

  const isDark = resolvedTheme === 'dark';
  const { button: buttonSize, icon: iconSize, glow } = sizes[size];

  const handleToggle = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      const rect = buttonRef.current?.getBoundingClientRect();
      let x: number, y: number;

      if (rect) {
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      } else if ('clientX' in e) {
        x = e.clientX;
        y = e.clientY;
      } else {
        x = window.innerWidth / 2;
        y = 100;
      }

      toggleTheme({ x, y });
    },
    [toggleTheme]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleToggle(e);
      }
    },
    [handleToggle]
  );

  const variantStyles = {
    default: `
      bg-[var(--aegis-surface)]
      border border-[var(--aegis-border)]
      hover:border-[var(--aegis-border-hover)]
      hover:bg-[var(--aegis-charcoal)]
    `,
    ghost: `
      bg-transparent
      hover:bg-[var(--aegis-surface)]
    `,
    outline: `
      bg-transparent
      border-2 border-[var(--aegis-border)]
      hover:border-[var(--aegis-accent)]
      hover:bg-[var(--aegis-accent-muted)]
    `,
  };

  return (
    <>
      <motion.button
        ref={buttonRef}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`
          relative flex items-center justify-center
          ${buttonSize}
          rounded-full
          ${variantStyles[variant]}
          transition-all duration-300
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aegis-accent)] focus-visible:ring-offset-2
          focus-visible:ring-offset-[var(--aegis-void)]
          ${className}
        `}
        whileHover={reducedMotion ? {} : { scale: 1.05 }}
        whileTap={reducedMotion ? {} : { scale: 0.95 }}
        aria-label={ariaLabel}
        aria-pressed={!isDark}
        role="switch"
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {/* Icon with rotation animation */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={resolvedTheme}
            initial={reducedMotion ? {} : { y: -12, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={reducedMotion ? {} : { y: 12, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Moon
                size={iconSize}
                className="text-blue-300"
                strokeWidth={1.5}
              />
            ) : (
              <Sun
                size={iconSize}
                className="text-amber-500"
                strokeWidth={1.5}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Ambient glow effect */}
        <motion.div
          className={`
            absolute inset-0 rounded-full -z-10
            ${isDark ? 'bg-blue-400/20' : 'bg-amber-400/20'}
            ${glow}
          `}
          animate={
            reducedMotion
              ? {}
              : {
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.1, 0.2],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.button>

      {/* Full-screen celestial transition overlay */}
      {showAnimation && !reducedMotion && (
        <DayNightTransition
          isTransitioning={isTransitioning}
          targetTheme={isDark ? 'light' : 'dark'}
          origin={transitionOrigin}
        />
      )}
    </>
  );
}

export default ThemeToggle;

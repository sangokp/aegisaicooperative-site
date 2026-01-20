'use client';

/**
 * AEGIS Day/Night Celestial Transition
 * Full-screen animation overlay during theme switches
 */

import { motion, AnimatePresence } from 'framer-motion';
import type { ResolvedTheme, TransitionOrigin } from '../hooks/useTheme';

interface DayNightTransitionProps {
  isTransitioning: boolean;
  targetTheme: ResolvedTheme;
  origin: TransitionOrigin | null;
}

/**
 * Celestial transition animation component
 * Creates a circular wipe with sun/moon and particle effects
 */
export function DayNightTransition({
  isTransitioning,
  targetTheme,
  origin,
}: DayNightTransitionProps) {
  const isToLight = targetTheme === 'light';
  const originX = origin?.x ?? (typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const originY = origin?.y ?? 100;

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="aegis-celestial-transition fixed inset-0 z-[99999] pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Circular Wipe Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: isToLight
                ? 'radial-gradient(circle, #faf9f7 0%, #FF7E5F 40%, rgba(255,126,95,0.3) 70%, transparent 100%)'
                : 'radial-gradient(circle, #0a0a0b 0%, #3b82f6 40%, rgba(59,130,246,0.3) 70%, transparent 100%)',
            }}
            initial={{
              clipPath: `circle(0% at ${originX}px ${originY}px)`,
            }}
            animate={{
              clipPath: `circle(150% at ${originX}px ${originY}px)`,
            }}
            exit={{
              clipPath: `circle(0% at ${originX}px ${originY}px)`,
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
          />

          {/* Celestial Body (Sun or Moon) */}
          <motion.div
            className="absolute"
            style={{
              left: originX - 30,
              top: originY - 30,
            }}
            initial={{ scale: 1, rotate: 0, opacity: 1 }}
            animate={{
              scale: [1, 1.8, 1.2],
              rotate: isToLight ? [0, 180] : [0, -180],
              y: [0, -60, -30],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {isToLight ? (
              <SunIcon className="w-[60px] h-[60px]" />
            ) : (
              <MoonIcon className="w-[60px] h-[60px]" />
            )}
          </motion.div>

          {/* Star particles for dark mode */}
          {!isToLight && <StarField originX={originX} originY={originY} />}

          {/* Sun rays for light mode */}
          {isToLight && <SunRays originX={originX} originY={originY} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Sun icon with gradient
 */
function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ filter: 'drop-shadow(0 0 20px rgba(255, 200, 100, 0.8))' }}
    >
      <circle cx="12" cy="12" r="5" fill="url(#sunGradient)" />
      <g stroke="url(#rayGradient)" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
      <defs>
        <radialGradient id="sunGradient">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FBBF24" />
        </radialGradient>
        <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Moon icon with gradient
 */
function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ filter: 'drop-shadow(0 0 15px rgba(147, 197, 253, 0.6))' }}
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="url(#moonGradient)"
        stroke="url(#moonStroke)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E7FF" />
          <stop offset="100%" stopColor="#A5B4FC" />
        </linearGradient>
        <linearGradient id="moonStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C7D2FE" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Star field particles for dark mode transition
 */
function StarField({ originX, originY }: { originX: number; originY: number }) {
  // Generate deterministic star positions
  const stars = Array.from({ length: 25 }, (_, i) => {
    const angle = (i / 25) * Math.PI * 2;
    const distance = 100 + (i % 5) * 80;
    return {
      id: i,
      x: originX + Math.cos(angle) * distance,
      y: originY + Math.sin(angle) * distance,
      size: 2 + (i % 3),
      delay: (i % 8) * 0.05,
    };
  });

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.6)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.8],
            scale: [0, 1.5, 1],
          }}
          transition={{
            duration: 0.5,
            delay: star.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </>
  );
}

/**
 * Sun rays for light mode transition
 */
function SunRays({ originX, originY }: { originX: number; originY: number }) {
  const rays = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    rotation: i * 30,
    length: 80 + (i % 3) * 40,
    delay: i * 0.03,
  }));

  return (
    <div
      className="absolute"
      style={{ left: originX, top: originY, transform: 'translate(-50%, -50%)' }}
    >
      {rays.map((ray) => (
        <motion.div
          key={ray.id}
          className="absolute origin-bottom"
          style={{
            width: 3,
            height: ray.length,
            background: 'linear-gradient(to top, rgba(251, 191, 36, 0.8), transparent)',
            transform: `rotate(${ray.rotation}deg)`,
            left: -1.5,
            bottom: 0,
            borderRadius: 2,
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: [0, 1, 0.7],
            opacity: [0, 0.9, 0.4],
          }}
          transition={{
            duration: 0.6,
            delay: ray.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

export default DayNightTransition;

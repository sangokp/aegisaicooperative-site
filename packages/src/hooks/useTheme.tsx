'use client';

/**
 * AEGIS Theme Hook
 * Manages theme state, persistence, and transitions
 */

import { useState, useEffect, useCallback, createContext, useContext, type ReactNode } from 'react';
import { getStoredTheme, setStoredTheme, type Theme } from '../utils/storage';
import { getSystemPreference, watchSystemPreference, prefersReducedMotion, type ResolvedTheme } from '../utils/system-preference';

export type { Theme, ResolvedTheme };

export interface TransitionOrigin {
  x: number;
  y: number;
}

export interface ThemeContextValue {
  /** Current theme setting ('light', 'dark', or 'system') */
  theme: Theme;
  /** Actual resolved theme ('light' or 'dark') */
  resolvedTheme: ResolvedTheme;
  /** Set theme preference */
  setTheme: (theme: Theme) => void;
  /** Toggle between light and dark */
  toggleTheme: (origin?: TransitionOrigin) => void;
  /** Whether the celestial animation is playing */
  isTransitioning: boolean;
  /** Origin point for the circular wipe animation */
  transitionOrigin: TransitionOrigin | null;
  /** Whether reduced motion is preferred */
  reducedMotion: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Hook to access theme context
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export interface ThemeProviderProps {
  children: ReactNode;
  /** Default theme if none stored ('system' respects OS preference) */
  defaultTheme?: Theme;
  /** localStorage key for persistence */
  storageKey?: string;
  /** Duration of theme transition animation in ms */
  transitionDuration?: number;
  /** Disable the celestial animation overlay */
  disableAnimation?: boolean;
}

/**
 * Theme Provider Component
 * Wrap your app with this to enable theme switching
 */
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'aegis-theme',
  transitionDuration = 800,
  disableAnimation = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState<TransitionOrigin | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize from storage on mount
  useEffect(() => {
    const stored = getStoredTheme(storageKey);
    if (stored) {
      setThemeState(stored);
    }
    setReducedMotion(prefersReducedMotion());
    setMounted(true);
  }, [storageKey]);

  // Resolve 'system' theme to actual light/dark
  useEffect(() => {
    const resolve = (t: Theme): ResolvedTheme => {
      if (t === 'system') {
        return getSystemPreference();
      }
      return t;
    };

    setResolvedTheme(resolve(theme));

    // Watch for system preference changes when in 'system' mode
    if (theme === 'system') {
      return watchSystemPreference((pref) => {
        setResolvedTheme(pref);
      });
    }
  }, [theme]);

  // Apply theme class to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // Remove existing theme classes
    root.classList.remove('light', 'dark');

    // Add current theme class
    root.classList.add(resolvedTheme);

    // Update meta theme-color for mobile browsers
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute(
        'content',
        resolvedTheme === 'dark' ? '#0a0a0b' : '#faf9f7'
      );
    }

    // Update color-scheme for native form elements
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    setStoredTheme(storageKey, newTheme);
  }, [storageKey]);

  const toggleTheme = useCallback((origin?: TransitionOrigin) => {
    const shouldAnimate = !disableAnimation && !reducedMotion && origin;

    if (shouldAnimate && origin) {
      setTransitionOrigin(origin);
      setIsTransitioning(true);
    }

    // Calculate the new theme
    const newTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark';

    if (shouldAnimate) {
      // Apply theme mid-animation for seamless visual transition
      setTimeout(() => {
        setTheme(newTheme);
      }, transitionDuration * 0.4);

      // End transition animation
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionOrigin(null);
      }, transitionDuration);
    } else {
      // Instant switch without animation
      setTheme(newTheme);
    }
  }, [resolvedTheme, setTheme, transitionDuration, disableAnimation, reducedMotion]);

  // Prevent flash during SSR/hydration
  if (!mounted) {
    return (
      <ThemeContext.Provider
        value={{
          theme: defaultTheme,
          resolvedTheme: 'dark',
          setTheme: () => {},
          toggleTheme: () => {},
          isTransitioning: false,
          transitionOrigin: null,
          reducedMotion: false,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
        isTransitioning,
        transitionOrigin,
        reducedMotion,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };

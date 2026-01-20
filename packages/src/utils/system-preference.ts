/**
 * AEGIS Theme System Preference Utilities
 * Detects and watches OS-level dark/light mode preference
 */

export type ResolvedTheme = 'light' | 'dark';

/**
 * Get current system color scheme preference
 */
export function getSystemPreference(): ResolvedTheme {
  if (typeof window === 'undefined') return 'dark';

  try {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  } catch {
    return 'dark';
  }
}

/**
 * Watch for system preference changes
 * Returns a cleanup function to stop watching
 */
export function watchSystemPreference(
  callback: (preference: ResolvedTheme) => void
): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  try {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handler = (event: MediaQueryListEvent) => {
      callback(event.matches ? 'dark' : 'light');
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }

    // Legacy support
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  } catch {
    return () => {};
  }
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

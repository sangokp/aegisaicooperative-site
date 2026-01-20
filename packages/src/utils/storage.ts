/**
 * AEGIS Theme Storage Utilities
 * Handles localStorage persistence for theme preference
 */

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY_DEFAULT = 'aegis-theme';

/**
 * Get stored theme preference from localStorage
 */
export function getStoredTheme(key: string = STORAGE_KEY_DEFAULT): Theme | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(key);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
    return null;
  } catch {
    // localStorage might be blocked (e.g., private browsing)
    return null;
  }
}

/**
 * Store theme preference in localStorage
 */
export function setStoredTheme(key: string = STORAGE_KEY_DEFAULT, theme: Theme): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(key, theme);
  } catch {
    // Silently fail if localStorage is blocked
  }
}

/**
 * Remove stored theme preference
 */
export function clearStoredTheme(key: string = STORAGE_KEY_DEFAULT): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(key);
  } catch {
    // Silently fail
  }
}

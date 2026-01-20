/**
 * @aegis/theme
 * AEGIS OS Theme System with animated day/night transitions
 *
 * @example
 * ```tsx
 * import { ThemeProvider, ThemeToggle, useTheme } from '@aegis/theme';
 *
 * function App() {
 *   return (
 *     <ThemeProvider defaultTheme="system">
 *       <Navbar />
 *       <Content />
 *     </ThemeProvider>
 *   );
 * }
 *
 * function Navbar() {
 *   return (
 *     <nav>
 *       <ThemeToggle size="sm" />
 *     </nav>
 *   );
 * }
 * ```
 */

// Core hook and provider
export {
  useTheme,
  ThemeProvider,
  ThemeContext,
  type Theme,
  type ResolvedTheme,
  type ThemeContextValue,
  type ThemeProviderProps,
  type TransitionOrigin,
} from './hooks/useTheme';

// Components
export { ThemeToggle, type ThemeToggleProps } from './components/ThemeToggle';
export { DayNightTransition } from './components/DayNightTransition';
export { NextThemeProvider } from './components/NextThemeProvider';

// Utilities
export {
  getStoredTheme,
  setStoredTheme,
  clearStoredTheme,
} from './utils/storage';

export {
  getSystemPreference,
  watchSystemPreference,
  prefersReducedMotion,
} from './utils/system-preference';

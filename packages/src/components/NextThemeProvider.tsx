'use client';

/**
 * Next.js Theme Provider Wrapper
 * Client component wrapper for use in Next.js app directory
 */

import { ThemeProvider, type ThemeProviderProps } from '../hooks/useTheme';

export function NextThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}

export default NextThemeProvider;

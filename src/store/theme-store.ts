/**
 * Theme Store
 * Manages theme state (dark/light/system)
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeValue } from '@/constants/themes';

interface ThemeState {
  theme: ThemeValue;
  resolvedTheme: 'light' | 'dark';

  // Actions
  setTheme: (theme: ThemeValue) => void;
  toggleTheme: () => void;
}

function getResolvedTheme(theme: ThemeValue): 'light' | 'dark' {
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return theme;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      resolvedTheme: getResolvedTheme('system'),

      setTheme: (theme) =>
        set({
          theme,
          resolvedTheme: getResolvedTheme(theme),
        }),

      toggleTheme: () =>
        set((state) => {
          const newTheme = state.resolvedTheme === 'light' ? 'dark' : 'light';
          return {
            theme: newTheme,
            resolvedTheme: newTheme,
          };
        }),
    }),
    {
      name: 'purnit-theme-store',
    },
  ),
);

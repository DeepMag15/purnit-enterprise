/**
 * Theme constants
 */

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

export type ThemeKey = keyof typeof THEMES;
export type ThemeValue = (typeof THEMES)[ThemeKey];

export const THEME_LABELS: Record<ThemeValue, string> = {
  [THEMES.LIGHT]: 'Light',
  [THEMES.DARK]: 'Dark',
  [THEMES.SYSTEM]: 'System',
};

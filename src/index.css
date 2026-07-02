@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
@import 'tailwindcss';

/*
 * ─── CSS Custom Properties / Design Tokens ───────────────────────────────
 * shadcn/ui compatible CSS variable system
 */

@custom-variant dark (&:is(.dark *));

:root {
  /* Background & Foreground */
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);

  /* Card */
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);

  /* Popover */
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);

  /* Primary */
  --primary: oklch(0.546 0.245 262.881);
  --primary-foreground: oklch(0.981 0.004 286.375);

  /* Secondary */
  --secondary: oklch(0.97 0.001 286.375);
  --secondary-foreground: oklch(0.21 0.006 285.885);

  /* Muted */
  --muted: oklch(0.97 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);

  /* Accent */
  --accent: oklch(0.97 0.001 286.375);
  --accent-foreground: oklch(0.21 0.006 285.885);

  /* Destructive */
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);

  /* Border / Input / Ring */
  --border: oklch(0.92 0.004 286.32);
  --input: oklch(0.92 0.004 286.32);
  --ring: oklch(0.546 0.245 262.881);

  /* Sidebar */
  --sidebar: oklch(0.985 0.001 286.375);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-border: oklch(0.92 0.004 286.32);

  /* Border Radius */
  --radius: 0.625rem;
}

.dark {
  /* Background & Foreground */
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0.001 286.375);

  /* Card */
  --card: oklch(0.18 0.007 285.823);
  --card-foreground: oklch(0.985 0.001 286.375);

  /* Popover */
  --popover: oklch(0.18 0.007 285.823);
  --popover-foreground: oklch(0.985 0.001 286.375);

  /* Primary */
  --primary: oklch(0.637 0.237 265.522);
  --primary-foreground: oklch(0.981 0.004 286.375);

  /* Secondary */
  --secondary: oklch(0.24 0.01 285.885);
  --secondary-foreground: oklch(0.985 0.001 286.375);

  /* Muted */
  --muted: oklch(0.24 0.01 285.885);
  --muted-foreground: oklch(0.65 0.015 285.938);

  /* Accent */
  --accent: oklch(0.24 0.01 285.885);
  --accent-foreground: oklch(0.985 0.001 286.375);

  /* Destructive */
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: oklch(0.704 0.191 22.216);

  /* Border / Input / Ring */
  --border: oklch(0.3 0.012 285.885);
  --input: oklch(0.3 0.012 285.885);
  --ring: oklch(0.637 0.237 265.522);

  /* Sidebar */
  --sidebar: oklch(0.16 0.006 285.823);
  --sidebar-foreground: oklch(0.985 0.001 286.375);
  --sidebar-border: oklch(0.3 0.012 285.885);
}

/*
 * ─── Theme Application ───────────────────────────────────────────────────
 */

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Animations */
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
}

/*
 * ─── Base Styles ──────────────────────────────────────────────────────────
 */

* {
  border-color: var(--border);
}

body {
  font-family: var(--font-sans);
  background-color: var(--background);
  color: var(--foreground);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*
 * ─── Scrollbar ────────────────────────────────────────────────────────────
 */

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--muted-foreground);
  border-radius: 9999px;
  opacity: 0.3;
}

::-webkit-scrollbar-thumb:hover {
  opacity: 0.5;
}

/*
 * ─── Keyframes ────────────────────────────────────────────────────────────
 */

@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}

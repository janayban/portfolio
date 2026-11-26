/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#090D16', // Primary Background
          subtle: '#0D1322',
          surface: '#111827',  // Elevated Surface / Cards
          hover: '#162032',    // Subtle hover state
        },
        slate: {
          950: '#060A12',
          900: '#0B111E',
          850: '#111827',
          800: '#1E293B', // Muted Steel Borders
          700: '#334155',
          600: '#475569',
          400: '#94A3B8', // Cool Slate (Muted Text)
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',  // Crisp Off-White (Primary Text)
        },
        cyan: {
          cyber: '#06B6D4',
          glow: '#0891B2',
          muted: 'rgba(6, 182, 212, 0.10)',
        },
        emerald: {
          signal: '#10B981',
          glow: '#059669',
          muted: 'rgba(16, 185, 129, 0.10)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      borderColor: {
        DEFAULT: '#1E293B',
      },
    },
  },
  plugins: [],
};

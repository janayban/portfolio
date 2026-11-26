import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Automatically detect deployment target:
// - GitHub Pages (built via GitHub Actions): base is '/portfolio/'
// - Vercel, Netlify, custom domain, or local dev: base is '/'
const isGitHubPages = process.env.GITHUB_ACTIONS && !process.env.VERCEL;
const base = process.env.BASE_URL || (isGitHubPages ? '/portfolio/' : '/');

export default defineConfig({
  plugins: [react()],
  base,
});

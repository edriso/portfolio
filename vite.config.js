import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Repo is served from https://edriso.github.io/portfolio/ so assets need this base.
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
});

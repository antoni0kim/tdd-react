import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    global: true,
    environment: 'jsdom',
    setupFiles: ['src/vitest/registerMatchers.js'],
  },
});

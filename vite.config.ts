import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import { VitePWA, type ManifestOptions, type VitePWAOptions } from 'vite-plugin-pwa';

const manifest: Partial<ManifestOptions> = {
  name: 'Bahar Ali Durrani',
  short_name: 'Durrani',
  description:
    'Remote Software Engineer Bahar Ali Durrani - Web App Developer | Node | React | Typescript | JavaScript | MERN Developer',
  theme_color: '#9c27b0',
  background_color: '#9c27b0',
  display: 'standalone',
  icons: [
    {
      src: 'favicon/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: 'favicon/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: 'favicon/maskable_icon.png',
      sizes: '1024x1024',
      type: 'image/png',
      // purpose: 'any maskable',
    },
  ],
};
const pwaOptions: Partial<VitePWAOptions> = {
  manifest,
  // injectRegister: 'auto',
  registerType: 'autoUpdate',
  // devOptions: {
  //   enabled: true,
  // },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,}'],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL,
  // build: { sourcemap: false },
  plugins: [react(), mkcert(), VitePWA(pwaOptions)],
  // optimizeDeps: {
  //   include: [
  //     "@mui/material/Tooltip",
  //     "@emotion/styled",
  //     "@mui/material/Unstable_Grid2",
  //   ],
  // },
  resolve: {
    alias: {
      src: '/src',
    },
  },
});

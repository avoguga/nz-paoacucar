import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      svgr(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        manifest: {
          name: 'Museu de Arte e Cultura - Pao de Açúcar',
          short_name: 'Museu - Pao de Açúcar',
          description: 'Museu de Arte e Cultura - Pao de Açúcar',
          background_color: '#E4AB57',
          theme_color: '#E4AB57',
          display: 'standalone',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: [
        { find: 'main', replacement: path.resolve(__dirname, 'src/main') },
        {
          find: 'presentation',
          replacement: path.resolve(__dirname, 'src/presentation'),
        },
      ],
    },
  };
});

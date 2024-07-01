declare module 'vite-plugin-pwa' {
  import { Plugin } from 'vite';

  interface VitePWAOptions {
    // Add the options that you use or expect here
  }

  export function VitePWA(options?: VitePWAOptions): Plugin;
}

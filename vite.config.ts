import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig(() => {
  return {
    plugins: [react(), svgr()],
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

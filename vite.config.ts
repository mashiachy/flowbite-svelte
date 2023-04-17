import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config = {
  plugins: [sveltekit()],
  server: {
    port: 8080,
    strictPort: false
  },
  resolve: {
    alias: {
      'flowbite-svelte': path.resolve(process.cwd(), './src/lib/index.js')
    }
  }
} satisfies UserConfig;

export default config;

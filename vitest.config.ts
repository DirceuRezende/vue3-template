/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [
    Vue(),
    eslintPlugin(),
    AutoImport({
      dts: true,
      imports: ['vue', 'vue-router', 'pinia', 'vitest']
    })
  ],
  test: {
    setupFiles: './src/setupTests.ts',
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});

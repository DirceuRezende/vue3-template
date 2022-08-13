import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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

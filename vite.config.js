import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
/// <reference types="vitest/config" />
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  test:{
    exclude: ["node_modules"],
    environment: 'jsdom',
    globals: true,
    silent : true,
  },
  base:"/finding-node-leaf/",
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    port: 3000, // Change the port
    open: true, // Open the browser automatically
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

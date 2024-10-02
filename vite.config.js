import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/WealthHealth/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 80,
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})

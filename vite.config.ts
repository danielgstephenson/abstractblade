import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/abstractblade/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 8080,
    open: true,
  },
})

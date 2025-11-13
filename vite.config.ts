import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Custom domain için root path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})


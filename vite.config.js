import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cs361-word-ui/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()]
})
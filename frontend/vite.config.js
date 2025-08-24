import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
  // Add this if you have API routes in your frontend
  server: {
    proxy: {
      '/api': {
        target: 'https://your-backend-url.vercel.app',
        changeOrigin: true
      }
    }
  }
})

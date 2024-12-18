import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://portfolio-5eri.onrender.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Removes '/api' prefix when forwarding requests.
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 1000 // 1 MB limit, adjust as needed
  }
})



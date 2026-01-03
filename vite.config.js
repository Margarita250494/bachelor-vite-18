import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      treeshake: { moduleSideEffects: false },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['react-toastify'],
        }
      }
    }
  },
  define: { 'process.env.NODE_ENV': '"production"' }
})

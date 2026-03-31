import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
  },
  /** Keep JSX on `react/jsx-runtime` so Motion is not pulled in as the global JSX factory. */
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react({ jsxImportSource: 'react' }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2022',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          /** Normalize Windows paths — chunk ids use OS-specific separators. */
          const n = id.replace(/\\/g, '/')
          /**
           * Framer Motion imports `react/jsx-runtime`. If Motion lands in `manualChunks` first,
           * Rollup co-locates `react/jsx-runtime` in the same chunk and rewrites *every* JSX module
           * (including lazy hero SVG) to import JSX from that chunk — forcing the full Motion
           * graph onto the critical path. Split React *before* Motion.
           */
          if (
            n.includes('/react/jsx-runtime') ||
            n.includes('/react/jsx-dev-runtime')
          )
            return 'react-jsx'
          if (n.includes('/scheduler/')) return 'react-vendor'
          if (n.includes('/react-dom/')) return 'react-dom'
          if (n.includes('/node_modules/react/')) return 'react-vendor'
          if (n.includes('/node_modules/motion/') || n.includes('/node_modules/framer-motion/'))
            return 'motion'
          if (id.includes('react-slick') || id.includes('slick-carousel')) return 'slick'
          if (id.includes('lucide-react')) return 'icons'
          if (id.includes('@radix-ui')) return 'radix'
          if (id.includes('recharts')) return 'recharts'
          if (id.includes('gsap')) return 'gsap'
          if (id.includes('@mui')) return 'mui'
        },
      },
    },
  },
})

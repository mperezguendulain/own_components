import { defineConfig } from 'vite'
import path from 'node:path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'MyComponents',
      formats: ['es', 'umd'],
      fileName: (format) => `own_components.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
  }
})

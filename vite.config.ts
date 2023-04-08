import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        tailwindcss('./tailwind.config.js'),
        autoprefixer(),
      ],
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
})

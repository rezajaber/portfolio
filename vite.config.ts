import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  base: '/',
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})

import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        a: resolve(__dirname, 'a.html'),
        b: resolve(__dirname, 'b.html'),
        c: resolve(__dirname, 'c.html'),
      }
    }
  }
})
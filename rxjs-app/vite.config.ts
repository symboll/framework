import { defineConfig } from 'vite'
import { resolve } from 'path'

const config = defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: [
      '.js', '.ts', '.tsx', '.json'
    ]
  },
  build: {
    
  },
  
})

export default config
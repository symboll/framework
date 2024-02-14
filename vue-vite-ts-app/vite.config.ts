import { defineConfig, loadEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import markdown from 'vite-plugin-md'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode, command, ssrBuild}: any) => {
  console.log('mode:',mode)
  console.log('command', command)
  console.log('ssrBuild', ssrBuild)
  console.log('env config',loadEnv(mode, process.cwd()))
  return defineConfig({
    plugins: [
      vue({
        include: [/\.vue$/,/\.md$/]
      }),
      vueJsx(),
      markdown(),
      visualizer({ open: true })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname,  'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/ben.scss";`
        }
      }
    },
    assetsInclude: [
      '**/*.avis',
      '**/*.awebp'
    ],
    build: {
      chunkSizeWarningLimit: 2000,
      cssCodeSplit: true,
      sourcemap: false,
      // minify:'terser',
      assetsInlineLimit: 4000
    }
  })
}

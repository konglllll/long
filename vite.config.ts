import { fileURLToPath, URL } from 'node:url'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend()
  ],

  server: {
    port:8080,
    open:true,
    host:'0.0.0.0',
    proxy:{
      '/api': {
        target: 'https://www.fastmock.site/mock/ca6a4abecfddee0ac1959075c3155dc5',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@v': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@u': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@L': fileURLToPath(new URL('./src/LayOut', import.meta.url)),
      '@a': fileURLToPath(new URL('./src/api', import.meta.url)),

    }
  },
})

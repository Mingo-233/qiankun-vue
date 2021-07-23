import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const port=2000
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [vue()]
})

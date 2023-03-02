import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  server:{
    host: '0.0.0.0',
    proxy:{
      '/api/':{
        target:'http://localhost:3000',
        changeOrigin:true,
        pathRewrite:{
          '^/api.':''
        }
      }
    }
  }
})

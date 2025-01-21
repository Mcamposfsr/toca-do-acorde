import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":"/src"
    },
    extensions:[".js",".jsx",".ts",".tsx"]
  },
  server:{
    port:3000,
    open:true
  }
})

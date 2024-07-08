import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotevn from 'dotenv'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    VITE_KEY:JSON.stringify(process.env.VITE_KEY)
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   base: "/Almadrasat-nuur-din/", 
     server: {
        open: true,
        port:3001,
  },
})
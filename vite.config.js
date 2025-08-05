import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', 
  plugins: [react()],
  server: {
    host: true,        // <-- Allows access from network (0.0.0.0)
    port: 5500,        
    allowedHosts: ["localhost", "tdesa.duckdns.org", "192.168.4.48"]
  },
})

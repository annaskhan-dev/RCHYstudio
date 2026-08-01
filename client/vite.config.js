import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // This ensures assets load with relative paths
  plugins: [react()],
})
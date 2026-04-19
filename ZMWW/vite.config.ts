import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/zmww/',
  plugins: [react()],
  server: { port: 3001, host: '0.0.0.0' },
  resolve: { alias: { '@': path.resolve(__dirname, './src'), '@shared': path.resolve(__dirname, '../shared/src') } },
})

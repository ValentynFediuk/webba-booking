import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'pages/pricing.html'),
                services: resolve(__dirname, 'pages/services.html'),
            }
        }
    }
})
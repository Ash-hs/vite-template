// @ts-ignore
// * No declaration file for less-vars-to-js
import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import react from '@vitejs/plugin-react'


export default defineConfig({
    server: {
        proxy: {
        }
    },
    plugins: [
        react(),
        ViteAliases({
            useTypescript: true
        })
    ]
})

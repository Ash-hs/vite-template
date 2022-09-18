import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import { VitePluginFonts } from 'vite-plugin-fonts'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  define: {
    global: 'globalThis',
  },

  server: {
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  plugins: [
    react(),
    svgr(),
    ViteAliases({
      useTypescript: true
    }),
    VitePluginFonts({
      // google: {
      //   families: [{
      //     name: 'Lato',
      //     styles: 'wght@300;400;700;900',
      //     defer: true
      //   }]
      // }
    })
  ]
})

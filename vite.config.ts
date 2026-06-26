import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { basePath, siteUrl } from './site.config.ts'

function redirectRootToBase(base: string): Plugin {
  return {
    name: 'redirect-root-to-base',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/') {
          res.writeHead(302, { Location: base })
          res.end()
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  define: {
    'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl),
  },
  plugins: [react(), redirectRootToBase(basePath)],
  server: {
    open: basePath,
  },
  preview: {
    open: basePath,
  },
})

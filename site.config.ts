import pkg from './package.json' with { type: 'json' }

/** Public site URL, e.g. https://mklewandowski.github.io/wedding/ */
export const siteUrl = `${pkg.homepage.replace(/\/$/, '')}/`

/** Vite base path, e.g. /wedding/ */
const pathname = new URL(siteUrl).pathname
export const basePath = pathname.endsWith('/') ? pathname : `${pathname}/`

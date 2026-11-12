import { copyFileSync, writeFileSync, mkdirSync } from 'node:fs'
copyFileSync('dist/index.html', 'dist/404.html')
writeFileSync('dist/_redirects', '/*    /index.html   200\n')
writeFileSync('dist/vercel.json', JSON.stringify({ rewrites: [{ source: '/(.*)', destination: '/index.html' }] }, null, 2))
console.log('SPA fallback files written')

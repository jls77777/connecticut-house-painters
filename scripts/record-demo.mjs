import { chromium } from 'playwright'
import { mkdirSync, renameSync, existsSync, copyFileSync } from 'fs'

const outDir = '/cursor/stores/bc-0caa216c-5f58-4a8a-8c16-47fabbb34f3c/media'
mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome',
  args: ['--no-sandbox'],
})
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  recordVideo: { dir: '/tmp/chp-video', size: { width: 1440, height: 900 } },
})
const page = await context.newPage()
await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)
await page.evaluate(() => window.scrollBy(0, 700))
await page.waitForTimeout(800)
await page.click('a[href="/services"]')
await page.waitForTimeout(1000)
await page.click('a[href="/about"]')
await page.waitForTimeout(900)
await page.click('a[href="/contact"]')
await page.waitForTimeout(900)
await page.fill('#name', 'Alex Rivera')
await page.fill('#phone', '860-555-0142')
await page.fill('#email', 'alex@example.com')
await page.fill('#address', 'Groton, CT')
await page.selectOption('#service', 'Interior Painting')
await page.fill('#message', 'Two bedrooms and hallways.')
await page.click('button[type="submit"]')
await page.waitForTimeout(1200)
await context.close()
await browser.close()

// find webm
import { readdirSync } from 'fs'
const files = readdirSync('/tmp/chp-video').filter(f => f.endsWith('.webm'))
const src = `/tmp/chp-video/${files[0]}`
const destWebm = `${outDir}/site-walkthrough-desktop.webm`
copyFileSync(src, destWebm)
console.log('webm', destWebm)
// convert to mp4 if ffmpeg available
import { execSync } from 'child_process'
try {
  execSync(`ffmpeg -y -i "${destWebm}" -c:v libx264 -pix_fmt yuv420p -movflags +faststart "${outDir}/site-walkthrough-desktop.mp4"`, {stdio:'inherit'})
} catch (e) {
  console.log('mp4 convert skipped', e.message)
}

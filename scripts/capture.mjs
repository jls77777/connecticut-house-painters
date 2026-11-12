import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

const out = '/cursor/stores/bc-0caa216c-5f58-4a8a-8c16-47fabbb34f3c/media'
const review = '/agent/.impeccable/review'
mkdirSync(out, { recursive: true })
mkdirSync(review, { recursive: true })

const pages = [
  ['/', 'home'],
  ['/services', 'services'],
  ['/about', 'about'],
  ['/contact', 'contact'],
]

const browser = await chromium.launch({ executablePath: '/usr/local/bin/google-chrome', args: ['--no-sandbox'] })

async function shoot(width, height, suffix) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
  })
  const page = await context.newPage()
  for (const [path, name] of pages) {
    await page.goto(`http://127.0.0.1:4173${path}`, { waitUntil: 'networkidle' })
    await page.waitForTimeout(600)
    const file = `${name}-${suffix}.png`
    await page.screenshot({ path: `${out}/${file}`, fullPage: true })
    console.log('wrote', file)
  }
  // first viewport only shots for home
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(400)
  await page.screenshot({ path: `${out}/home-hero-${suffix}.png`, fullPage: false })
  await context.close()
}

await shoot(1440, 900, 'desktop')
await shoot(390, 844, 'mobile')

// copy key shots into review
import { copyFileSync } from 'fs'
copyFileSync(`${out}/home-desktop.png`, `${review}/desktop.png`)
copyFileSync(`${out}/home-mobile.png`, `${review}/mobile.png`)

// contact form success interaction on desktop
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await context.newPage()
await page.goto('http://127.0.0.1:4173/contact', { waitUntil: 'networkidle' })
await page.fill('#name', 'Jordan Lee')
await page.fill('#phone', '860-555-0199')
await page.fill('#email', 'jordan@example.com')
await page.fill('#address', 'Mystic, CT')
await page.selectOption('#service', 'Exterior Painting')
await page.fill('#message', 'Need exterior repaint on a shoreline colonial this spring.')
await page.click('button[type="submit"]')
await page.waitForTimeout(800)
await page.screenshot({ path: `${out}/contact-form-success-desktop.png`, fullPage: true })
console.log('wrote contact-form-success-desktop.png')
await context.close()
await browser.close()

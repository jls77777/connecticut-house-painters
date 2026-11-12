import { chromium } from 'playwright'
import { mkdirSync, copyFileSync } from 'fs'

const artifactDir = '/opt/cursor/artifacts'
const mediaDir = '/cursor/stores/bc-edaf2f53-2ebe-4ba5-8b6f-e810565ec3fd/media/ct-softwash'
mkdirSync(artifactDir, { recursive: true })
mkdirSync(mediaDir, { recursive: true })

const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome',
  args: ['--no-sandbox'],
})

async function shot(path, name, width = 1440, height = 900) {
  const page = await browser.newPage({ viewport: { width, height } })
  await page.goto(`http://127.0.0.1:4173${path}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(900)
  const file = `${name}.png`
  const full = `${artifactDir}/${file}`
  await page.screenshot({ path: full, fullPage: false })
  copyFileSync(full, `${mediaDir}/${file}`)
  await page.close()
  console.log('saved', file)
}

await shot('/', 'home-desktop')
await shot('/', 'home-mobile', 390, 844)
await shot('/services', 'services-desktop')
await shot('/service-areas', 'service-areas-desktop')
await shot('/power-washing-new-london-ct', 'city-new-london-desktop')
await shot('/contact', 'contact-desktop')
await shot('/painting-services', 'painting-desktop')
await shot('/about', 'about-desktop')

await browser.close()
console.log('done')

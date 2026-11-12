# Design System — CT Softwash LLC

## World
Working-waterfront washdown at dawn: wet deck planks, hose mist catching sky-cyan light, deep navy harbor, signal-blue water, action-red cleats. Willie the Whale is deckhand guide, not sticker clutter. Fun and powerful — never generic wash-card grids or AI purple / cream-terracotta clichés.

## Palette
Official brand colors from Connecticut House Painters color-code.pdf (shared CT Softwash / CHP system):

- Sky / cyan `#33cfff`
- Signal blue `#0456d0`
- Deep navy `#0f356d`
- Action red `#de0703`
- Light gray `#bec4c6`
- Slate gray `#87939b`

Surface roles derived only from that set: foam grounds (sky/gray mixed with white), focus ring = sky, red/blue hover via `color-mix` darkening.

## Typography
- Display: Big Shoulders Display (700/800), self-hosted — industrial boat-lettering energy
- Body: Figtree (400–700), self-hosted
- Hook for future uploads: drop `House_of_cards` / `NaveidArabic` (or brand pack fonts) into `public/fonts/` and point `--font-display` / `--font-body` here

## Components
- Action-red primary phone / submit CTAs; signal-blue secondary / text CTAs; ghost outline on dark fields; sky for accents and focus
- Sticky mobile call bar: Call (red) / Text (blue) / Free estimate (navy)
- Estimate form with success state + Formspree or mailto fallback
- Interactive county service-area map + town SEO pages
- Full-bleed photographic heroes; brand-first first viewport; no card clutter in hero

## Motion
- Soft hero photo drift
- Brand rise on hero copy
- Willie bob (mascot presence)
- Sky mist wash along hero base
- IntersectionObserver section unfolds (respects reduced motion)

## Direction
Home surface contract: lobster-boat washdown dawn (seed `9e96846b`, grounded candidate 7), recolored to official navy/blue/cyan + red brand law. Raises: monumental brand type + calm CTA space; narrative service panels; Willie expressive guide; action-red accent share.

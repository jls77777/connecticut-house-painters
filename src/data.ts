export const company = {
  name: 'CT Softwash LLC',
  shortName: 'CT Softwash',
  legalName: 'CT Softwash LLC',
  owner: 'Javier Santos',
  tagline: 'When dirt gets silly call Willie',
  email: 'connecticuthousepainters@gmail.com',
  hours: 'Mon – Fri: 8:00 AM – 6:00 PM',
  phone: {
    label: 'Call / Text',
    display: '(860) 514-5335',
    tel: 'tel:+18605145335',
    sms: 'sms:+18605145335',
  },
  address: {
    line1: '919 Colonel Ledyard Hwy',
    city: 'Ledyard',
    state: 'CT',
    zip: '06339',
    full: '919 Colonel Ledyard Hwy, Ledyard, CT 06339',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=CT+Softwash+LLC+919+Colonel+Ledyard+Hwy+Ledyard+CT+06339',
    embedUrl:
      'https://maps.google.com/maps?q=919+Colonel+Ledyard+Hwy,+Ledyard,+CT+06339&z=14&output=embed',
  },
  paintingUrl: 'https://connecticuthousepainters.com/',
  serviceArea:
    'Middlesex, New London, and Windham Counties in Connecticut, Washington County in Rhode Island, and the Connecticut shoreline',
  googleListing: 'CT Softwash LLC — House washing and Roof cleaning',
} as const

export type CountyId =
  | 'new-london'
  | 'middlesex'
  | 'windham'
  | 'washington-ri'
  | 'shoreline'

export const counties: {
  id: CountyId
  name: string
  region: string
}[] = [
  { id: 'new-london', name: 'New London County', region: 'Connecticut' },
  { id: 'middlesex', name: 'Middlesex County', region: 'Connecticut' },
  { id: 'windham', name: 'Windham County', region: 'Connecticut' },
  { id: 'washington-ri', name: 'Washington County', region: 'Rhode Island' },
  { id: 'shoreline', name: 'Connecticut Shoreline', region: 'Connecticut' },
]

export type Town = {
  slug: string
  name: string
  state: 'CT' | 'RI'
  county: CountyId
  path: string
  image: string
  imageAlt: string
  blurb: string
}

function town(
  slug: string,
  name: string,
  state: 'CT' | 'RI',
  county: CountyId,
  blurb: string,
): Town {
  const path = `power-washing-${slug}-${state.toLowerCase()}`
  return {
    slug,
    name,
    state,
    county,
    path,
    image: `/images/cities/${slug}.jpg`,
    imageAlt: `Power washing ${name} ${state} service area`,
    blurb,
  }
}

export const towns: Town[] = [
  town('new-london', 'New London', 'CT', 'new-london', 'Harbor-city homes and commercial exteriors along the Thames.'),
  town('groton', 'Groton', 'CT', 'new-london', 'Sub base shoreline neighborhoods, siding, and roof soft wash.'),
  town('mystic', 'Mystic', 'CT', 'new-london', 'Village clapboard, cedar, and coastal algae cleanup.'),
  town('waterford', 'Waterford', 'CT', 'new-london', 'Residential soft wash, roofs, and driveway brightening.'),
  town('ledyard', 'Ledyard', 'CT', 'new-london', 'Home base for CT Softwash — house wash and roof treatment.'),
  town('stonington', 'Stonington', 'CT', 'new-london', 'Borough and shoreline homes that fight salt and mildew.'),
  town('east-lyme', 'East Lyme', 'CT', 'new-london', 'Flanders and East Lyme soft wash for siding and gutters.'),
  town('niantic', 'Niantic', 'CT', 'new-london', 'Beach-town exteriors, decks, and patio restoration.'),
  town('norwich', 'Norwich', 'CT', 'new-london', 'City and neighborhood power washing with soft-wash options.'),
  town('montville', 'Montville', 'CT', 'new-london', 'Uncasville and Oakdale homes needing algae and streak removal.'),
  town('colchester', 'Colchester', 'CT', 'new-london', 'Inland siding wash, roofs, and concrete cleaning.'),
  town('old-lyme', 'Old Lyme', 'CT', 'new-london', 'Shoreline estates and cottages with gentle house washing.'),
  town('pawcatuck', 'Pawcatuck', 'CT', 'new-london', 'Border-town soft wash serving CT/RI shoreline homes.'),
  town('gales-ferry', 'Gales Ferry', 'CT', 'new-london', 'Ledyard-area house wash, gutters, and roof cleaning.'),
  town('middletown', 'Middletown', 'CT', 'middlesex', 'River-city homes and light commercial exterior cleaning.'),
  town('old-saybrook', 'Old Saybrook', 'CT', 'middlesex', 'Shoreline soft wash for siding, roofs, and walkways.'),
  town('clinton', 'Clinton', 'CT', 'middlesex', 'Harbor homes fighting green algae and roof streaks.'),
  town('westbrook', 'Westbrook', 'CT', 'middlesex', 'Beach-community house wash and deck brightening.'),
  town('essex', 'Essex', 'CT', 'middlesex', 'Village exteriors, cedar, and patio soft cleaning.'),
  town('chester', 'Chester', 'CT', 'middlesex', 'Quiet-town siding wash and gutter clearing.'),
  town('deep-river', 'Deep River', 'CT', 'middlesex', 'River-valley homes needing mold and mildew removal.'),
  town('east-haddam', 'East Haddam', 'CT', 'middlesex', 'Moodus and East Haddam roof and house soft wash.'),
  town('willimantic', 'Willimantic', 'CT', 'windham', 'Windham County soft wash for homes and storefronts.'),
  town('putnam', 'Putnam', 'CT', 'windham', 'Northeast CT exterior cleaning and driveway wash.'),
  town('killingly', 'Killingly', 'CT', 'windham', 'Danielson-area house wash, roofs, and concrete.'),
  town('plainfield', 'Plainfield', 'CT', 'windham', 'Residential soft wash across Plainfield neighborhoods.'),
  town('westerly', 'Westerly', 'RI', 'washington-ri', 'Watch Hill to downtown — soft wash for RI shoreline homes.'),
  town('narragansett', 'Narragansett', 'RI', 'washington-ri', 'Ocean-facing siding, roofs, and deck cleaning.'),
  town('south-kingstown', 'South Kingstown', 'RI', 'washington-ri', 'Wakefield-area house wash and surface restoration.'),
  town('charlestown', 'Charlestown', 'RI', 'washington-ri', 'Coastal RI soft wash for cottages and year-round homes.'),
  town('hopkinton', 'Hopkinton', 'RI', 'washington-ri', 'Hope Valley and Hopkinton exterior cleaning.'),
]

export const townsByPath = Object.fromEntries(towns.map((t) => [t.path, t])) as Record<
  string,
  Town
>

export type Service = {
  id: string
  path: string
  name: string
  shortName: string
  blurb: string
  summary: string
  bullets: string[]
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'house-washing',
    path: 'house-washing',
    name: 'House Washing & Soft Washing',
    shortName: 'House Washing',
    blurb:
      'Gentle soft-wash chemistry lifts mold, mildew, and algae from siding without blasting delicate surfaces.',
    summary:
      'CT Softwash uses low-pressure soft washing with professional detergents so vinyl, painted wood, and trim come clean without the damage high-pressure spray can cause. Ideal for Connecticut shoreline homes fighting green growth and salt film.',
    bullets: [
      'Soft wash for vinyl, painted wood, and fiber cement',
      'Algae, mold, mildew, and oxidation removal',
      'Plant-conscious application with careful rinse habits',
      'Great prep before painting or as stand-alone curb appeal',
    ],
    image: '/images/service-powerwash.jpg',
    imageAlt: 'Soft washing house siding for CT Softwash LLC',
  },
  {
    id: 'roof-cleaning',
    path: 'roof-cleaning',
    name: 'Roof Cleaning & Roof Treatment',
    shortName: 'Roof Cleaning',
    blurb:
      'Black streaks and lichen get treated with a soft approach that protects shingles while brightening the roof.',
    summary:
      'Ugly black streaks are usually algae. Our roof cleaning and treatment service uses a gentle soft-wash approach — not high-pressure blasting — to freshen the roof and help protect against costly surface damage.',
    bullets: [
      'Soft treatment for asphalt shingle roofs',
      'Targets black streaks, moss, and lichen',
      'No high-pressure blast that can lift granules',
      'Improves curb appeal and roof surface health',
    ],
    image: '/images/service-exterior.jpg',
    imageAlt: 'Roof cleaning soft wash treatment in Connecticut',
  },
  {
    id: 'gutter-cleaning',
    path: 'gutter-cleaning',
    name: 'Gutter Cleaning',
    shortName: 'Gutter Cleaning',
    blurb:
      'Leaves and grit cleared so water flows away from the foundation — not into fascia and landscaping.',
    summary:
      'Clogged gutters send water sideways into fascia, basement walls, and beds. CT Softwash clears debris and brightens gutters so runoff does its job again.',
    bullets: [
      'Debris removal from gutters and downspouts',
      'Gutter brightening where oxidation has dulled the finish',
      'Helps prevent overflow and foundation splash-back',
      'Pairs well with house and roof soft wash visits',
    ],
    image: '/images/service-commercial.jpg',
    imageAlt: 'Gutter cleaning service by CT Softwash',
  },
  {
    id: 'surface-cleaning',
    path: 'surface-cleaning',
    name: 'Surface Cleaning',
    shortName: 'Surfaces',
    blurb:
      'Driveways, walkways, patios, and concrete brought back from oil stains, algae, and winter grit.',
    summary:
      'Horizontal surfaces collect everything New England weather throws down. We clean concrete, pavers, and walkways so the approach to your home looks as fresh as the siding.',
    bullets: [
      'Driveways, walkways, and concrete pads',
      'Paver cleaning and brightening',
      'Algae and mildew removal on hardscape',
      'Residential and light commercial surfaces',
    ],
    image: '/images/about-atmosphere.jpg',
    imageAlt: 'Driveway and patio surface cleaning Connecticut',
  },
  {
    id: 'deck-patio',
    path: 'deck-patio-cleaning',
    name: 'Deck & Patio Cleaning',
    shortName: 'Decks & Patios',
    blurb:
      'Wood and composite decks, plus outdoor living spaces, cleaned for safer footing and better stain prep.',
    summary:
      'Decks and patios take sun, salt, and leaf tannins hard. We clean wood and composite surfaces so outdoor living feels inviting again — and ready for stain when you are.',
    bullets: [
      'Wood and composite deck washing',
      'Patio and outdoor living area cleaning',
      'Safer, cleaner footing for family use',
      'Strong prep step before staining or sealing',
    ],
    image: '/images/service-deck.jpg',
    imageAlt: 'Deck and patio cleaning by CT Softwash',
  },
  {
    id: 'bluestone',
    path: 'bluestone-restoration',
    name: 'Bluestone Restoration',
    shortName: 'Bluestone',
    blurb:
      'Restore bluestone walks and patios that have gone dark, slippery, or stained from shoreline weather.',
    summary:
      'Bluestone looks premium when it is clean — and treacherous when biofilm takes over. Our restoration cleaning brings color and grip back to walks, steps, and patio fields.',
    bullets: [
      'Bluestone walks, steps, and patio fields',
      'Biofilm and staining reduction',
      'Careful methods suited to natural stone',
      'Often combined with house soft wash day',
    ],
    image: '/images/hero-interior.jpg',
    imageAlt: 'Bluestone restoration cleaning Connecticut shoreline',
  },
  {
    id: 'power-washing',
    path: 'power-washing',
    name: 'Power Washing',
    shortName: 'Power Washing',
    blurb:
      'Higher-pressure cleaning where surfaces can take it — fences, some concrete, and tough grit zones.',
    summary:
      'When the surface can handle it, power washing restores sparkle fast. We match pressure and technique to the material so you get results without unnecessary wear.',
    bullets: [
      'Fences, some concrete, and resilient surfaces',
      'Industrial-grade equipment with trained techs',
      'Paired with soft wash where siding or roofs need care',
      'Residential and commercial exterior cleaning',
    ],
    image: '/images/service-powerwash.jpg',
    imageAlt: 'Power washing exterior surfaces CT Softwash LLC',
  },
]

export const servicesByPath = Object.fromEntries(services.map((s) => [s.path, s])) as Record<
  string,
  Service
>

export const processSteps = [
  {
    title: 'Select a service',
    text: 'Tell us what needs love — house wash, roof, gutters, decks, or a full exterior refresh.',
  },
  {
    title: 'Get a free quote',
    text: 'We build a clear, fast estimate with no surprise fees. Call, text, or use the form.',
  },
  {
    title: 'Set the schedule',
    text: 'Pick a window that works. We plan weather-smart and keep you updated.',
  },
  {
    title: 'Sit back & relax',
    text: 'Licensed & insured techs show up, soft-wash or power-wash as needed, and leave surfaces sparkling.',
  },
] as const

export const serviceTypes = [
  'House Washing / Soft Washing',
  'Roof Cleaning / Treatment',
  'Gutter Cleaning',
  'Surface / Driveway Cleaning',
  'Deck & Patio Cleaning',
  'Bluestone Restoration',
  'Power Washing',
  'Multiple / Not sure',
] as const

export const faqs = [
  {
    q: 'Why soft washing for houses and roofs?',
    a: 'High pressure can scar siding and lift roof granules. Soft washing uses low pressure with the right detergents to remove organic growth safely on fragile surfaces.',
  },
  {
    q: 'What areas does CT Softwash serve?',
    a: 'We serve New London, Middlesex, and Windham Counties in Connecticut, Washington County in Rhode Island, and the Connecticut shoreline — from Ledyard and Mystic to Westerly and Old Saybrook.',
  },
  {
    q: 'What if I am not happy with the job?',
    a: 'We stand behind a 100% satisfaction guarantee published on our owned sites. Tell us what missed the mark and we will make it right.',
  },
  {
    q: 'Do you paint too?',
    a: 'Yes — painting services are available through our sister brand Connecticut House Painters. Soft wash is often the perfect prep before a fresh coat.',
  },
] as const

export const publishedReviews = [
  {
    quote:
      'Outstanding! First class power washing service at a very reasonable price. The team were superb and delivered a quality and timely service.',
    name: 'Linda Schultz',
    place: 'Mystic, CT',
  },
  {
    quote:
      'Great, fast and friendly power washing service. Took the time to scrub carefully and ensure an even, thorough result.',
    name: 'Kris Hais',
    place: 'Waterford, CT',
  },
  {
    quote:
      'CT Softwash met my standards of great service from the initial phone call to cleaning up after the work was done.',
    name: 'Alena Erford',
    place: 'Ledyard, CT',
  },
] as const

export const trustPoints = [
  { title: 'Licensed & insured', text: 'Trained staff and professional equipment on every job.' },
  { title: 'Soft-wash specialists', text: 'Gentle chemistry for siding and roofs; pressure where it belongs.' },
  { title: '100% satisfaction', text: 'We work until you love the result — guarantee from our owned sites.' },
  { title: 'Fast free quotes', text: 'Call, text, or send the form — we keep estimates clear and quick.' },
] as const

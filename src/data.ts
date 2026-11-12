export const company = {
  name: 'Connecticut House Painters LLC',
  shortName: 'Connecticut House Painters',
  tagline: "We don't cut corners we paint them.",
  email: 'connecticuthousepainters@gmail.com',
  hours: 'Mon – Sat: 7AM – 6PM · Sunday: Closed',
  office: {
    label: 'Office',
    display: '(860) 879-8222',
    tel: 'tel:+18608798222',
  },
  cell: {
    label: 'Cell',
    display: '(860) 514-5335',
    tel: 'tel:+18605145335',
    sms: 'sms:+18605145335',
  },
  serviceArea:
    'Southeastern Connecticut, the Shoreline, New London County, and Middlesex County',
  towns: [
    'Groton',
    'Mystic',
    'Waterford',
    'New London',
    'Ledyard',
    'Stonington',
    'East Lyme',
    'Old Lyme',
    'Niantic',
    'Montville',
  ],
} as const

export const services = [
  {
    id: 'interior',
    name: 'Interior Painting',
    blurb:
      'Crisp lines, smooth finishes, and careful prep for living rooms, bedrooms, trim, and ceilings.',
    image: '/images/service-interior.jpg',
  },
  {
    id: 'exterior',
    name: 'Exterior Painting',
    blurb:
      'Weather-ready coats that protect clapboard, trim, and curb appeal through New England seasons.',
    image: '/images/service-exterior.jpg',
  },
  {
    id: 'cabinets',
    name: 'Cabinet Painting',
    blurb:
      'Kitchen and bath cabinet refreshes with durable finishes that look built-in, not slapped on.',
    image: '/images/service-cabinets.jpg',
  },
  {
    id: 'deck',
    name: 'Deck Staining',
    blurb:
      'Stain and seal work that feeds the wood and stands up to shoreline sun, salt, and rain.',
    image: '/images/service-deck.jpg',
  },
  {
    id: 'powerwash',
    name: 'Power Washing',
    blurb:
      'Soft wash and pressure cleaning for homes, boathouses, siding, and prep before paint.',
    image: '/images/service-powerwash.jpg',
  },
  {
    id: 'commercial',
    name: 'Commercial Painting',
    blurb:
      'Clean, scheduled painting for offices, storefronts, and light commercial spaces across the Shoreline.',
    image: '/images/service-commercial.jpg',
  },
] as const

export const processSteps = [
  {
    title: 'Book a visit',
    text: 'Call or send the estimate form. We schedule a convenient walkthrough at your property.',
  },
  {
    title: 'Get a clear quote',
    text: 'You receive a detailed free estimate so scope, prep, and pricing are plain before work starts.',
  },
  {
    title: 'Choose your finish',
    text: 'We help lock colors and materials that fit your home and the Connecticut climate.',
  },
  {
    title: 'We paint it right',
    text: 'Licensed & insured crews prep carefully, protect your space, and finish on time.',
  },
] as const

export const serviceTypes = [
  'Interior Painting',
  'Exterior Painting',
  'Cabinet Painting',
  'Deck Staining',
  'Power Washing',
  'Commercial Painting',
  'Not sure / multiple',
] as const

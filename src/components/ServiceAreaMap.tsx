import { Link } from 'react-router-dom'
import { counties, towns, type CountyId } from '../data'
import { useMemo, useState } from 'react'

const countyMeta: Record<
  Exclude<CountyId, 'shoreline'>,
  { path: string; label: string; x: number; y: number; w: number; h: number }
> = {
  windham: { path: 'M 520 40 L 700 50 L 710 220 L 540 240 Z', label: 'Windham', x: 580, y: 120, w: 120, h: 40 },
  'new-london': {
    path: 'M 420 240 L 620 220 L 650 360 L 520 420 L 400 360 Z',
    label: 'New London',
    x: 470,
    y: 300,
    w: 140,
    h: 40,
  },
  middlesex: {
    path: 'M 280 200 L 420 210 L 430 360 L 300 380 L 250 280 Z',
    label: 'Middlesex',
    x: 300,
    y: 270,
    w: 120,
    h: 40,
  },
  'washington-ri': {
    path: 'M 620 360 L 760 350 L 780 480 L 640 500 L 590 420 Z',
    label: 'Washington RI',
    x: 640,
    y: 400,
    w: 140,
    h: 40,
  },
}

export function ServiceAreaMap() {
  const [active, setActive] = useState<CountyId | 'all'>('all')

  const filtered = useMemo(() => {
    if (active === 'all') return towns
    if (active === 'shoreline') {
      return towns.filter((t) =>
        [
          'new-london',
          'groton',
          'mystic',
          'waterford',
          'stonington',
          'east-lyme',
          'niantic',
          'old-lyme',
          'old-saybrook',
          'clinton',
          'westbrook',
          'pawcatuck',
          'westerly',
          'narragansett',
          'charlestown',
        ].includes(t.slug),
      )
    }
    return towns.filter((t) => t.county === active)
  }, [active])

  return (
    <div className="map-block">
      <div className="map-visual" role="img" aria-label="Service area map covering Middlesex, New London, Windham Connecticut and Washington County Rhode Island plus the shoreline">
        <svg viewBox="0 0 840 560" className="county-map" aria-hidden="true">
          <defs>
            <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0456d0" />
              <stop offset="100%" stopColor="#0f356d" />
            </linearGradient>
            <linearGradient id="foam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#33cfff" />
              <stop offset="100%" stopColor="#0456d0" />
            </linearGradient>
          </defs>
          <rect width="840" height="560" fill="url(#sea)" rx="18" />
          <path
            d="M 40 420 C 180 380, 320 460, 480 430 S 720 400, 800 450 L 800 560 L 40 560 Z"
            fill="#0f356d"
            opacity="0.9"
          />
          <text x="48" y="64" className="map-title">
            CT Softwash service waters
          </text>
          <text x="48" y="96" className="map-sub">
            Middlesex · New London · Windham · Washington RI · Shoreline
          </text>

          {(Object.keys(countyMeta) as Array<keyof typeof countyMeta>).map((id) => {
            const c = countyMeta[id]
            const on = active === 'all' || active === id || (active === 'shoreline' && id !== 'windham')
            return (
              <g key={id}>
                <path
                  d={c.path}
                  className={`county-shape ${on ? 'on' : 'dim'}`}
                  fill="url(#foam)"
                  onClick={() => setActive(id)}
                />
                <text
                  x={c.x + c.w / 2}
                  y={c.y + 24}
                  textAnchor="middle"
                  className="county-label"
                  onClick={() => setActive(id)}
                >
                  {c.label}
                </text>
              </g>
            )
          })}

          <circle cx="505" cy="330" r="7" fill="#de0703" />
          <text x="518" y="335" className="hq-label">
            Ledyard HQ
          </text>
        </svg>
      </div>

      <div className="map-controls">
        <div className="map-filters" role="tablist" aria-label="Filter towns by county">
          <button
            type="button"
            className={active === 'all' ? 'chip on' : 'chip'}
            onClick={() => setActive('all')}
          >
            All towns
          </button>
          {counties.map((c) => (
            <button
              key={c.id}
              type="button"
              className={active === c.id ? 'chip on' : 'chip'}
              onClick={() => setActive(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <ul className="town-grid">
          {filtered.map((t) => (
            <li key={t.path}>
              <Link to={`/${t.path}`}>
                <span>{t.name}</span>
                <small>
                  {t.state} · {counties.find((c) => c.id === t.county)?.name}
                </small>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

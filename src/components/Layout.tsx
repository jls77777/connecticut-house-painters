import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { company } from '../data'
import { CloseIcon, MenuIcon, PhoneIcon } from './Icons'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="site">
      <a className="sr-only" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label={`${company.shortName} home`}>
            <img src="/images/willie.png" alt="" width={42} height={42} />
            <span className="brand-text">
              <span className="brand-name">CT House Painters</span>
              <span className="brand-sub">Licensed & Insured · Shoreline CT</span>
            </span>
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a className="btn btn-red header-cta" href={company.office.tel}>
            <PhoneIcon /> {company.office.display}
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className="container">
          <nav
            id="mobile-nav"
            className={`nav-mobile ${open ? 'open' : ''}`}
            aria-label="Mobile"
            hidden={!open}
          >
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <a className="btn btn-red" href={company.office.tel}>
              <PhoneIcon /> Call office
            </a>
            <a className="btn btn-blue" href={company.cell.tel}>
              <PhoneIcon /> Call cell
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/images/willie.png" alt="" width={52} height={52} />
            <div>
              <strong>{company.name}</strong>
              <p>
                Professional painting and power washing across Southeastern Connecticut. {company.tagline}
              </p>
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/contact#estimate">Free estimate</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={company.office.tel}>Office {company.office.display}</a>
              </li>
              <li>
                <a href={company.cell.tel}>Cell {company.cell.display}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>{company.hours}</li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span>Serving {company.serviceArea}</span>
        </div>
      </footer>

      <div className="sticky-call" aria-label="Quick call">
        <a href={company.office.tel}>
          <span>Office</span>
          {company.office.display}
        </a>
        <a href={company.cell.tel}>
          <span>Cell</span>
          {company.cell.display}
        </a>
        <Link className="estimate-link" to="/contact#estimate">
          <span>Online</span>
          Free estimate
        </Link>
      </div>
    </div>
  )
}

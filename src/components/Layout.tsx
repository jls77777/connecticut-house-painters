import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { company } from '../data'
import { CloseIcon, MenuIcon, PhoneIcon, SmsIcon } from './Icons'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/painting-services', label: 'Painting' },
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
            <img src="/images/willie.png" alt="" width={46} height={46} />
            <span className="brand-text">
              <span className="brand-name">CT Softwash</span>
              <span className="brand-sub">When dirt gets silly call Willie</span>
            </span>
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a className="btn btn-red header-cta" href={company.phone.tel}>
            <PhoneIcon /> {company.phone.display}
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
            <a className="btn btn-red" href={company.phone.tel}>
              <PhoneIcon /> Call {company.phone.display}
            </a>
            <a className="btn btn-blue" href={company.phone.sms}>
              <SmsIcon /> Text us
            </a>
          </nav>
        </div>
      </header>

      <div className="sticky-bar" aria-label="Quick contact">
        <a href={company.phone.tel}>
          <PhoneIcon /> Call
        </a>
        <a href={company.phone.sms}>
          <SmsIcon /> Text
        </a>
        <Link to="/contact#estimate">Free estimate</Link>
      </div>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/images/willie.png" alt="" width={56} height={56} />
              <div>
                <strong>{company.name}</strong>
                <p>{company.tagline}</p>
              </div>
            </div>
            <p className="footer-copy">
              Soft washing, roof cleaning, gutters, decks, and exterior restoration across{' '}
              {company.serviceArea}.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={company.phone.tel}>{company.phone.display}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>{company.address.full}</li>
              <li>{company.hours}</li>
              <li>Owner: {company.owner}</li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 {company.legalName}. All rights reserved.</p>
          <p>
            Painting available via{' '}
            <a href={company.paintingUrl} rel="noopener noreferrer" target="_blank">
              Connecticut House Painters
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

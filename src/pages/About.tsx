import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { PhoneIcon } from '../components/Icons'
import { company } from '../data'

export function About() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-media">
          <img
            src="/images/about-atmosphere.jpg"
            alt="Shoreline Connecticut property being cleaned and prepared for paint"
            width={1600}
            height={1200}
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="page-hero-content">
          <p className="display" style={{ color: 'var(--sky)', margin: '0 0 0.5rem', fontSize: '1.4rem' }}>
            Connecticut House Painters
          </p>
          <h1>About</h1>
          <p>Local craft, honest communication, and finishes that respect New England weather.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="split-copy">
              <h2>A Connecticut company that paints like it lives here</h2>
              <p>
                {company.name} is built around shoreline homes and Southeastern Connecticut
                properties — places that see salt air, hard winters, and bright summer light.
              </p>
              <p>
                Our approach is simple: protect what you have, prepare carefully, and finish clean.
                We are licensed and insured, and we keep the job site respectful of your family,
                neighbors, and schedule.
              </p>
              <p>
                From Groton and Mystic to New London County and Middlesex County towns, we show up
                ready to do the work right the first time.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="media-frame">
              <img
                src="/images/service-exterior.jpg"
                alt="Completed exterior painting on a Connecticut home"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(232, 244, 255, 0.65)' }}>
        <div className="container split reverse">
          <Reveal>
            <div className="split-copy">
              <h2>What “no cut corners” means on site</h2>
              <p>
                Prep is not optional. Surfaces are cleaned, repaired where needed, and masked with
                care. Materials are chosen for durability in our climate, not just the cheapest can
                on the shelf.
              </p>
              <p>
                You get clear estimates, reliable scheduling, and a crew that understands curb appeal
                matters — especially when your home faces the Shoreline.
              </p>
              <div className="cta-actions">
                <Link className="btn btn-red" to="/contact#estimate">
                  Request free estimate
                </Link>
                <a className="btn btn-outline" href={company.office.tel}>
                  <PhoneIcon /> {company.office.display}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="media-frame">
              <img
                src="/images/logo.png"
                alt={`${company.name} logo`}
                style={{ objectFit: 'contain', background: '#fff', padding: '2rem', aspectRatio: '16/11' }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Service area</h2>
              <p>
                We proudly serve {company.serviceArea}, including towns like{' '}
                {company.towns.slice(0, 6).join(', ')}, and nearby communities.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="towns">
              {company.towns.map((town) => (
                <span className="town" key={town}>
                  {town}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

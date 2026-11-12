import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { PhoneIcon } from '../components/Icons'
import { company, services } from '../data'

export function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-media">
          <img
            src="/images/hero-interior.jpg"
            alt="Interior painting finish by Connecticut House Painters"
            width={1600}
            height={1067}
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="page-hero-content">
          <p className="display" style={{ color: 'var(--sky)', margin: '0 0 0.5rem', fontSize: '1.4rem' }}>
            Connecticut House Painters
          </p>
          <h1>Services</h1>
          <p>
            Interior, exterior, cabinets, decks, power washing, and commercial painting — delivered
            with Shoreline-ready prep and finishes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          {services.map((service) => (
            <Reveal key={service.id}>
              <article className="service-detail-item" id={service.id}>
                <img src={service.image} alt="" width={900} height={620} loading="lazy" />
                <div>
                  <h2>{service.name}</h2>
                  <p>{service.blurb}</p>
                  <p>
                    Serving homeowners and businesses across {company.serviceArea}. Ask about
                    combining paint with power-wash prep when your exterior needs a clean start.
                  </p>
                  <div className="cta-actions">
                    <Link className="btn btn-red" to="/contact#estimate">
                      Free estimate
                    </Link>
                    <a className="btn btn-outline" href={company.office.tel}>
                      <PhoneIcon /> Call office
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Not sure which service you need?</h2>
          <p>Describe the project — we will help scope the right approach and materials.</p>
          <div className="cta-actions">
            <a className="btn btn-red" href={company.cell.tel}>
              <PhoneIcon /> Call cell {company.cell.display}
            </a>
            <Link className="btn btn-ghost" to="/contact#estimate">
              Start estimate form
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

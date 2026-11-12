import { Link, Navigate } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { EstimateForm } from '../components/EstimateForm'
import { PhoneIcon, SmsIcon } from '../components/Icons'
import { company, counties, services, towns, townsByPath } from '../data'

export function CityPage({ townPath }: { townPath: string }) {
  const town = townsByPath[townPath]
  if (!town) return <Navigate to="/service-areas" replace />

  const county = counties.find((c) => c.id === town.county)
  const nearby = towns.filter((t) => t.county === town.county && t.path !== town.path).slice(0, 6)

  return (
    <>
      <section className="detail-hero city-hero">
        <img
          src={town.image}
          alt={town.imageAlt}
          title={`Power washing ${town.name} ${town.state} service area`}
          width={1600}
          height={900}
        />
        <div className="detail-hero-shade" />
        <div className="container detail-hero-copy">
          <h1>
            Power washing {town.name}, {town.state}
          </h1>
          <p>
            Soft washing, roof cleaning, gutters, and exterior restoration for {town.name} and nearby{' '}
            {county?.name} homes. {town.blurb}
          </p>
          <div className="hero-actions">
            <a className="btn btn-buoy" href={company.phone.tel}>
              <PhoneIcon /> Call {company.phone.display}
            </a>
            <a className="btn btn-sea" href={company.phone.sms}>
              <SmsIcon /> Text for a quote
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <Reveal>
            <div>
              <h2>
                Soft wash &amp; power wash in {town.name}
              </h2>
              <p>
                CT Softwash LLC serves {town.name}, {town.state} with the same gentle soft-wash
                approach we use across the shoreline — licensed & insured techs, free estimates, and
                a 100% satisfaction guarantee.
              </p>
              <ul className="check-list">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link to={`/services/${s.path}`}>{s.name}</Link> in {town.name}
                  </li>
                ))}
              </ul>
              <figure className="city-figure">
                <img
                  src={town.image}
                  alt={town.imageAlt}
                  title={`Power washing ${town.name} ${town.state} service area`}
                  width={900}
                  height={560}
                  loading="lazy"
                />
                <figcaption>
                  Power washing {town.name} {town.state} service area — CT Softwash LLC
                </figcaption>
              </figure>
            </div>
          </Reveal>
          <Reveal>
            <EstimateForm compact />
          </Reveal>
        </div>
      </section>

      <section className="section section-foam">
        <div className="container">
          <h2>Nearby towns we also serve</h2>
          <ul className="town-pill-list">
            {nearby.map((t) => (
              <li key={t.path}>
                <Link to={`/${t.path}`}>
                  Power washing {t.name} {t.state}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/service-areas">All service areas</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { EstimateForm } from '../components/EstimateForm'
import { PhoneIcon, SmsIcon } from '../components/Icons'
import { company, services, servicesByPath, towns } from '../data'

export function ServiceDetail() {
  const { slug } = useParams()
  const service = slug ? servicesByPath[slug] : undefined
  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      <section className="detail-hero">
        <img src={service.image} alt={service.imageAlt} width={1600} height={900} />
        <div className="detail-hero-shade" />
        <div className="container detail-hero-copy">
          <h1>{service.name}</h1>
          <p>{service.blurb}</p>
          <div className="hero-actions">
            <a className="btn btn-red" href={company.phone.tel}>
              <PhoneIcon /> Call {company.phone.display}
            </a>
            <a className="btn btn-blue" href={company.phone.sms}>
              <SmsIcon /> Text for a quote
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <Reveal>
            <div>
              <h2>What you get</h2>
              <p>{service.summary}</p>
              <ul className="check-list">
                {service.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p>
                Serving {company.serviceArea}. Popular towns include{' '}
                {towns
                  .slice(0, 5)
                  .map((t) => t.name)
                  .join(', ')}
                , and more.
              </p>
              <Link className="text-link" to="/service-areas">
                See service areas →
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <EstimateForm compact />
          </Reveal>
        </div>
      </section>

      <section className="section section-foam">
        <div className="container">
          <h2>Related services</h2>
          <div className="related-grid">
            {others.map((s) => (
              <Link key={s.id} to={`/services/${s.path}`} className="related-card">
                <img src={s.image} alt={s.imageAlt} loading="lazy" />
                <h3>{s.shortName}</h3>
                <p>{s.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

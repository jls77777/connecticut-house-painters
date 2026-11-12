import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { ArrowIcon, PhoneIcon } from '../components/Icons'
import { company, services } from '../data'

export function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>CT Softwash services for soft wash, roofs &amp; surfaces</h1>
          <p>
            From gentle house washing to bluestone restoration — pick a service or call{' '}
            <a href={company.phone.tel}>{company.phone.display}</a> for a free quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-list">
          {services.map((s) => (
            <Reveal key={s.id}>
              <article className="service-row">
                <img src={s.image} alt={s.imageAlt} width={640} height={420} loading="lazy" />
                <div>
                  <h2>{s.name}</h2>
                  <p>{s.summary}</p>
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <Link className="btn btn-sea" to={`/services/${s.path}`}>
                    {s.shortName} details <ArrowIcon />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-foam">
        <div className="container cta-band">
          <div>
            <h2>Not sure which service you need?</h2>
            <p>Send photos or describe the surface — we will recommend soft wash vs power wash.</p>
          </div>
          <a className="btn btn-buoy" href={company.phone.tel}>
            <PhoneIcon /> {company.phone.display}
          </a>
        </div>
      </section>
    </>
  )
}

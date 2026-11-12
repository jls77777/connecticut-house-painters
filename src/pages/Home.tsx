import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { PhoneIcon } from '../components/Icons'
import { company, processSteps, services } from '../data'

export function Home() {
  return (
    <>
      <section className="hero" aria-label="Connecticut House Painters">
        <div className="hero-media">
          <img
            src="/images/hero-home.jpg"
            alt="Freshly painted Connecticut home exterior by Connecticut House Painters"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-brand">
            <img src="/images/willie.png" alt="" width={80} height={80} />
            <p className="hero-brand-name">Connecticut House Painters</p>
          </div>
          <h1>{company.tagline}</h1>
          <p className="hero-support">
            Painting and power washing for Southeastern Connecticut, the Shoreline, New London
            County, and Middlesex County — licensed, insured, and local.
          </p>
          <div className="hero-actions">
            <a className="btn btn-red" href={company.office.tel}>
              <PhoneIcon /> Call office
            </a>
            <a className="btn btn-blue" href={company.cell.tel}>
              <PhoneIcon /> Call cell
            </a>
            <Link className="btn btn-ghost" to="/contact#estimate">
              Free estimate
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="trust-strip reveal in">
          <div className="trust-item">
            <strong>Licensed</strong>
            <span>& insured crews</span>
          </div>
          <div className="trust-item">
            <strong>Local CT</strong>
            <span>Shoreline focus</span>
          </div>
          <div className="trust-item">
            <strong>On time</strong>
            <span>Clean job sites</span>
          </div>
          <div className="trust-item">
            <strong>Quality</strong>
            <span>No cut corners</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Painting services that hold up on the Shoreline</h2>
              <p>
                From interior refresh to exterior protection and power washing prep — one local team
                for homes and light commercial work.
              </p>
            </div>
          </Reveal>
          <div className="service-grid">
            {services.map((service) => (
              <Reveal key={service.id}>
                <Link className="service-tile" to={`/services#${service.id}`}>
                  <img src={service.image} alt="" width={800} height={550} loading="lazy" />
                  <div className="service-tile-body">
                    <h3>{service.name}</h3>
                    <p>{service.blurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(232, 244, 255, 0.65)' }}>
        <div className="container split">
          <Reveal>
            <div className="split-copy">
              <h2>Built on honesty. Focused on quality.</h2>
              <p>
                We treat your property like our own — careful prep, premium materials, and clear
                communication from first call to final walkthrough.
              </p>
              <p>
                Whether you are in Groton, Mystic, New London, or along the Middlesex Shoreline, you
                get the same standard: no shortcuts, just durable finishes.
              </p>
              <div className="cta-actions">
                <Link className="btn btn-red" to="/about">
                  About the company
                </Link>
                <a className="btn btn-outline" href={company.cell.tel}>
                  <PhoneIcon /> {company.cell.display}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="before-after">
              <figure>
                <img
                  src="/images/project-before.jpg"
                  alt="Exterior project before painting in New London area"
                  loading="lazy"
                />
                <figcaption>Before</figcaption>
              </figure>
              <figure>
                <img
                  src="/images/project-after.jpg"
                  alt="Exterior project after painting in New London area"
                  loading="lazy"
                />
                <figcaption>After</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>A clear path from call to finished paint</h2>
              <p>No mystery process — just four steady steps from estimate to transformation.</p>
            </div>
          </Reveal>
          <div className="process">
            {processSteps.map((step, i) => (
              <Reveal key={step.title}>
                <article className="process-step">
                  <div className="step-index">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Proudly serving Southeastern Connecticut</h2>
              <p>{company.serviceArea}.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="towns">
              {company.towns.map((town) => (
                <span className="town" key={town}>
                  {town}
                </span>
              ))}
              <span className="town">And nearby Shoreline towns</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal>
            <h2>Ready for a free estimate?</h2>
            <p>
              Call the office or cell today, or send project details online. We respond during{' '}
              {company.hours.replace(' · ', ', ')}.
            </p>
            <div className="cta-actions">
              <a className="btn btn-red" href={company.office.tel}>
                <PhoneIcon /> {company.office.display}
              </a>
              <a className="btn btn-blue" href={company.cell.tel}>
                <PhoneIcon /> {company.cell.display}
              </a>
              <Link className="btn btn-ghost" to="/contact#estimate">
                Request estimate
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

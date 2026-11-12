import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { PhoneIcon, SmsIcon, ArrowIcon } from '../components/Icons'
import { ServiceAreaMap } from '../components/ServiceAreaMap'
import {
  company,
  processSteps,
  publishedReviews,
  services,
  towns,
  trustPoints,
} from '../data'

export function Home() {
  return (
    <>
      <section className="hero" aria-label="CT Softwash">
        <div className="hero-media">
          <img
            src="/images/service-powerwash.jpg"
            alt="Soft washing and power washing a Connecticut shoreline home"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-mist" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-brand">
            <img className="willie-bob" src="/images/willie.png" alt="" width={88} height={88} />
            <p className="hero-brand-name">CT Softwash</p>
          </div>
          <h1>{company.tagline}</h1>
          <p className="hero-support">
            Soft washing, roof cleaning, and exterior restoration for the Connecticut shoreline,
            New London · Middlesex · Windham Counties, and Washington County, RI.
          </p>
          <div className="hero-actions">
            <a className="btn btn-red" href={company.phone.tel}>
              <PhoneIcon /> Call {company.phone.display}
            </a>
            <a className="btn btn-blue" href={company.phone.sms}>
              <SmsIcon /> Text Willie&apos;s crew
            </a>
            <Link className="btn btn-ghost" to="/contact#estimate">
              Free estimate
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <Reveal>
          <div className="trust-strip">
            {trustPoints.map((t) => (
              <div className="trust-item" key={t.title}>
                <strong>{t.title}</strong>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Exterior cleaning that respects the surface</h2>
              <p>
                Soft wash where siding and roofs need care. Power wash where concrete and fences can
                take the hit. Meet Willie — then put us to work.
              </p>
            </div>
          </Reveal>
          <div className="service-panels">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.id}>
                <Link to={`/services/${s.path}`} className={`service-panel panel-${i % 3}`}>
                  <img src={s.image} alt={s.imageAlt} width={800} height={560} loading="lazy" />
                  <div>
                    <h3>{s.shortName}</h3>
                    <p>{s.blurb}</p>
                    <span className="text-link">
                      Learn more <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="section-cta">
            <Link className="btn btn-blue" to="/services">
              All services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-dark willie-band">
        <div className="container willie-band-inner">
          <Reveal>
            <img className="willie-float" src="/images/willie.png" alt="Willie the Whale, CT Softwash mascot" width={220} height={220} />
          </Reveal>
          <Reveal>
            <div>
              <h2>Meet Willie the Whale</h2>
              <p>
                When dirt gets silly, call Willie. CT Softwash brings friendly shoreline energy and
                serious soft-wash craft — licensed & insured techs, clear quotes, and a 100%
                satisfaction guarantee.
              </p>
              <div className="cta-actions">
                <a className="btn btn-red" href={company.phone.tel}>
                  <PhoneIcon /> {company.phone.display}
                </a>
                <Link className="btn btn-ghost" to="/about">
                  About the crew
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>How it works</h2>
              <p>Four clear steps from first call to sparkling siding.</p>
            </div>
          </Reveal>
          <ol className="process-rail">
            {processSteps.map((step, i) => (
              <Reveal key={step.title}>
                <li>
                  <span className="process-index">{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-foam">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Service areas on the map</h2>
              <p>
                Middlesex, New London, Windham (CT), Washington County (RI), and the Connecticut
                shoreline — tap a county or jump to a town page.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <ServiceAreaMap />
          </Reveal>
          <div className="section-cta">
            <Link className="btn btn-red" to="/service-areas">
              Browse all towns
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Neighbors already called Willie</h2>
              <p>Reviews published on our owned CT Softwash sites — not invented for this rebuild.</p>
            </div>
          </Reveal>
          <div className="review-rail">
            {publishedReviews.map((r) => (
              <Reveal key={r.name}>
                <blockquote className="review">
                  <p>“{r.quote}”</p>
                  <footer>
                    <strong>{r.name}</strong>
                    <span>{r.place}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-band">
          <Reveal>
            <div>
              <h2>Ready for a free estimate?</h2>
              <p>
                Call or text {company.phone.display}. Or send the form — we serve{' '}
                {towns.length}+ priority towns across our counties.
              </p>
            </div>
          </Reveal>
          <div className="cta-actions">
            <a className="btn btn-red" href={company.phone.tel}>
              <PhoneIcon /> Call now
            </a>
            <a className="btn btn-blue" href={company.phone.sms}>
              <SmsIcon /> Text us
            </a>
            <Link className="btn btn-ghost" to="/contact#estimate">
              Estimate form
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { PhoneIcon } from '../components/Icons'
import { company, faqs } from '../data'

export function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About CT Softwash — local soft wash with serious results</h1>
          <p>
            CT Softwash LLC is owned by {company.owner} and based at {company.address.full}. When
            dirt gets silly, call Willie — and a licensed & insured crew that soft-washes shoreline
            homes the right way.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <img
              className="about-photo"
              src="/images/about-atmosphere.jpg"
              alt="Connecticut shoreline home exterior cleaned by soft washing"
              width={900}
              height={700}
            />
          </Reveal>
          <Reveal>
            <div>
              <h2>Why soft wash matters here</h2>
              <p>
                Shoreline weather feeds algae, mildew, and black roof streaks. High pressure can
                scar siding and lift shingle granules. We use soft-wash chemistry on houses and
                roofs, and reserve power washing for surfaces that can take it.
              </p>
              <p>
                Our owned sites publish the same promise: free estimates, trained technicians,
                affordable pricing, 24/7 support for questions, and a 100% satisfaction guarantee.
              </p>
              <ul className="check-list">
                <li>House washing & soft washing</li>
                <li>Roof cleaning & treatment</li>
                <li>Gutters, decks, patios, concrete, bluestone</li>
                <li>Residential and light commercial exteriors</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-dark willie-band">
        <div className="container willie-band-inner">
          <img className="willie-float" src="/images/willie.png" alt="Willie the Whale" width={200} height={200} />
          <div>
            <h2>Willie the Whale</h2>
            <p>
              Willie is our mascot and reminder that curb appeal can be fun without cutting corners
              on craft. Tagline locked: <em>{company.tagline}</em>.
            </p>
            <a className="btn btn-red" href={company.phone.tel}>
              <PhoneIcon /> {company.phone.display}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Questions we hear a lot</h2>
              <p>Straight answers from how we actually work.</p>
            </div>
          </Reveal>
          <div className="faq-list">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="faq">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <div className="section-cta">
            <Link className="btn btn-blue" to="/contact">
              Contact the crew
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

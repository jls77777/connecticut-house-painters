import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { ArrowIcon, PhoneIcon } from '../components/Icons'
import { company } from '../data'

export function PaintingServices() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Painting services available — soft wash first, then paint</h1>
          <p>
            CT Softwash and Connecticut House Painters work hand-in-hand — clean first, then coat.
            Painting projects are handled at{' '}
            <a href={company.paintingUrl} target="_blank" rel="noopener noreferrer">
              connecticuthousepainters.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container paint-grid">
          <Reveal>
            <figure className="paint-compare">
              <img
                src="/images/project-before.jpg"
                alt="Home exterior before painting by Connecticut House Painters"
                width={900}
                height={700}
              />
              <figcaption>Before painting</figcaption>
            </figure>
          </Reveal>
          <Reveal>
            <figure className="paint-compare">
              <img
                src="/images/project-after.jpg"
                alt="Home exterior after painting by Connecticut House Painters"
                width={900}
                height={700}
              />
              <figcaption>After painting</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section section-foam">
        <div className="container about-grid">
          <div>
            <h2>Why wash before you paint?</h2>
            <p>
              Paint sticks best to clean, sound surfaces. Soft washing removes chalk, algae, and
              film so the new coat lasts — especially on shoreline homes.
            </p>
            <ul className="check-list">
              <li>Interior & exterior painting</li>
              <li>Cabinets, decks, and commercial work</li>
              <li>Same owner network — {company.owner}</li>
              <li>Call CT Softwash for wash prep, then book paint online</li>
            </ul>
          </div>
          <div className="paint-cta-panel">
            <img src="/images/willie.png" alt="" width={100} height={100} />
            <h3>Ready to paint?</h3>
            <p>Visit the painting site for colors, services, and estimates.</p>
            <a
              className="btn btn-buoy"
              href={company.paintingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Connecticut House Painters <ArrowIcon />
            </a>
            <a className="btn btn-outline" href={company.phone.tel}>
              <PhoneIcon /> Or call {company.phone.display}
            </a>
            <Link className="text-link" to="/services/house-washing">
              Book soft wash prep first →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

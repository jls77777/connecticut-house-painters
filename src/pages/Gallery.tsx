import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { company } from '../data'
import { PhoneIcon } from '../components/Icons'

const shots = [
  {
    src: '/images/service-powerwash.jpg',
    alt: 'Power washing and soft washing exterior walls',
    label: 'House soft wash',
  },
  {
    src: '/images/service-exterior.jpg',
    alt: 'Clean exterior after roof and siding treatment',
    label: 'Exterior refresh',
  },
  {
    src: '/images/service-deck.jpg',
    alt: 'Deck cleaning before stain',
    label: 'Deck cleaning',
  },
  {
    src: '/images/project-before.jpg',
    alt: 'Exterior surface before soft washing',
    label: 'Before',
  },
  {
    src: '/images/project-after.jpg',
    alt: 'Exterior surface after soft washing',
    label: 'After',
  },
  {
    src: '/images/about-atmosphere.jpg',
    alt: 'Connecticut home atmosphere after cleaning',
    label: 'Shoreline curb appeal',
  },
]

export function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>CT Softwash gallery — see the sparkle</h1>
          <p>
            Real project photography from our asset library — soft wash and exterior cleaning that
            brings homes back.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container gallery-grid">
          {shots.map((shot) => (
            <Reveal key={shot.src + shot.label}>
              <figure className="gallery-item">
                <img src={shot.src} alt={shot.alt} width={900} height={700} loading="lazy" />
                <figcaption>{shot.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-band">
          <div>
            <h2>Want this for your place?</h2>
            <p>Call or text {company.phone.display} for a free estimate.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-red" href={company.phone.tel}>
              <PhoneIcon /> Call now
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

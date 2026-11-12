import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { ServiceAreaMap } from '../components/ServiceAreaMap'
import { counties, company, towns } from '../data'
import { PhoneIcon } from '../components/Icons'

export function ServiceAreas() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Where Willie works — CT &amp; Washington County, RI</h1>
          <p>
            Middlesex, New London, and Windham Counties in Connecticut, Washington County in Rhode
            Island, plus the Connecticut shoreline. Call{' '}
            <a href={company.phone.tel}>{company.phone.display}</a> if your town is nearby.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <ServiceAreaMap />
          </Reveal>
        </div>
      </section>

      <section className="section section-foam">
        <div className="container">
          {counties
            .filter((c) => c.id !== 'shoreline')
            .map((county) => {
              const list = towns.filter((t) => t.county === county.id)
              return (
                <Reveal key={county.id}>
                  <div className="county-block">
                    <h2>
                      {county.name}
                      <span>{county.region}</span>
                    </h2>
                    <ul className="town-pill-list">
                      {list.map((t) => (
                        <li key={t.path}>
                          <Link to={`/${t.path}`}>
                            Power washing {t.name} {t.state}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          <Reveal>
            <div className="county-block">
              <h2>
                Connecticut Shoreline
                <span>Priority coastal towns</span>
              </h2>
              <ul className="town-pill-list">
                {towns
                  .filter((t) =>
                    [
                      'new-london',
                      'mystic',
                      'groton',
                      'niantic',
                      'old-saybrook',
                      'clinton',
                      'westbrook',
                      'westerly',
                      'narragansett',
                    ].includes(t.slug),
                  )
                  .map((t) => (
                    <li key={t.path}>
                      <Link to={`/${t.path}`}>
                        Power washing {t.name} {t.state}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band">
          <div>
            <h2>Don&apos;t see your town?</h2>
            <p>We cover many neighborhoods inside these counties. Ask — we often can help.</p>
          </div>
          <a className="btn btn-red" href={company.phone.tel}>
            <PhoneIcon /> {company.phone.display}
          </a>
        </div>
      </section>
    </>
  )
}

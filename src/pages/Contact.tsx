import { Reveal } from '../components/Reveal'
import { EstimateForm } from '../components/EstimateForm'
import { MapPinIcon, PhoneIcon, SmsIcon } from '../components/Icons'
import { company } from '../data'

export function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact CT Softwash — call, text, or free estimate</h1>
          <p>
            Talk with {company.owner}&apos;s CT Softwash crew. Hours: {company.hours}. Based in
            Ledyard — serving the shoreline and our listed counties.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-card">
              <h2>Reach us</h2>
              <ul className="contact-list">
                <li>
                  <PhoneIcon />
                  <div>
                    <strong>Call</strong>
                    <a href={company.phone.tel}>{company.phone.display}</a>
                  </div>
                </li>
                <li>
                  <SmsIcon />
                  <div>
                    <strong>Text</strong>
                    <a href={company.phone.sms}>{company.phone.display}</a>
                  </div>
                </li>
                <li>
                  <MapPinIcon />
                  <div>
                    <strong>Shop / office</strong>
                    <a href={company.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {company.address.full}
                    </a>
                    <span className="muted">{company.googleListing}</span>
                  </div>
                </li>
              </ul>
              <p>
                Email:{' '}
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
              <div className="map-embed">
                <iframe
                  title="CT Softwash LLC on Google Maps"
                  src={company.address.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <EstimateForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}

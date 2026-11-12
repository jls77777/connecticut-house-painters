import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { EstimateForm } from '../components/EstimateForm'
import { Reveal } from '../components/Reveal'
import { PhoneIcon, SmsIcon } from '../components/Icons'
import { company } from '../data'

export function Contact() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#estimate') {
      const el = document.getElementById('estimate')
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  return (
    <>
      <section className="page-hero">
        <div className="hero-media">
          <img
            src="/images/service-powerwash.jpg"
            alt="Connecticut shoreline property maintained by Connecticut House Painters"
            width={1600}
            height={1067}
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="page-hero-content">
          <p className="display" style={{ color: 'var(--sky)', margin: '0 0 0.5rem', fontSize: '1.4rem' }}>
            Connecticut House Painters
          </p>
          <h1>Contact</h1>
          <p>Call, text, or request a free estimate — we are ready when you are.</p>
        </div>
      </section>

      <section className="section">
        <div className="container form-shell">
          <Reveal>
            <div className="contact-stack">
              <div className="contact-card">
                <h3>Office</h3>
                <a href={company.office.tel}>{company.office.display}</a>
                <div className="phone-row">
                  <a className="btn btn-red" href={company.office.tel}>
                    <PhoneIcon /> Call office
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <h3>Cell</h3>
                <a href={company.cell.tel}>{company.cell.display}</a>
                <div className="phone-row">
                  <a className="btn btn-blue" href={company.cell.tel}>
                    <PhoneIcon /> Call cell
                  </a>
                  <a className="btn btn-outline" href={company.cell.sms}>
                    <SmsIcon /> Text cell
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <h3>Email</h3>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
              <div className="contact-card">
                <h3>Hours</h3>
                <p>{company.hours}</p>
              </div>
              <div className="contact-card">
                <h3>Service area</h3>
                <p>{company.serviceArea}</p>
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

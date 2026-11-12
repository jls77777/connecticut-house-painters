import { useState, type FormEvent } from 'react'
import { company, serviceTypes } from '../data'
import { PhoneIcon, SmsIcon } from './Icons'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

export function EstimateForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())

    setStatus('submitting')

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        })
        if (!res.ok) throw new Error('submit failed')
        setStatus('success')
        form.reset()
        return
      } catch {
        // fall through to mailto
      }
    }

    const subject = encodeURIComponent(
      `Free estimate request — ${String(payload.name || 'Homeowner')}`,
    )
    const body = encodeURIComponent(
      [
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        `Address / Town: ${payload.address}`,
        `Service: ${payload.service}`,
        '',
        String(payload.message || ''),
      ].join('\n'),
    )

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setStatus('success')
    form.reset()
  }

  if (status === 'success') {
    return (
      <div className="form-panel" role="status" aria-live="polite">
        <div className="form-success">
          <h3>Estimate request ready</h3>
          <p>
            Thanks — your details are set. If your email app opened, hit send. Prefer to talk now?
            Call or text Willie&apos;s crew and we will get you on the calendar.
          </p>
          <div className="cta-actions" style={{ justifyContent: 'center' }}>
            <a className="btn btn-buoy" href={company.phone.tel}>
              <PhoneIcon /> Call {company.phone.display}
            </a>
            <a className="btn btn-sea" href={company.phone.sms}>
              <SmsIcon /> Text us
            </a>
            <button type="button" className="btn btn-outline" onClick={() => setStatus('idle')}>
              Send another request
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="form-panel" id="estimate">
      <h2>{compact ? 'Free estimate' : 'Request a free estimate'}</h2>
      <p>
        Tell us about the property. We serve {company.serviceArea}. Fast callbacks during business
        hours when possible.
      </p>
      <form onSubmit={onSubmit} noValidate>
        <div className={`form-grid ${compact ? '' : 'two'}`}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" autoComplete="name" required placeholder="Your name" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="Best number to reach you"
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@email.com"
            />
          </div>
          <div className="field">
            <label htmlFor="address">Address / Town</label>
            <input
              id="address"
              name="address"
              autoComplete="street-address"
              required
              placeholder="Street or town in CT / RI"
            />
          </div>
          <div className="field" style={{ gridColumn: compact ? undefined : '1 / -1' }}>
            <label htmlFor="service">Service type</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {serviceTypes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="field" style={{ gridColumn: compact ? undefined : '1 / -1' }}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Siding, roof streaks, gutters, timing, or anything we should know"
            />
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn-buoy" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Request free estimate'}
          </button>
          <a className="btn btn-outline" href={company.phone.sms}>
            <SmsIcon /> Text {company.phone.display}
          </a>
        </div>
        <p className="form-note">
          Submits via {FORMSPREE_ID ? 'secure form delivery' : `email to ${company.email}`} · Or call{' '}
          <a href={company.phone.tel}>{company.phone.display}</a>
        </p>
        {error ? <p className="form-error">{error}</p> : null}
      </form>
    </div>
  )
}

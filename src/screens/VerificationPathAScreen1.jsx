/* ─────────────────────────────────────────────────────────────────────────────
   Verification · Path A · Screen 1 — Personal Details
   Screen 6A of 15
   Figma: "Verification · Path A · Screen 1 — Personal Details"
───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react'

function ProgressBar({ section = 'Verification', totalSteps = 3, activeStep = 1 }) {
  return (
    <div>
      <span style={{
        fontSize: 12, fontWeight: 600,
        color: 'var(--text-secondary)', letterSpacing: 0.1,
      }}>
        {section}
      </span>
      <div style={{ display: 'flex', gap: 5, marginTop: 6 }}>
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 99,
            background: i < activeStep ? 'var(--green-main)' : 'var(--border)',
            transition: 'background var(--dur-screen) var(--ease-standard)',
          }} />
        ))}
      </div>
    </div>
  )
}

/* ── Decorative Blobs ────────────────────────────────────────────────────────
   Dark navy blob top-left, two small teal blobs top-right,
   small teal blob mid-left, large teal blob bottom-right.
─────────────────────────────────────────────────────────────────────────────*/
function VerificationBlobs() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Top-left — large dark navy */}
      <div className="blob-1 anim-blob-entry-1" style={{
        position: 'absolute', width: 90, height: 90, borderRadius: '50%',
        background: '#0D1B2A', top: -46, left: -32, opacity: 1,
      }} />
      {/* Top-right — small dark (back) */}
      <div className="blob-3 anim-blob-entry-2" style={{
        position: 'absolute', width: 44, height: 44, borderRadius: '50%',
        background: '#2C4A62', top: 16, right: 28, opacity: 0.85,
      }} />
      {/* Top-right — small teal (front) */}
      <div className="blob-2 anim-blob-entry-3" style={{
        position: 'absolute', width: 30, height: 30, borderRadius: '50%',
        background: '#5DCAA5', top: 30, right: 16, opacity: 0.9,
      }} />
      {/* Mid-left — small teal */}
      <div className="blob-4" style={{
        position: 'absolute', width: 30, height: 30, borderRadius: '50%',
        background: '#5DCAA5', top: 370, left: 18, opacity: 0.85,
      }} />
      {/* Bottom-right — large teal */}
      <div className="blob-2" style={{
        position: 'absolute', width: 155, height: 155, borderRadius: '50%',
        background: '#1D9E75', bottom: -58, right: -42, opacity: 0.75,
      }} />
    </div>
  )
}

/* ── Form field ─────────────────────────────────────────────────────────────*/
function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function VerificationPathAScreen1({ navigate }) {
  const [form, setForm] = useState({
    fullName:   'Jane Wanjiku Kamau',
    nationalId: '32847561',
    phone:      '+254 712 345 678',
    dob:        '12 / 03 / 1990',
    kraPin:     'A001234567B',
  })

  const set = key => val => setForm(f => ({ ...f, [key]: val }))

  const isValid = Object.values(form).every(v => v.trim().length > 0)

  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      <VerificationBlobs />

      {/* ── Back chevron + progress bar ── */}
      <div style={{ padding: '52px 24px 0', position: 'relative', zIndex: 1 }}>
        <button className="back-btn" onClick={() => navigate('verification1', 'back')} style={{ marginBottom: 16 }} aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <ProgressBar section="Verification" totalSteps={3} activeStep={2} />
      </div>

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '24px 24px 0', position: 'relative', zIndex: 1 }} className="anim-fade-up">
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
          Tell us about yourself
        </h1>
        <p
          className="body-text"
          style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}
        >
          We need these details to open your CDS account.
        </p>
      </div>

      {/* ── Form ── */}
      <div
        style={{
          padding: '28px 24px 120px',
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', gap: 20,
        }}
        className="anim-fade-up-delay"
      >
        {/* Personal details group */}
        <div>
          <p style={{
            fontSize: 12, fontWeight: 600, color: 'var(--green-main)',
            letterSpacing: 0.3, marginBottom: 12, textTransform: 'uppercase',
          }}>
            Personal details
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Field
              label="Full name"
              value={form.fullName}
              onChange={set('fullName')}
              placeholder="e.g. Jane Wanjiku Kamau"
            />
            <Field
              label="National ID / Passport number"
              value={form.nationalId}
              onChange={set('nationalId')}
              placeholder="e.g. 32847561"
            />
          </div>
        </div>

        {/* Contact details group */}
        <div>
          <p style={{
            fontSize: 12, fontWeight: 600, color: 'var(--green-main)',
            letterSpacing: 0.3, marginBottom: 12, textTransform: 'uppercase',
          }}>
            Contact details
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Field
              label="Phone number"
              value={form.phone}
              onChange={set('phone')}
              placeholder="+254"
              type="tel"
            />
            {/* DOB + KRA PIN side by side */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Field
                label="Date of birth"
                value={form.dob}
                onChange={set('dob')}
                placeholder="DD / MM / YYYY"
              />
              <Field
                label="KRA PIN"
                value={form.kraPin}
                onChange={set('kraPin')}
                placeholder="e.g. A001234567B"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate('verificationA2', 'forward')}
        disabled={!isValid}
      >
        Continue
      </button>

    </div>
  )
}

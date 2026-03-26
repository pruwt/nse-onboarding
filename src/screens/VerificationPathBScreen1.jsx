/* ─────────────────────────────────────────────────────────────────────────────
   Verification · Path B · Screen 1 — Enter CDS Number
   Screen 6B of 15
   Figma: "Verification · Path B · Screen 1 — Enter CDS Number"
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
   Same layout as Path A screens.
─────────────────────────────────────────────────────────────────────────────*/
function VerificationBlobs() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <div className="blob-1 anim-blob-entry-1" style={{
        position: 'absolute', width: 90, height: 90, borderRadius: '50%',
        background: '#0D1B2A', top: -46, left: -32, opacity: 1,
      }} />
      <div className="blob-3 anim-blob-entry-2" style={{
        position: 'absolute', width: 44, height: 44, borderRadius: '50%',
        background: '#2C4A62', top: 16, right: 28, opacity: 0.85,
      }} />
      <div className="blob-2 anim-blob-entry-3" style={{
        position: 'absolute', width: 30, height: 30, borderRadius: '50%',
        background: '#5DCAA5', top: 30, right: 16, opacity: 0.9,
      }} />
      <div className="blob-4" style={{
        position: 'absolute', width: 30, height: 30, borderRadius: '50%',
        background: '#5DCAA5', top: 430, left: 18, opacity: 0.85,
      }} />
      <div className="blob-2" style={{
        position: 'absolute', width: 155, height: 155, borderRadius: '50%',
        background: '#1D9E75', bottom: -58, right: -42, opacity: 0.75,
      }} />
    </div>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function VerificationPathBScreen1({ navigate }) {
  const [cdsNumber, setCdsNumber] = useState('1234567890123')

  const isValid = cdsNumber.replace(/\s/g, '').length === 13

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
          Enter your CDS account number
        </h1>
        <p
          className="body-text"
          style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}
        >
          Your CDS number was assigned when you opened your account at the NSE.
        </p>
      </div>

      {/* ── CDS input ── */}
      <div
        style={{ padding: '28px 24px 0', position: 'relative', zIndex: 1 }}
        className="anim-fade-up-delay"
      >
        <div className="input-group">
          <label className="input-label">CDS account number</label>
          <input
            className="input-field"
            type="text"
            inputMode="numeric"
            value={cdsNumber}
            onChange={e => {
              const raw = e.target.value.replace(/\D/g, '').slice(0, 13)
              setCdsNumber(raw)
            }}
            placeholder="1234567890123"
            style={{ fontSize: 18, letterSpacing: 1 }}
          />
        </div>
        <p className="helper-text" style={{ marginTop: 6 }}>
          13-digit number — e.g. 1234567890123
        </p>
      </div>

      {/* ── Info card — Where to find your CDS number ── */}
      <div
        style={{ padding: '24px 24px 0', position: 'relative', zIndex: 1 }}
        className="anim-fade-up-delay"
      >
        <div style={{
          background: '#F9FAFB',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '16px 16px',
        }}>
          {/* Title row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            {/* Info icon */}
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              background: '#3B82F6',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ color: 'white', fontSize: 12, fontWeight: 700, lineHeight: 1 }}>i</span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>
              Where to find your CDS number
            </span>
          </div>

          {/* Bullet points */}
          {[
            'On your CDS account statement from your stockbroker',
            'In a confirmation email from CDSC Kenya',
            'On the NSE mobile app under "My Account"',
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 8,
              marginBottom: i < 2 ? 8 : 0,
            }}>
              <div style={{
                width: 5, height: 5, borderRadius: '50%',
                background: 'var(--text-secondary)',
                flexShrink: 0, marginTop: 6,
              }} />
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate('verificationB2', 'forward')}
        disabled={!isValid}
      >
        Find my account
      </button>

    </div>
  )
}

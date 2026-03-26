/* ─────────────────────────────────────────────────────────────────────────────
   Verification · Path A · Screen 2 — Document Upload
   Screen 7A of 15
   Figma: "Verification · Path A · Screen 2 — Document Upload"
───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react'

function ProgressBar({ section = 'Verification', totalSteps = 3, activeStep = 1 }) {
  return (
    <div>
      <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: 0.1 }}>
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
        background: '#5DCAA5', top: 490, left: 18, opacity: 0.85,
      }} />
      <div className="blob-2" style={{
        position: 'absolute', width: 155, height: 155, borderRadius: '50%',
        background: '#1D9E75', bottom: -58, right: -42, opacity: 0.75,
      }} />
    </div>
  )
}

/* ── Upload Card ─────────────────────────────────────────────────────────────
   Two states:
     uploaded  — light green bg, solid green border, filename + checkmark
     pending   — white bg, dashed border, upload icon + "Browse or Drag Files"
─────────────────────────────────────────────────────────────────────────────*/
function UploadCard({ title, subtitle, uploaded, filename, onTap }) {
  return (
    <button
      onClick={onTap}
      style={{
        width: '100%',
        background: uploaded ? '#E1F5EE' : 'var(--white)',
        border: uploaded
          ? '1.5px solid var(--green-main)'
          : '1.5px dashed var(--border)',
        borderRadius: 14,
        padding: '16px 16px',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      }}
    >
      {/* Title row */}
      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 3 }}>
        {title}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: uploaded ? 12 : 16 }}>
        {subtitle}
      </div>

      {uploaded ? (
        /* ── Uploaded state ── */
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>
            {filename}
          </span>
          {/* Green checkmark badge */}
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: '#0F6E56',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <polyline
                className="anim-draw-check"
                points="2,7 5.5,10.5 12,3.5"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ) : (
        /* ── Not-uploaded state ── */
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          {/* Upload icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 16V8M12 8L9 11M12 8L15 11" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>
            Browse or Drag Files
          </span>
          <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>
            Not uploaded
          </span>
        </div>
      )}
    </button>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function VerificationPathAScreen2({ navigate }) {
  const [docs, setDocs] = useState({
    nationalId: { uploaded: true,  filename: 'national_id_front.jpg' },
    kraPin:     { uploaded: false, filename: null },
  })

  const toggle = key => () => {
    const fakeNames = { nationalId: 'national_id_front.jpg', kraPin: 'kra_pin_cert.pdf' }
    setDocs(d => ({
      ...d,
      [key]: { uploaded: !d[key].uploaded, filename: fakeNames[key] },
    }))
  }

  const bothUploaded = docs.nationalId.uploaded && docs.kraPin.uploaded

  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      <VerificationBlobs />

      {/* ── Back chevron + progress bar ── */}
      <div style={{ padding: '52px 24px 0', position: 'relative', zIndex: 1 }}>
        <button className="back-btn" onClick={() => navigate('verificationA1', 'back')} style={{ marginBottom: 16 }} aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <ProgressBar section="Verification" totalSteps={3} activeStep={2} />
      </div>

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '24px 24px 0', position: 'relative', zIndex: 1 }} className="anim-fade-up">
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
          Upload your documents
        </h1>
        <p className="body-text" style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}>
          We need two documents to verify your identity and open your CDS account.
        </p>
      </div>

      {/* ── Upload cards ── */}
      <div
        style={{ padding: '24px 24px 120px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}
        className="anim-fade-up-delay"
      >
        <UploadCard
          title="National ID / Passport"
          subtitle="JPG, PNG or PDF · Max 5MB"
          uploaded={docs.nationalId.uploaded}
          filename={docs.nationalId.filename}
          onTap={toggle('nationalId')}
        />
        <UploadCard
          title="KRA PIN Certificate"
          subtitle="JPG, PNG or PDF · Max 5MB"
          uploaded={docs.kraPin.uploaded}
          filename={docs.kraPin.filename}
          onTap={toggle('kraPin')}
        />
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate('verificationA3', 'forward')}
        disabled={!bothUploaded}
      >
        Continue
      </button>

    </div>
  )
}

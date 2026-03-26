/* ─────────────────────────────────────────────────────────────────────────────
   Verification · Screen 1 — CDS Account
   Screen 5 of 15
   Figma: "Verification · Screen 1 — CDS Account"
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

/* ── Path A Icon — "+" in a rounded square ──────────────────────────────────*/
function IconNewCDS() {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 10,
      background: '#F3F4F6',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="#9CA3AF" strokeWidth="1.5" />
        <line x1="10" y1="6" x2="10" y2="14" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6" y1="10" x2="14" y2="10" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

/* ── Path B Icon — padlock in a rounded square ──────────────────────────────*/
function IconExistingCDS() {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: 10,
      background: '#F3F4F6',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
        <rect x="2" y="9" width="14" height="10" rx="3" stroke="#9CA3AF" strokeWidth="1.5" />
        <path d="M5 9V6a4 4 0 0 1 8 0v3" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="14" r="1.5" fill="#9CA3AF" />
      </svg>
    </div>
  )
}

/* ── Radio Card ─────────────────────────────────────────────────────────────*/
function RadioCard({ icon, title, subtitle, selected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      style={{
        width: '100%',
        background: 'var(--white)',
        border: `1.5px solid ${selected ? 'var(--navy)' : 'var(--border)'}`,
        borderRadius: 14,
        padding: '16px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
        transform: 'scale(1)',
      }}
      onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
      onTouchStart={e => e.currentTarget.style.transform = 'scale(0.98)'}
      onTouchEnd={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      {icon}

      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
          {title}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2, lineHeight: 1.4 }}>
          {subtitle}
        </div>
      </div>

      {/* Radio indicator */}
      <div style={{
        width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
        border: selected ? 'none' : '1.5px solid var(--border)',
        background: selected ? 'var(--navy)' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--dur-fast) var(--ease-standard)',
      }}>
        {selected && (
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'white' }} />
        )}
      </div>
    </button>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function VerificationScreen1({ navigate }) {
  const [selected, setSelected] = useState('A')

  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      {/* ── Back chevron + progress bar ── */}
      <div style={{ padding: '52px 24px 0' }}>
        <button className="back-btn" onClick={() => navigate('personalization3', 'back')} style={{ marginBottom: 16 }} aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <ProgressBar section="Verification" totalSteps={3} activeStep={1} />
      </div>

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '24px 24px 0' }} className="anim-fade-up">
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
          Do you have a CDS account?
        </h1>
        <p
          className="body-text"
          style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}
        >
          A CDS account is required to buy and sell shares at the NSE.
        </p>
      </div>

      {/* ── Radio options ── */}
      <div
        style={{ padding: '28px 24px 0', display: 'flex', flexDirection: 'column', gap: 12 }}
        className="anim-fade-up-delay"
      >
        <RadioCard
          icon={<IconNewCDS />}
          title="Open a new CDS account"
          subtitle="I don't have one yet — help me apply"
          selected={selected === 'A'}
          onSelect={() => setSelected('A')}
        />
        <RadioCard
          icon={<IconExistingCDS />}
          title="I already have a CDS account"
          subtitle="Link my existing account"
          selected={selected === 'B'}
          onSelect={() => setSelected('B')}
        />
      </div>

      {/* ── Info banner ── */}
      <div
        style={{ padding: '28px 24px 0' }}
        className="anim-fade-up-delay"
      >
        <div className="info-banner">
          <div className="info-banner-icon">i</div>
          <p className="info-banner-text">
            Opening a CDS account is free and takes about 3 minutes. You'll need your National ID and KRA PIN.
          </p>
        </div>
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate(selected === 'A' ? 'verificationA1' : 'verificationB1', 'forward')}
      >
        Continue
      </button>

    </div>
  )
}

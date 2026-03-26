/* ─────────────────────────────────────────────────────────────────────────────
   Personalization · Screen 2 — Investment Experience
   Screen 5 of 15 (new order)
   Figma: "Personalization · Screen 2 — Investment Experience"
───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react'

function ProgressBar({ section = 'Personalization', totalSteps = 3, activeStep = 1 }) {
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

/* ── Icons ───────────────────────────────────────────────────────────────────*/
function IconNew({ active }) {
  const c = active ? '#1D9E75' : '#9CA3AF'
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke={c} strokeWidth="1.5" />
      <line x1="10" y1="7" x2="10" y2="10" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <circle cx="10" cy="13" r="1" fill={c} />
    </svg>
  )
}
function IconSome({ active }) {
  const c = active ? '#1D9E75' : '#9CA3AF'
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <polyline points="2,14 7,9 11,12 18,5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14,5 18,5 18,9" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconExpert({ active }) {
  const c = active ? '#1D9E75' : '#9CA3AF'
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="12" width="4" height="6" rx="1" stroke={c} strokeWidth="1.5" />
      <rect x="8" y="8"  width="4" height="10" rx="1" stroke={c} strokeWidth="1.5" />
      <rect x="14" y="4" width="4" height="14" rx="1" stroke={c} strokeWidth="1.5" />
    </svg>
  )
}

/* ── Option card with subtitle ───────────────────────────────────────────────*/
function OptionCard({ icon, label, subtitle, selected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      style={{
        width: '100%',
        background: selected ? '#F9FAFB' : 'var(--white)',
        border: `1.5px solid ${selected ? 'var(--navy)' : 'var(--border)'}`,
        borderRadius: 14,
        padding: '15px 16px',
        display: 'flex', alignItems: 'center', gap: 12,
        cursor: 'pointer', textAlign: 'left',
        transition: 'border-color var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      }}
      onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
      onTouchStart={e => e.currentTarget.style.transform = 'scale(0.98)'}
      onTouchEnd={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{
        width: 38, height: 38, borderRadius: 10, flexShrink: 0,
        background: selected ? '#E1F5EE' : '#F3F4F6',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--dur-fast) var(--ease-standard)',
      }}>
        {icon}
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
          {label}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2, lineHeight: 1.4 }}>
          {subtitle}
        </div>
      </div>

      <div style={{
        width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
        border: selected ? 'none' : '1.5px solid var(--border)',
        background: selected ? 'var(--navy)' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--dur-fast) var(--ease-standard)',
      }}>
        {selected && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'white' }} />}
      </div>
    </button>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function PersonalizationScreen2({ navigate }) {
  const [selected, setSelected] = useState('some')

  const options = [
    {
      id: 'new',
      label: "I'm new to investing",
      subtitle: "I've never invested before",
      icon: <IconNew active={selected === 'new'} />,
    },
    {
      id: 'some',
      label: "I've invested before",
      subtitle: 'I have some experience with stocks or funds',
      icon: <IconSome active={selected === 'some'} />,
    },
    {
      id: 'expert',
      label: "I'm an experienced investor",
      subtitle: 'I actively manage a portfolio',
      icon: <IconExpert active={selected === 'expert'} />,
    },
  ]

  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      {/* ── Progress bar ── */}
      <div style={{ padding: '52px 24px 0' }}>
        <ProgressBar section="Personalization" totalSteps={3} activeStep={2} />
      </div>

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '24px 24px 0' }} className="anim-fade-up">
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
          How experienced are you with investing?
        </h1>
        <p className="body-text" style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}>
          This helps us tailor the guidance we show you.
        </p>
      </div>

      {/* ── Options ── */}
      <div
        style={{ padding: '24px 24px 120px', display: 'flex', flexDirection: 'column', gap: 12 }}
        className="anim-fade-up-delay"
      >
        {options.map(o => (
          <OptionCard
            key={o.id}
            icon={o.icon}
            label={o.label}
            subtitle={o.subtitle}
            selected={selected === o.id}
            onSelect={() => setSelected(o.id)}
          />
        ))}
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate('personalization3', 'forward')}
      >
        Continue
      </button>

    </div>
  )
}

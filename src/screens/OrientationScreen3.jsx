/* ─────────────────────────────────────────────────────────────────────────────
   Orientation · Screen 3 — Complete & Verify Your Identity
   Screen 4 of 15
   Figma: "Orientation · Screen 3 — Complete & Verify Your Identity"
───────────────────────────────────────────────────────────────────────────── */

function ProgressBar({ section = 'Orientation', totalSteps = 3, activeStep = 1 }) {
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

/* ── Document Cards Illustration ────────────────────────────────────────────
   Two overlapping ID-style document cards, each with a green checkmark badge.
   Card 1 (back-left) is rotated -4°, Card 2 (front-right) rotated +2°.
─────────────────────────────────────────────────────────────────────────────*/
function DocumentsIllustration() {
  function CheckBadge({ cx, cy }) {
    return (
      <>
        <circle cx={cx} cy={cy} r={13} fill="#0F6E56" />
        <polyline
          points={`${cx - 6},${cy} ${cx - 1},${cy + 5} ${cx + 7},${cy - 5}`}
          fill="none" stroke="white" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </>
    )
  }

  return (
    <svg
      viewBox="0 0 290 235"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}
      aria-label="Two verified identity documents"
    >
      {/* ── Card 1 — back, left, -4° ── */}
      <g transform="rotate(-4, 105, 97)">
        <rect x="15" y="40" width="180" height="115" rx="12"
          fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        {/* Avatar circle */}
        <circle cx="45" cy="69" r="15" fill="#E5E7EB" />
        {/* Text placeholder lines */}
        <rect x="70" y="60" width="92" height="8" rx="4" fill="#E5E7EB" />
        <rect x="70" y="74" width="65" height="6" rx="3" fill="#F3F4F6" />
        <rect x="24" y="99" width="152" height="6" rx="3" fill="#F3F4F6" />
        <rect x="24" y="111" width="120" height="6" rx="3" fill="#F3F4F6" />
        <rect x="24" y="123" width="138" height="6" rx="3" fill="#F3F4F6" />
        {/* Checkmark badge at bottom-right */}
        <CheckBadge cx={182} cy={142} />
      </g>

      {/* ── Card 2 — front, right, +2° ── */}
      <g transform="rotate(2, 180, 157)">
        <rect x="90" y="100" width="180" height="115" rx="12"
          fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
        {/* Text placeholder lines */}
        <rect x="108" y="122" width="140" height="8" rx="4" fill="#E5E7EB" />
        <rect x="108" y="136" width="110" height="6" rx="3" fill="#F3F4F6" />
        <rect x="108" y="148" width="132" height="6" rx="3" fill="#F3F4F6" />
        <rect x="108" y="160" width="95" height="6" rx="3" fill="#F3F4F6" />
        {/* Checkmark badge at bottom-right */}
        <CheckBadge cx={257} cy={202} />
      </g>
    </svg>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function OrientationScreen3({ navigate }) {
  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      {/* ── Progress bar ── */}
      <div style={{ padding: '52px 24px 0' }}>
        <ProgressBar section="Orientation" totalSteps={3} activeStep={3} />
      </div>

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '24px 24px 0' }} className="anim-fade-up">
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
          Complete &amp; verify your identity
        </h1>
        <p
          className="body-text"
          style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}
        >
          This process takes about 5 minutes and walks you through three simple steps.
        </p>
      </div>

      {/* ── Documents illustration ── */}
      <div
        style={{ padding: '32px 20px 0', flex: 1 }}
        className="anim-scale-in"
      >
        <DocumentsIllustration />
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate('personalization1', 'forward')}
      >
        Begin your personalization
      </button>

    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Orientation · Screen 2 — Define Your Goals
   Screen 3 of 15
   Figma: "Orientation · Screen 2 — Define Your Goals"
───────────────────────────────────────────────────────────────────────────── */

/* ── Progress Bar ────────────────────────────────────────────────────────────
   Same component as Screen 1; activeStep=2 lights up the first two segments.
─────────────────────────────────────────────────────────────────────────────*/
function ProgressBar({ section = 'Orientation', totalSteps = 3, activeStep = 1 }) {
  return (
    <div>
      <span style={{
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--text-secondary)',
        letterSpacing: 0.1,
      }}>
        {section}
      </span>
      <div style={{ display: 'flex', gap: 5, marginTop: 6 }}>
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 99,
              background: i < activeStep ? 'var(--green-main)' : 'var(--border)',
              transition: 'background var(--dur-screen) var(--ease-standard)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

/* ── Compass Illustration ────────────────────────────────────────────────────
   A compass rose showing four investment goals at the cardinal directions:
     N  →  Grow my wealth    (active / teal — needle points here)
     E  →  Passive income
     S  →  Save for a goal
     W  →  Learn investing
   The outer ring has a teal arc at the top to highlight the active direction.
─────────────────────────────────────────────────────────────────────────────*/
function CompassIllustration() {
  const CX = 190, CY = 148
  const R_OUTER = 80
  const R_FACE  = 62

  const toRad = d => d * Math.PI / 180

  // Teal arc centred at top (270°) ± 28°  →  from 242° to 298°
  const a1 = {
    x: CX + R_OUTER * Math.cos(toRad(242)),
    y: CY + R_OUTER * Math.sin(toRad(242)),
  }
  const a2 = {
    x: CX + R_OUTER * Math.cos(toRad(298)),
    y: CY + R_OUTER * Math.sin(toRad(298)),
  }
  const arcD = [
    `M ${a1.x.toFixed(1)} ${a1.y.toFixed(1)}`,
    `A ${R_OUTER} ${R_OUTER} 0 0 1 ${a2.x.toFixed(1)} ${a2.y.toFixed(1)}`,
  ].join(' ')

  const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

  return (
    <svg
      viewBox="-10 5 390 278"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}
      aria-label="Compass showing four investment goals"
    >
      {/* ── Outer ring ── */}
      <circle cx={CX} cy={CY} r={R_OUTER}
        fill="none" stroke="#E5E7EB" strokeWidth="1.5" />

      {/* ── Teal arc (N active indicator) ── */}
      <path d={arcD}
        fill="none" stroke="#1D9E75" strokeWidth="3" strokeLinecap="round" />

      {/* ── Tick between ring and face — N (teal) ── */}
      <line
        x1={CX} y1={CY - R_OUTER + 2}
        x2={CX} y2={CY - R_FACE - 3}
        stroke="#1D9E75" strokeWidth="2" strokeLinecap="round"
      />

      {/* ── Tick at S (gray) ── */}
      <line
        x1={CX} y1={CY + R_FACE + 3}
        x2={CX} y2={CY + R_OUTER - 2}
        stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round"
      />

      {/* ── Dark compass face ── */}
      <circle cx={CX} cy={CY} r={R_FACE} fill="#0D1B2A" />

      {/* ── W / E markers on the face ── */}
      <text x={CX - R_FACE + 14} y={CY + 5}
        textAnchor="middle" fontSize="12" fontWeight="600"
        fill="#6B7280" fontFamily={FONT}>W</text>
      <text x={CX + R_FACE - 14} y={CY + 5}
        textAnchor="middle" fontSize="12" fontWeight="600"
        fill="#6B7280" fontFamily={FONT}>E</text>

      {/* ── Needle (red upper / dark lower) ── */}
      {/* Dark lower half pointing S */}
      <polygon
        points={`${CX - 9},${CY} ${CX},${CY + 32} ${CX + 9},${CY}`}
        fill="#374151"
      />
      {/* Red upper half pointing N */}
      <polygon
        points={`${CX},${CY - 44} ${CX - 9},${CY} ${CX + 9},${CY}`}
        fill="#E24B4A"
      />
      {/* Centre cap */}
      <circle cx={CX} cy={CY} r={5}   fill="#4B5563" />
      <circle cx={CX} cy={CY} r={2.5} fill="#9CA3AF" />

      {/* ── Direction labels ── */}

      {/* N — Grow my wealth (teal, active) */}
      <text x={CX} y={CY - R_OUTER - 16}
        textAnchor="middle" fontSize="13" fontWeight="600"
        fill="#1D9E75" fontFamily={FONT}>
        Grow my wealth
      </text>
      <text x={CX} y={CY - R_OUTER - 2}
        textAnchor="middle" fontSize="11"
        fill="#1D9E75" fontFamily={FONT}>
        Long-term growth
      </text>

      {/* E — Passive income */}
      <text x={CX + R_OUTER + 12} y={CY - 4}
        textAnchor="start" fontSize="11"
        fill="#6B7280" fontFamily={FONT}>
        Passive income
      </text>
      <text x={CX + R_OUTER + 12} y={CY + 11}
        textAnchor="start" fontSize="10"
        fill="#9CA3AF" fontFamily={FONT}>
        Regular returns
      </text>

      {/* S — Save for a goal */}
      <text x={CX} y={CY + R_OUTER + 18}
        textAnchor="middle" fontSize="12"
        fill="#6B7280" fontFamily={FONT}>
        Save for a goal
      </text>
      <text x={CX} y={CY + R_OUTER + 33}
        textAnchor="middle" fontSize="11"
        fill="#9CA3AF" fontFamily={FONT}>
        School, home, travel
      </text>

      {/* W — Learn investing */}
      <text x={CX - R_OUTER - 12} y={CY - 4}
        textAnchor="end" fontSize="11"
        fill="#6B7280" fontFamily={FONT}>
        Learn investing
      </text>
      <text x={CX - R_OUTER - 12} y={CY + 11}
        textAnchor="end" fontSize="10"
        fill="#9CA3AF" fontFamily={FONT}>
        First-time investor
      </text>
    </svg>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function OrientationScreen2({ navigate }) {
  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      {/* ── Progress bar ── */}
      <div style={{ padding: '52px 24px 0' }}>
        <ProgressBar section="Orientation" totalSteps={3} activeStep={2} />
      </div>

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '24px 24px 0' }} className="anim-fade-up">
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
          Define your goals and risk preferences
        </h1>
        <p
          className="body-text"
          style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}
        >
          This process takes about 5 minutes and walks you through three simple steps.
        </p>
      </div>

      {/* ── Compass illustration ── */}
      <div
        style={{ padding: '24px 12px 0', flex: 1 }}
        className="anim-scale-in"
      >
        <CompassIllustration />
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate('orientation3', 'forward')}
      >
        Continue
      </button>

    </div>
  )
}

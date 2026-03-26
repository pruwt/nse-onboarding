/* ─────────────────────────────────────────────────────────────────────────────
   Orientation · Screen 1 — Understand How Investing Works
   Screen 2 of 15
   Figma: "Orientation · Screen 1 — Understand How Investing Works"
───────────────────────────────────────────────────────────────────────────── */

/* ── Progress Bar ───────────────────────────────────────────────────────────
   Shows the current section name with a green underline,
   plus 3 equal pill segments (1 active = green, 2 inactive = gray).
   Used across all Orientation screens; pass `step` (1–3) to set active segment.
─────────────────────────────────────────────────────────────────────────────*/
function ProgressBar({ section = 'Orientation', totalSteps = 3, activeStep = 1 }) {
  return (
    <div>
      {/* Section label */}
      <span style={{
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--text-secondary)',
        letterSpacing: 0.1,
      }}>
        {section}
      </span>

      {/* Step segments */}
      <div style={{
        display: 'flex',
        gap: 5,
        marginTop: 6,
      }}>
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

/* ── Bar Chart Illustration ─────────────────────────────────────────────────
   Represents growing investment value over 3 years:
     Year 1 → small bar (gray)
     Year 2 → medium bar (light teal)
     Year 3 → tall bar (dark green) with a stacked-coin cylinder on top
   A dashed trend line connects a dot at the top of each bar.
   KES labels float above each bar. Year labels sit below the baseline.
─────────────────────────────────────────────────────────────────────────────*/
function BarChartIllustration() {
  /*
    Coordinate system  (SVG viewBox "-5 -2 300 245")
    ─────────────────────────────────────────────────
    Baseline     y = 185
    Bar centres  x = 50 | 145 | 240
    Bar width    54px  (x − 27 … x + 27)

    Bar tops:
      Year 1   y = 135  (height  50)
      Year 2   y =  90  (height  95)
      Year 3   y =  50  (height 135)  — bar only, coins sit above

    Coin stack on Year 3 (3 coins × 12px each, from y=14 to y=50):
      Coin 1 (bottom)   rect y=38 h=13  ellipse cy=38
      Coin 2 (middle)   rect y=26 h=13  ellipse cy=26
      Coin 3 (top)      rect y=14 h=13  ellipse cy=14

    KES labels:  y=128 | y=83 | y=8
    Year labels: y=200/214
  */

  const BAR_W   = 54
  const CX      = [50, 145, 240]   // bar centre x values
  const BAR_TOP = [135, 90, 50]    // top y of each bar
  const BASE_Y  = 185

  // Coin stack dimensions
  const COIN_H  = 13
  const COIN_RX = 26
  const COIN_RY = 9
  const COIN_Y  = [38, 26, 14]     // top y of each coin (3 coins)

  return (
    <svg
      viewBox="-5 -2 300 242"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}
      aria-label="Bar chart showing investment growth over 3 years"
    >
      {/* ── Baseline ── */}
      <line
        x1="15" y1={BASE_Y}
        x2="275" y2={BASE_Y}
        stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round"
      />

      {/* ── Bar 1 — Year 1 (light gray-green) ── */}
      <rect
        x={CX[0] - BAR_W / 2} y={BAR_TOP[0]}
        width={BAR_W} height={BASE_Y - BAR_TOP[0]}
        rx="6" ry="6"
        fill="#DDE8E3"
      />

      {/* ── Bar 2 — Year 2 (light mint teal) ── */}
      <rect
        x={CX[1] - BAR_W / 2} y={BAR_TOP[1]}
        width={BAR_W} height={BASE_Y - BAR_TOP[1]}
        rx="6" ry="6"
        fill="#6FBFA6"
      />

      {/* ── Bar 3 — Year 3 (dark green) ── */}
      <rect
        x={CX[2] - BAR_W / 2} y={BAR_TOP[2]}
        width={BAR_W} height={BASE_Y - BAR_TOP[2]}
        rx="6" ry="6"
        fill="#0F6E56"
      />

      {/* ── Coin stack on Bar 3 (drawn bottom→top for correct z-order) ── */}
      {/* Coin 1 — bottom */}
      <rect
        x={CX[2] - BAR_W / 2} y={COIN_Y[0]}
        width={BAR_W} height={COIN_H}
        fill="#064638"
      />
      <ellipse cx={CX[2]} cy={COIN_Y[0]} rx={COIN_RX} ry={COIN_RY} fill="#0D5A44" />

      {/* Coin 2 — middle */}
      <rect
        x={CX[2] - BAR_W / 2} y={COIN_Y[1]}
        width={BAR_W} height={COIN_H}
        fill="#064638"
      />
      <ellipse cx={CX[2]} cy={COIN_Y[1]} rx={COIN_RX} ry={COIN_RY} fill="#0D5A44" />

      {/* Coin 3 — top (lighter face = catches the light) */}
      <rect
        x={CX[2] - BAR_W / 2} y={COIN_Y[2]}
        width={BAR_W} height={COIN_H}
        fill="#064638"
      />
      <ellipse cx={CX[2]} cy={COIN_Y[2]} rx={COIN_RX} ry={COIN_RY} fill="#1D9E75" />

      {/* ── Dashed trend line ── */}
      <polyline
        points={`${CX[0]},${BAR_TOP[0]} ${CX[1]},${BAR_TOP[1]} ${CX[2]},${BAR_TOP[2]}`}
        fill="none"
        stroke="#1D9E75"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── Trend dots ── */}
      <circle cx={CX[0]} cy={BAR_TOP[0]} r="4" fill="white" stroke="#9CA3AF" strokeWidth="1.5" />
      <circle cx={CX[1]} cy={BAR_TOP[1]} r="4" fill="white" stroke="#1D9E75" strokeWidth="1.5" />
      <circle cx={CX[2]} cy={BAR_TOP[2]} r="4" fill="white" stroke="#0F6E56" strokeWidth="1.5" />

      {/* ── KES labels (above each bar's top dot) ── */}
      <text x={CX[0]} y={BAR_TOP[0] - 8}
        textAnchor="middle" fontSize="10" fill="#9CA3AF"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
        KES
      </text>
      <text x={CX[1]} y={BAR_TOP[1] - 8}
        textAnchor="middle" fontSize="10" fill="#6B7280"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
        KES
      </text>
      {/* KES for Year 3 sits above the coin stack */}
      <text x={CX[2]} y={COIN_Y[2] - 6}
        textAnchor="middle" fontSize="10" fill="#6B7280"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
        KES
      </text>

      {/* ── Year labels (below baseline) ── */}
      {/* Year 1 */}
      <text x={CX[0]} y={BASE_Y + 16}
        textAnchor="middle" fontSize="11" fill="#9CA3AF"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
        Year
      </text>
      <text x={CX[0]} y={BASE_Y + 30}
        textAnchor="middle" fontSize="11" fill="#9CA3AF"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
        1
      </text>

      {/* Year 2 */}
      <text x={CX[1]} y={BASE_Y + 16}
        textAnchor="middle" fontSize="11" fill="#6B7280"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
        Year 2
      </text>
      <text x={CX[1]} y={BASE_Y + 30}
        textAnchor="middle" fontSize="11" fill="#6B7280"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
        time
      </text>

      {/* Year 3 — highlighted green */}
      <text x={CX[2]} y={BASE_Y + 16}
        textAnchor="middle" fontSize="11" fontWeight="700" fill="#0F6E56"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
        Year
      </text>
      <text x={CX[2]} y={BASE_Y + 30}
        textAnchor="middle" fontSize="11" fontWeight="700" fill="#0F6E56"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
        3
      </text>
    </svg>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function OrientationScreen1({ navigate }) {
  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      {/* ── Progress bar ── */}
      <div style={{ padding: '52px 24px 0' }}>
        <ProgressBar section="Orientation" totalSteps={3} activeStep={1} />
      </div>

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '24px 24px 0' }} className="anim-fade-up">
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
          Understand How Investing Works
        </h1>
        <p
          className="body-text"
          style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}
        >
          This process takes about 5 minutes and walks you through three simple steps.
        </p>
      </div>

      {/* ── Bar chart illustration ── */}
      <div
        style={{ padding: '32px 12px 0', flex: 1 }}
        className="anim-scale-in"
      >
        <BarChartIllustration />
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate('orientation2', 'forward')}
      >
        Continue
      </button>

    </div>
  )
}

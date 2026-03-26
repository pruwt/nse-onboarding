/* ─────────────────────────────────────────────────────────────────────────────
   Splash — Investor Onboarding
   Screen 1 of 15
   Figma: "Splash — Investor Onboarding"
───────────────────────────────────────────────────────────────────────────── */

import nseLogo from '../logo/nselogo.png'

function NSELogo() {
  return (
    <img
      src={nseLogo}
      alt="Nairobi Securities Exchange"
      style={{ height: 46, width: 'auto', display: 'block' }}
    />
  )
}

/* ── Decorative Blobs ───────────────────────────────────────────────────────
   Three overlapping circles at the bottom-right corner of the splash screen.
   They float independently via CSS keyframe animations defined in animations.css.
─────────────────────────────────────────────────────────────────────────────*/
function SplashBlobs() {
  return (
    // Pointer-events:none so blobs never block tap targets
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>

      {/* Blob A — large, light slate-blue, back layer */}
      <div
        className="blob-1 anim-blob-entry-1"
        style={{
          position: 'absolute',
          width: 195,
          height: 195,
          borderRadius: '50%',
          background: '#94AEBF',
          opacity: 0.75,
          bottom: -55,
          right: 105,
        }}
      />

      {/* Blob B — medium, dark navy-slate, mid layer */}
      <div
        className="blob-2 anim-blob-entry-2"
        style={{
          position: 'absolute',
          width: 178,
          height: 178,
          borderRadius: '50%',
          background: '#2C4A62',
          opacity: 0.9,
          bottom: -55,
          right: 22,
        }}
      />

      {/* Blob C — smaller, NSE green, front layer */}
      <div
        className="blob-3 anim-blob-entry-3"
        style={{
          position: 'absolute',
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: '#1D9E75',
          bottom: -55,
          right: -30,
        }}
      />
    </div>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function SplashScreen({ navigate }) {
  return (
    <div className="screen">

      {/* Blobs sit behind all content */}
      <SplashBlobs />

      {/* ── Header: NSE logo ── */}
      <div style={{ padding: '52px 24px 0', position: 'relative', zIndex: 1 }}>
        <div className="anim-fade-in">
          <NSELogo />
        </div>
      </div>

      {/* ── Main copy ── */}
      <div style={{
        padding: '0 24px',
        marginTop: 72,
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Section eyebrow */}
        <p style={{
          fontSize: 13,
          fontWeight: 400,
          color: 'var(--text-secondary)',
          marginBottom: 10,
        }}
          className="anim-fade-up"
        >
          Investor Onboarding
        </p>

        {/* Headline */}
        <h1
          className="anim-fade-up-delay"
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.18,
          }}
        >
          Prepare to invest confidently in Kenya's capital markets.
        </h1>
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn anim-fade-in"
        onClick={() => navigate('orientation1', 'forward')}
      >
        Begin
      </button>

    </div>
  )
}

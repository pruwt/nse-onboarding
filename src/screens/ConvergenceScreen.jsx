/* ─────────────────────────────────────────────────────────────────────────────
   Convergence — Verification Complete
   Screen 9 of 15
   Figma: "Convergence — Verification Complete"
   Both Path A (Submit application) and Path B (Confirm this account) lead here.
   No back navigation from this screen.
───────────────────────────────────────────────────────────────────────────── */

/* ── Convergence Blobs ───────────────────────────────────────────────────────
   More dramatic than other screens — bottom blobs are large and prominent.
   Top-left: small dark blob peeking in.
   Top-right: two small teal blobs.
   Bottom-left: large green blob (main decorative element).
   Bottom-right: medium slate blob.
─────────────────────────────────────────────────────────────────────────────*/
function ConvergenceBlobs() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Top-left — small dark */}
      <div className="blob-1 anim-blob-overshoot-1" style={{
        position: 'absolute', width: 90, height: 90, borderRadius: '50%',
        background: '#0D1B2A', top: -42, left: -30,
      }} />
      {/* Top-right — small dark (back) */}
      <div className="blob-3 anim-blob-overshoot-2" style={{
        position: 'absolute', width: 42, height: 42, borderRadius: '50%',
        background: '#2C4A62', top: 16, right: 28, opacity: 0.7,
      }} />
      {/* Top-right — small teal (front) */}
      <div className="blob-2 anim-blob-overshoot-3" style={{
        position: 'absolute', width: 28, height: 28, borderRadius: '50%',
        background: '#5DCAA5', top: 30, right: 16, opacity: 0.85,
      }} />
      {/* Bottom-left — large green (hero blob) */}
      <div className="blob-1 anim-blob-overshoot-1" style={{
        position: 'absolute', width: 220, height: 220, borderRadius: '50%',
        background: '#1D9E75', bottom: -80, left: -55, opacity: 0.9,
      }} />
      {/* Bottom-right — medium slate */}
      <div className="blob-2 anim-blob-overshoot-2" style={{
        position: 'absolute', width: 140, height: 140, borderRadius: '50%',
        background: '#2C4A62', bottom: -50, right: -35, opacity: 0.7,
      }} />
    </div>
  )
}

/* ── Checklist item ──────────────────────────────────────────────────────────*/
function CheckItem({ title, subtitle, animClass, pill }) {
  return (
    <div
      className={animClass}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 14,
        paddingBottom: 20,
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Checkmark */}
      <div style={{
        width: 22, height: 22, borderRadius: '50%',
        border: '2px solid var(--green-main)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginTop: 2,
      }}>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <polyline
            points="1.5,5.5 4.5,8.5 9.5,2.5"
            stroke="var(--green-main)" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
          {title}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 3, lineHeight: 1.4 }}>
          {subtitle}
        </div>
      </div>

      {/* Optional pill */}
      {pill && (
        <span
          className="anim-pill-pop"
          style={{
            fontSize: 12, fontWeight: 600,
            color: '#0F6E56',
            background: '#E1F5EE',
            borderRadius: 99,
            padding: '4px 10px',
            flexShrink: 0, alignSelf: 'center',
          }}
        >
          {pill}
        </span>
      )}
    </div>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function ConvergenceScreen({ navigate }) {
  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      <ConvergenceBlobs />

      {/* ── Label ── */}
      <div style={{ padding: '52px 24px 0', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 400 }}>
          Verification complete
        </span>
      </div>

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '12px 24px 0', position: 'relative', zIndex: 1 }} className="anim-headline">
        <h1 style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.2 }}>
          You're all set, Jane!
        </h1>
        <p className="body-text" style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}>
          Here's a summary of what we've set up for you.
        </p>
      </div>

      {/* ── Checklist ── */}
      <div
        style={{
          padding: '36px 24px 0',
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', gap: 20,
        }}
      >
        <CheckItem
          title="Orientation"
          subtitle="Learned how investing works at the NSE"
          animClass="anim-checklist-1"
        />
        <CheckItem
          title="Personalization"
          subtitle="Moderate risk profile · Growth goal"
          animClass="anim-checklist-2"
        />
        <CheckItem
          title="Verification"
          subtitle="CDS account linked · Identity confirmed"
          animClass="anim-checklist-3"
          pill="Done"
        />
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate('profileCard', 'forward')}
      >
        View my investor profile
      </button>

    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Profile Card — Investor Profile
   Screen 15 of 15 (end of flow)
   Figma: "Profile Card — Investor Profile"
───────────────────────────────────────────────────────────────────────────── */

/* ── Blobs — same dramatic layout as Convergence ────────────────────────────*/
function ProfileBlobs() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Top-left — dark */}
      <div className="blob-1 anim-blob-entry-1" style={{
        position: 'absolute', width: 100, height: 100, borderRadius: '50%',
        background: '#0D1B2A', top: -44, left: -32,
      }} />
      {/* Top-right — dark (back) */}
      <div className="blob-3 anim-blob-entry-2" style={{
        position: 'absolute', width: 42, height: 42, borderRadius: '50%',
        background: '#2C4A62', top: 16, right: 28, opacity: 0.7,
      }} />
      {/* Top-right — teal (front) */}
      <div className="blob-2 anim-blob-entry-3" style={{
        position: 'absolute', width: 28, height: 28, borderRadius: '50%',
        background: '#5DCAA5', top: 30, right: 16, opacity: 0.85,
      }} />
      {/* Bottom-left — large green */}
      <div className="blob-1" style={{
        position: 'absolute', width: 210, height: 210, borderRadius: '50%',
        background: '#1D9E75', bottom: -80, left: -55, opacity: 0.9,
      }} />
      {/* Bottom-right — slate */}
      <div className="blob-2" style={{
        position: 'absolute', width: 130, height: 130, borderRadius: '50%',
        background: '#2C4A62', bottom: -48, right: -32, opacity: 0.7,
      }} />
    </div>
  )
}

/* ── Profile data row ────────────────────────────────────────────────────────*/
function ProfileRow({ label, value, pill, animClass, noBorder }) {
  return (
    <div
      className={animClass}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 0',
        borderBottom: noBorder ? 'none' : '1px solid var(--border)',
      }}
    >
      <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{label}</span>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{value}</span>
        {pill && (
          <span style={{
            fontSize: 11, fontWeight: 500,
            color: 'var(--text-secondary)',
            background: '#F3F4F6',
            borderRadius: 99, padding: '2px 8px',
          }}>
            {pill}
          </span>
        )}
      </div>
    </div>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function ProfileCardScreen({ navigate }) {
  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      <ProfileBlobs />

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '52px 24px 0', position: 'relative', zIndex: 1 }} className="anim-fade-up">
        <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2 }}>
          Your investor profile
        </h1>
        <p className="body-text" style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}>
          This is how Dosikaa will personalise your experience.
        </p>
      </div>

      {/* ── Profile card ── */}
      <div
        style={{ padding: '28px 24px 0', position: 'relative', zIndex: 1 }}
        className="anim-slide-up"
      >
        <div style={{
          background: 'var(--white)',
          border: '1px solid var(--border)',
          borderRadius: 18,
          padding: '20px',
        }}>
          {/* Avatar + name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: '#E5E7EB',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>JK</span>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                Jane Wanjiku Kamau
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
                CDS account linked · Active
              </div>
            </div>
          </div>

          {/* Data rows */}
          <ProfileRow
            label="Investment goal"
            value="Grow my wealth"
            pill="Growth"
            animClass="anim-row-1"
          />
          <ProfileRow
            label="Risk profile"
            value="Moderate"
            pill="Balanced"
            animClass="anim-row-2"
          />
          <ProfileRow
            label="Experience level"
            value="Some experience"
            animClass="anim-row-3"
            noBorder
          />
        </div>
      </div>

      {/* ── Note ── */}
      <div style={{ padding: '16px 32px 0', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: 12, color: 'var(--text-tertiary)', lineHeight: 1.6, textAlign: 'center' }}>
          Your profile helps us personalise recommendations. You can update it anytime in settings.
        </p>
      </div>

      {/* ── Edit link ── */}
      <div style={{ padding: '14px 24px 120px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <button
          onClick={() => navigate('personalization1', 'back')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 14, fontWeight: 600, color: 'var(--green-main)',
            fontFamily: 'var(--font)',
            transition: 'opacity var(--dur-fast)',
          }}
          onMouseDown={e => e.currentTarget.style.opacity = '0.6'}
          onMouseUp={e => e.currentTarget.style.opacity = '1'}
          onTouchStart={e => e.currentTarget.style.opacity = '0.6'}
          onTouchEnd={e => e.currentTarget.style.opacity = '1'}
        >
          Edit my profile preferences
        </button>
      </div>

      {/* ── CTA ── */}
      <button className="cta-btn" onClick={() => {}}>
        Go to dashboard
      </button>

    </div>
  )
}

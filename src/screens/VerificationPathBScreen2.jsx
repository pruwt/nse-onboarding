/* ─────────────────────────────────────────────────────────────────────────────
   Verification · Path B · Screen 2 — Confirm Account
   Screen 7B of 15
   Figma: "Verification · Path B · Screen 2 — Confirm Account"
───────────────────────────────────────────────────────────────────────────── */

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
      <div className="blob-4" style={{
        position: 'absolute', width: 30, height: 30, borderRadius: '50%',
        background: '#5DCAA5', top: 460, left: 18, opacity: 0.85,
      }} />
      <div className="blob-2" style={{
        position: 'absolute', width: 155, height: 155, borderRadius: '50%',
        background: '#1D9E75', bottom: -58, right: -42, opacity: 0.75,
      }} />
    </div>
  )
}

/* ── Account row ─────────────────────────────────────────────────────────────*/
function AccountRow({ label, value, valueNode }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--border)',
    }}>
      <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{label}</span>
      {valueNode || (
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{value}</span>
      )}
    </div>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function VerificationPathBScreen2({ navigate }) {
  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      <VerificationBlobs />

      {/* ── Back chevron + progress bar ── */}
      <div style={{ padding: '52px 24px 0', position: 'relative', zIndex: 1 }}>
        <button className="back-btn" onClick={() => navigate('verificationB1', 'back')} style={{ marginBottom: 16 }} aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <ProgressBar section="Verification" totalSteps={3} activeStep={3} />
      </div>

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '24px 24px 0', position: 'relative', zIndex: 1 }} className="anim-fade-up">
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
          Is this your account?
        </h1>
        <p className="body-text" style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}>
          We found an account matching your CDS number.
        </p>
      </div>

      {/* ── Account card ── */}
      <div
        style={{ padding: '24px 24px 0', position: 'relative', zIndex: 1 }}
        className="anim-fade-up-delay"
      >
        <div style={{
          background: 'var(--white)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '20px',
        }}>
          {/* Avatar + name row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
            {/* Avatar */}
            <div style={{
              width: 46, height: 46, borderRadius: '50%',
              background: '#E5E7EB',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>JK</span>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                Jane Wanjiku Kamau
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
                Individual Investor · NSE
              </div>
            </div>
          </div>

          {/* Detail rows */}
          <AccountRow
            label="CDS number"
            value="··· ··· ·· 123"
          />
          <AccountRow
            label="Account status"
            valueNode={
              <span style={{
                fontSize: 12, fontWeight: 600,
                color: '#0F6E56',
                background: '#E1F5EE',
                borderRadius: 99,
                padding: '3px 10px',
              }}>
                Active
              </span>
            }
          />
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 0',
          }}>
            <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Stockbroker</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }}>
              Faida Investment Bank
            </span>
          </div>
        </div>
      </div>

      {/* ── Disclaimer ── */}
      <div style={{ padding: '14px 24px 0', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: 12, color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
          Your account details are sourced directly from the CDSC registry. Account details have been partially masked for security reasons.
        </p>
      </div>

      {/* ── "Not you?" link ── */}
      <div style={{ padding: '20px 24px 0', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <button
          onClick={() => navigate('verificationB1', 'back')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 14, color: 'var(--text-primary)',
            textDecoration: 'underline', fontFamily: 'var(--font)',
            transition: 'opacity var(--dur-fast)',
          }}
          onMouseDown={e => e.currentTarget.style.opacity = '0.6'}
          onMouseUp={e => e.currentTarget.style.opacity = '1'}
          onTouchStart={e => e.currentTarget.style.opacity = '0.6'}
          onTouchEnd={e => e.currentTarget.style.opacity = '1'}
        >
          Not you? Enter a different number
        </button>
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate('convergence', 'forward')}
      >
        Confirm this account
      </button>

    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Verification · Path A · Screen 3 — Review & Submit
   Screen 8A of 15
   Figma: "Verification · Path A · Screen 3 — Review & Submit"
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
      <div className="blob-3 anim-blob-entry-2" style={{
        position: 'absolute', width: 38, height: 38, borderRadius: '50%',
        background: '#5DCAA5', top: 18, right: 24, opacity: 0.85,
      }} />
      <div className="blob-2" style={{
        position: 'absolute', width: 140, height: 140, borderRadius: '50%',
        background: '#2C4A62', bottom: -55, right: -38, opacity: 0.75,
      }} />
    </div>
  )
}

/* ── Edit icon ───────────────────────────────────────────────────────────────*/
function EditIcon({ onTap }) {
  return (
    <button
      onClick={onTap}
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--text-secondary)' }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M13 2.5a1.414 1.414 0 0 1 2 2L5.5 14 2 15.5 3.5 12 13 2.5Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

/* ── Review section card ─────────────────────────────────────────────────────*/
function ReviewCard({ label, onEdit, children, animClass }) {
  return (
    <div
      className={animClass}
      style={{
        background: 'var(--white)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 16px 10px',
        borderBottom: '1px solid var(--border)',
      }}>
        <span style={{
          fontSize: 11, fontWeight: 700, letterSpacing: 0.6,
          color: 'var(--text-secondary)', textTransform: 'uppercase',
        }}>
          {label}
        </span>
        <EditIcon onTap={onEdit} />
      </div>
      {/* Rows */}
      <div style={{ padding: '4px 0' }}>
        {children}
      </div>
    </div>
  )
}

/* ── Review row ──────────────────────────────────────────────────────────────*/
function ReviewRow({ label, value, valueStyle }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '11px 16px',
      borderBottom: '1px solid #F9FAFB',
    }}>
      <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{label}</span>
      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', ...valueStyle }}>
        {value}
      </span>
    </div>
  )
}

/* ── Uploaded row ────────────────────────────────────────────────────────────*/
function UploadedRow({ label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '13px 16px',
      borderBottom: '1px solid #F9FAFB',
    }}>
      <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{
          width: 20, height: 20, borderRadius: '50%', background: '#0F6E56',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56' }}>Uploaded</span>
      </div>
    </div>
  )
}

/* ── Screen ─────────────────────────────────────────────────────────────────*/
export default function VerificationPathAScreen3({ navigate }) {
  return (
    <div className="screen" style={{ background: 'var(--white)' }}>

      <VerificationBlobs />

      {/* ── Back chevron + progress bar ── */}
      <div style={{ padding: '52px 24px 0', position: 'relative', zIndex: 1 }}>
        <button className="back-btn" onClick={() => navigate('verificationA2', 'back')} style={{ marginBottom: 16 }} aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <ProgressBar section="Verification" totalSteps={3} activeStep={3} />
      </div>

      {/* ── Headline & subtext ── */}
      <div style={{ padding: '24px 24px 0', position: 'relative', zIndex: 1 }} className="anim-fade-up">
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
          Review your application
        </h1>
        <p className="body-text" style={{ marginTop: 10, fontSize: 14, lineHeight: 1.55 }}>
          Check your details before we submit.
        </p>
      </div>

      {/* ── Review cards ── */}
      <div
        style={{ padding: '24px 24px 0', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}
      >
        {/* Personal Details */}
        <ReviewCard
          label="Personal Details"
          onEdit={() => navigate('verificationA1', 'back')}
          animClass="anim-review-1"
        >
          <ReviewRow label="Full name"     value="Jane Wanjiku Kamau" />
          <ReviewRow label="National ID"   value="32847561" />
          <ReviewRow label="Phone"         value="+254 712 345 678" />
          <ReviewRow label="Date of birth" value="12 Mar 1990" />
          <ReviewRow label="KRA PIN"       value="A001234567B" />
        </ReviewCard>

        {/* Documents */}
        <ReviewCard
          label="Documents"
          onEdit={() => navigate('verificationA2', 'back')}
          animClass="anim-review-2"
        >
          <UploadedRow label="National ID" />
          <UploadedRow label="KRA PIN Certificate" />
        </ReviewCard>
      </div>

      {/* ── Consent text ── */}
      <div
        style={{ padding: '20px 32px 120px', position: 'relative', zIndex: 1 }}
        className="anim-review-2"
      >
        <p style={{
          fontSize: 12, color: 'var(--text-tertiary)',
          lineHeight: 1.6, textAlign: 'center',
        }}>
          By submitting, you confirm that all information provided is accurate and you consent to NSE processing your CDS application.
        </p>
      </div>

      {/* ── CTA ── */}
      <button
        className="cta-btn"
        onClick={() => navigate('convergence', 'forward')}
      >
        Submit application
      </button>

    </div>
  )
}

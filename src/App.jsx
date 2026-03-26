import { useState, useEffect, useRef } from 'react'
import SplashScreen               from './screens/SplashScreen'
import OrientationScreen1         from './screens/OrientationScreen1'
import OrientationScreen2         from './screens/OrientationScreen2'
import OrientationScreen3         from './screens/OrientationScreen3'
import VerificationScreen1        from './screens/VerificationScreen1'
import VerificationPathAScreen1   from './screens/VerificationPathAScreen1'
import VerificationPathAScreen2   from './screens/VerificationPathAScreen2'
import VerificationPathAScreen3   from './screens/VerificationPathAScreen3'
import VerificationPathBScreen1   from './screens/VerificationPathBScreen1'
import VerificationPathBScreen2   from './screens/VerificationPathBScreen2'
import ConvergenceScreen          from './screens/ConvergenceScreen'
import PersonalizationScreen1     from './screens/PersonalizationScreen1'
import PersonalizationScreen2     from './screens/PersonalizationScreen2'
import PersonalizationScreen3     from './screens/PersonalizationScreen3'
import ProfileCardScreen          from './screens/ProfileCardScreen'

/* ─── Screen registry ─────────────────────────────────────────────────────── */
const SCREENS = {
  splash:           SplashScreen,
  orientation1:     OrientationScreen1,
  orientation2:     OrientationScreen2,
  orientation3:     OrientationScreen3,
  personalization1: PersonalizationScreen1,
  personalization2: PersonalizationScreen2,
  personalization3: PersonalizationScreen3,
  verification1:    VerificationScreen1,
  verificationA1:   VerificationPathAScreen1,
  verificationA2:   VerificationPathAScreen2,
  verificationA3:   VerificationPathAScreen3,
  verificationB1:   VerificationPathBScreen1,
  verificationB2:   VerificationPathBScreen2,
  convergence:      ConvergenceScreen,
  profileCard:      ProfileCardScreen,
}

const DURATION = 350 // matches --dur-screen

/* ─── App ─────────────────────────────────────────────────────────────────── */
export default function App() {
  const [currentId, setCurrentId]   = useState('splash')
  const [prevId,    setPrevId]      = useState(null)
  const [direction, setDirection]   = useState('forward') // 'forward' | 'back'
  const [animating, setAnimating]   = useState(false)

  const currentRef = useRef(null)
  const prevRef    = useRef(null)
  const timerRef   = useRef(null)
  const rafRef     = useRef(null)

  /* navigate(screenId, 'forward' | 'back') */
  const navigate = (to, dir = 'forward') => {
    if (animating) return
    clearTimeout(timerRef.current)
    setDirection(dir)
    setPrevId(currentId)
    setCurrentId(to)
    setAnimating(true)
    timerRef.current = setTimeout(() => {
      setPrevId(null)
      setAnimating(false)
    }, DURATION + 60)
  }

  /* ── Drive CSS slide transition after every navigation ── */
  useEffect(() => {
    if (!animating) return
    const entering = currentRef.current
    const exiting  = prevRef.current

    const startX = direction === 'forward' ? '100%' : '-100%'
    const endX   = direction === 'forward' ? '-100%' : '100%'

    // Snap entering screen to start position (no transition yet)
    if (entering) {
      entering.style.transform  = `translateX(${startX})`
      entering.style.transition = 'none'
    }
    if (exiting) {
      exiting.style.transform  = 'translateX(0)'
      exiting.style.transition = 'none'
    }

    // Double-RAF so the browser paints the initial positions before animating
    rafRef.current = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (entering) {
          entering.style.transition = `transform ${DURATION}ms cubic-bezier(0.22,1,0.36,1)`
          entering.style.transform  = 'translateX(0)'
        }
        if (exiting) {
          exiting.style.transition = `transform ${DURATION}ms cubic-bezier(0.4,0,1,1)`
          exiting.style.transform  = `translateX(${endX})`
        }
      })
    })

    return () => cancelAnimationFrame(rafRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animating, currentId, prevId, direction])

  /* Cleanup on unmount */
  useEffect(() => () => {
    clearTimeout(timerRef.current)
    cancelAnimationFrame(rafRef.current)
  }, [])

  const CurrentScreen = SCREENS[currentId]
  const PrevScreen    = prevId ? SCREENS[prevId] : null

  return (
    <div className="phone-frame">

      {/* Exiting screen */}
      {PrevScreen && (
        <div ref={prevRef} style={{ position: 'absolute', inset: 0 }}>
          <PrevScreen navigate={navigate} />
        </div>
      )}

      {/* Entering / active screen */}
      <div ref={currentRef} style={{ position: 'absolute', inset: 0 }}>
        <CurrentScreen navigate={navigate} />
      </div>

    </div>
  )
}

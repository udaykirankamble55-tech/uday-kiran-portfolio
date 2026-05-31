'use client'
import { useEffect, useState } from 'react'

export default function ScrollPrompt() {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // 1. INTRO WAIT ENGINE:
    // Let's give the Intro loader plenty of time to fully finish its animation sequence 
    // and slide off-screen entirely before we even think about counting.
    const introDuration = 3000 
    
    // 2. HERO VIEWING BUFFER:
    // Giving the viewer exactly 3 seconds to look at your beautiful Hero section and avatar in peace.
    const heroViewingTime = 3000

    const totalDelay = introDuration + heroViewingTime // 6000ms total from page load

    const showTimer = setTimeout(() => {
      // 🚨 SCROLL POSITION GUARD:
      // If the user refreshed the page mid-way and is sitting at Education/Projects,
      // window.scrollY will be greater than 50px. If they left the Hero section, 
      // we kill the render entirely so it doesn't confuse them.
      if (window.scrollY > 50) {
        setShouldRender(false)
        return
      }

      setIsVisible(true)

      // Keep it visible for 5 seconds so they can read the cinematic hint
      const hideTimer = setTimeout(() => {
        setIsVisible(false)
        
        const unmountTimer = setTimeout(() => {
          setShouldRender(false)
        }, 1000)

        return () => clearTimeout(unmountTimer)
      }, 5000)

      return () => clearTimeout(hideTimer)
    }, totalDelay) 

    // Also watch if they start scrolling down *during* that initial 6-second wait window.
    // If they scroll down before the timer hits, we instantly cancel the popup.
    const handleEarlyScroll = () => {
      if (window.scrollY > 50) {
        clearTimeout(showTimer)
        setShouldRender(false)
      }
    }

    window.addEventListener('scroll', handleEarlyScroll, { passive: true })

    return () => {
      clearTimeout(showTimer)
      window.removeEventListener('scroll', handleEarlyScroll)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <>
      <style>{`
        @keyframes laserSweep {
          0% {
            transform: translateX(-150%) skewX(-25deg);
          }
          30%, 100% {
            transform: translateX(250%) skewX(-25deg);
          }
        }
        .beam-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(204, 0, 0, 0.08) 30%,
            rgba(255, 255, 255, 0.28) 50%,
            rgba(204, 0, 0, 0.08) 70%,
            rgba(255, 255, 255, 0) 100
          );
          filter: blur(2px);
          transform: translateX(-150%) skewX(-25deg);
          animation: laserSweep 3.5s infinite ease-in-out;
          pointer-events: none;
        }
      `}</style>

      <div 
        className="beam-container"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 999999,
          background: '#000000',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.9), 0 0 25px rgba(204, 0, 0, 0.15)',
          borderRadius: '4px',
          border: '1.5px solid #CC0000',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
          pointerEvents: 'none',
          willChange: 'transform, opacity',
          overflow: 'hidden' // Keeps the sweeping light contained within the borders
        }}
      >
        <div 
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            color: '#ffffff',
            textTransform: 'uppercase',
            lineHeight: '1.5',
            position: 'relative',
            zIndex: 2 // Keeps the text pristine above the sweeping gradient
          }}
        >
          <span style={{ color: '#CC0000', fontWeight: 900, textShadow: '0 0 8px rgba(204, 0, 0, 0.4)' }}>SYSTEM:</span> SCROLLY CANVAS DETECTED.<br />
          SCROLL <span style={{ color: '#CC0000', fontWeight: 900 }}>FAST</span> FOR OPTIMAL CINEMATIC VIEWING.
        </div>
      </div>
    </>
  )
}
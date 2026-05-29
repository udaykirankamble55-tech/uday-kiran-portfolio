'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Intro() {
  const introRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  
  const udaySpanRef = useRef<HTMLSpanElement>(null)
  const kiranWhiteSpanRef = useRef<HTMLSpanElement>(null)
  const kiranRedSpanRef = useRef<HTMLSpanElement>(null)
  const fireballSpanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (
      !introRef.current || !lineRef.current || !subRef.current || 
      !udaySpanRef.current || !kiranWhiteSpanRef.current || !kiranRedSpanRef.current || !fireballSpanRef.current
    ) return

    const tl = gsap.timeline()

    // ACT I: Pure Vertical Mask Reveal (All text components slide straight up cleanly)
    tl.to(udaySpanRef.current, {
      y: '0%',
      duration: 1.4,
      ease: 'power4.out'
    }, 0.3)

    tl.to([kiranWhiteSpanRef.current, kiranRedSpanRef.current, fireballSpanRef.current], {
      y: '0%',
      duration: 1.4,
      ease: 'power4.out'
    }, 0.3)

    // ACT II: Intrinsic Text-Clipped Fireball Burn Sequence
    // Turn on the visibility of the fireball layer just as the vertical scroll finishes
    tl.to(fireballSpanRef.current, {
      opacity: 1,
      duration: 0.05
    }, '-=0.4')

    // Master Sync Track: Smoothly wipe the permanent red color fill layer over the white base
    tl.to(kiranRedSpanRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 0.9,
      ease: 'power2.inOut'
    }, '-=0.35')

    // Simultaneously animate the background position of the high-heat gradient strictly inside the text layout bounds
    tl.to(fireballSpanRef.current, {
      backgroundPosition: '0% center', // Pulls the hot center from left to right across the letters
      duration: 0.9,
      ease: 'power2.inOut'
    }, '-=0.35')

    // Smoothly dissolve the burning hot highlight element away, leaving the solid red behind
    tl.to(fireballSpanRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.out'
    }, '-=0.1')

    // ACT III: Typography Anchor Animations
    tl.to(lineRef.current, { width: '310px', duration: 0.8, ease: 'expo.out' }, '-=0.5')
    tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }, '-=0.4')
    
    // ACT IV: Mechanical Shutter Out Cut
    tl.to(introRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 0.55,
      ease: 'expo.inOut',
      delay: 0.9
    })
    tl.set(introRef.current, { display: 'none' })
  }, [])

  const typographicEngineStyle: React.CSSProperties = {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(55px, 9.5vw, 115px)',
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
    lineHeight: 0.9,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    letterSpacing: '0.15em'
  }

  return (
    <div ref={introRef} id="intro-screen" style={{ position: 'fixed', inset: 0, background: '#000000', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', willChange: 'clip-path' }}>
      
      {styleBlock}

      {/* Industrial Corner Layout Guides */}
      <div style={{ position: 'absolute', top: '40px', left: '40px', width: '30px', height: '30px', borderTop: '1px solid rgba(204,0,0,0.3)', borderLeft: '1px solid rgba(204,0,0,0.3)' }} />
      <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '30px', height: '30px', borderBottom: '1px solid rgba(204,0,0,0.3)', borderRight: '1px solid rgba(204,0,0,0.3)' }} />

      {/* TYPOGRAPHIC CORE ENGINE */}
      <div style={{ position: 'relative', filter: 'drop-shadow(0px 0px 25px rgba(204,0,0,0.2))' }}>
        <div style={typographicEngineStyle}>
          
          {/* UDAY: Clean vertical mask scroll reveal */}
          <div className="intro-line-wrapper">
            <span ref={udaySpanRef} style={{ color: '#ffffff', display: 'inline-block', transform: 'translateY(100%)', willChange: 'transform' }}>
              UDAY
            </span>
          </div>
          
          <span>&nbsp;</span>
          
          {/* KIRAN FUSION ENGINE */}
          <div className="intro-line-wrapper" style={{ position: 'relative' }}>
            
            {/* Layer 1: Solid White Base Text */}
            <span ref={kiranWhiteSpanRef} style={{ color: '#ffffff', display: 'inline-block', transform: 'translateY(100%)', willChange: 'transform' }}>
              KIRAN
            </span>
            
            {/* Layer 2: Targeted Red Reveal Layer (Controlled by a horizontal clip path) */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <span ref={kiranRedSpanRef} style={{ color: '#CC0000', display: 'inline-block', transform: 'translateY(100%)', clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', willChange: 'transform, clip-path' }}>
                KIRAN
              </span>
            </div>
            
            {/* Layer 3: High-Heat Fireball Overlay (Strictly clipped directly into the text foreground shapes) */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              <span 
                ref={fireballSpanRef} 
                style={{ 
                  display: 'inline-block', 
                  transform: 'translateY(100%)', 
                  color: 'transparent',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  // Extends gradient background size to allow a smooth horizontal slide internally
                  backgroundImage: 'linear-gradient(90deg, transparent 0%, #CC0000 40%, #ffffff 50%, #CC0000 60%, transparent 100%)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: '200% center', // Starts completely out of bounds on the right edge
                  opacity: 0,
                  willChange: 'transform, background-position, opacity'
                }}
              >
                KIRAN
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Laser Underline */}
      <div ref={lineRef} style={{ width: 0, height: '2px', background: '#CC0000', marginTop: '24px', display: 'block', boxShadow: '0 0 15px #CC0000' }} />

      {/* Subtext Description Block */}
      <div ref={subRef} style={{ fontFamily: "'DM Mono', monospace", fontSize: '12.5px', fontWeight: '900', letterSpacing: '0.55em', textTransform: 'uppercase', color: '#CC0000', marginTop: '20px', opacity: 0, transform: 'translateY(15px)', willChange: 'transform, opacity', textShadow: '0 0 10px rgba(204, 0, 0, 0.5)' }}>
        UI/UX DESIGNER &nbsp;·&nbsp; BRAND & VISUAL
      </div>

    </div>
  )
}

const styleBlock = (
  <style>{`
    .intro-line-wrapper {
      display: inline-block;
      overflow: hidden;
      vertical-align: bottom;
    }
  `}</style>
)
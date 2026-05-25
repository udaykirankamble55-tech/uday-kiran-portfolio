'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Intro() {
  const introRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    const letters = lettersRef.current?.querySelectorAll('span')
    if (letters) {
      tl.to(letters, { opacity: 1, y: 0, duration: 0.05, stagger: 0.06, ease: 'power3.out', delay: 0.3 })
    }
    tl.to(lineRef.current, { width: '200px', duration: 1.0, ease: 'power3.inOut' }, '-=0.1')
    tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    tl.to(introRef.current, { yPercent: -100, duration: 1.1, ease: 'power4.inOut', delay: 1.0 })
    tl.set(introRef.current, { display: 'none' })
  }, [])

  return (
    <div ref={introRef} id="intro-screen">
      {/* Red corner lines */}
      <div style={{ position: 'absolute', top: '40px', left: '40px', width: '40px', height: '1px', background: '#CC0000' }} />
      <div style={{ position: 'absolute', top: '40px', left: '40px', width: '1px', height: '40px', background: '#CC0000' }} />
      <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '40px', height: '1px', background: '#CC0000' }} />
      <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '1px', height: '40px', background: '#CC0000' }} />

      <div ref={lettersRef} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(52px, 9vw, 110px)', letterSpacing: '0.12em', color: '#fff', display: 'flex', gap: '0.08em', flexWrap: 'wrap', justifyContent: 'center', textTransform: 'uppercase' }}>
        {'UDAY KIRAN'.split('').map((c, i) => (
          <span key={i} style={{ opacity: 0, transform: 'translateY(40px)', display: 'inline-block', whiteSpace: c === ' ' ? 'pre' : 'normal', color: i > 4 ? '#CC0000' : '#fff' }}>
            {c === ' ' ? '\u00A0' : c}
          </span>
        ))}
      </div>
      <div ref={lineRef} style={{ width: 0, height: '1px', background: '#CC0000', marginTop: '16px' }} />
      <div ref={subRef} style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'rgba(204,0,0,0.8)', marginTop: '14px', opacity: 0, transform: 'translateY(10px)' }}>
        UI/UX DESIGNER &nbsp;·&nbsp; BRAND & VISUAL
      </div>
    </div>
  )
}

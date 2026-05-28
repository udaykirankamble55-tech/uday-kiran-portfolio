'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Beyond() {
  const ref = useRef<HTMLElement>(null)
  
  useEffect(() => {
    // Reveal handler for labels, paragraphs, blockquotes, and images
    ref.current?.querySelectorAll('.reveal').forEach(el => {
      // Skip the h2 element here so it doesn't conflict with our precise clip-path reveal
      if (el.tagName === 'H2') return
      
      gsap.fromTo(el, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
    })

    // Clean Scroll-Triggered masking slide-up animation directly on the original H2
    ref.current?.querySelectorAll('h2.reveal').forEach(h2 => {
      gsap.fromTo(h2, 
        { 
          opacity: 0,
          clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
          y: 30
        }, 
        { 
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          y: 0,
          duration: 1.1, 
          ease: 'power4.out', 
          scrollTrigger: { 
            trigger: h2, 
            start: 'top 88%',
            toggleActions: 'play none none reset'
          } 
        }
      )
    })
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }
  const BODY: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" }

  return (
    <section ref={ref} id="beyond" style={{ background: '#000', padding: '140px 8vw', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, #CC0000, transparent)' }} />

      <div className="reveal section-label">006 — BEYOND DESIGN</div>
      <h2 className="reveal" style={{ ...SLAB, fontSize: 'clamp(52px, 7vw, 96px)', lineHeight: 0.85, color: '#fff', marginBottom: '60px', textTransform: 'uppercase' }}>
        THE DESIGNER<br /><span style={{ color: '#CC0000' }}>WHO TEACHES.</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        <div>
          <p className="reveal" style={{ ...BODY, fontSize: 'clamp(16px, 1.6vw, 20px)', color: 'rgba(240,237,232,0.6)', lineHeight: 1.75, marginBottom: '24px' }}>
            Before I designed digital experiences, I shaped real ones. For 3+ years at <strong style={{ color: '#fff' }}>Celestial Harmony Academy of Music</strong>, I prepared students for <strong style={{ color: '#CC0000' }}>Trinity College London Grade Examinations</strong>.
          </p>
          <p className="reveal" style={{ ...BODY, fontSize: 'clamp(16px, 1.6vw, 20px)', color: 'rgba(240,237,232,0.6)', lineHeight: 1.75, marginBottom: '36px' }}>
            Teaching sharpens everything. <strong style={{ color: '#fff' }}>Patience. Iteration. Reading the room. Giving feedback that actually lands.</strong> Every skill I built in that classroom lives in every design I ship today.
          </p>
          <blockquote className="reveal" style={{ ...BODY, fontSize: 'clamp(18px, 2vw, 24px)', fontStyle: 'italic', color: '#fff', lineHeight: 1.5, borderLeft: '2px solid #CC0000', paddingLeft: '24px', marginBottom: '36px' }}>
            &ldquo;A designer who can teach is a designer who truly understands — you can only explain what you fully own.&rdquo;
          </blockquote>
        </div>

        {/* PHOTOS — reverse L shape */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '4px' }}>
          <div style={{ gridColumn: 'span 2', overflow: 'hidden', position: 'relative', height: '200px' }}>
            <img src="beyond-1.jpeg" alt="Students" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(50%) brightness(0.7)', transition: 'filter 0.5s, transform 0.5s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'grayscale(0%) brightness(0.9)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = 'grayscale(50%) brightness(0.7)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)', pointerEvents: 'none' }} />
          </div>
          <div style={{ overflow: 'hidden', position: 'relative', height: '160px' }}>
            <img src="beyond-2.jpeg" alt="Academy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(50%) brightness(0.7)', transition: 'filter 0.5s, transform 0.5s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'grayscale(0%) brightness(0.9)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = 'grayscale(50%) brightness(0.7)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
            />
          </div>
          <div style={{ overflow: 'hidden', position: 'relative', height: '160px' }}>
            <img src="beyond-3.jpeg" alt="Trinity" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(50%) brightness(0.7)', transition: 'filter 0.5s, transform 0.5s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = 'grayscale(0%) brightness(0.9)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = 'grayscale(50%) brightness(0.7)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
            />
          </div>
          <div style={{ gridColumn: 'span 2', ...MONO, fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(204,0,0,0.6)', textTransform: 'uppercase', padding: '12px 0' }}>
            CELESTIAL HARMONY ACADEMY · TRINITY GRADE EXAMINATIONS
          </div>
        </div>
      </div>
    </section>
  )
}
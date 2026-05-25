'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    ref.current?.querySelectorAll('.reveal').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
    })
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }
  const BODY: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" }

  return (
    <section ref={ref} id="about" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      {/* BG image with overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="/avatar-hero.gif" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', opacity: 0.08, filter: 'grayscale(100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.97) 100%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, padding: '140px 8vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
          {/* LEFT */}
          <div>
            <div className="reveal section-label">001 — ABOUT</div>
            <h2 className="reveal" style={{ ...SLAB, fontSize: 'clamp(52px, 7vw, 96px)', lineHeight: 0.88, color: '#fff', textTransform: 'uppercase', marginBottom: '36px' }}>
              BUILT IN<br /><span style={{ color: '#CC0000' }}>HYDERABAD.</span><br />DESIGNED<br />FOR THE WORLD.
            </h2>
            <p className="reveal" style={{ ...BODY, fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 600, color: 'rgba(240,237,232,0.85)', lineHeight: 1.75, marginBottom: '20px' }}>
              I&apos;m <strong style={{ color: '#fff', fontWeight: 600 }}>Uday Kiran Kamble</strong> — UI/UX and Brand Designer from Hyderabad. Marathi roots. Design-first thinking. Fresher with a sharp eye and a sharper process.
            </p>
            <p className="reveal" style={{ ...BODY, fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 600, color: 'rgba(240,237,232,0.85)', lineHeight: 1.75, marginBottom: '20px' }}>
              I just completed a structured 6-month industry-level UI/UX and Graphic Design course from <strong style={{ color: '#fff' }}>Arrow Multimedia, Ameerpet</strong> — a decade-old institute established in 2006. Every project I built during this course went straight to Behance as a real case study.
            </p>
            <p className="reveal" style={{ ...BODY, fontSize: 'clamp(16px, 1.6vw, 19px)', fontWeight: 600, color: 'rgba(240,237,232,0.85)', lineHeight: 1.75 }}>
              I integrate AI tools as <strong style={{ color: '#fff' }}>creative acceleration</strong> — Claude, ChatGPT, Gemini, Canva AI — not as a shortcut, but as a force multiplier for the thinking that machines can&apos;t replace.
            </p>

            {/* STATS */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginTop: '48px' }}>
              {[
                { num: '6+', label: 'CASE STUDIES' },
                { num: '6M', label: 'COURSE TRAINED' },
                { num: 'AI', label: 'INTEGRATED' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#0f0f0f', border: '1px solid rgba(204,0,0,0.2)', padding: '24px 20px', position: 'relative', overflow: 'hidden', cursor: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#CC0000'; (e.currentTarget as HTMLElement).style.background = 'rgba(204,0,0,0.06)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(204,0,0,0.2)'; (e.currentTarget as HTMLElement).style.background = '#0f0f0f' }}
                >
                  <div style={{ ...SLAB, fontSize: '52px', color: '#CC0000', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ ...MONO, fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(240,237,232,0.35)', marginTop: '8px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div style={{ border: '1px solid rgba(204,0,0,0.3)', overflow: 'hidden', position: 'relative' }}
              onMouseEnter={e => { const img = e.currentTarget.querySelector('img') as HTMLElement; if (img) { img.style.filter = 'grayscale(0%) brightness(1)'; img.style.transform = 'scale(1.04)' } }}
              onMouseLeave={e => { const img = e.currentTarget.querySelector('img') as HTMLElement; if (img) { img.style.filter = 'grayscale(30%) brightness(0.8)'; img.style.transform = 'scale(1)' } }}
            >
              <img src="/avatar-hero.gif" alt="Uday Kiran" style={{ width: '100%', display: 'block', filter: 'grayscale(30%) brightness(0.8)', transition: 'filter 0.5s, transform 0.5s' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, #000 100%)', pointerEvents: 'none' }} />
              {/* Red corner */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '60px', height: '3px', background: '#CC0000' }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: '3px', height: '60px', background: '#CC0000' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', ...MONO, fontSize: '9px', letterSpacing: '0.25em', color: '#CC0000', textTransform: 'uppercase' }}>
                UI/UX DESIGNER · BRAND & VISUAL · HYD
              </div>
            </div>
            {/* Floating tags */}
            <div className="float-1" style={{ position: 'absolute', top: '15%', right: '-40px', background: '#0f0f0f', border: '1px solid rgba(204,0,0,0.4)', padding: '10px 16px', ...MONO, fontSize: '9px', letterSpacing: '0.2em', color: '#CC0000', textTransform: 'uppercase' }}>UI / UX</div>
            <div className="float-2" style={{ position: 'absolute', bottom: '20%', left: '-50px', background: '#0f0f0f', border: '1px solid rgba(204,0,0,0.2)', padding: '10px 16px', ...MONO, fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(240,237,232,0.4)', textTransform: 'uppercase' }}>HYD, IN</div>
          </div>
        </div>
      </div>
    </section>
  )
}

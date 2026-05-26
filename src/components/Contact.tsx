'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  
  useEffect(() => {
    ref.current?.querySelectorAll('.reveal').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%' } })
    })
    
    ref.current?.querySelectorAll('.mag').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const ev = e as MouseEvent
        const r = (btn as HTMLElement).getBoundingClientRect()
        const x = (ev.clientX - r.left - r.width/2) * 0.2
        const y = (ev.clientY - r.top - r.height/2) * 0.2
        ;(btn as HTMLElement).style.transform = `translate(${x}px,${y}px)`
      })
      btn.addEventListener('mouseleave', () => { (btn as HTMLElement).style.transform = '' })
    })
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }
  const BODY: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" }

  return (
    <section 
      ref={ref} 
      id="contact" 
      style={{ 
        background: '#080808', 
        padding: '60px 8vw 40px', 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <style>{`
        .cta-btn-sync {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #fff !important;
          text-decoration: none;
          padding: 14px 32px;
          border: 1px solid #CC0000;
          background: transparent;
          transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
          cursor: none;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .cta-btn-sync::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #CC0000;
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          z-index: -1;
        }

        .cta-btn-sync:hover::before {
          transform: translateX(0);
        }

        .cta-btn-sync:hover {
          box-shadow: 0 0 30px rgba(204,0,0,0.4);
        }
      `}</style>

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, #CC0000, transparent)' }} />

      {/* BIG BG TEXT */}
      <div style={{ position: 'absolute', ...SLAB, fontSize: 'clamp(100px, 18vw, 240px)', color: 'rgba(204,0,0,0.03)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', whiteSpace: 'nowrap', pointerEvents: 'none', letterSpacing: '0.05em', userSelect: 'none' }}>
        HIRE ME.
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
        <div className="reveal section-label" style={{ justifyContent: 'center', marginBottom: '12px' }}>007 — CONTACT</div>

        <h2 className="reveal" style={{ ...SLAB, fontSize: 'clamp(54px, 8vw, 115px)', lineHeight: 0.85, color: '#fff', textTransform: 'uppercase', marginBottom: '16px' }}>
          YOU NEED A<br /><span style={{ color: '#CC0000' }}>DESIGNER.</span><br />I NEED A<br /><span style={{ WebkitTextStroke: '1px #fff', color: 'transparent' }}>STAGE.</span>
        </h2>

        <p className="reveal" style={{ ...BODY, fontSize: 'clamp(15px, 1.4vw, 18px)', color: 'rgba(240,237,232,0.45)', maxWidth: '540px', margin: '0 auto 28px', lineHeight: 1.5, letterSpacing: '0.03em' }}>
          Fresh out of training. Full of precision. Available for full-time roles, freelance, and design collaborations. If you&apos;re building something that deserves to look as sharp as it works — this is that call.
        </p>

        {/* BIG EMAIL */}
        <a className="reveal" href="mailto:udaykirankamble55@gmail.com" style={{ display: 'inline-block', ...SLAB, fontSize: 'clamp(18px, 2.2vw, 28px)', color: '#CC0000', textDecoration: 'none', letterSpacing: '0.04em', marginBottom: '32px', transition: 'color 0.3s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#CC0000' }}
        >
          UDAYKIRANKAMBLE55@GMAIL.COM
        </a>

        {/* PRIMARY CTAs - Restructured border colors and transitions to match Nav Resume button */}
        <div className="reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
          <a href="mailto:udaykirankamble55@gmail.com" className="mag cta-btn-sync">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            SEND A MESSAGE
          </a>
          <a href="/resume.pdf" download className="mag cta-btn-sync">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            DOWNLOAD RESUME
          </a>
        </div>

        {/* SOCIALS */}
        <div className="reveal" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/uday-kiran-kamble-9317a52a9/' },
            { label: 'BEHANCE', href: 'https://www.behance.net/udaykirankamble' },
            { label: 'INSTAGRAM', href: 'https://www.instagram.com/saymyname_heis' },
            { label: '+91 78933 44067', href: 'tel:+917893344067' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="mag" style={{ ...MONO, fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.35)', textDecoration: 'none', padding: '10px 18px', border: '1px solid rgba(204,0,0,0.2)', transition: 'color 0.3s, border-color 0.3s', cursor: 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#CC0000'; (e.currentTarget as HTMLElement).style.borderColor = '#CC0000' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.35)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(204,0,0,0.2)' }}
            >{s.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
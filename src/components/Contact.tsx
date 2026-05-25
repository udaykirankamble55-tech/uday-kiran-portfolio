'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    ref.current?.querySelectorAll('.reveal').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
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
    <section ref={ref} id="contact" style={{ background: '#080808', padding: '160px 8vw', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, #CC0000, transparent)' }} />

      {/* BIG BG TEXT */}
      <div style={{ position: 'absolute', ...SLAB, fontSize: 'clamp(100px, 20vw, 280px)', color: 'rgba(204,0,0,0.04)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', whiteSpace: 'nowrap', pointerEvents: 'none', letterSpacing: '0.05em', userSelect: 'none' }}>
        HIRE ME.
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal section-label" style={{ justifyContent: 'center' }}>007 — CONTACT</div>

        <h2 className="reveal" style={{ ...SLAB, fontSize: 'clamp(64px, 10vw, 140px)', lineHeight: 0.82, color: '#fff', textTransform: 'uppercase', marginBottom: '24px' }}>
          YOU NEED A<br /><span style={{ color: '#CC0000' }}>DESIGNER.</span><br />I NEED A<br /><span style={{ WebkitTextStroke: '1px #fff', color: 'transparent' }}>STAGE.</span>
        </h2>

        <p className="reveal" style={{ ...BODY, fontSize: 'clamp(16px, 1.6vw, 20px)', color: 'rgba(240,237,232,0.45)', maxWidth: '520px', margin: '0 auto 56px', lineHeight: 1.7, letterSpacing: '0.03em' }}>
          Fresh out of training. Full of precision. Available for full-time roles, freelance, and design collaborations. If you&apos;re building something that deserves to look as sharp as it works — this is that call.
        </p>

        {/* BIG EMAIL */}
        <a className="reveal" href="mailto:udaykirankamble55@gmail.com" style={{ display: 'block', ...SLAB, fontSize: 'clamp(18px, 2.5vw, 32px)', color: '#CC0000', textDecoration: 'none', letterSpacing: '0.04em', marginBottom: '52px', transition: 'color 0.3s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#CC0000' }}
        >
          UDAYKIRANKAMBLE55@GMAIL.COM
        </a>

        {/* PRIMARY CTAs */}
        <div className="reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          <a href="mailto:udaykirankamble55@gmail.com" className="mag" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', ...MONO, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#000', textDecoration: 'none', padding: '16px 36px', background: '#CC0000', transition: 'background 0.3s, box-shadow 0.3s', cursor: 'none' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff0000'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(204,0,0,0.5)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#CC0000'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            SEND A MESSAGE
          </a>
          <a href="/resume.pdf" download className="mag" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', ...MONO, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#CC0000', textDecoration: 'none', padding: '16px 36px', background: 'transparent', border: '1px solid #CC0000', transition: 'background 0.3s, box-shadow 0.3s', cursor: 'none' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(204,0,0,0.1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(204,0,0,0.2)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            DOWNLOAD RESUME
          </a>
        </div>

        {/* SOCIALS */}
        <div className="reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/uday-kiran-kamble-9317a52a9/' },
            { label: 'BEHANCE', href: 'https://www.behance.net/udaykirankamble' },
            { label: 'INSTAGRAM', href: 'https://www.instagram.com/saymyname_heis' },
            { label: '+91 78933 44067', href: 'tel:+917893344067' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="mag" style={{ ...MONO, fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.35)', textDecoration: 'none', padding: '10px 20px', border: '1px solid rgba(204,0,0,0.2)', transition: 'color 0.3s, border-color 0.3s', cursor: 'none' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#CC0000'; (e.currentTarget as HTMLElement).style.borderColor = '#CC0000' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.35)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(204,0,0,0.2)' }}
            >{s.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}

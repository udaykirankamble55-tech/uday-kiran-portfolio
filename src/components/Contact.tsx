'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  
  useEffect(() => {
    // Kill existing triggers on mount to build clean operational baselines
    ScrollTrigger.getAll().forEach(t => { if(t.trigger === ref.current) t.kill() });

    ref.current?.querySelectorAll('.split-reveal-contact').forEach((title) => {
      const lines = title.querySelectorAll('.line-span')
      gsap.fromTo(lines, 
        { y: '100%' },
        { 
          y: '0%', 
          duration: 1.0, 
          ease: 'power4.out', 
          stagger: 0.1, 
          scrollTrigger: { 
            trigger: title, 
            start: 'top 88%',
            toggleActions: 'play none none reset' // Automatically reinits line position whenever view state resets
          } 
        }
      )
    })

    ref.current?.querySelectorAll('.reveal-fade').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 20 }, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out', 
        scrollTrigger: { 
          trigger: el, 
          start: 'top 92%',
          toggleActions: 'play none none reset'
        } 
      })
    })

    // Listen to visibility and window state returns to update layout positions
    const forceRefreshOnReturn = () => {
      ScrollTrigger.refresh();
    }
    window.addEventListener('focus', forceRefreshOnReturn)
    
    ref.current?.querySelectorAll('.mag').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const ev = e as MouseEvent
        const r = (btn as HTMLElement).getBoundingClientRect()
        const x = (ev.clientX - r.left - r.width/2) * 0.15
        const y = (ev.clientY - r.top - r.height/2) * 0.15
        ;(btn as HTMLElement).style.transform = `translate(${x}px,${y}px)`
      })
      btn.addEventListener('mouseleave', () => { (btn as HTMLElement).style.transform = '' })
    })

    return () => {
      window.removeEventListener('focus', forceRefreshOnReturn)
    }
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }
  const BODY: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" }

  return (
    <section ref={ref} id="contact" style={{ background: '#000', padding: '140px 8vw 100px', position: 'relative' }}>
      
      <div className="reveal-fade section-label">005 — INQUIRIES & PLACEMENTS</div>
      
      {/* Dynamic Headline hooks both Agency Recruiter Teams and Freelance Partners */}
      <h2 className="split-reveal-contact" style={{ ...SLAB, fontSize: 'clamp(52px, 7.5vw, 100px)', lineHeight: 0.85, color: '#fff', marginBottom: '40px', textTransform: 'uppercase' }}>
        <span className="line-wrapper"><span className="line-span">READY TO SCALESHIFT</span></span>
        <span className="line-wrapper"><span className="line-span" style={{ color: '#CC0000' }}>YOUR TEAM OR PRODUCT?</span></span>
      </h2>

      <p className="reveal-fade" style={{ ...BODY, fontSize: 'clamp(16px, 1.5vw, 20px)', color: 'rgba(240,237,232,0.5)', maxWidth: '680px', lineHeight: 1.6, marginBottom: '56px' }}>
        Whether you are a Corporate Talent Acquisition Lead looking to anchor a high-octane visual designer to your full-time internal roster, or a Private Brand Founder looking to execute high-converting digital interfaces — let&apos;s build down the pipeline.
      </p>

      <div className="reveal-fade" style={{ marginBottom: '64px', overflow: 'hidden' }}>
        <a 
          href="mailto:udaykirankamble55@gmail.com" 
          style={{ 
            ...SLAB, 
            fontSize: 'clamp(30px, 6.2vw, 92px)', 
            color: '#fff', 
            textDecoration: 'none', 
            lineHeight: 1,
            display: 'inline-block',
            transition: 'color 0.3s ease, transform 0.3s ease'
          }}
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLElement).style.color = '#CC0000'
            ;(e.currentTarget as HTMLElement).style.transform = 'skewX(-4deg)'
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLElement).style.color = '#fff'
            ;(e.currentTarget as HTMLElement).style.transform = 'skewX(0deg)'
          }}
        >
          UDAYKIRANKAMBLE55@GMAIL.COM
        </a>
      </div>

      <div className="reveal-fade" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '80px', position: 'relative', zIndex: 10 }}>
        <a 
          href="mailto:udaykirankamble55@gmail.com" 
          className="mag" 
          style={{ 
            ...MONO, 
            fontSize: '11px', 
            letterSpacing: '0.25em', 
            color: '#fff', 
            background: '#CC0000', 
            textDecoration: 'none', 
            padding: '20px 36px', 
            fontWeight: 'bold',
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px',
            transition: 'background 0.3s'
          }}
        >
          <svg style={{ width: '14px', height: '14px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          INITIATE ENGAGEMENT
        </a>

        <a 
          href="/resume.pdf" 
          target="_blank" 
          className="mag" 
          style={{ 
            ...MONO, 
            fontSize: '11px', 
            letterSpacing: '0.25em', 
            color: '#fff', 
            border: '1px solid rgba(255,255,255,0.15)', 
            textDecoration: 'none', 
            padding: '19px 36px', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px',
            transition: 'border-color 0.3s, background 0.3s'
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#CC0000'; (e.currentTarget as HTMLElement).style.background = 'rgba(204,0,0,0.05)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
        >
          <svg style={{ width: '14px', height: '14px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          DOWNLOAD OFFICIAL CV
        </a>
      </div>

      <div className="reveal-fade" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/uday-kiran-kamble-9317a52a9/' },
          { label: 'BEHANCE', href: 'https://www.behance.net/udaykirankamble' },
          { label: 'INSTAGRAM', href: 'https://www.instagram.com/saymyname_heis' },
          { label: '+91 78933 44067', href: 'tel:+917893344067' },
        ].map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="mag" style={{ ...MONO, fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.35)', textDecoration: 'none', padding: '10px 18px', transition: 'color 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#CC0000' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.35)' }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  )
}
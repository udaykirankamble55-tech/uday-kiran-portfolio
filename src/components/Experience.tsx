'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    ref.current?.querySelectorAll('.reveal, .exp-item').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
    })
    ref.current?.querySelectorAll('.exp-line').forEach(el => {
      gsap.fromTo(el, { height: 0 }, { height: '100%', duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%' } })
    })
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }
  const BODY: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" }

  return (
    <section ref={ref} id="experience" style={{ background: '#080808', padding: '140px 8vw', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, #CC0000, transparent)' }} />

      {/* EDUCATION */}
      <div className="reveal section-label">004 — EDUCATION</div>
      <h2 className="reveal" style={{ ...SLAB, fontSize: 'clamp(52px, 7vw, 96px)', lineHeight: 0.85, color: '#fff', marginBottom: '60px', textTransform: 'uppercase' }}>
        WHERE I<br /><span style={{ color: '#CC0000' }}>LEARNED IT.</span>
      </h2>

      {[
        {
          date: 'NOV 2025 — MAY 2026',
          role: 'UI/UX & GRAPHIC DESIGN',
          company: 'Arrow Multimedia, Ameerpet',
          tag: 'PROFESSIONAL COURSE',
          points: [
            'Structured 6-month industry-level UI/UX and Graphic Design course from a decade-old institute established in 2006.',
            'Covered end-to-end design process — wireframing, prototyping, visual design, branding, and real-world case studies.',
            'Every project built during this course was published as a live Behance case study.',
            'Hands-on training with Figma, Adobe Photoshop, Illustrator, and AI-integrated design workflows.',
          ]
        },
        {
          date: 'SEP 2022 — DEC 2025',
          role: 'BBA — SALES & MARKETING',
          company: 'Osmania University · Prof. Ram Reddy Centre',
          tag: 'BACHELOR\'S DEGREE',
          points: [
            'Built the business brain behind the design eye. Market positioning, consumer psychology, commercial logic.',
            'Applied marketing principles directly to UX: conversion, retention, hierarchy of value communication.',
            'Graduated with 67.95% — grounded in how businesses think, sell, and scale.',
          ]
        },
      ].map((e, i) => (
        <div key={i} className="exp-item" style={{ display: 'grid', gridTemplateColumns: '220px 2px 1fr', gap: '40px', borderBottom: '1px solid rgba(204,0,0,0.15)', paddingBottom: '56px', marginBottom: '56px', opacity: 0 }}>
          <div>
            <div style={{ ...MONO, fontSize: '10px', letterSpacing: '0.2em', color: '#CC0000', marginBottom: '12px' }}>{e.date}</div>
            <div style={{ ...MONO, fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(240,237,232,0.3)', border: '1px solid rgba(204,0,0,0.2)', padding: '4px 8px', display: 'inline-block' }}>{e.tag}</div>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '100%', background: 'rgba(204,0,0,0.15)' }} />
            <div className="exp-line" style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: 0, background: '#CC0000' }} />
          </div>
          <div>
            <div style={{ ...SLAB, fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#fff', marginBottom: '6px', textTransform: 'uppercase' }}>{e.role}</div>
            <div style={{ ...BODY, fontSize: '16px', color: '#CC0000', fontStyle: 'italic', marginBottom: '20px', letterSpacing: '0.04em' }}>{e.company}</div>
            {e.points.map((pt, j) => (
              <div key={j} style={{ display: 'flex', gap: '14px', marginBottom: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#CC0000', fontSize: '12px', marginTop: '3px', flexShrink: 0 }}>—</span>
                <span style={{ ...BODY, fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(240,237,232,0.55)', lineHeight: 1.65 }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* WORK EXPERIENCE */}
      <div className="reveal section-label" style={{ marginTop: '80px' }}>005 — WORK EXPERIENCE</div>
      <h2 className="reveal" style={{ ...SLAB, fontSize: 'clamp(52px, 7vw, 96px)', lineHeight: 0.85, color: '#fff', marginBottom: '60px', textTransform: 'uppercase' }}>
        WHERE I<br /><span style={{ color: '#CC0000' }}>EARNED IT.</span>
      </h2>

      <div className="exp-item" style={{ display: 'grid', gridTemplateColumns: '220px 2px 1fr', gap: '40px', opacity: 0 }}>
        <div>
          <div style={{ ...MONO, fontSize: '10px', letterSpacing: '0.2em', color: '#CC0000', marginBottom: '12px' }}>APR 2022 — PRESENT</div>
          <div style={{ ...MONO, fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(240,237,232,0.3)', border: '1px solid rgba(204,0,0,0.2)', padding: '4px 8px', display: 'inline-block' }}>FULL TIME</div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '100%', background: 'rgba(204,0,0,0.15)' }} />
          <div className="exp-line" style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: 0, background: '#CC0000' }} />
        </div>
        <div>
          <div style={{ ...SLAB, fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#fff', marginBottom: '6px', textTransform: 'uppercase' }}>MUSIC EDUCATOR & ADMINISTRATOR</div>
          <div style={{ ...BODY, fontSize: '16px', color: '#CC0000', fontStyle: 'italic', marginBottom: '20px', letterSpacing: '0.04em' }}>Celestial Harmony Academy of Music</div>
          {[
            'Prepared and trained students for Trinity College London Grade Examinations — one of the world\'s most respected classical music certification bodies.',
            'Taught guitar, keyboard, and piano to students across multiple age groups, adapting teaching methods to each learner\'s pace and style.',
            'Monitored and tracked individual student progress, maintained detailed records, and conducted regular parent communication sessions.',
            'Managed front desk operations — handled potential new admissions, conducted orientation calls, followed up on fee collections and reminders.',
            'Designed and implemented a QR-code-based digital attendance tracking system — the first product I ever shipped end-to-end.',
            'This role sharpened my eye for user experience. Every process I managed taught me systems thinking, feedback loops, and the discipline of iteration — skills that directly translate into how I approach every UI/UX problem today.',
          ].map((pt, j) => (
            <div key={j} style={{ display: 'flex', gap: '14px', marginBottom: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: '#CC0000', fontSize: '12px', marginTop: '3px', flexShrink: 0 }}>—</span>
              <span style={{ ...BODY, fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(240,237,232,0.55)', lineHeight: 1.65 }}>{pt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

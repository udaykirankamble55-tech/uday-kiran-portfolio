'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const projects = [
  { num: '01', type: 'MOBILE APP · UI/UX CASE STUDY', title: 'AMARA', sub: 'Fashion Commerce Experience', desc: 'Visual discovery meets frictionless checkout. Every scroll, swipe, and state designed around how fashion buyers actually think.', tags: ['FIGMA', 'MOBILE UI', 'E-COMMERCE', 'USER FLOWS'], link: 'https://www.behance.net/gallery/242442917/AMARA-Fashion-Commerce-App-Design', img: '/project-amara.jpg' },
  { num: '02', type: 'INTERACTIVE PROTOTYPE · UX', title: 'AMARA', sub: 'Interactive Prototype', desc: 'The living version. Fully interactive Figma prototype — complete user journeys, micro-interactions, transition logic.', tags: ['FIGMA PROTOTYPE', 'INTERACTION', 'ANIMATION'], link: 'https://www.behance.net/gallery/242443297/AMARA-Interactive-Fashion-Commerce-Prototype', img: '/project-amara2.jpg' },
  { num: '03', type: 'BRAND IDENTITY · PACKAGING', title: 'VRIKOPRO', sub: 'Fitness Supplement Brand', desc: 'Logo, packaging, full visual language for a fitness brand. Built for a market that buys with its eyes and stays with trust.', tags: ['LOGO DESIGN', 'PACKAGING', 'BRAND SYSTEM'], link: 'https://www.behance.net/gallery/247084463/Vrikopro-Fitness-Supplement-Branding-Case-Study', img: '/project-vrikopro.jpg' },
  { num: '04', type: 'WEB UI · SAAS CONCEPT', title: 'AI SAAS', sub: 'Landing Page UX Concept', desc: 'High-converting SaaS landing page for an AI product. Aggressive visual hierarchy. Persuasion design baked into every section.', tags: ['SAAS UI', 'LANDING PAGE', 'CONVERSION UX'], link: 'https://www.behance.net/gallery/248945475/AI-SaaS-Landing-Page-UIUX-Concept', img: '/project-saas.jpg' },
  { num: '05', type: 'WEB PROTOTYPE · INTERACTIVE', title: 'DEFENDER', sub: 'Octa Black Web Prototype', desc: 'Dark-themed, premium interactive web prototype. Bold transitions that match the product identity. Built for power.', tags: ['WEB PROTOTYPE', 'DARK UI', 'PRODUCT DESIGN'], link: 'https://www.behance.net/gallery/242402253/DEFENDER-Octa-Black-Interactive-Web-Prototype', img: '/project-defender.jpg' },
  { num: '06', type: 'MOBILE APP · FOOD TECH', title: 'ZESTYY', sub: 'Food Delivery App', desc: 'Full UX case study. Research to final UI. Turns hunger into a three-tap order. Appetising from screen one.', tags: ['UX RESEARCH', 'MOBILE APP', 'USER JOURNEY'], link: 'https://www.behance.net/gallery/244617653/Zestyy-Food-Delivery-App-UIUX-Case-Study', img: '/project-zestyy.jpg' },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    ref.current?.querySelectorAll('.reveal').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
    })
    ref.current?.querySelectorAll('.p-card').forEach(card => {
      gsap.fromTo(card, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 88%' } })
    })
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }
  const BODY: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" }

  return (
    <section ref={ref} id="work" style={{ background: '#000', padding: '140px 8vw', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, #CC0000, transparent)' }} />

      <div className="reveal section-label">003 — SELECTED WORK</div>
      <h2 className="reveal" style={{ ...SLAB, fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 0.85, color: '#fff', marginBottom: '12px', textTransform: 'uppercase' }}>
        CASES THAT<br /><span style={{ color: '#CC0000' }}>SPEAK.</span>
      </h2>
      <p className="reveal" style={{ ...BODY, fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(240,237,232,0.4)', marginBottom: '80px', maxWidth: '540px' }}>
        Six case studies. Six systems. Each one a full design story — from problem to pixel — published on Behance.
      </p>

      {/* Drop your Behance banner images with these filenames into /public/ */}
      {/* project-amara.jpg, project-amara2.jpg, project-vrikopro.jpg, project-saas.jpg, project-defender.jpg, project-zestyy.jpg */}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }}>
        {projects.map((p) => (
          <div key={p.num} className="p-card" style={{ background: '#0a0a0a', border: '1px solid rgba(204,0,0,0.15)', overflow: 'hidden', position: 'relative', cursor: 'none', opacity: 0, transition: 'border-color 0.3s' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = '#CC0000'
              const img = (e.currentTarget as HTMLElement).querySelector('.p-img') as HTMLElement
              if (img) img.style.transform = 'scale(1.06)'
              const overlay = (e.currentTarget as HTMLElement).querySelector('.p-overlay') as HTMLElement
              if (overlay) overlay.style.opacity = '0.5'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(204,0,0,0.15)'
              const img = (e.currentTarget as HTMLElement).querySelector('.p-img') as HTMLElement
              if (img) img.style.transform = 'scale(1)'
              const overlay = (e.currentTarget as HTMLElement).querySelector('.p-overlay') as HTMLElement
              if (overlay) overlay.style.opacity = '0.7'
            }}
          >
            {/* Banner image */}
            <div style={{ height: '220px', overflow: 'hidden', position: 'relative', background: '#161616' }}>
              <img className="p-img" src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', filter: 'brightness(0.7)' }}
                onError={e => { (e.currentTarget as HTMLElement).style.display = 'none' }}
              />
              <div className="p-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))', opacity: 0.7, transition: 'opacity 0.4s' }} />
              <div style={{ position: 'absolute', top: '20px', left: '20px', ...MONO, fontSize: '9px', letterSpacing: '0.35em', color: '#CC0000', textTransform: 'uppercase' }}>{p.type}</div>
              <div style={{ position: 'absolute', top: '20px', right: '20px', ...MONO, fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(240,237,232,0.3)' }}>{p.num} / 06</div>
            </div>

            {/* Content */}
            <div style={{ padding: '32px 32px 36px' }}>
              <div style={{ ...SLAB, fontSize: 'clamp(32px, 3.5vw, 48px)', color: '#fff', lineHeight: 0.9, textTransform: 'uppercase', marginBottom: '4px' }}>{p.title}</div>
              <div style={{ ...BODY, fontSize: '14px', fontWeight: 400, color: '#CC0000', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>{p.sub}</div>
              <p style={{ ...BODY, fontSize: 'clamp(14px, 1.3vw, 16px)', fontWeight: 400, color: 'rgba(240,237,232,0.5)', lineHeight: 1.65, marginBottom: '20px' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
                {p.tags.map(t => (
                  <span key={t} style={{ ...MONO, fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(240,237,232,0.4)', border: '1px solid rgba(204,0,0,0.2)', padding: '4px 10px', textTransform: 'uppercase' }}>{t}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', ...MONO, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#CC0000', textDecoration: 'none', borderBottom: '1px solid rgba(204,0,0,0.3)', paddingBottom: '4px', transition: 'gap 0.3s, border-color 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '18px'; (e.currentTarget as HTMLElement).style.borderColor = '#CC0000' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '10px'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(204,0,0,0.3)' }}
              >VIEW CASE STUDY →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const skills = [
  { num: '01', title: 'UI/UX DESIGN', tools: ['FIGMA', 'ADOBE XD', 'WIREFRAMING', 'PROTOTYPING', 'USER FLOWS', 'VISUAL HIERARCHY'] },
  { num: '02', title: 'BRAND & VISUAL', tools: ['PHOTOSHOP', 'ILLUSTRATOR', 'CANVA', 'LOGO DESIGN', 'PACKAGING', 'PRINT DESIGN'] },
  { num: '03', title: 'AI WORKFLOW', tools: ['CLAUDE', 'CHATGPT', 'GEMINI', 'CANVA AI', 'LOVABLE', 'STITCH AI'] },
  { num: '04', title: 'LAYOUT & TYPE', tools: ['GRID SYSTEMS', 'TYPOGRAPHY', 'SPACING', 'CONTRAST', 'SOCIAL CREATIVES'] },
  { num: '05', title: 'WEB & SAAS', tools: ['LANDING PAGES', 'SAAS UI', 'HTML/CSS BASICS', 'VIBE CODING', 'CONVERSION UX'] },
  { num: '06', title: 'DESIGN THINKING', tools: ['UX STRATEGY', 'CASE STUDIES', 'USER RESEARCH', 'SALES & MARKETING'] },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    ref.current?.querySelectorAll('.sk-card').forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.7, delay: (i % 3) * 0.12, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 88%' } })
      card.addEventListener('mousemove', (e) => {
        const ev = e as MouseEvent
        const r = (card as HTMLElement).getBoundingClientRect()
        const x = (ev.clientX - r.left) / r.width - 0.5
        const y = (ev.clientY - r.top) / r.height - 0.5
        ;(card as HTMLElement).style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`
      })
      card.addEventListener('mouseleave', () => { (card as HTMLElement).style.transform = '' })
    })
    ref.current?.querySelectorAll('.reveal').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
    })
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }

  return (
    <section ref={ref} id="skills" style={{ background: '#080808', padding: '140px 8vw', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, #CC0000, transparent)' }} />

      <div className="reveal section-label">002 — SKILLS</div>
      <h2 className="reveal" style={{ ...SLAB, fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 0.85, color: '#fff', textTransform: 'uppercase', marginBottom: '12px' }}>
        THE TOOLS OF<br /><span style={{ color: '#CC0000', WebkitTextStroke: '1px #CC0000' }}>PRECISION.</span>
      </h2>
      <p className="reveal" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(240,237,232,0.4)', marginBottom: '60px', maxWidth: '500px', letterSpacing: '0.04em' }}>
        Every tool in the stack. Every pixel has a reason. Every decision has a system.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
        {skills.map((sk) => (
          <div key={sk.num} className="sk-card" style={{ background: '#0a0a0a', border: '1px solid rgba(204,0,0,0.15)', padding: '40px 32px', cursor: 'none', opacity: 0, transition: 'border-color 0.3s, background 0.3s', position: 'relative', overflow: 'hidden' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#CC0000'; (e.currentTarget as HTMLElement).style.background = 'rgba(204,0,0,0.05)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(204,0,0,0.15)'; (e.currentTarget as HTMLElement).style.background = '#0a0a0a' }}
          >
            {/* Red corner accent on hover */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '0', height: '2px', background: '#CC0000', transition: 'width 0.4s ease' }} className="card-top-line" />
            <div style={{ ...MONO, fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(204,0,0,0.5)', marginBottom: '28px' }}>{sk.num}</div>
            <div style={{ ...SLAB, fontSize: 'clamp(26px, 2.5vw, 34px)', color: '#fff', letterSpacing: '0.04em', marginBottom: '24px', textTransform: 'uppercase' }}>{sk.title}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {sk.tools.map(t => (
                <span key={t} style={{ ...MONO, fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(240,237,232,0.5)', border: '1px solid rgba(204,0,0,0.25)', padding: '5px 10px', textTransform: 'uppercase', transition: 'color 0.3s, border-color 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#CC0000'; (e.currentTarget as HTMLElement).style.borderColor = '#CC0000' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.5)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(204,0,0,0.25)' }}
                >{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  { group: 'UI/UX DESIGN', items: ['Figma Archetype', 'Component Isolation', 'Responsive Foundations', 'Prototyping Vectors', 'Interactive Mechanics'] },
  { group: 'BRAND IDENTITY', items: ['Vector Typography', 'Corporate Layouts', 'Heritage Narrative Systems', 'Product Geometry', 'Color Balance Matrix'] },
  { group: 'DIGITAL PRODUCTION', items: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva AI Generation', 'Generative Prompts', 'Design Scaleshifting'] },
  { group: 'WIREFRAMING', items: ['User Flow Mapping', 'Low-Fi Structural Drafts', 'Information Architecture', 'Screen Blueprints', 'UX Testing Models'] },
  { group: 'VISUAL RESEARCH', items: ['Moodboarding Archetypes', 'Trend Wave Tracking', 'Competitor Diagnostics', 'Design Language Sprints', 'Asset Curation'] },
  { group: 'AI ACCELERATION', items: ['Claude Prompt Modeling', 'ChatGPT Workflows', 'Midjourney Geometry', 'Automation Pipelines', 'Creative Scaling Vectors'] }
]

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = containerRef.current
    if (!section) return

    ScrollTrigger.getAll().forEach(t => { if(t.trigger === section) t.kill() })

    section.querySelectorAll('.split-reveal').forEach((title) => {
      const lines = title.querySelectorAll('.line-span')
      gsap.fromTo(lines, 
        { y: '100%' },
        { 
          y: '0%', 
          duration: 1.0, 
          ease: 'power4.out', 
          stagger: 0.08,
          scrollTrigger: { trigger: title, start: 'top 88%', toggleActions: 'play none none reset' }
        }
      )
    })
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }

  return (
    <section ref={containerRef} id="skills" style={{ background: '#000', padding: '60px max(4vw, 20px)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <style>{`
        .sk-grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          max-width: 1440px; 
          margin: 0 auto; 
          width: 100%; 
        }
        @media (min-width: 640px) { .sk-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .sk-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .sk-card {
          background: #070707;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          padding: 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sk-card:hover {
          border-color: #CC0000 !important;
          box-shadow: 0 15px 40px rgba(204, 0, 0, 0.15);
          transform: translateY(-4px);
        }
        .sk-card:hover .sk-group-title {
          color: #CC0000 !important;
        }
      `}</style>

      <div style={{ width: '100%' }}>
        {/* Swapped to use your exact global .section-label typography and rules */}
        <div className="section-label">003 — SKILLS</div>

        <h2 className="split-reveal" style={{ ...SLAB, fontSize: 'clamp(46px, 7vw, 92px)', lineHeight: 0.85, color: '#fff', marginBottom: '36px', textTransform: 'uppercase' }}>
          <span className="line-wrapper"><span className="line-span">MY</span></span>
          <span className="line-wrapper"><span className="line-span" style={{ color: '#CC0000' }}>SKILLS.</span></span>
        </h2>

        <div className="sk-grid">
          {skillCategories.map((g, idx) => (
            <div key={idx} className="sk-card">
              <h3 className="sk-group-title" style={{ ...SLAB, fontSize: '22px', color: '#fff', letterSpacing: '0.02em', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '6px', transition: 'color 0.3s' }}>
                {g.group}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {g.items.map((s) => (
                  <li key={s} style={{ ...MONO, fontSize: '11px', color: 'rgba(240,237,232,0.65)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '4px', height: '4px', background: '#CC0000', borderRadius: '50%' }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
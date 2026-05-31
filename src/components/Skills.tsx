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
  const cardsRef = useRef<HTMLDivElement[]>([])

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

    // --- MAGNETIC + TILT INTERACTION ENGINE ---
    cardsRef.current.forEach((card) => {
      if (!card) return

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left 
        const y = e.clientY - rect.top  
        
        const xc = rect.width / 2
        const yc = rect.height / 2
        const dx = (x - xc) / xc
        const dy = (y - yc) / yc

        // RESTRICTED TILT LEVEL: Elegant 12 degrees max
        const maxTilt = 12 

        card.style.setProperty('--mx', `${x}px`)
        card.style.setProperty('--my', `${y}px`)

        gsap.to(card, {
          rotateX: -dy * maxTilt,
          rotateY: dx * maxTilt,
          transformPerspective: 1000,
          x: dx * 10, 
          y: dy * 10,
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.6)'
        })
      }

      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    })
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }

  return (
    <section ref={containerRef} id="skills" style={{ background: '#000', padding: '100px max(4vw, 20px)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <style>{`
        .sk-grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          max-width: 1440px; 
          margin: 0 auto; 
          width: 100%; 
        }
        @media (min-width: 640px) { .sk-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .sk-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .sk-card {
          position: relative;
          background: rgba(10, 10, 10, 0.85);
          border: 1.5px solid rgba(255, 255, 255, 0.08) !important;
          padding: 32px 28px;
          border-radius: 12px; 
          overflow: hidden;
          backdrop-filter: blur(20px);
          transform-style: preserve-3d; 
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
          will-change: transform, box-shadow;
        }

        /* LOOPING LIGHT PATH TRACK */
        .sk-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent 20%,
            #CC0000 45%,
            #ffffff 50%,
            #CC0000 55%,
            transparent 80%
          );
          animation: rotateBorder 3.5s linear infinite;
          animation-play-state: paused;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        /* INTERNAL COVER SHIELD */
        .sk-card::after {
          content: '';
          position: absolute;
          inset: 1.5px;
          background: #0d0d0d;
          border-radius: 11px;
          z-index: 2;
          transition: background 0.3s ease;
        }

        /* FLOATING CONTENT CONTAINER */
        .sk-card-content {
          position: relative;
          z-index: 3;
          transform: translateZ(40px); 
        }

        /* MASTER HOVER OVERRIDES */
        .sk-card:hover {
          border-color: transparent !important;
          box-shadow: 0 30px 60px rgba(204, 0, 0, 0.25);
        }

        .sk-card:hover::before {
          opacity: 1;
          animation-play-state: running;
        }

        .sk-card:hover .sk-group-title {
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        }

        /* Shift lists from industrial gray to pure intense white on hover */
        .sk-card:hover .sk-item-text {
          color: #ffffff;
        }

        .sk-item-node:hover .sk-item-text {
          transform: translateX(4px);
        }

        @keyframes rotateBorder {
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{ width: '100%' }}>
        <div className="section-label" style={{ ...MONO, color: '#CC0000', fontWeight: 600, letterSpacing: '0.2em', marginBottom: '16px' }}>003 — STRATEGIC MATRIX</div>

        <h2 className="split-reveal" style={{ ...SLAB, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.85, color: '#fff', marginBottom: '44px', textTransform: 'uppercase' }}>
          <span className="line-wrapper"><span className="line-span">CORE</span></span>
          <span className="line-wrapper"><span className="line-span" style={{ color: '#CC0000' }}>ARSENAL.</span></span>
        </h2>

        <div className="sk-grid">
          {skillCategories.map((g, idx) => (
            <div 
              key={idx} 
              className="sk-card"
              ref={(el) => { if (el) cardsRef.current[idx] = el }}
            >
              <div className="sk-card-content">
                <h3 className="sk-group-title" style={{ 
                  ...SLAB, 
                  fontSize: '26px', 
                  color: '#ffffff', 
                  fontWeight: 400,
                  letterSpacing: '0.04em', 
                  marginBottom: '20px', 
                  borderBottom: '1px solid rgba(255,255,255,0.1)', 
                  paddingBottom: '8px', 
                  transition: 'text-shadow 0.3s ease' 
                }}>
                  {g.group}
                </h3>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {g.items.map((s) => (
                    <li 
                      key={s} 
                      className="sk-item-node"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'default' }}
                    >
                      {/* Red Tactical Radar Point */}
                      <span style={{ width: '5px', height: '5px', background: '#CC0000', borderRadius: '50%', boxShadow: '0 0 6px #CC0000' }} />
                      
                      {/* LIST NODE: Upgraded to 13.5px High-Contrast Light Industrial Silver */}
                      <span 
                        className="sk-item-text"
                        style={{ 
                          ...MONO, 
                          fontSize: '13.5px', 
                          color: '#bbbbbb', 
                          fontWeight: 500, 
                          letterSpacing: '0.01em',
                          transition: 'all 0.2s ease-out'
                        }}
                      >
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
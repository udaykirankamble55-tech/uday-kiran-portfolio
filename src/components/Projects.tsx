'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: '01', title: 'AMARA APP', cat: 'FASHION COMMERCE EXPERIENCE', tags: ['FIGMA', 'MOBILE UI', 'E-COMMERCE', 'USER FLOWS'], img: 'project-amara.webp', link: 'https://www.behance.net/gallery/211756577/Amara-Making-Statements-Turning-Heads-(UIUX)' },
  { id: '02', title: 'AMARA PROTOTYPE', cat: 'INTERACTIVE FIGMA PROTOTYPE', tags: ['FIGMA PROTOTYPE', 'INTERACTION', 'ANIMATION'], img: 'project-amara2.webp', link: 'https://www.behance.net/gallery/211756577/Amara-Making-Statements-Turning-Heads-(UIUX)' },
  { id: '03', title: 'VRIKOPRO BRANDING', cat: 'CINEMATIC PACKAGING DESIGN', tags: ['ILLUSTRATOR', 'BRAND SYSTEM', 'PACKAGING'], img: '/project-vrikopro.webp', link: 'https://www.behance.net/udaykirankamble' },
  { id: '04', title: 'AI SAAS PLATFORM', cat: 'LANDING PAGE ARCHITECTURE', tags: ['SAAS DESIGN', 'WEB UI', 'COMPONENTS'], img: 'project-saas.webp', link: 'https://www.behance.net/udaykirankamble' },
  { id: '05', title: 'DEFENDER SYSTEM', cat: 'AUTOMOTIVE INTERFACE CONCEPT', tags: ['DASHBOARD UI', 'PROTOTYPING', 'HMI'], img: 'project-defender.webp', link: 'https://www.behance.net/udaykirankamble' },
  { id: '06', title: 'ZESTYY PRODUCT', cat: 'BRAND IDENTITY SYSTEM', tags: ['LOGO DESIGN', 'TYPOGRAPHY', 'STRATEGY'], img: 'project-zestyy.webp', link: 'https://www.behance.net/udaykirankamble' }
]

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = containerRef.current
    if (!section) return

    ScrollTrigger.getAll().forEach(t => { if(t.trigger === section) t.kill() })

    section.querySelectorAll('.split-reveal-projects').forEach((title) => {
      const lines = title.querySelectorAll('.line-span')
      gsap.fromTo(lines, 
        { y: '100%' },
        { 
          y: '0%', 
          duration: 1.0, 
          ease: 'power4.out', 
          stagger: 0.08,
          scrollTrigger: { 
            trigger: title, 
            start: 'top 88%',
            toggleActions: 'play none none reset'
          }
        }
      )
    })

    section.querySelectorAll('.p-card').forEach((card) => {
      gsap.fromTo(card, { opacity: 0, y: 30 }, {
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out', 
        scrollTrigger: { 
          trigger: card, 
          start: 'top 90%',
          toggleActions: 'play none none reset'
        }
      })
    })
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }
  const BODY: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" }

  return (
    <section ref={containerRef} id="repositories" style={{ background: '#000', padding: '120px max(4vw, 20px)' }}>
      <style>{`
        /* Clean 2-Column Side-by-Side Grid Architecture */
        .projects-twin-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          max-width: 1440px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .projects-twin-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .p-card {
          background: #070707;
          /* Fixed Default State: Visibly crisp light grey border line, no cloaking */
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          text-decoration: none;
        }
        .p-img-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #111;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .p-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Removed Grayscale: Images are clean, vibrant, and fully visible at default */
          filter: brightness(0.9);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        /* Advanced Hover State Engine */
        .p-card:hover {
          border-color: #CC0000 !important;
          box-shadow: 0 15px 40px rgba(204, 0, 0, 0.15);
          transform: translateY(-4px);
        }
        .p-card:hover .p-img {
          transform: scale(1.03);
          filter: brightness(1.05);
        }
        .p-card:hover .p-title {
          color: #CC0000 !important;
        }
      `}</style>

      <div className="section-label">002 — SELECTED PLATFORM WORKS</div>
      
      <h2 className="split-reveal-projects" style={{ ...SLAB, fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 0.85, color: '#fff', marginBottom: '60px', textTransform: 'uppercase' }}>
        <span className="line-wrapper"><span className="line-span">CASE</span></span>
        <span className="line-wrapper"><span className="line-span" style={{ color: '#CC0000' }}>REPOSITORIES.</span></span>
      </h2>

      <div className="projects-twin-grid">
        {projects.map((p) => (
          <a key={p.id} href={p.link} target="_blank" rel="noopener noreferrer" className="p-card">
            
            <div className="p-img-container">
              <img src={p.img} alt={p.title} className="p-img" onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'}} />
              <div style={{ position: 'absolute', top: '16px', right: '16px', ...MONO, fontSize: '11px', color: '#fff', background: 'rgba(0,0,0,0.75)', padding: '4px 10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                {p.id} / 06
              </div>
            </div>

            <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0A0A0A' }}>
              <div>
                <h3 className="p-title" style={{ ...SLAB, fontSize: 'clamp(28px, 2.5vw, 38px)', color: '#fff', lineHeight: 1, marginBottom: '6px', transition: 'color 0.3s', textTransform: 'uppercase' }}>
                  {p.title}
                </h3>
                <div style={{ ...MONO, fontSize: '11px', letterSpacing: '0.05em', color: '#CC0000', fontWeight: 'bold', marginBottom: '20px' }}>
                  {p.cat}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                {p.tags.map((t) => (
                  <span key={t} style={{ ...MONO, fontSize: '10px', color: 'rgba(240,237,232,0.6)', border: '1px solid rgba(255,255,255,0.12)', padding: '4px 10px', background: 'rgba(255,255,255,0.02)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </a>
        ))}
      </div>
    </section>
  )
}
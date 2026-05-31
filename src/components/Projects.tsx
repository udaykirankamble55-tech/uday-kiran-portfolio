'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const projects = [
  { 
    id: '01', 
    title: 'AMARA APP', 
    cat: 'FASHION COMMERCE EXPERIENCE', 
    tags: ['FIGMA', 'MOBILE UI', 'E-COMMERCE', 'USER FLOWS'], 
    img: 'project-amara.webp', 
    /* FIXED: URL-encoded special characters so Behance resolves the link flawlessly */
    link: 'https://www.behance.net/gallery/242442917/AMARA-Fashion-Commerce-App-Design' 
  },
  { 
    id: '02', 
    title: 'AMARA PROTOTYPE', 
    cat: 'INTERACTIVE FIGMA PROTOTYPE', 
    tags: ['FIGMA PROTOTYPE', 'INTERACTION', 'ANIMATION'], 
    img: 'project-amara2.webp', 
    /* FIXED: URL-encoded special characters */
    link: 'https://www.behance.net/gallery/242443297/AMARA-Interactive-Fashion-Commerce-Prototype' 
  },
  { 
    id: '03', 
    title: 'VRIKOPRO BRANDING', 
    cat: 'CINEMATIC PACKAGING DESIGN', 
    tags: ['ILLUSTRATOR', 'BRAND SYSTEM', 'PACKAGING'], 
    img: '/project-vrikopro.webp', 
    /* ACTION REQUIRED: Replace with your specific Vrikopro case study link below */
    link: 'https://www.behance.net/gallery/247084463/Vrikopro-Fitness-Supplement-Branding-Case-Study' 
  },
  { 
    id: '04', 
    title: 'AI SAAS PLATFORM', 
    cat: 'LANDING PAGE ARCHITECTURE', 
    tags: ['SAAS DESIGN', 'WEB UI', 'COMPONENTS'], 
    img: 'project-saas.webp', 
    /* ACTION REQUIRED: Replace with your specific AI SaaS case study link below */
    link: 'https://www.behance.net/gallery/248945475/AI-SaaS-Landing-Page-UIUX-Concept' 
  },
  { 
    id: '05', 
    title: 'DEFENDER SYSTEM', 
    cat: 'AUTOMOTIVE INTERFACE CONCEPT', 
    tags: ['DASHBOARD UI', 'PROTOTYPING', 'HMI'], 
    img: 'project-defender.webp', 
    /* ACTION REQUIRED: Replace with your specific Defender case study link below */
    link: 'https://www.behance.net/gallery/242402253/DEFENDER-Octa-Black-Interactive-Web-Prototype' 
  },
  { 
    id: '06', 
    title: 'ZESTYY PRODUCT', 
    cat: 'BRAND IDENTITY SYSTEM', 
    tags: ['LOGO DESIGN', 'TYPOGRAPHY', 'STRATEGY'], 
    img: 'project-zestyy.webp', 
    /* ACTION REQUIRED: Replace with your specific Zestyy case study link below */
    link: 'https://www.behance.net/gallery/244617653/Zestyy-Food-Delivery-App-UIUX-Case-Study' 
  }
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
          scrollTrigger: { trigger: title, start: 'top 88%', toggleActions: 'play none none reset' }
        }
      )
    })

    section.querySelectorAll('.p-card').forEach((card) => {
      gsap.fromTo(card, { opacity: 0, y: 30 }, {
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out', 
        scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none reset' }
      })
    })

    const htmlCards = section.querySelectorAll('.p-card') as NodeListOf<HTMLAnchorElement>
    htmlCards.forEach((card) => {
      if (!card) return
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left 
        const y = e.clientY - rect.top  
        const xc = rect.width / 2
        const yc = rect.height / 2
        const dx = (x - xc) / xc
        const dy = (y - yc) / yc

        gsap.to(card, {
          rotateX: -dy * 12,
          rotateY: dx * 12,
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
    <section ref={containerRef} id="repositories" style={{ background: '#000', padding: '100px max(4vw, 20px)' }}>
      <style>{`
        .projects-twin-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          max-width: 1140px; 
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .projects-twin-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .p-card {
          position: relative;
          background: transparent; 
          border-radius: 12px; 
          display: flex;
          flex-direction: column;
          overflow: hidden;
          text-decoration: none;
          transform-style: preserve-3d;
          will-change: transform, box-shadow;
          padding: 1.5px; 
        }

        .p-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent 25%,
            #CC0000 45%,
            #ffffff 50%,
            #CC0000 55%,
            transparent 75%
          );
          animation: autonomousRotate 3s linear infinite;
          animation-play-state: paused;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .p-card::after {
          content: '';
          position: absolute;
          inset: 1.5px;
          background: #0d0d0d; 
          border-radius: 11px;
          z-index: 2;
        }

        .p-card-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          z-index: 3;
          transform: translateZ(40px);
        }

        .p-img-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9.5; 
          overflow: hidden;
          background: transparent; 
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .p-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.9);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .p-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .p-card:hover::before {
          opacity: 1;
          animation-play-state: running;
        }

        .p-card:hover .p-img {
          transform: scale(1.02);
          filter: brightness(1.02);
        }

        .p-card:hover .p-title {
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        }
        
        @keyframes autonomousRotate {
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="section-label" style={{ ...MONO, color: '#CC0000', fontWeight: 600, letterSpacing: '0.2em', marginBottom: '16px' }}>002 — SELECTED PLATFORM WORKS</div>
      
      <h2 className="split-reveal-projects" style={{ ...SLAB, fontSize: 'clamp(48px, 96px)', lineHeight: 0.85, color: '#fff', marginBottom: '44px', textTransform: 'uppercase' }}>
        <span className="line-wrapper"><span className="line-span">CASE</span></span>
        <span className="line-wrapper"><span className="line-span" style={{ color: '#CC0000' }}>REPOSITORIES.</span></span>
      </h2>

      <div className="projects-twin-grid">
        {projects.map((p) => (
          <a 
            key={p.id} 
            href={p.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-card"
          >
            <div className="p-card-content">
              
              <div className="p-img-container">
                <img src={p.img} alt={p.title} className="p-img" onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'}} />
                <div style={{ position: 'absolute', top: '14px', right: '14px', ...MONO, fontSize: '10px', color: '#fff', background: 'rgba(0,0,0,0.8)', padding: '4px 10px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                  {p.id} / 06
                </div>
              </div>

              <div style={{ padding: '24px 22px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'transparent', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                <div>
                  <h3 className="p-title" style={{ ...SLAB, fontSize: 'clamp(24px, 32px)', color: '#ffffff', lineHeight: 1, marginBottom: '6px', transition: 'all 0.3s ease', textTransform: 'uppercase' }}>
                    {p.title}
                  </h3>
                  <div style={{ ...MONO, fontSize: '11px', letterSpacing: '0.05em', color: '#CC0000', fontWeight: 'bold', marginBottom: '16px' }}>
                    {p.cat}
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{ ...MONO, fontSize: '10px', color: 'rgba(240,237,232,0.6)', border: '1px solid rgba(255,255,255,0.12)', padding: '3px 8px', background: 'rgba(255,255,255,0.02)', borderRadius: '2px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
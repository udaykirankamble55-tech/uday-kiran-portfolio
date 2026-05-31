'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Beyond() {
  const ref = useRef<HTMLElement>(null)
  
  useEffect(() => {
    // Reveal handler for labels, paragraphs, blockquotes, and images
    ref.current?.querySelectorAll('.reveal').forEach(el => {
      if (el.tagName === 'H2') return
      
      gsap.fromTo(el, 
        { opacity: 0, y: 60 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.9, 
          ease: 'power3.out', 
          scrollTrigger: { trigger: el, start: 'top 88%' } 
        }
      )
    })

    // Clean Scroll-Triggered masking slide-up animation directly on the original H2
    ref.current?.querySelectorAll('h2.reveal').forEach(h2 => {
      gsap.fromTo(h2, 
        { 
          opacity: 0,
          clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
          y: 30
        }, 
        { 
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          y: 0,
          duration: 1.1, 
          ease: 'power4.out', 
          scrollTrigger: { 
            trigger: h2, 
            start: 'top 88%',
            toggleActions: 'play none none reset'
          } 
        }
      )
    })
  }, [])

  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }
  const BODY: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" }

  return (
    <section ref={ref} id="beyond" style={{ background: '#000', padding: '140px 8vw', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, #CC0000, transparent)' }} />

      {/* MISTAKE 1 FIXED: Cleaned space separator for accurate CSS property assignment */}
      <div className="reveal section-label" style={{ ...MONO, color: '#CC0000', fontWeight: 600, letterSpacing: '0.2em', marginBottom: '16px' }}>006 — BEYOND DESIGN</div>
      
      <h2 className="reveal" style={{ ...SLAB, fontSize: 'clamp(52px, 7vw, 96px)', lineHeight: 0.85, color: '#fff', marginBottom: '60px', textTransform: 'uppercase' }}>
        THE DESIGNER<br /><span style={{ color: '#CC0000' }}>WHO TEACHES.</span>
      </h2>

      <div className="beyond-main-layout">
        
        {/* LEFT COLUMN: Editorial Narrative */}
        <div>
          <p className="reveal" style={{ ...BODY, fontSize: 'clamp(16px, 1.6vw, 20px)', color: 'rgba(240,237,232,0.6)', lineHeight: 1.75, marginBottom: '24px' }}>
            Before I designed digital experiences, I shaped real ones. For 10+ years at <strong style={{ color: '#fff' }}>Celestial Harmony Academy of Music</strong>, I prepared students for <strong style={{ color: '#CC0000' }}>Trinity College London Grade Examinations</strong>.
          </p>
          <p className="reveal" style={{ ...BODY, fontSize: 'clamp(16px, 1.6vw, 20px)', color: 'rgba(240,237,232,0.6)', lineHeight: 1.75, marginBottom: '36px' }}>
            Teaching sharpens everything. <strong style={{ color: '#fff' }}>Patience. Iteration. Reading the room. Giving feedback that actually lands.</strong> Every skill I built in that classroom lives in every design I ship today.
          </p>
          <blockquote className="reveal" style={{ ...BODY, fontSize: 'clamp(18px, 2vw, 24px)', fontStyle: 'italic', color: '#fff', lineHeight: 1.5, borderLeft: '2px solid #CC0000', paddingLeft: '24px', marginBottom: '36px' }}>
            &ldquo;A designer who can teach is a designer who truly understands — you can only explain what you fully own.&rdquo;
          </blockquote>
        </div>

        {/* RIGHT COLUMN: Cinematic Self-Adjusting Photo Grid Ecosystem */}
        <div className="reveal collage-wrapper">
          <div className="cinematic-grid">
            
            {/* Row 1: Top Wide Banner */}
            <div className="grid-item item-top">
              <img src="beyond-1.jpeg" alt="Students with Examiner" className="collage-img" />
              <div className="img-overlay" />
            </div>

            {/* Row 2 / Col 1: Bottom Left Image */}
            <div className="grid-item item-bottom-left">
              <img src="beyond-2.jpeg" alt="Celestial Harmony Academy Venue" className="collage-img" />
              <div className="img-overlay" />
            </div>

            {/* Row 2 / Col 2: Bottom Right Image */}
            <div className="grid-item item-bottom-right">
              <img src="beyond-3.jpeg" alt="Trinity Grade Examination Assessment" className="collage-img" />
              <div className="img-overlay" />
            </div>

          </div>
          
          {/* CURATED CAPTION: Bold typographic breakdown layout */}
          <div style={{ 
            ...MONO, 
            fontSize: 'clamp(11px, 1.2vw, 13px)', 
            fontWeight: 700, 
            letterSpacing: '0.18em', 
            color: '#fff', 
            textTransform: 'uppercase', 
            padding: '20px 0 0 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div>
              <span style={{ color: '#CC0000' }}>LIVE ASSESSMENT //</span> TRINITY COLLEGE LONDON GRADE EXAMINATIONS
            </div>
            <div style={{ color: 'rgba(240,237,232,0.4)', fontSize: 'clamp(9px, 1vw, 11px)', fontWeight: 500, letterSpacing: '0.12em' }}>
              CELESTIAL HARMONY STUDENTS POSING WITH THE OFFICIAL EXAMINATION BOARD REPRESENTATIVE.
            </div>
          </div>
        </div>

      </div>

      {/* COMPONENT ENGINES & ACTIONS */}
      <style>{`
        .beyond-main-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (min-width: 992px) {
          .beyond-main-layout {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 80px;
          }
        }

        .collage-wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* Fixed framework prevents fluid updates from bumping layout boundaries */
        .cinematic-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr 0.8fr;
          gap: 6px;
          height: 380px;
          width: 100%;
          transition: grid-template-rows 0.6s cubic-bezier(0.25, 1, 0.5, 1), 
                      grid-template-columns 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: grid-template-rows, grid-template-columns;
        }

        .grid-item {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        .item-top {
          grid-column: span 2;
        }

        .collage-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(40%) brightness(0.65);
          transition: filter 0.6s ease, transform 0.6s ease;
          will-change: filter, transform;
        }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%);
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        /* --- STRETCH RESPONSIVE LOGIC via NATIVE INTERACTION --- */
        
        /* Top Banner Hover */
        .cinematic-grid:has(.item-top:hover) {
          grid-template-rows: 1.4fr 0.4fr;
        }

        /* Bottom Row Hover Base */
        .cinematic-grid:has(.item-bottom-left:hover),
        .cinematic-grid:has(.item-bottom-right:hover) {
          grid-template-rows: 0.6fr 1.2fr;
        }

        /* Left-to-Right Priority Shift */
        .cinematic-grid:has(.item-bottom-left:hover) {
          grid-template-columns: 1.3fr 0.7fr;
        }

        /* Right-to-Left Priority Shift */
        .cinematic-grid:has(.item-bottom-right:hover) {
          grid-template-columns: 0.7fr 1.3fr;
        }

        /* Vivid Highlight Reveal */
        .grid-item:hover .collage-img {
          filter: grayscale(0%) brightness(0.95);
          transform: scale(1.03);
        }
      `}</style>
    </section>
  )
}
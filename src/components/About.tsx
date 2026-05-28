'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const AVATAR_STANCES = [
  'avatar-base.webp',
  'avatar-pockets.webp',
  'avatar-tilt.webp',
  'avatar-arms.webp',
  'avatar-flex.webp',
  'avatar-glasses.webp'
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    ScrollTrigger.getAll().forEach(t => { if(t.trigger === section) t.kill() })

    // Revived dynamic looping image sequence
    const slides = bgContainerRef.current?.querySelectorAll('.bg-avatar-slide')
    if (slides && slides.length > 0) {
      const loopTimeline = gsap.timeline({ repeat: -1 })
      slides.forEach((slide, idx) => {
        const nextIdx = (idx + 1) % slides.length
        loopTimeline
          .to(slide, { opacity: 0.15, scale: 1.04, duration: 2.5, ease: 'power1.inOut' })
          .to(slide, { opacity: 0, scale: 1.08, duration: 1.0, ease: 'power1.inOut' }, '+=1.5')
          .fromTo(slides[nextIdx], { opacity: 0, scale: 1.0 }, { opacity: 0.15, scale: 1.04, duration: 1.0, ease: 'power1.inOut' }, '-=1.0')
      })
    }

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
  const BODY: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" }

  return (
    <section ref={sectionRef} id="about" style={{ background: '#000', position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Restored Avatar Image Layers on the Right Side */}
      <div ref={bgContainerRef} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '45%', zIndex: 1 }}>
        {AVATAR_STANCES.map((src, idx) => (
          <img key={idx} className="bg-avatar-slide" src={src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', opacity: 0, filter: 'grayscale(100%) brightness(0.4) contrast(1.2)', pointerEvents: 'none' }} />
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.4) 30%, transparent 100%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, padding: '4vh max(4vw, 20px)', width: '100%' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Swapped to use your exact global .section-label typography and rules */}
          <div className="section-label">001 — ABOUT ME</div>
          
          <h2 className="split-reveal" style={{ ...SLAB, fontSize: 'clamp(46px, 6.5vw, 88px)', lineHeight: 0.9, color: '#fff', textTransform: 'uppercase', marginBottom: '28px' }}>
            <span className="line-wrapper"><span className="line-span">BUILT IN</span></span>
            <span className="line-wrapper"><span className="line-span" style={{ color: '#CC0000' }}>HYDERABAD.</span></span>
            <span className="line-wrapper"><span className="line-span">DESIGNED FOR THE WORLD.</span></span>
          </h2>

          <div style={{ maxWidth: '60%' }}>
            <p style={{ ...BODY, fontSize: 'clamp(17px, 1.4vw, 21px)', color: 'rgba(240,237,232,0.8)', lineHeight: 1.6, marginBottom: '18px' }}>
              I&apos;m <strong style={{ color: '#fff' }}>Uday Kiran Kamble</strong> — UI/UX and Brand Designer from Hyderabad with deep Marathi roots. I operate on design-first execution principles, combining a sharp creative eye with a highly refined technical workflow.
            </p>
            <p style={{ ...BODY, fontSize: 'clamp(17px, 1.4vw, 21px)', color: 'rgba(240,237,232,0.8)', lineHeight: 1.6, marginBottom: '18px' }}>
              Recently completed an intensive, industry-level UI/UX and Graphic Design architecture track at <strong style={{ color: '#fff' }}>Arrow Multimedia, Ameerpet</strong>. Every single piece of work built during this cycle was deployed directly to Behance as a live, fully integrated platform case study.
            </p>
            <p style={{ ...BODY, fontSize: 'clamp(17px, 1.4vw, 21px)', color: 'rgba(240,237,232,0.8)', lineHeight: 1.6 }}>
              I harness advanced AI frameworks as <strong style={{ color: '#fff' }}>creative acceleration</strong> — deploying Claude, ChatGPT, Gemini, and Canva AI not as an easy shortcut, but as a powerful force multiplier for deeper design thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
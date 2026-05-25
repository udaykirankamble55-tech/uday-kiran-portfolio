'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    num: '01',
    title: 'UI/UX DESIGN',
    tools: [
      'FIGMA',
      'ADOBE XD',
      'WIREFRAMING',
      'PROTOTYPING',
      'USER FLOWS',
      'VISUAL HIERARCHY'
    ]
  },
  {
    num: '02',
    title: 'BRAND & VISUAL',
    tools: [
      'PHOTOSHOP',
      'ILLUSTRATOR',
      'CANVA',
      'LOGO DESIGN',
      'PACKAGING',
      'PRINT DESIGN'
    ]
  },
  {
    num: '03',
    title: 'AI WORKFLOW',
    tools: [
      'CLAUDE',
      'CHATGPT',
      'GEMINI',
      'CANVA AI',
      'LOVABLE',
      'STITCH AI'
    ]
  },
  {
    num: '04',
    title: 'LAYOUT & TYPE',
    tools: [
      'GRID SYSTEMS',
      'TYPOGRAPHY',
      'SPACING',
      'CONTRAST',
      'SOCIAL CREATIVES'
    ]
  },
  {
    num: '05',
    title: 'WEB & SAAS',
    tools: [
      'LANDING PAGES',
      'SAAS UI',
      'HTML/CSS BASICS',
      'VIBE CODING',
      'CONVERSION UX'
    ]
  },
  {
    num: '06',
    title: 'DESIGN THINKING',
    tools: [
      'UX STRATEGY',
      'CASE STUDIES',
      'USER RESEARCH',
      'SALES & MARKETING'
    ]
  }
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    ref.current?.querySelectorAll('.sk-card').forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: (i % 3) * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%'
          }
        }
      )

      card.addEventListener('mousemove', (e) => {
        const ev = e as MouseEvent
        const r = (card as HTMLElement).getBoundingClientRect()

        const x = (ev.clientX - r.left) / r.width - 0.5
        const y = (ev.clientY - r.top) / r.height - 0.5

        ;(card as HTMLElement).style.transform =
          `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-6px)`
      })

      card.addEventListener('mouseleave', () => {
        ;(card as HTMLElement).style.transform =
          'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)'
      })
    })

    ref.current?.querySelectorAll('.reveal').forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%'
          }
        }
      )
    })
  }, [])

  const SLAB: React.CSSProperties = {
    fontFamily: "'Bebas Neue', sans-serif"
  }

  const MONO: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace"
  }

  return (
    <section
      ref={ref}
      id="skills"
      style={{
        background: '#080808',
        padding: '140px 8vw',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, #CC0000, transparent)'
        }}
      />

      <div
        className="reveal section-label"
        style={{
          fontSize: '13px',
          letterSpacing: '0.35em',
          color: 'rgba(204,0,0,0.75)',
          marginBottom: '22px'
        }}
      >
        002 — SKILLS
      </div>

      <h2
        className="reveal"
        style={{
          ...SLAB,
          fontSize: 'clamp(52px, 8vw, 110px)',
          lineHeight: 0.85,
          color: '#fff',
          textTransform: 'uppercase',
          marginBottom: '12px'
        }}
      >
        THE TOOLS OF
        <br />
        <span
          style={{
            color: '#CC0000',
            WebkitTextStroke: '1px #CC0000'
          }}
        >
          PRECISION.
        </span>
      </h2>

      <p
        className="reveal"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(15px, 1.5vw, 18px)',
          color: 'rgba(240,237,232,0.4)',
          marginBottom: '70px',
          maxWidth: '500px',
          letterSpacing: '0.04em'
        }}
      >
        Every tool in the stack. Every pixel has a reason.
        Every decision has a system.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}
      >
        {skills.map((sk) => (
          <div
            key={sk.num}
            className="sk-card"
            style={{
              background:
                'linear-gradient(180deg, rgba(16,16,16,0.98), rgba(8,8,8,1))',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '42px 36px',
              cursor: 'none',
              opacity: 0,
              transition: 'all 0.45s cubic-bezier(0.22,1,0.36,1)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.03), 0 0 0 1px rgba(255,255,255,0.02), 0 25px 50px rgba(0,0,0,0.45), 0 0 30px rgba(255,255,255,0.015)'
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement

              el.style.borderColor = 'rgba(204,0,0,0.16)'

              el.style.background =
                'linear-gradient(180deg, rgba(28,28,28,1), rgba(14,14,14,1))'

              el.style.boxShadow =
                'inset 0 1px 0 rgba(255,255,255,0.05), 0 0 0 1px rgba(204,0,0,0.16), 0 35px 80px rgba(0,0,0,0.6), 0 0 40px rgba(204,0,0,0.08)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement

              el.style.borderColor = 'rgba(255,255,255,0.06)'

              el.style.background =
                'linear-gradient(180deg, rgba(16,16,16,0.98), rgba(8,8,8,1))'

              el.style.boxShadow =
                'inset 0 1px 0 rgba(255,255,255,0.03), 0 0 0 1px rgba(255,255,255,0.02), 0 25px 50px rgba(0,0,0,0.45), 0 0 30px rgba(255,255,255,0.015)'
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at top right, rgba(255,255,255,0.035), transparent 45%)',
                pointerEvents: 'none',
                mixBlendMode: 'screen'
              }}
            />

            <div
              style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(204,0,0,0.08), transparent 70%)',
                top: '-120px',
                right: '-120px',
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                ...MONO,
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'rgba(204,0,0,0.55)',
                marginBottom: '30px'
              }}
            >
              {sk.num}
            </div>

            <div
              style={{
                ...SLAB,
                fontSize: 'clamp(26px, 2.5vw, 34px)',
                color: '#fff',
                letterSpacing: '0.05em',
                marginBottom: '24px',
                textTransform: 'uppercase',
                lineHeight: 0.92,
                fontWeight: 400
              }}
            >
              {sk.title}
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              {sk.tools.map((t) => (
                <span
                  key={t}
                  style={{
                    ...MONO,
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    color: 'rgba(240,237,232,0.58)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '6px 11px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255,255,255,0.025)'
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement

                    el.style.color = '#fff'
                    el.style.borderColor = 'rgba(204,0,0,0.7)'
                    el.style.background = 'rgba(204,0,0,0.12)'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement

                    el.style.color = 'rgba(240,237,232,0.58)'
                    el.style.borderColor = 'rgba(255,255,255,0.06)'
                    el.style.background = 'rgba(255,255,255,0.025)'
                    el.style.transform = 'translateY(0px)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
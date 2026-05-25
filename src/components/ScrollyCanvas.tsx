'use client'
import { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const FRAME_COUNT = 120
const FRAME_PATH = (i: number) => {
  const num = String(i).padStart(3, '0')
  // Try both 0.06s and 0.07s delays
  return `/sequence/frame_${num}_delay-0.07s.gif`
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const frameRef = useRef(0)
  const loadedRef = useRef(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.28], [1, 1, 0])
  const text1Y = useTransform(scrollYProgress, [0, 0.28], [0, -60])
  const text2Opacity = useTransform(scrollYProgress, [0.28, 0.38, 0.55], [0, 1, 0])
  const text2X = useTransform(scrollYProgress, [0.28, 0.38], [-60, 0])
  const text3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.82], [0, 1, 0])
  const text3X = useTransform(scrollYProgress, [0.55, 0.65], [60, 0])
  const ctaOpacity = useTransform(scrollYProgress, [0.82, 0.92], [0, 1])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (imagesRef.current[frameRef.current]) {
        drawFrame(frameRef.current)
      }
    }
    resize()
    window.addEventListener('resize', resize)

    const drawFrame = (index: number) => {
      const img = imagesRef.current[index]
      if (!img || !img.complete || !img.naturalWidth) return
      const c = canvasRef.current
      if (!c) return
      const cx = c.getContext('2d')
      if (!cx) return
      cx.clearRect(0, 0, c.width, c.height)
      // Cover fill
      const scale = Math.max(c.width / img.naturalWidth, c.height / img.naturalHeight)
      const w = img.naturalWidth * scale
      const h = img.naturalHeight * scale
      const x = (c.width - w) / 2
      const y = (c.height - h) / 2
      cx.drawImage(img, x, y, w, h)
      // Dark vignette overlay
      const grad = cx.createRadialGradient(c.width/2, c.height/2, c.height*0.2, c.width/2, c.height/2, c.height*0.85)
      grad.addColorStop(0, 'rgba(0,0,0,0)')
      grad.addColorStop(1, 'rgba(0,0,0,0.75)')
      cx.fillStyle = grad
      cx.fillRect(0, 0, c.width, c.height)
    }

    // Preload all frames
    const loadAll = async () => {
      const imgs: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null)
      
      // Load first frame immediately for fast display
      const first = new Image()
      first.onload = () => {
        imgs[0] = first
        imagesRef.current = imgs
        drawFrame(0)
        loadedRef.current = true
      }
      first.onerror = () => {
        // Try alternate naming with 0.06s
        const alt = new Image()
        alt.src = `/sequence/frame_000_delay-0.06s.gif`
        alt.onload = () => { imgs[0] = alt; imagesRef.current = imgs; drawFrame(0); loadedRef.current = true }
      }
      first.src = FRAME_PATH(0)

      // Load rest in background
      for (let i = 1; i < FRAME_COUNT; i++) {
        const img = new Image()
        const idx = i
        img.onload = () => { imgs[idx] = img; imagesRef.current = imgs }
        img.onerror = () => {
          // Try 0.06s variant
          const alt = new Image()
          alt.src = `/sequence/frame_${String(idx).padStart(3,'0')}_delay-0.06s.gif`
          alt.onload = () => { imgs[idx] = alt; imagesRef.current = imgs }
        }
        img.src = FRAME_PATH(i)
      }
    }

    loadAll()

    const unsub = scrollYProgress.on('change', (v) => {
      const idx = Math.min(Math.floor(v * (FRAME_COUNT - 1)), FRAME_COUNT - 1)
      if (idx !== frameRef.current) {
        frameRef.current = idx
        drawFrame(idx)
      }
    })

    return () => { unsub(); window.removeEventListener('resize', resize) }
  }, [scrollYProgress])

  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }
  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', 'Oswald', sans-serif" }

  return (
    <div ref={containerRef} id="hero" style={{ height: '550vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', background: '#000' }}>
        
        {/* Canvas */}
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'block', width: '100%', height: '100%' }} />

        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to bottom, transparent, #000)', zIndex: 3, pointerEvents: 'none' }} />
        {/* Top fade */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '20%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)', zIndex: 3, pointerEvents: 'none' }} />

        {/* RED SCAN LINE */}
        <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #CC0000, transparent)', zIndex: 4, top: '50%', opacity: 0.3, pointerEvents: 'none' }} />

        {/* TEXT 1 — HERO NAME */}
        <motion.div style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8vw 12vh', opacity: text1Opacity, y: text1Y, pointerEvents: 'none' }}>
          <div style={{ ...MONO, fontSize: '11px', letterSpacing: '0.5em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '1px', background: '#CC0000', display: 'inline-block' }} />
            AVAILABLE FOR OPPORTUNITIES
          </div>
          <div style={{ ...SLAB, fontSize: 'clamp(72px, 12vw, 160px)', lineHeight: 0.85, color: '#fff', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            UDAY<br />
            <span style={{ color: '#CC0000', WebkitTextStroke: '0px', textShadow: '0 0 80px rgba(204,0,0,0.5)' }}>KIRAN</span>
          </div>
          <div style={{ ...MONO, fontSize: 'clamp(10px, 1.1vw, 13px)', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)', marginTop: '20px' }}>
            UI/UX DESIGNER &nbsp;/&nbsp; BRAND & VISUAL &nbsp;/&nbsp; HYDERABAD
          </div>
          <div style={{ marginTop: '12px', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(16px, 1.8vw, 22px)', fontWeight: 400, color: 'rgba(240,237,232,0.35)', fontStyle: 'italic', letterSpacing: '0.05em' }}>
            I don&apos;t design screens. I design decisions.
          </div>
        </motion.div>

        {/* TEXT 2 — PHILOSOPHY LEFT */}
        <motion.div style={{ position: 'absolute', top: '50%', left: '8vw', transform: 'translateY(-50%)', zIndex: 10, opacity: text2Opacity, x: text2X, pointerEvents: 'none', maxWidth: '38vw', overflow: 'visible' }}>
          <div style={{ ...MONO, fontSize: '9px', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '20px' }}>DESIGN PHILOSOPHY</div>
          <div style={{ ...SLAB, fontSize: 'clamp(28px, 4vw, 58px)', lineHeight: 0.88, color: '#fff', textTransform: 'uppercase' }}>
            PIXELS<br />WITH<br /><span style={{ color: '#CC0000' }}>PURPOSE.</span><br />SILENCE<br />THAT<br /><span style={{ color: '#CC0000' }}>SELLS.</span>
          </div>
          <div style={{ width: '60px', height: '2px', background: '#CC0000', marginTop: '24px' }} />
        </motion.div>

        {/* TEXT 3 — POWER RIGHT */}
        <motion.div style={{ position: 'absolute', top: '50%', right: '8vw', transform: 'translateY(-50%)', zIndex: 10, opacity: text3Opacity, x: text3X, pointerEvents: 'none', maxWidth: '38vw', overflow: 'visible', textAlign: 'right' }}>
          <div style={{ ...MONO, fontSize: '9px', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '20px' }}>THE APPROACH</div>
          <div style={{ ...SLAB, fontSize: 'clamp(28px, 4vw, 58px)', lineHeight: 0.88, color: '#fff', textTransform: 'uppercase' }}>
            I DON&apos;T<br />DECORATE<br /><span style={{ color: '#CC0000' }}>SCREENS.</span><br />I DESIGN<br /><span style={{ color: '#CC0000' }}>DECISIONS.</span>
          </div>
          <div style={{ width: '60px', height: '2px', background: '#CC0000', marginTop: '24px', marginLeft: 'auto' }} />
        </motion.div>

        {/* TEXT 4 — SCROLL CTA */}
        <motion.div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, opacity: ctaOpacity, pointerEvents: 'none', textAlign: 'center' }}>
          <div style={{ ...MONO, fontSize: '9px', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'rgba(204,0,0,0.7)', marginBottom: '10px' }}>SCROLL TO EXPLORE</div>
          <div className="scroll-pulse" style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, #CC0000, transparent)', margin: '0 auto' }} />
        </motion.div>

        {/* CORNER LABELS */}
        <div style={{ position: 'absolute', bottom: '32px', left: '8vw', zIndex: 10, ...MONO, fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(240,237,232,0.2)' }}>PORTFOLIO 2026</div>
        <div style={{ position: 'absolute', bottom: '32px', right: '8vw', zIndex: 10, ...MONO, fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(240,237,232,0.2)' }}>HYD / IN</div>
      </div>
    </div>
  )
}

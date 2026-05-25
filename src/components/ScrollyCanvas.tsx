'use client'
import { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const FRAME_COUNT = 112

const FRAME_PATH = (i: number) => {
  const num = String(i).padStart(3, '0')
  return `/sequence/frame_${num}.webp`
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const frameRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  /* TEXT ANIMATIONS */

  const text1Opacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.26],
    [1, 1, 0]
  )

  const text1Y = useTransform(
    scrollYProgress,
    [0, 0.26],
    [0, -50]
  )

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.24, 0.36, 0.52],
    [0, 1, 0]
  )

  const text2X = useTransform(
    scrollYProgress,
    [0.24, 0.36],
    [-60, 0]
  )

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.52, 0.66, 0.82],
    [0, 1, 0]
  )

  const text3X = useTransform(
    scrollYProgress,
    [0.52, 0.66],
    [60, 0]
  )

  const ctaOpacity = useTransform(
    scrollYProgress,
    [0.84, 0.94],
    [0, 1]
  )

  /* SUBTLE IDLE MOTION */

  const canvasScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.03]
  )

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

      const scale = Math.max(
        c.width / img.naturalWidth,
        c.height / img.naturalHeight
      )

      const w = img.naturalWidth * scale
      const h = img.naturalHeight * scale

      const x = (c.width - w) / 2
      const y = (c.height - h) / 2

      cx.drawImage(img, x, y, w, h)

      /* VIGNETTE */

      const grad = cx.createRadialGradient(
        c.width / 2,
        c.height / 2,
        c.height * 0.18,
        c.width / 2,
        c.height / 2,
        c.height * 0.85
      )

      grad.addColorStop(0, 'rgba(0,0,0,0)')
      grad.addColorStop(1, 'rgba(0,0,0,0.82)')

      cx.fillStyle = grad
      cx.fillRect(0, 0, c.width, c.height)
    }

    /* PRELOAD */

    const imgs: (HTMLImageElement | null)[] =
      new Array(FRAME_COUNT).fill(null)

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()

      img.src = FRAME_PATH(i)

      img.onload = () => {
        imgs[i] = img
        imagesRef.current = imgs

        if (i === 0) {
          drawFrame(0)
        }
      }
    }

    /* SCROLL UPDATE */

    const unsub = scrollYProgress.on('change', (v) => {
      const targetFrame = Math.min(
        Math.floor(v * (FRAME_COUNT - 1)),
        FRAME_COUNT - 1
      )

      if (targetFrame !== frameRef.current) {
        frameRef.current = targetFrame

        requestAnimationFrame(() => {
          drawFrame(targetFrame)
        })
      }
    })

    return () => {
      unsub()
      window.removeEventListener('resize', resize)
    }
  }, [scrollYProgress])

  const MONO: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace"
  }

  const SLAB: React.CSSProperties = {
    fontFamily: "'Bebas Neue', sans-serif"
  }

  const BODY: React.CSSProperties = {
    fontFamily: "'Barlow Condensed', sans-serif"
  }

  return (
    <div
      ref={containerRef}
      id="hero"
      style={{
        height: '420vh',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          background: '#000'
        }}
      >

        {/* CANVAS */}

        <motion.canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            width: '100%',
            height: '100%',
            scale: canvasScale
          }}
        />

        {/* TOP FADE */}

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '22%',
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        />

        {/* BOTTOM FADE */}

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '42%',
            background:
              'linear-gradient(to bottom, transparent, #000)',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        />

        {/* RED SCAN LINE */}

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, #CC0000, transparent)',
            opacity: 0.25,
            zIndex: 4
          }}
        />

        {/* TEXT 1 */}

        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '0 8vw 12vh',
            opacity: text1Opacity,
            y: text1Y
          }}
        >
          <div
            style={{
              ...MONO,
              fontSize: '11px',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: '#CC0000',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <span
              style={{
                width: '32px',
                height: '1px',
                background: '#CC0000',
                display: 'inline-block'
              }}
            />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <div
            style={{
              ...SLAB,
              fontSize: 'clamp(72px, 12vw, 160px)',
              lineHeight: 0.85,
              color: '#fff',
              textTransform: 'uppercase'
            }}
          >
            UDAY
            <br />
            <span
              style={{
                color: '#CC0000',
                textShadow: '0 0 80px rgba(204,0,0,0.45)'
              }}
            >
              KIRAN
            </span>
          </div>

          <div
            style={{
              ...MONO,
              fontSize: 'clamp(10px, 1vw, 13px)',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(240,237,232,0.45)',
              marginTop: '20px'
            }}
          >
            UI/UX DESIGNER / BRAND & VISUAL / HYDERABAD
          </div>

          <div
            style={{
              ...BODY,
              fontSize: 'clamp(16px, 1.8vw, 22px)',
              color: 'rgba(240,237,232,0.34)',
              fontStyle: 'italic',
              marginTop: '12px'
            }}
          >
            I don&apos;t design screens. I design decisions.
          </div>
        </motion.div>

        {/* TEXT 2 */}

        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '8vw',
            transform: 'translateY(-50%)',
            zIndex: 10,
            opacity: text2Opacity,
            x: text2X,
            maxWidth: '38vw'
          }}
        >
          <div
            style={{
              ...MONO,
              fontSize: '9px',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: '#CC0000',
              marginBottom: '20px'
            }}
          >
            DESIGN PHILOSOPHY
          </div>

          <div
            style={{
              ...SLAB,
              fontSize: 'clamp(28px, 4vw, 58px)',
              lineHeight: 0.88,
              color: '#fff',
              textTransform: 'uppercase'
            }}
          >
            PIXELS
            <br />
            WITH
            <br />
            <span style={{ color: '#CC0000' }}>
              PURPOSE.
            </span>
            <br />
            SILENCE
            <br />
            THAT
            <br />
            <span style={{ color: '#CC0000' }}>
              SELLS.
            </span>
          </div>
        </motion.div>

        {/* TEXT 3 */}

        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            right: '8vw',
            transform: 'translateY(-50%)',
            zIndex: 10,
            opacity: text3Opacity,
            x: text3X,
            maxWidth: '38vw',
            textAlign: 'right'
          }}
        >
          <div
            style={{
              ...MONO,
              fontSize: '9px',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: '#CC0000',
              marginBottom: '20px'
            }}
          >
            THE APPROACH
          </div>

          <div
            style={{
              ...SLAB,
              fontSize: 'clamp(28px, 4vw, 58px)',
              lineHeight: 0.88,
              color: '#fff',
              textTransform: 'uppercase'
            }}
          >
            I DON&apos;T
            <br />
            DECORATE
            <br />
            <span style={{ color: '#CC0000' }}>
              SCREENS.
            </span>
            <br />
            I DESIGN
            <br />
            <span style={{ color: '#CC0000' }}>
              DECISIONS.
            </span>
          </div>
        </motion.div>

        {/* CTA */}

        <motion.div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            opacity: ctaOpacity,
            textAlign: 'center'
          }}
        >
          <div
            style={{
              ...MONO,
              fontSize: '9px',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: 'rgba(204,0,0,0.75)',
              marginBottom: '10px'
            }}
          >
            SCROLL TO EXPLORE
          </div>

          <div
            style={{
              width: '1px',
              height: '48px',
              margin: '0 auto',
              background:
                'linear-gradient(to bottom, #CC0000, transparent)'
            }}
          />
        </motion.div>

      </div>
    </div>
  )
}
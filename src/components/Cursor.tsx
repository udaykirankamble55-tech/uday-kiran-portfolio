'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Hidden initially to prevent a sudden visual pop on load
    gsap.set(cursor, { opacity: 0, scale: 1 })

    // 1. Smoothly track cursor coordinates
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
        overwrite: 'auto'
      })
      gsap.to(cursor, { opacity: 1, duration: 0.2 })
    }

    // 2. Dynamic Hover Handler (Handles any current or future buttons seamlessly)
    const handleMouseOver = (e: MouseEvent) => {
      // Find closest interactive element if hovering child elements
      const target = (e.target as HTMLElement).closest('.nav-link, .nav-cta, .social-icon, .project-card-trigger, .mag') as HTMLElement
      
      if (!target) {
        // If we aren't hovering an interactive item, keep cursor at standard size
        gsap.to(cursor, {
          width: '8px',
          height: '8px',
          scale: 1,
          borderRadius: '50%',
          backgroundColor: '#CC0000',
          borderColor: 'transparent',
          mixBlendMode: 'normal',
          duration: 0.3,
          ease: 'power2.out'
        })
        return
      }

      // If it's a prominent main CTA button, dynamically frame it magnetically
      if (target.classList.contains('nav-cta')) {
        const rect = target.getBoundingClientRect()
        gsap.to(cursor, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width + 12,
          height: rect.height + 12,
          borderRadius: '4px',
          backgroundColor: 'rgba(204, 0, 0, 0.1)',
          borderColor: '#CC0000',
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      } else {
        // Expand/invert cursor for text links and simple icons
        gsap.to(cursor, {
          scale: 2.5,
          backgroundColor: '#CC0000',
          borderColor: 'transparent',
          mixBlendMode: 'difference',
          duration: 0.2,
          overwrite: 'auto'
        })
      }
    }

    // Bind global listeners to window
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    // Perfectly clean up memory allocations when unmounting
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <style>{`
        body {
          cursor: none !important;
        }
        a, button, select, input, .mag, .nav-cta {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#CC0000',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          border: '1px solid transparent',
          transition: 'background-color 0.2s, border-color 0.2s',
        }}
      />
    </>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const leaderRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const leader = leaderRef.current
    const dotsContainer = dotsRef.current
    if (!leader || !dotsContainer) return

    const totalDots = 18 
    const dots: HTMLDivElement[] = []
    
    // Generate trails with cascading physical properties
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('div')
      const size = 14 * Math.pow(0.84, i)
      
      Object.assign(dot.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#CC0000',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9998',
        opacity: `${1.0 - (i * 0.055)}`,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
        // Injecting an organic cosmic heat blur to prevent trail breakages
        filter: i > 2 ? `blur(${i * 0.35}px)` : 'none',
        boxShadow: i < 4 ? '0 0 12px #CC0000' : 'none'
      })
      dotsContainer.appendChild(dot)
      dots.push(dot)
    }

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const leaderPos = { x: mouse.x, y: mouse.y }
    const dotPositions = Array.from({ length: totalDots }, () => ({ x: mouse.x, y: mouse.y }))
    
    let lastMouseX = mouse.x
    let lastMouseY = mouse.y
    let globalVelocity = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    // Handles window-switching without dropping animations
    const handleWindowState = () => {
      mouse.x = window.innerWidth / 2
      mouse.y = window.innerHeight / 2
      gsap.getTweensOf(leader).forEach(t => t.kill())
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseenter', handleWindowState)
    window.addEventListener('visibilitychange', handleWindowState)

    const ticker = gsap.ticker.add(() => {
      // Calculate continuous positional velocity independent of active user inputs
      const dx = mouse.x - lastMouseX
      const dy = mouse.y - lastMouseY
      const targetVelocity = Math.sqrt(dx * dx + dy * dy)
      globalVelocity += (targetVelocity - globalVelocity) * 0.1

      lastMouseX = mouse.x
      lastMouseY = mouse.y

      leaderPos.x += (mouse.x - leaderPos.x) * 0.35
      leaderPos.y += (mouse.y - leaderPos.y) * 0.35
      gsap.set(leader, { x: leaderPos.x, y: leaderPos.y })

      let prevX = leaderPos.x
      let prevY = leaderPos.y

      dotPositions.forEach((pos, i) => {
        // Dynamic follow tracking expands and compresses based on cursor speed
        const followSpeed = 0.45 - (i * 0.012) + (Math.min(globalVelocity, 40) * 0.002)
        pos.x += (prevX - pos.x) * followSpeed
        pos.y += (prevY - pos.y) * followSpeed
        
        // Keeps tail elements structured and thick even when holding completely still
        const restScale = 1 + (Math.min(globalVelocity, 50) * 0.015)
        
        gsap.set(dots[i], { 
          x: pos.x, 
          y: pos.y,
          scale: restScale
        })
        
        prevX = pos.x
        prevY = pos.y
      })
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseenter', handleWindowState)
      window.removeEventListener('visibilitychange', handleWindowState)
      dotsContainer.innerHTML = ''
      gsap.ticker.remove(ticker)
    }
  }, [])

  return (
    <>
      <style>{`
        body, a, button, select, input, .mag, .p-card, .sk-card, .stat-card {
          cursor: none !important;
        }
      `}</style>
      {/* Hyper-realistic White-Hot Core Plasma Gradient Comet Head */}
      <div
        ref={leaderRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '14px',
          height: '14px',
          background: 'radial-gradient(circle, #FFFFFF 0%, #FF3333 45%, #CC0000 100%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          boxShadow: '0 0 20px #FF3333, 0 0 40px #CC0000',
        }}
      />
      <div ref={dotsRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998 }} />
    </>
  )
}
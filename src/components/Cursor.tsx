'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY
      cursor.style.transform = `translate(${mx - 4}px,${my - 4}px)`
    })

    const animRing = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      ring.style.transform = `translate(${rx - 16}px,${ry - 16}px)`
      requestAnimationFrame(animRing)
    }
    animRing()

    const hoverEls = document.querySelectorAll('a, button, .mag-btn')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovered'))
      el.addEventListener('mouseleave', () => ring.classList.remove('hovered'))
    })
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  )
}

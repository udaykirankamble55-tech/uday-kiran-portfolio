'use client'
import { useEffect } from 'react'
import Cursor from '@/components/Cursor'
import Intro from '@/components/Intro'
import Nav from '@/components/Nav'
import ScrollyCanvas from '@/components/ScrollyCanvas'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Beyond from '@/components/Beyond'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'

export default function Home() {
  useEffect(() => {
    // Lenis smooth scroll
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }
    initLenis()
  }, [])

  return (
    <main>
      <Cursor />
      <Intro />
      <Nav />
      <ScrollyCanvas />
      <Marquee direction="left" />
      <About />
      <Skills />
      <Marquee direction="right" />
      <Projects />
      <Experience />
      <Beyond />
      <Contact />
      <Footer />
    </main>
  )
}
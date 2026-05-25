'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Nav() {

  const navRef = useRef<HTMLElement>(null)

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    gsap.to(navRef.current, {
      opacity: 1,
      duration: 0.8,
      delay: 3.6
    })

    const onScroll = () => setScrolled(window.scrollY > 80)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)

  }, [])

  const linkStyle: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace",
    fontSize: '11px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: scrolled
      ? 'rgba(240,237,232,0.6)'
      : 'rgba(240,237,232,0.7)',
    textDecoration: 'none',
    position: 'relative',
    paddingBottom: '4px',
    transition: 'color 0.3s',
  }

  return (
    <>
      <style>{`

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #CC0000;
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: #fff !important;
        }

        .nav-cta {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
          padding: 10px 24px;
          border: 1px solid #CC0000;
          background: transparent;
          transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
          cursor: none;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .nav-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #CC0000;
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          z-index: -1;
        }

        .nav-cta:hover::before {
          transform: translateX(0);
        }

        .nav-cta:hover {
          box-shadow: 0 0 30px rgba(204,0,0,0.4);
        }

        .social-icon {
          color: rgba(240,237,232,0.4);
          transition: color 0.3s;
          cursor: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon:hover {
          color: #CC0000;
        }

        /* =========================
           HAMBURGER BUTTON
        ========================= */

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          z-index: 1200;
        }

        .mobile-menu-btn span {
          width: 24px;
          height: 1.5px;
          background: #fff;
          transition: all 0.3s ease;
        }

        /* =========================
           MOBILE MENU
        ========================= */

        .mobile-menu {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.96);
          backdrop-filter: blur(20px);
          padding: 40px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          z-index: 999;
          border-bottom: 1px solid rgba(204,0,0,0.2);
        }

        .mobile-menu a {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.8);
          text-decoration: none;
        }

        /* =========================
           TABLET RESPONSIVE
        ========================= */

        @media (max-width: 1100px) {

          .nav-links-center {
            gap: 24px !important;
          }

          .nav-link {
            font-size: 10px !important;
            letter-spacing: 0.2em !important;
          }

          .nav-cta {
            padding: 9px 18px !important;
            font-size: 9px !important;
          }
        }

        /* =========================
           MOBILE RESPONSIVE
        ========================= */

        @media (max-width: 900px) {

          nav {
            padding: 16px 5vw !important;
          }

          .nav-links-center {
            display: none !important;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .nav-right {
            gap: 12px !important;
          }

          .nav-cta {
            padding: 8px 14px !important;
            font-size: 8px !important;
            letter-spacing: 0.18em !important;
          }

          .social-icon svg {
            width: 14px !important;
            height: 14px !important;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {

          nav {
            padding: 14px 4vw !important;
          }

          .nav-cta {
            padding: 7px 10px !important;
            font-size: 7px !important;
          }

          .social-icon svg {
            width: 12px !important;
            height: 12px !important;
          }
        }

      `}</style>

      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          opacity: 0,
          padding: '24px 6vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled
            ? 'rgba(0,0,0,0.9)'
            : 'transparent',
          backdropFilter: scrolled
            ? 'blur(20px)'
            : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(204,0,0,0.2)'
            : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >

        {/* LOGO */}

        <a
          href="#hero"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '28px',
            letterSpacing: '0.1em',
            color: '#fff',
            textDecoration: 'none',
            lineHeight: 1,
          }}
        >
          UK<span style={{ color: '#CC0000' }}>.</span>
        </a>

        {/* CENTER LINKS */}

        <div
          className="nav-links-center"
          style={{
            display: 'flex',
            gap: '44px',
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {['About', 'Skills', 'Work', 'Experience', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              style={linkStyle}
            >
              {link}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}

        <div
          className="nav-right"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >

          {/* HAMBURGER */}

          <div
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/uday-kiran-kamble-9317a52a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

          {/* BEHANCE */}

          <a
            href="https://www.behance.net/udaykirankamble"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.836 1.884 2.102 1.884.93 0 1.548-.403 1.884-1.02l2.54.16zm-5.73-5.975c-1.032 0-1.714.671-1.879 1.688h3.658c-.016-1.018-.689-1.688-1.779-1.688zM7 12.116c1.371 0 1.956.57 1.956 1.464 0 .928-.585 1.458-1.956 1.458H4.5v-2.922H7zm-.357-4.116c1.2 0 1.743.522 1.743 1.364 0 .843-.543 1.364-1.743 1.364H4.5V8H6.643zM2 6v12h5.752c2.197 0 3.948-1.186 3.948-3.237 0-1.374-.768-2.44-2.113-2.882 1.012-.453 1.635-1.306 1.635-2.502C11.222 7.306 9.638 6 7.356 6H2z"/>
            </svg>
          </a>

          {/* RESUME */}

          <a
            href="resume.pdf.pdf"
            download
            className="nav-cta"
          >
            ↓ RESUME
          </a>

        </div>

      </nav>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="mobile-menu">
          {['About', 'Skills', 'Work', 'Experience', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}

    </>
  )
}
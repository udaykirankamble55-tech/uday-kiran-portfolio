export default function Footer() {
  const MONO: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }
  const SLAB: React.CSSProperties = { fontFamily: "'Bebas Neue', sans-serif" }
  return (
    <footer style={{ background: '#000', padding: '28px 8vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(204,0,0,0.2)' }}>
      <div style={{ ...SLAB, fontSize: '20px', letterSpacing: '0.1em', color: 'rgba(240,237,232,0.2)' }}>UK<span style={{ color: 'rgba(204,0,0,0.4)' }}>.</span></div>
      <div style={{ ...MONO, fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(240,237,232,0.2)' }}>© 2026 UDAY KIRAN KAMBLE · ALL RIGHTS RESERVED</div>
      <div style={{ ...MONO, fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(240,237,232,0.2)' }}>HYDERABAD, IN</div>
    </footer>
  )
}

export default function Marquee({ direction }: { direction: 'left' | 'right' }) {
  const items1 = ['UI/UX DESIGN', 'BRAND IDENTITY', 'VISUAL HIERARCHY', 'FIGMA', 'PROTOTYPING', 'PRODUCT DESIGN', 'SAAS INTERFACES', 'AI WORKFLOW', 'OPEN TO WORK']
  const items2 = ['AMARA FASHION APP', 'VRIKOPRO BRANDING', 'ZESTYY FOOD APP', 'DEFENDER WEB', 'AI SAAS CONCEPT', 'CASE STUDIES', 'BEHANCE', 'HYDERABAD IN']
  const items = direction === 'left' ? items1 : items2
  const doubled = [...items, ...items]

  return (
    <div style={{ padding: '16px 0', borderTop: '1px solid rgba(204,0,0,0.3)', borderBottom: '1px solid rgba(204,0,0,0.3)', overflow: 'hidden', background: '#0a0a0a', position: 'relative' }}>
      {/* Moving red glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(204,0,0,0.05), transparent)', pointerEvents: 'none' }} />
      <div className={direction === 'left' ? 'marquee-left' : 'marquee-right'} style={{ display: 'flex', width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '28px', padding: '0 28px', fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(16px, 1.8vw, 22px)', letterSpacing: '0.12em', color: i % 3 === 0 ? '#CC0000' : 'rgba(240,237,232,0.7)', whiteSpace: 'nowrap' }}>
            {item}
            <span style={{ width: '5px', height: '5px', background: '#CC0000', display: 'inline-block', transform: 'rotate(45deg)', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  )
}

const GOLD = '#d4af37'

const services = [
  { key: 'flats', title: 'Flats (Residential)', count: 97 },
  { key: 'interior', title: 'Interior Design', count: 155 },
  { key: 'marriage', title: 'Marriage Hall', count: 12 },
  { key: 'shop', title: 'Shop / Commercial', count: 15 },
]

const Services = ({ onSelect }) => {
  return (
    <section style={{ background: '#0f172a', padding: '4rem 1.25rem' }}>
      <h2 style={{ textAlign: 'center', color: '#fff' }}>
        Our <span style={{ color: GOLD }}>Services</span>
      </h2>

      <div
        style={{
          maxWidth: '1200px',
          margin: '2rem auto 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: '1.5rem',
        }}
      >
        {services.map((s) => (
          <div
            key={s.key}
            onClick={() => onSelect(s.key)}
            style={{
              cursor: 'pointer',
              background: '#111827',
              padding: '1.5rem',
              borderRadius: '14px',
              border: '1px solid rgba(212,175,55,0.25)',
              color: '#fff',
              transition: '0.3s',
            }}
          >
            <h3 style={{ color: GOLD }}>{s.title}</h3>
            <p style={{ color: '#d1d5db' }}>{s.count}+ Projects</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

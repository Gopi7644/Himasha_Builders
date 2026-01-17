import { PROJECTS } from '../data/projects'

const ProjectGallery = ({ active }) => {
  const images = PROJECTS[active] || []

  return (
    <section style={{ padding: '4rem 1.25rem', background: '#111827' }}>
      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
          gap: '1rem',
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            loading="lazy"
            alt="Project"
            style={{
              width: '100%',
              height: '220px',
              objectFit: 'cover',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectGallery

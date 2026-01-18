import { useState } from 'react'
import ImageModal from './ImageModal'

const ProjectGallery = ({ images }) => {
  const [visible, setVisible] = useState(20)
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section
      style={{
        padding: '3rem 1.25rem',
        background: '#111827',
      }}
    >
      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
          gap: '1rem',
        }}
      >
        {images.slice(0, visible).map((img, i) => (
          <img
            key={i}
            src={img}
            loading="lazy"
            onClick={() => setActiveIndex(i)}
            style={{
              width: '100%',
              height: '220px',
              objectFit: 'cover',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'transform .3s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.04)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = 'scale(1)')
            }
          />
        ))}
      </div>

      {/* Load More */}
      {visible < images.length && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => setVisible((v) => v + 20)}
            style={{
              background:
                'linear-gradient(135deg,#d4af37,#b8962e)',
              color: '#111827',
              padding: '0.7rem 1.6rem',
              borderRadius: '10px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Load More
          </button>
        </div>
      )}

      <ImageModal
        images={images}
        index={activeIndex}
        setIndex={setActiveIndex}
      />
    </section>
  )
}

export default ProjectGallery

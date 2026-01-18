const ImageModal = ({ images, index, setIndex }) => {
  if (index === null) return null

  const close = () => setIndex(null)
  const prev = () => index > 0 && setIndex(index - 1)
  const next = () =>
    index < images.length - 1 && setIndex(index + 1)

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '90%',
          maxHeight: '85vh',
        }}
      >
        <img
          src={images[index]}
          alt="Project"
          style={{
            width: '100%',
            maxHeight: '85vh',
            borderRadius: '14px',
            objectFit: 'contain',
          }}
        />

        {/* Controls */}
        <button onClick={prev} style={navBtn('left')}>‹</button>
        <button onClick={next} style={navBtn('right')}>›</button>
        <button onClick={close} style={closeBtn}>×</button>
      </div>
    </div>
  )
}

const navBtn = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '-45px',
  transform: 'translateY(-50%)',
  background: 'rgba(0,0,0,0.6)',
  color: '#d4af37',
  border: 'none',
  fontSize: '2rem',
  cursor: 'pointer',
})

const closeBtn = {
  position: 'absolute',
  top: '-40px',
  right: 0,
  fontSize: '2rem',
  color: '#d4af37',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
}

export default ImageModal

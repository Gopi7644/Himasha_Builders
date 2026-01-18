import { useState } from 'react'

const BeforeAfter = ({ before, after }) => {
  const [pos, setPos] = useState(50)

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '3rem auto',
        position: 'relative',
      }}
    >
      <img
        src={after}
        style={{ width: '100%', borderRadius: '14px' }}
      />
      <img
        src={before}
        style={{
          width: '100%',
          borderRadius: '14px',
          position: 'absolute',
          inset: 0,
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
        }}
      />

      <input
        type="range"
        value={pos}
        onChange={(e) => setPos(e.target.value)}
        style={{
          width: '100%',
          marginTop: '12px',
        }}
      />
    </div>
  )
}

export default BeforeAfter

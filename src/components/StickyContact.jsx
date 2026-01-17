import React from 'react'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const GOLD = '#d4af37'

const StickyContact = () => {
  return (
    <div
      style={{
        position: 'fixed',
        right: '18px',
        bottom: '18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 999,
      }}
    >
      {/* Call */}
      <a
        href="tel:+917903550309"
        style={{
          background: 'linear-gradient(135deg, #d4af37 0%, #b8962e 100%)',
          color: '#111827',
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(212,175,55,0.45)',
        }}
        aria-label="Call"
      >
        <Phone size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917739905017"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#25D366',
          color: '#ffffff',
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(37,211,102,0.45)',
        }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  )
}

export default StickyContact

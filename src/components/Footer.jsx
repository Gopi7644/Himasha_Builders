import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const GOLD = '#d4af37'

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1c1c1c 100%)',
        borderTop: '1px solid rgba(212,175,55,0.25)',
        color: '#e5e7eb',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '2.5rem 1.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
        }}
      >
        {/* Brand */}
        <div>
          <h3 style={{ color: GOLD, fontWeight: 800 }}>
            Himasha Builders
          </h3>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
            Interior Design & Construction Pvt. Ltd.
            Premium residential & commercial construction solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: GOLD, marginBottom: '0.75rem' }}>
            Quick Links
          </h4>
          {['/', '/service', '/inquiry', '/contact'].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              style={{
                display: 'block',
                color: '#e5e7eb',
                textDecoration: 'none',
                marginBottom: '0.5rem',
              }}
            >
              {['Home', 'Services', 'Enquiry', 'Contact'][i]}
            </NavLink>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: GOLD, marginBottom: '0.75rem' }}>
            Contact
          </h4>
          <p>📞+91 7903550309</p>

          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <FaWhatsapp style={{ color: '#25D366' }} />
            <a
              href="https://wa.me/917739905017"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#e5e7eb',
                textDecoration: 'none',
              }}
            >
                 +91 7739905017
            </a>
          </p>

          <p>📍RK Puram Near Peepal Tree Chowk,<br /> <span className='ml-6'>Saguna, Danapur, Patna</span></p>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(212,175,55,0.15)',
          padding: '0.75rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#c7b873',
        }}
      >
        © {new Date().getFullYear()} Himasha Builders. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer

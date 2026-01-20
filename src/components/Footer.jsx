import React from 'react'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
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
        {/* 🔹 BRAND + SOCIAL */}
        <div>
          <h3 style={{ color: GOLD, fontWeight: 800 }}>
            Himasha Builders
          </h3>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
            Interior Design & Construction Pvt. Ltd. <br />
            Premium residential & commercial construction solutions.
          </p>

          {/* 🔥 SOCIAL ICONS */}
          <div
            style={{
              marginTop: '1.4rem',
              display: 'flex',
              gap: '12px',
            }}
          >
            {[
              { icon: <FaFacebookF />, link: '#', color: '#1877F2' },
              { icon: <FaInstagram />, link: '#', color: '#E4405F' },
              { icon: <FaLinkedinIn />, link: '#', color: '#0A66C2' },
              { icon: <FaYoutube />, link: '#', color: '#FF0000' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(212,175,55,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: GOLD,
                  fontSize: '1rem',
                  boxShadow: '0 6px 18px rgba(212,175,55,0.25)',
                  transition: 'all .3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = item.color
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = GOLD
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(212,175,55,0.25)'
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 🔹 QUICK LINKS */}
        <div>
          <h4 style={{ color: GOLD, marginBottom: '0.75rem' }}>
            Quick Links
          </h4>
          {['/', '/service', '/enquiry', '/contact'].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              style={{
                display: 'block',
                color: '#e5e7eb',
                textDecoration: 'none',
                marginBottom: '0.5rem',
                transition: 'color .2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#e5e7eb')}
            >
              {['Home', 'Services', 'Enquiry', 'Contact'][i]}
            </NavLink>
          ))}
        </div>

        {/* 🔹 CONTACT */}
        <div>
          <h4 style={{ color: GOLD, marginBottom: '0.75rem' }}>
            Contact
          </h4>
          <p>📞 +91 7903550309</p>

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

          <p>
            📍 RK Puram Near Peepal Tree Chowk,<br />
            Saguna, Danapur, Patna
          </p>
        </div>
      </div>

      {/* 🔹 COPYRIGHT BAR */}
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

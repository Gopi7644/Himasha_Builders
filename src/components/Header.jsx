import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import TopBar from '../Page/TopBar'
import OfferBanner from '../Offer/OfferBanner'



const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820)
  const headerRef = useRef(null)
  

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18)
    }
    
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820)
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', handleResize)
    onScroll()
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 60,
    background: scrolled 
      ? 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 50%, #0f3d1f 100%)'
      : 'linear-gradient(135deg, #2d6b3f 0%, #1f5a2f 50%, #164620 100%)',
    backdropFilter: 'blur(12px)',
    borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
    boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.15)' : 'none',
    transition: 'all 220ms ease',
    transform: 'translateY(0)',
  }

  const containerStyle = {
    maxWidth: isMobile ? '100%' : '1360px',
    margin: '0 auto',
    padding: isMobile ? '0.75rem 1rem' : '0.75rem 1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: isMobile ? '0.5rem' : '1rem',
    width: '100%',
  }

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'transform 260ms cubic-bezier(0.2, 0.9, 0.2, 1)',
    cursor: 'pointer',
    minWidth: 'fit-content',
  }

  const logoSvgStyle = {
    width: window.innerWidth <= 420 ? '40px' : '48px',
    height: window.innerWidth <= 420 ? '40px' : '48px',
    transition: 'transform 260ms cubic-bezier(0.2, 0.9, 0.2, 1)',
    filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.2))',
  }

  const brandStyle = {
    fontWeight: 700,
    letterSpacing: '0.2px',
    fontSize: window.innerWidth <= 420 ? '1rem' : window.innerWidth <= 1024 ? '1.1rem' : '1.35rem',
    color: '#ffffff',
    transition: 'color 180ms ease',
    whiteSpace: 'nowrap',
  }

  const tagStyle = {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.7)',
    display: window.innerWidth <= 420 ? 'none' : 'block',
  }

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginLeft: 'auto',
  }

  const navLinksStyle = {
    display: isMobile ? 'none' : 'flex',
    gap: window.innerWidth >= 1200 ? '1.25rem' : '1rem',
    alignItems: 'center',
  }

  const navLinkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    padding: '0.45rem 0.6rem',
    borderRadius: '8px',
    position: 'relative',
    transition: 'color 200ms ease, transform 220ms cubic-bezier(0.2, 0.9, 0.2, 1)',
    fontWeight: 500,
    fontSize: '0.95rem',
    borderBottom: '2px solid transparent',
  }

  const ctaStyle = {
    background: 'linear-gradient(90deg, #f4a460 0%, #ff8c42 100%)',
    color: 'white',
    padding: window.innerWidth <= 420 ? '0.45rem 0.7rem' : '0.5rem 0.95rem',
    borderRadius: '10px',
    fontWeight: 700,
    fontSize: window.innerWidth <= 420 ? '0.95rem' : '1rem',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 6px 18px rgba(244, 164, 96, 0.25)',
    transition: 'transform 200ms ease, box-shadow 200ms ease',
    textDecoration: 'none',
    display: 'inline-block',
    whiteSpace: 'nowrap',
  }

  const menuBtnStyle = {
    display: isMobile ? 'inline-flex' : 'none',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '8px',
    transition: 'background 180ms ease, transform 180ms ease',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backdropFilter: 'blur(8px)',
  }

  const mobileDrawerStyle = {
    position: 'absolute',
    right: isMobile ? '0.75rem' : '1rem',
    left: isMobile ? '0.75rem' : 'auto',
    top: window.innerWidth <= 420 ? '56px' : '64px',
    background: 'linear-gradient(135deg, rgba(29, 83, 54, 0.98) 0%, rgba(15, 61, 31, 0.98) 100%)',
    backdropFilter: 'blur(12px)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.3)',
    padding: '0.75rem',
    minWidth: 'auto',
    animation: 'slideFadeIn 0.22s cubic-bezier(0.2, 0.9, 0.2, 1)',
  }

  const mobileMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  }

  const mobileMenuLinkStyle = {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'background 200ms ease, transform 200ms ease',
    fontWeight: 500,
    fontSize: '0.95rem',
    borderLeft: '3px solid transparent',
  }

  return (
    <>
      <style>{`
        @keyframes slideFadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes logoGlow {
          0%, 100% { filter: brightness(0.96); }
          50% { filter: brightness(1.06); }
        }

        header {
          animation: ${scrolled ? 'none' : 'logoGlow 4s ease-in-out infinite'};
        }

        a:hover {
          color: #f4a460;
        }

        a:hover::after {
          transform: scaleX(1);
        }

        a.active {
          color: #f4a460;
        }

        a.active::after {
          transform: scaleX(1);
        }

        @media (max-width: 820px) {
          header {
            animation: none;
          }
        }
      `}</style>

      <header ref={headerRef} style={headerStyle}>
        <TopBar />
        <OfferBanner />
        <div style={containerStyle}>
          <NavLink 
            to="/" 
            style={logoStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(-2deg)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg 
              style={logoSvgStyle}
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06) rotate(-3deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <defs>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0%" stopColor="#f2d5b9" />
                  <stop offset="50%" stopColor="#b08968" />
                  <stop offset="100%" stopColor="#8b5e3c" />
                </linearGradient>
              </defs>
              <rect x="10" y="10" width="80" height="80" rx="12" fill="url(#g2)" />
              <path d="M30 65 L50 35 L70 65 Z" fill="#fff" opacity="0.95" />
            </svg>
            <div>
              <div style={brandStyle}>Himasha Builders</div>
              <div style={tagStyle}>Interior Design & Construction Pvt. Ltd.</div>
            </div>
          </NavLink>

          <nav style={navStyle}>
            <div style={navLinksStyle}>
              <NavLink 
                end 
                to="/" 
                style={({ isActive }) => ({
                  ...navLinkStyle,
                  color: isActive ? '#f4a460' : '#ffffff',
                  borderBottomColor: isActive ? '#f4a460' : 'transparent',
                })}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Home
              </NavLink>

              <NavLink 
                to="/service" 
                style={({ isActive }) => ({
                  ...navLinkStyle,
                  color: isActive ? '#f4a460' : '#ffffff',
                  borderBottomColor: isActive ? '#f4a460' : 'transparent',
                })}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Services
              </NavLink>

              <NavLink 
                to="/inquiry" 
                style={({ isActive }) => ({
                  ...navLinkStyle,
                  color: isActive ? '#f4a460' : '#ffffff',
                  borderBottomColor: isActive ? '#f4a460' : 'transparent',
                })}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Enquiry
              </NavLink>

              <NavLink 
                to="/contact" 
                style={({ isActive }) => ({
                  ...navLinkStyle,
                  color: isActive ? '#f4a460' : '#ffffff',
                  borderBottomColor: isActive ? '#f4a460' : 'transparent',
                })}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Contact
              </NavLink>

              <NavLink 
                to="/contact" 
                style={ctaStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 9px 26px rgba(244, 164, 96, 0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(244, 164, 96, 0.25)'
                }}
              >
                Get Quote
              </NavLink>
            </div>

            <button 
              style={menuBtnStyle}
              aria-label="Toggle menu" 
              aria-expanded={open} 
              onClick={() => setOpen((s) => !s)}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 18L18 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6h18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 12h18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 18h18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </nav>
        </div>

        {open && (
          <div style={mobileDrawerStyle} role="menu" aria-hidden={!open}>
            <div style={mobileMenuStyle}>
              <NavLink 
                end 
                to="/" 
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  ...mobileMenuLinkStyle,
                  background: isActive ? 'rgba(244, 164, 96, 0.2)' : 'transparent',
                  borderLeftColor: isActive ? '#f4a460' : 'transparent',
                })}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(244, 164, 96, 0.15)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                Home
              </NavLink>

              <NavLink 
                to="/service" 
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  ...mobileMenuLinkStyle,
                  background: isActive ? 'rgba(244, 164, 96, 0.2)' : 'transparent',
                  borderLeftColor: isActive ? '#f4a460' : 'transparent',
                })}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(244, 164, 96, 0.15)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                Services
              </NavLink>

              <NavLink 
                to="/inquiry" 
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  ...mobileMenuLinkStyle,
                  background: isActive ? 'rgba(244, 164, 96, 0.2)' : 'transparent',
                  borderLeftColor: isActive ? '#f4a460' : 'transparent',
                })}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(244, 164, 96, 0.15)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                Inquiry
              </NavLink>

              <NavLink 
                to="/contact" 
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  ...mobileMenuLinkStyle,
                  background: isActive ? 'rgba(244, 164, 96, 0.2)' : 'transparent',
                  borderLeftColor: isActive ? '#f4a460' : 'transparent',
                })}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(244, 164, 96, 0.15)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                Contact
              </NavLink>

              <NavLink 
                to="/contact" 
                onClick={() => setOpen(false)}
                style={{
                  ...ctaStyle,
                  width: '100%',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 9px 26px rgba(244, 164, 96, 0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(244, 164, 96, 0.25)'
                }}
              >
                Get Quote
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
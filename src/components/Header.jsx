import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-hb.jpeg'
import TopBar from '../Page/TopBar'


const GOLD = '#d4af37'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)


  useEffect(() => {
  const onScroll = () => {
    const currentScrollY = window.scrollY

    setScrolled(currentScrollY > 18)

    // scroll down → hide
    if (currentScrollY > lastScrollY && currentScrollY > 120) {
      setShowHeader(false)
    }
    // scroll up → show
    else {
      setShowHeader(true)
    }

    setLastScrollY(currentScrollY)
  }

  const onResize = () => setIsMobile(window.innerWidth <= 820)

  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onResize)

  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize)
  }
}, [lastScrollY])


  /* ================== STYLES ================== */

  const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 60,

  transform: showHeader ? 'translateY(0)' : 'translateY(-110%)',
  opacity: showHeader ? 1 : 0,

  transition: 'transform 420ms cubic-bezier(0.4,0,0.2,1), opacity 300ms ease',

  background: scrolled
    ? 'linear-gradient(135deg, #0f172a 0%, #111827 100%)'
    : 'linear-gradient(135deg, #111827 0%, #1c1c1c 100%)',

  borderBottom: '1px solid rgba(212,175,55,0.15)',
  boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.45)' : 'none',
}


  const container = {
    maxWidth: '1360px',
    margin: '0 auto',
    padding: isMobile ? '0.7rem 1rem' : '0.85rem 1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const logoWrap = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
  }

  const brand = {
    fontSize: isMobile ? '1.05rem' : '1.35rem',
    fontWeight: 800,
    color: '#f5f5f5',
    letterSpacing: '0.6px',
    whiteSpace: 'nowrap',
  }

  const tag = {
    fontSize: '0.8rem',
    color: '#c7b873',
    display: isMobile ? 'none' : 'block',
  }

  const navLinks = {
    display: isMobile ? 'none' : 'flex',
    gap: '1.2rem',
    alignItems: 'center',
  }

  const linkBase = {
    color: '#e5e7eb',
    textDecoration: 'none',
    fontWeight: 500,
    padding: '0.4rem 0.25rem',
    borderBottom: '2px solid transparent',
    transition: 'all 180ms ease',
  }

  const cta = {
    background: 'linear-gradient(135deg, #d4af37 0%, #b8962e 100%)',
    color: '#111827',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
    fontWeight: 700,
    textDecoration: 'none',
    boxShadow: '0 6px 20px rgba(212,175,55,0.35)',
    transition: 'all 180ms ease',
  }

  const menuBtn = {
    display: isMobile ? 'flex' : 'none',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(212,175,55,0.25)',
    borderRadius: '8px',
    width: '40px',
    height: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }

  const drawer = {
    position: 'absolute',
    top: '64px',
    right: '1rem',
    left: '1rem',
    background: 'linear-gradient(135deg, #0f172a 0%, #1c1c1c 100%)',
    borderRadius: '12px',
    padding: '0.75rem',
    border: '1px solid rgba(212,175,55,0.25)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
  }

  const mobileLink = {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#f5f5f5',
    fontWeight: 500,
    borderLeft: '3px solid transparent',
  }

  /* ================== JSX ================== */

  return (
    <header style={headerStyle}>
      <TopBar />
      <div style={container}>
        {/* Logo */}
        <NavLink to="/" style={logoWrap}>
          <img
            src={logo}
            alt="Himasha Builders"
            style={{
              width: isMobile ? '42px' : '52px',
              filter: 'drop-shadow(0 6px 18px rgba(212,175,55,0.4))',
            }}
          />
          <div>
            <div style={brand}>Himasha Builders</div>
            <div style={tag}>& Construction Pvt. Ltd.</div>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav style={navLinks}>
          {['/', '/service', '/enquiry', '/contact'].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              style={({ isActive }) => ({
                ...linkBase,
                color: isActive ? GOLD : '#e5e7eb',
                borderBottomColor: isActive ? GOLD : 'transparent',
              })}
            >
              {['Home', 'Services', 'Enquiry', 'Contact'][i]}
            </NavLink>
          ))}

          <NavLink to="/contact" style={cta}>
            Get Quote
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <button style={menuBtn} onClick={() => setOpen(!open)}>
          <span style={{ color: GOLD, fontSize: '1.4rem' }}>☰</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div style={drawer}>
          {['/', '/service', '/enquiry', '/contact'].map((path, i) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                ...mobileLink,
                background: isActive ? 'rgba(212,175,55,0.15)' : 'transparent',
                borderLeftColor: isActive ? GOLD : 'transparent',
                color: isActive ? GOLD : '#f5f5f5',
              })}
            >
              {['Home', 'Services', 'Enquiry', 'Contact'][i]}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header

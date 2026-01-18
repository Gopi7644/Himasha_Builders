import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StickyContact from '../components/StickyContact'


const Layout = () => {
  return (
    <div>
      <Header />
      <StickyContact />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
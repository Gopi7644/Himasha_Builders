import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StickyContact from '../components/StickyContact'
import {Toaster} from 'react-hot-toast'


const Layout = () => {
  return (
    <div>
        <Toaster
        position="top-center"
        toastOptions={{
          duration: 8000,
          style: {
            borderRadius: "10px",
            background: "gradient(to right, #0f172a, #1c1c1c)",
            color: "black",
            textAlign: "center",
          },
        }}
      />
      <Header />
      <StickyContact />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
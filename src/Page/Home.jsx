import React from 'react'
import Service from './Service'
import HeroSection from '../components/HeroSection'
import StickyWhatsApp from '../StickyWhatsApp/StickyWhatsApp'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StickyWhatsApp />
    <Service />
    </div>
  )
}

export default Home
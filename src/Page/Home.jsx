import React from 'react'
import Service from './Service'
import HeroSection from '../HeroSection/HeroSection'
import PopupLeadForm from '../PopupLeadForm/PopupLeadForm'
import StickyWhatsApp from '../StickyWhatsApp/StickyWhatsApp'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PopupLeadForm />
      <StickyWhatsApp />
    <Service />
    </div>
  )
}

export default Home
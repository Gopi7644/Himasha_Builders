import React from 'react'
import Service from './Service'
import HeroSection from '../components/HeroSection'
import Enquiry from './Enquiry'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Service />
      <Enquiry />
      <Contact />
    </div>
  )
}

export default Home
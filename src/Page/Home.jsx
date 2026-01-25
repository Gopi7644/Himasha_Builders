import React from 'react'
import HeroSection from '../components/HeroSection'
import Enquiry from './Enquiry'
import DesignProcess from '../components/DesignProcess'
import ProjectsShowcase from '../components/ProjectsShowcase'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import OfferPopup from '../components/OfferPopup'
import OfferBanner from '../components/OfferBanner'

const Home = () => {
  return (
    <div>
      <OfferBanner />
      <OfferPopup />
      <HeroSection />
      <DesignProcess />
      <ProjectsShowcase />
      <Services />
      <Testimonials />
      <Enquiry />
    </div>
  )
}

export default Home
import React from 'react'
import HeroSection from '../components/HeroSection'
import Enquiry from './Enquiry'
import DesignProcess from '../components/DesignProcess'
import ProjectsShowcase from '../components/ProjectsShowcase'
import Testimonials from '../components/Testimonials'
import Products from './Produts'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DesignProcess />
      <ProjectsShowcase />
      <Services />
      <Testimonials />
      <Enquiry />
      <Products />
    </div>
  )
}

export default Home
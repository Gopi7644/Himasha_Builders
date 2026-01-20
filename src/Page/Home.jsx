import React from 'react'
import Service from './Service'
import HeroSection from '../components/HeroSection'
import Enquiry from './Enquiry'
import DesignProcess from '../components/DesignProcess'
import ProjectsShowcase from '../components/ProjectsShowcase'
import Testimonials from '../components/Testimonials'
import Products from './Produts'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DesignProcess />
      <ProjectsShowcase />
      <Service />
      <Testimonials />
      <Enquiry />
      <Products />
    </div>
  )
}

export default Home
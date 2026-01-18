import React from 'react'
import Service from './Service'
import HeroSection from '../components/HeroSection'
import Enquiry from './Enquiry'
import Contact from './Contact'
import DesignProcess from '../components/DesignProcess'
import ProjectsShowcase from '../components/ProjectsShowcase'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DesignProcess />
      <ProjectsShowcase />
      <Service />
      <Enquiry />
      <Contact />
    </div>
  )
}

export default Home
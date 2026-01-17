import React from 'react'
// import Service from './Service'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import ProjectGallery from '../components/ProjectGallary'
// import ProjectsPage from '../components/ProjectsPage'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <ProjectGallery active="interior" />
      {/* <ProjectsPage /> */}
      {/* <Service /> */}
    </div>
  )
}

export default Home
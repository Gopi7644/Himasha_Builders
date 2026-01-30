import React from 'react'
import HeroWithForm from '../components/HeroWithForm'
import Enquiry from './Enquiry'
import DesignProcess from '../components/DesignProcess'
import ProjectsShowcase from '../components/ProjectsShowcase'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
// import OfferPopup from '../components/OfferPopup'
import OfferBanner from '../components/OfferBanner'
import HomeProcess from '../components/Home/HomeProcess'
import HomeProjects from '../components/Home/HomeProjects'
import HomePopularDesigns from '../components/Home/HomePopularDesign'
import WhyChooseUs from '../components/Home/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <OfferBanner />
      {/* <OfferPopup /> */}
      <HeroWithForm />
      <HomeProcess />
      <HomeProjects />
      <HomePopularDesigns />
      <WhyChooseUs />
      <DesignProcess />
      <ProjectsShowcase />
      <Services />
      <Testimonials />
      <Enquiry />
    </div>
  )
}

export default Home
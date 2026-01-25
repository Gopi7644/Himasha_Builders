import React from 'react'
import Hero from './ModularKitchen/Hero'
import WhyModular from './ModularKitchen/WhyModular'
import KitchenLayouts from './ModularKitchen/KitchenLayouts'
import Comparison from './ModularKitchen/Comparison'
import Materials from './ModularKitchen/Materials'
import SmartStorage from './ModularKitchen/SmartStorage'
import Process from './ModularKitchen/Process'
import Testimonials from '../../components/Testimonials'



const ModularKitchens = () => {
  return (
    <>
      <Hero />
      <WhyModular />
      <KitchenLayouts />
      <Comparison />
      <Materials />
      <SmartStorage />
      <Process />
      <Testimonials />
    </>
  )
}

export default ModularKitchens
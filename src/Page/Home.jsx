import React from "react";

import HeroWithForm from "../components/HeroWithForm";
import Enquiry from "./Enquiry";
import DesignProcess from "../components/DesignProcess";
import ProjectsShowcase from "../components/ProjectsShowcase";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";

import OfferBanner from "../components/OfferBanner";
import HomeProcess from "../components/Home/HomeProcess";
import HomeProjects from "../components/Home/HomeProjects";
import HomePopularDesigns from "../components/Home/HomePopularDesign";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import HomeGuides from "../components/Home/HomeGuides";


const Home = () => {
  return (
    <div id="home">

      <OfferBanner />

      {/* HERO */}
      <section id="hero">
        <HeroWithForm />
      </section>

      {/* PROCESS */}
      <section id="process">
        <HomeProcess />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <HomeProjects />
      </section>

      {/* POPULAR DESIGNS */}
      <section id="designs">
        <HomePopularDesigns />
      </section>

      {/* WHY US */}
      <section id="why">
        <WhyChooseUs />
      </section>

      {/* GUIDES */}
      <section id="guides">
        <HomeGuides />
      </section>

      {/* DESIGN FLOW */}
      <section id="design-process">
        <DesignProcess />
      </section>

      {/* SHOWCASE */}
      <section id="showcase">
        <ProjectsShowcase />
      </section>

      {/* SERVICES */}
      <section id="service">
        <Services />
      </section>

      {/* TESTIMONIAL */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* ENQUIRY */}
      <section id="enquiry">
        <Enquiry />
      </section>

    </div>
  );
};

export default Home;

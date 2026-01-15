import React from "react";
import "./hero.css";

const HeroSection = () => {
  return (
    <section className="hero" aria-label="Interior design hero section">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Dream Homes, Expertly Revamped</h1>
        <p>
          Dwell Craft transforms spaces with bespoke interior design,
          delivering comfort, elegance, and functionality.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

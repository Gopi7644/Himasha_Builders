import FloatingForm from "./FloatingForm";
import heroBg from "../assets/heroBg.jpg";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section
      className="hero hero-light"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-label="Interior Designing Hero Section"
    >
      <div className="hero-overlay-light"></div>

      <div className="hero-inner">
        {/* LEFT CONTENT */}
        <div className="hero-text fade-in">
          <h1>
            INTERIOR DESIGNING <br /> & AUTOMATION
          </h1>
          <p className="hero-tagline">घर जो आपकी कहानी बोले</p>
        </div>

        {/* RIGHT FORM */}
        <FloatingForm />
      </div>
    </section>
  );
};

export default HeroSection;

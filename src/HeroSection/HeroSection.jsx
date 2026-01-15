import heroImg from "../assets/hero.webp";
import "./hero.css";
import contact from "../Page/contact.jsx";

const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Luxury interior design hero section"
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Luxury Interior Design for Modern Living</h1>
        <p>
          We create elegant, functional, and timeless interiors that reflect
          your lifestyle and elevate your living experience.
        </p>

        <a href="/Contact" className="hero-btn">
          Book Free Consultation
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

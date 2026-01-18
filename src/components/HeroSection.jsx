import { useEffect, useState } from "react";
import FloatingForm from "./FloatingForm";
import { HERO_IMAGES } from "../data/heroImages";

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!HERO_IMAGES.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === i ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          inset: 0,
          // background:
          //   "linear-gradient(135deg, rgba(15,23,42,0.7), rgba(0,0,0,0.6))",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: 520, color: "#fff" }}>
          <h1>INTERIOR DESIGNING & AUTOMATION</h1>
          <p style={{ color: "#d4af37" }}>घर जो आपकी कहानी बोले</p>
        </div>

        <FloatingForm />
      </div>
    </section>
  );
};

export default HeroSection;

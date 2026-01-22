import React from "react";
import { NavLink } from "react-router-dom";

const bathwareItems = [
  { title: "Luxury Showers", img: "/src/assets/bathware/bath1.jpg" },
  { title: "Designer Washbasins", img: "/src/assets/bathware/bath2.jpg" },
  { title: "Premium Bathtubs", img: "/src/assets/bathware/bath3.jpg" },
  { title: "Wall Mounted Fixtures", img: "/src/assets/bathware/bath4.jpg" },
];

const Bathware = () => {
  return (
    <section style={{ background: "#fff", minHeight: "100vh" }}>
      <Hero
        title="Beautiful Bathware"
        subtitle="Luxury bath spaces crafted for comfort"
        bg="/src/assets/bathware/hero.jpg"
      />

      <div style={grid}>
        {bathwareItems.map((item, i) => (
          <div key={i} style={card}>
            <img src={item.img} alt={item.title} style={img} />
            <div style={overlay}>
              <h3>{item.title}</h3>
              <NavLink to="/contact" style={link}>Get Quote →</NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Hero = ({ title, subtitle, bg }) => (
  <div style={{ ...hero, background: `url(${bg}) center/cover` }}>
    <div style={heroOverlay} />
    <div style={heroContent}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
);

const hero = { height: "60vh", position: "relative" };
const heroOverlay = { position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" };
const heroContent = { position: "relative", color: "#fff", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" };

const grid = {
  maxWidth: 1300,
  margin: "3rem auto",
  padding: "0 1.5rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "1.6rem",
};

const card = { position: "relative", borderRadius: 20, overflow: "hidden" };
const img = { width: "100%", height: 300, objectFit: "cover" };
const overlay = { position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent,rgba(0,0,0,.85))", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "1rem" };
const link = { color: "#d4af37", fontWeight: 600, textDecoration: "none" };

export default Bathware;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

/* ================= DATA ================= */

const kitchenCategories = [
  { title: "Modular Kitchens", image: "/src/assets/kitchen/modular.jpg" },
  { title: "Island Kitchens", image: "/src/assets/kitchen/island.jpg" },
  { title: "Parallel Kitchens", image: "/src/assets/kitchen/parallel.jpg" },
  { title: "Open Kitchens", image: "/src/assets/kitchen/open.jpg" },
];

const allDesigns = [
  { title: "Modern Kitchen", image: "/src/assets/kitchen/design1.jpg", type: "Modern" },
  { title: "Luxury Kitchen", image: "/src/assets/kitchen/design2.jpg", type: "Luxury" },
  { title: "Compact Kitchen", image: "/src/assets/kitchen/design3.jpg", type: "Compact" },
  { title: "Premium Kitchen", image: "/src/assets/kitchen/design4.jpg", type: "Premium" },
  { title: "Budget Kitchen", image: "/src/assets/kitchen/design5.jpg", type: "Budget" },
  { title: "Luxury Island", image: "/src/assets/kitchen/design6.jpg", type: "Luxury" },
  { title: "Modern Open", image: "/src/assets/kitchen/design7.jpg", type: "Modern" },
  { title: "Compact Parallel", image: "/src/assets/kitchen/design8.jpg", type: "Compact" },
];

const filters = ["All", "Modern", "Luxury", "Compact", "Premium", "Budget"];

/* ================= COMPONENT ================= */

const Kitchens = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDesigns =
    activeFilter === "All"
      ? allDesigns
      : allDesigns.filter((item) => item.type === activeFilter);

  return (
    <section style={{ background: "#fff", minHeight: "100vh" }}>

      {/* ================= HERO ================= */}
      <div style={hero}>
        <div style={heroOverlay} />
        <div style={heroContent}>
          <h1 style={heroTitle}>Beautiful Kitchens</h1>
          <p style={heroSubtitle}>
            Discover modular kitchens designed for elegance & efficiency
          </p>
          <NavLink to="/enquiry" style={heroBtn}>
            Book Free Consultation
          </NavLink>
        </div>
      </div>

      {/* ================= CATEGORY STRIP ================= */}
      <div style={catWrapper}>
        {kitchenCategories.map((cat, i) => (
          <div key={i} style={catCard}>
            <img src={cat.image} alt={cat.title} style={catImg} />
            <div style={catTitle}>{cat.title}</div>
          </div>
        ))}
      </div>

      {/* ================= FILTER BAR ================= */}
      <div style={filterBar}>
        <span style={filterTitle}>Filters:</span>
        {filters.map((f) => (
          <button
            key={f}
            style={{
              ...filterBtn,
              background: activeFilter === f ? "#d4af37" : "#fff",
              color: activeFilter === f ? "#111" : "#000",
              borderColor: activeFilter === f ? "#d4af37" : "#ccc",
            }}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ================= GRID GALLERY ================= */}
      <div style={grid}>
        {filteredDesigns.map((item, i) => (
          <div key={i} style={card}>
            <img src={item.image} alt={item.title} style={cardImg} />
            <div style={cardOverlay}>
              <h3 style={cardTitle}>{item.title}</h3>
              <span style={cardLink}>View Details →</span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <div style={cta}>
        <h2>Design your dream kitchen today</h2>
        <p>Get personalized kitchen designs with transparent pricing.</p>
        <NavLink to="/enquiry" style={ctaBtn}>
          Talk to Kitchen Expert
        </NavLink>
      </div>
    </section>
  );
};

/* ================= STYLES ================= */

const hero = {
  position: "relative",
  height: "65vh",
  background: "url('/src/assets/kitchen/hero.jpg') center/cover no-repeat",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.55)",
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  color: "#fff",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "1.5rem",
};

const heroTitle = {
  fontSize: "clamp(2.5rem,4vw,3.5rem)",
  fontWeight: 800,
};

const heroSubtitle = {
  marginTop: "0.8rem",
  fontSize: "1.1rem",
  opacity: 0.9,
};

const heroBtn = {
  marginTop: "1.8rem",
  padding: "0.9rem 2.2rem",
  borderRadius: 30,
  background: "linear-gradient(135deg,#d4af37,#b8962e)",
  color: "#111",
  textDecoration: "none",
  fontWeight: 700,
};

/* Categories */
const catWrapper = {
  maxWidth: 1300,
  margin: "3rem auto",
  padding: "0 1.5rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "1.4rem",
};

const catCard = {
  background: "#fff",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
};

const catImg = {
  width: "100%",
  height: 180,
  objectFit: "cover",
};

const catTitle = {
  padding: "1rem",
  textAlign: "center",
  fontWeight: 700,
};

/* Filters */
const filterBar = {
  maxWidth: 1200,
  margin: "2rem auto",
  padding: "0 1.5rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.8rem",
  alignItems: "center",
};

const filterTitle = { fontWeight: 700 };

const filterBtn = {
  padding: "0.45rem 1.2rem",
  borderRadius: 20,
  border: "1px solid #ccc",
  background: "#fff",
  cursor: "pointer",
};

/* Grid */
const grid = {
  maxWidth: 1300,
  margin: "0 auto",
  padding: "0 1.5rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "1.6rem",
};

const card = {
  position: "relative",
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 20px 45px rgba(0,0,0,0.25)",
};

const cardImg = {
  width: "100%",
  height: 280,
  objectFit: "cover",
};

const cardOverlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.85))",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "1.2rem",
};

const cardTitle = {
  fontSize: "1.1rem",
  fontWeight: 700,
};

const cardLink = {
  color: "#d4af37",
  fontWeight: 600,
  marginTop: 6,
};

/* CTA */
const cta = {
  marginTop: "4rem",
  padding: "4rem 1.5rem",
  textAlign: "center",
  background: "#f7f7f7",
};

const ctaBtn = {
  marginTop: "1.5rem",
  display: "inline-block",
  padding: "0.9rem 2.2rem",
  borderRadius: 30,
  background: "linear-gradient(135deg,#d4af37,#b8962e)",
  color: "#111",
  fontWeight: 700,
  textDecoration: "none",
};

export default Kitchens;

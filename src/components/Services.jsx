import { NavLink } from "react-router-dom";
import kitchens from "../assets/ServicesCards/kitchen.jpg";
import doors from "../assets/ServicesCards/doors.jpg";
import furniture from "../assets/ServicesCards/furniture.jpg";
import furnishings from "../assets/ServicesCards/furnishing.jpg";
import wardrobes from "../assets/ServicesCards/wardrobe.jpg";
import bathware from "../assets/ServicesCards/bath.jpg";
import lights from "../assets/ServicesCards/lights.jpg";
import rugs from "../assets/ServicesCards/rugs.jpg";

const SERVICES = [
  { title: "Kitchens", img: kitchens, slug: "kitchens" },
  { title: "Doors & Windows", img: doors, slug: "doors" },
  { title: "Furniture", img: furniture, slug: "furniture" },
  { title: "Furnishings", img: furnishings, slug: "furnishings" },
  { title: "Wardrobes", img: wardrobes, slug: "wardrobes" },
  { title: "Bathware", img: bathware, slug: "bathware" },
  { title: "Lights", img: lights, slug: "lights" },
  { title: "Rugs", img: rugs, slug: "rugs" },
];

const Services = () => {
  return (
    <section style={{ padding: "5rem 1.5rem", background: "#0b0f1a", color: "#fff" }}>
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.6rem", color: "#d4af37" }}>
          Ready to give your home a makeover?
        </h1>
        <p style={{ opacity: 0.85 }}>
          Discover styles that blend form & function
        </p>
      </header>

      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "1.6rem",
        }}
      >
        {SERVICES.map((s) => (
          <NavLink
            key={s.slug}
            to={`/service/${s.slug}`}
            style={{
              position: "relative",
              height: 260,
              borderRadius: 18,
              overflow: "hidden",
              textDecoration: "none",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={s.img}
              alt={s.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform .6s ease",
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.85))",
              }}
            />

            {/* Title */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                color: "#fff",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              {s.title}
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Services;

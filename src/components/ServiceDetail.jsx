import { useParams } from "react-router-dom";

const SERVICE_DETAILS = {
  kitchens: {
    title: "Luxury Modular Kitchens",
    desc: "Premium modular kitchens with modern fittings, space optimization and elegant finish.",
    points: [
      "Soft close cabinets",
      "Granite & quartz counters",
      "Smart storage solutions",
      "Luxury lighting design",
    ],
    image: "/src/assets/ServicesCards/kitchen.jpg",
  },

  doors: {
    title: "Designer Doors & Windows",
    desc: "High-quality doors and windows designed for security, elegance and ventilation.",
    points: [
      "Weather resistant frames",
      "Premium wood & UPVC material",
      "Soundproof & insulated",
      "Elegant finish options",
    ],
    image: "/src/assets/ServicesCards/doors.jpg",
  },

  furniture: {
    title: "Designer Furniture",
    desc: "Handcrafted luxury furniture that enhances aesthetics & comfort.",
    points: [
      "Solid wood furniture",
      "Ergonomic design",
      "Luxury upholstery",
      "Custom made solutions",
    ],
    image: "/src/assets/ServicesCards/furniture.jpg",
  },

  furnishings: {
    title: "Premium Furnishings",
    desc: "Elegant furnishing solutions that bring warmth and character to your home.",
    points: [
      "Curtains & blinds",
      "Premium upholstery",
      "Wall textures & décor",
      "Custom furnishing design",
    ],
    image: "/src/assets/ServicesCards/furnishings.jpg",
  },

  wardrobes: {
    title: "Luxury Wardrobes",
    desc: "Modern wardrobes designed for maximum storage and stylish interiors.",
    points: [
      "Sliding & hinged wardrobes",
      "Soft close drawers",
      "Mirror & glass finish",
      "Internal organizers",
    ],
    image: "/src/assets/ServicesCards/wardrobe.jpg",
  },

  bathware: {
    title: "Premium Bathware",
    desc: "Modern bathware designs with elegant fixtures and waterproof finish.",
    points: [
      "Designer showers",
      "Anti-slip flooring",
      "Wall mounted fittings",
      "Luxury mirrors",
    ],
    image: "/src/assets/ServicesCards/bath.jpg",
  },

  lights: {
    title: "Luxury Lighting Solutions",
    desc: "Decorative and functional lighting systems to elevate ambience.",
    points: [
      "Chandeliers & spotlights",
      "Ambient lighting",
      "Energy efficient LEDs",
      "Smart lighting control",
    ],
    image: "/src/assets/ServicesCards/lights.jpg",
  },

  rugs: {
    title: "Designer Rugs & Carpets",
    desc: "Premium rugs and carpets that enhance comfort and aesthetics.",
    points: [
      "Handwoven carpets",
      "Anti-slip rugs",
      "Custom size options",
      "Easy maintenance",
    ],
    image: "/src/assets/ServicesCards/rugs.jpg",
  },
};

const ServiceDetail = () => {
  const { type } = useParams();
  const data = SERVICE_DETAILS[type];

  if (!data)
    return (
      <h2 style={{ padding: "5rem", textAlign: "center", color: "#d4af37" }}>
        Service not found
      </h2>
    );

  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background: "#06080f",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            borderRadius: 22,
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
          }}
        >
          <img
            src={data.image}
            alt={data.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* CONTENT */}
        <div>
          <h1 style={{ color: "#d4af37", fontSize: "2.5rem" }}>
            {data.title}
          </h1>
          <p style={{ marginTop: "1rem", opacity: 0.9 }}>{data.desc}</p>

          <ul style={{ marginTop: "1.8rem", lineHeight: 2 }}>
            {data.points.map((p, i) => (
              <li key={i}>✔ {p}</li>
            ))}
          </ul>

          <button
            style={{
              marginTop: "2rem",
              padding: "0.9rem 2.2rem",
              borderRadius: 14,
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              background: "linear-gradient(135deg,#d4af37,#b8962e)",
              color: "#111827",
              boxShadow: "0 12px 30px rgba(212,175,55,.4)",
            }}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;

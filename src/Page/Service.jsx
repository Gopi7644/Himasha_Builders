import { useEffect, useState } from "react";
import { PROJECTS } from "../data/projects";
import ImageModal from "../components/ImageModal";
import { FaBuilding, FaCouch, FaRing, FaStore } from "react-icons/fa";

const Services = () => {
  const [activeService, setActiveService] = useState("flats");
  const [visible, setVisible] = useState(6);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDesc, setSelectedDesc] = useState("");

  const services = [
    { key: "flats", title: "Flat Design", icon: <FaBuilding /> },
    { key: "interior", title: "Home Interior", icon: <FaCouch /> },
    { key: "marriage", title: "Marriage Hall", icon: <FaRing /> },
    { key: "shop", title: "Shop Design", icon: <FaStore /> },
  ];

  const images = PROJECTS[activeService] || [];

  /* 🔹 अलग-अलग descriptions (per project) */
  const DESCRIPTIONS = {
    flats: [
      "Modern luxury flat interior with premium lighting & marble finish.",
      "Spacious living room design with elegant ceiling and wooden panels.",
      "Contemporary bedroom interior with warm lighting & modular wardrobe.",
      "High-end kitchen design with granite counter & soft-close cabinets.",
      "Minimalist dining area with luxury chandelier and wall texture.",
      "Premium balcony design with wooden deck & glass railing.",
    ],
    interior: [
      "Complete home interior with modular kitchen and false ceiling.",
      "Elegant living room design with designer TV unit and lighting.",
      "Modern bedroom interior with soft textures and ambient lights.",
      "Luxury kitchen with premium fittings and smart storage solutions.",
      "Stylish study room design with wooden shelves and warm lighting.",
      "Classic pooja room interior with carved wooden panels.",
    ],
    marriage: [
      "Royal marriage hall stage design with floral backdrop & lighting.",
      "Grand banquet hall interior with crystal chandeliers and décor.",
      "Luxury entry gate design for wedding with LED and flowers.",
      "Premium seating arrangement with theme-based decoration.",
      "Designer ceiling with golden lighting for wedding ambience.",
      "Elegant dining area layout for large wedding gatherings.",
    ],
    shop: [
      "Modern showroom interior with glass display and LED lighting.",
      "Retail shop design to maximize product visibility & footfall.",
      "Luxury boutique interior with wooden panels and mirrors.",
      "Electronics showroom layout with modular display counters.",
      "Pharmacy interior design with smart storage & billing counter.",
      "Premium jewellery shop design with spotlight display system.",
    ],
  };

  /* Skeleton loading */
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [activeService]);

  /* Title from filename */
  const getTitleFromImage = (img) => {
    const name = img.split("/").pop().split(".")[0];
    return name.replace(/[-_]/g, " ");
  };

  /* Premium tag */
  const getTag = () => {
    if (activeService === "flats") return "Premium Flat";
    if (activeService === "interior") return "Interior Design";
    if (activeService === "marriage") return "Luxury Hall";
    if (activeService === "shop") return "Commercial Design";
    return "Premium Project";
  };

  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background: "linear-gradient(180deg,#06080f,#0b0f1a)",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* ================= HEADER ================= */}
      <header style={{ textAlign: "center", maxWidth: 1200, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "clamp(2.2rem,3.5vw,3rem)",
            fontWeight: 700,
          }}
        >
          Interior Design Services & Projects
        </h1>
        <p style={{ marginTop: 10, color: "#d4af37" }}>
          Explore luxury flats, interiors, halls & commercial designs
        </p>
      </header>

      {/* ================= SERVICE TABS ================= */}
      <div
        style={{
          maxWidth: 1100,
          margin: "3.5rem auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "1.5rem",
        }}
      >
        {services.map((s) => (
          <div
            key={s.key}
            onClick={() => {
              setActiveService(s.key);
              setVisible(6);
              setActiveIndex(null);
            }}
            style={{
              cursor: "pointer",
              padding: "1.6rem",
              borderRadius: 18,
              textAlign: "center",
              background:
                activeService === s.key
                  ? "linear-gradient(135deg,rgba(212,175,55,.18),rgba(212,175,55,.05))"
                  : "rgba(255,255,255,.05)",
              border:
                activeService === s.key
                  ? "1px solid rgba(212,175,55,.45)"
                  : "1px solid rgba(255,255,255,.1)",
              transition: "all .4s ease",
            }}
          >
            <div style={{ fontSize: 32, color: "#d4af37" }}>{s.icon}</div>
            <h3 style={{ marginTop: 8 }}>{s.title}</h3>
          </div>
        ))}
      </div>

      {/* ================= GALLERY ================= */}
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "1.6rem",
        }}
      >
        {(loading ? Array.from({ length: 6 }) : images.slice(0, visible)).map(
          (img, i) =>
            loading ? (
              <div
                key={i}
                style={{
                  height: 280,
                  borderRadius: 22,
                  background: "linear-gradient(90deg,#111,#222,#111)",
                  animation: "pulse 1.4s infinite",
                }}
              />
            ) : (
              <div
                key={i}
                style={{
                  position: "relative",
                  height: 300,
                  borderRadius: 22,
                  overflow: "hidden",
                  background: "#000",
                  boxShadow: "0 25px 60px rgba(0,0,0,.45)",
                }}
              >
                <img
                  src={img}
                  alt={getTitleFromImage(img)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.85))",
                  }}
                />

                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    padding: "6px 14px",
                    borderRadius: 20,
                    background: "rgba(212,175,55,.15)",
                    border: "1px solid rgba(212,175,55,.5)",
                    color: "#d4af37",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {getTag()}
                </div>

                {/* Details */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: 18,
                    right: 18,
                    color: "#fff",
                  }}
                >
                  <h3 style={{ fontSize: 18, fontWeight: 700 }}>
                    {getTitleFromImage(img)}
                  </h3>

                  <p
                    style={{
                      fontSize: 13,
                      opacity: 0.85,
                      marginBottom: 8,
                    }}
                  >
                    {DESCRIPTIONS[activeService][i % 6]}
                  </p>

                  <span
                    onClick={() => {
                      setActiveIndex(i);
                      setSelectedDesc(DESCRIPTIONS[activeService][i % 6]);
                    }}
                    style={{
                      color: "#d4af37",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Read More →
                  </span>
                </div>
              </div>
            )
        )}
      </div>

      {/* ================= LOAD MORE ================= */}
      {!loading && visible < images.length && (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button
            onClick={() => setVisible((v) => v + 6)}
            style={{
              padding: "0.9rem 2.4rem",
              borderRadius: 14,
              background: "linear-gradient(135deg,#d4af37,#b8962e)",
              color: "#111827",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
            }}
          >
            Load More Projects
          </button>
        </div>
      )}

      {/* ================= MODAL (FULL IMAGE + FULL DESCRIPTION) ================= */}
      {activeIndex !== null && (
        <ImageModal
          images={images}
          index={activeIndex}
          description={selectedDesc}
          onClose={() => setActiveIndex(null)}
        />
      )}

      <style>{`
        @keyframes pulse {
          0% {opacity: .4}
          50% {opacity: .8}
          100% {opacity: .4}
        }
      `}</style>
    </section>
  );
};

export default Services;

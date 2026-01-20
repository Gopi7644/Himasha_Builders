import { useEffect, useState } from "react";
import { PROJECTS } from "../data/projects";
import ImageModal from "../components/ImageModal";
import { FaBuilding, FaCouch, FaRing, FaStore } from "react-icons/fa";

const Services = () => {
  const [activeService, setActiveService] = useState("flats");
  const [visible, setVisible] = useState(12);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const services = [
    { key: "flats", title: "Flat Design", icon: <FaBuilding /> },
    { key: "interior", title: "Home Interior", icon: <FaCouch /> },
    { key: "marriage", title: "Marriage Hall", icon: <FaRing /> },
    { key: "shop", title: "Shop Design", icon: <FaStore /> },
  ];

  const images = PROJECTS[activeService] || [];

  /* Skeleton loading effect */
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [activeService]);

  /* 🔹 Image name se automatic title banana */
  const getTitleFromImage = (img) => {
    const name = img.split("/").pop().split(".")[0];
    return name.replace(/[-_]/g, " ");
  };

  /* 🔹 Category ke hisab se premium tag */
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
              setVisible(12);
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

      {/* ================= GALLERY (ULTRA PREMIUM CARDS) ================= */}
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "1.6rem",
        }}
      >
        {(loading ? Array.from({ length: 8 }) : images.slice(0, visible)).map(
          (img, i) =>
            loading ? (
              /* Skeleton */
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
                onClick={() => setActiveIndex(i)}
                style={{
                  position: "relative",
                  height: 300,
                  borderRadius: 22,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#000",
                  boxShadow: "0 25px 60px rgba(0,0,0,.45)",
                  transition: "transform .5s ease, box-shadow .5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 35px 80px rgba(212,175,55,.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 60px rgba(0,0,0,.45)";
                }}
              >
                {/* Image */}
                <img
                  src={img}
                  alt={getTitleFromImage(img)}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform .7s ease",
                  }}
                />

                {/* Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.85))",
                  }}
                />

                {/* Premium Badge */}
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

                {/* Details Panel */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    left: 18,
                    right: 18,
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      color: "#d4af37",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {activeService}
                  </div>

                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: "6px 0" }}>
                    {getTitleFromImage(img)}
                  </h3>

                  <div
                    style={{
                      fontSize: 13,
                      opacity: 0.85,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>India</span>
                    <span style={{ color: "#d4af37", fontWeight: 600 }}>
                      View Project →
                    </span>
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      {/* ================= LOAD MORE ================= */}
      {!loading && visible < images.length && (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button
            onClick={() => setVisible((v) => v + 8)}
            style={{
              padding: "0.9rem 2.4rem",
              borderRadius: 14,
              background: "linear-gradient(135deg,#d4af37,#b8962e)",
              color: "#111827",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 14px 32px rgba(212,175,55,.35)",
            }}
          >
            Load More Projects
          </button>
        </div>
      )}

      {/* ================= MODAL ================= */}
      {activeIndex !== null && (
        <ImageModal
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}

      {/* Skeleton animation */}
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

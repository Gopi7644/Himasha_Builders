import { useEffect, useState } from "react";
import { PROJECTS } from "../data/projects";
import ImageModal from "../components/ImageModal";
import {
  FaBuilding,
  FaCouch,
  FaRing,
  FaStore,
} from "react-icons/fa";

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

  /* 🔹 Skeleton loading effect */
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [activeService]);

  const getTitleFromImage = (img) => {
    const name = img.split("/").pop().split(".")[0];
    return name.replace(/[-_]/g, " ");
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
            }}
          >
            <div style={{ fontSize: 32, color: "#d4af37" }}>
              {s.icon}
            </div>
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
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "1.4rem",
        }}
      >
        {(loading ? Array.from({ length: 8 }) : images.slice(0, visible)).map(
          (img, i) =>
            loading ? (
              /* Skeleton Card */
              <div
                key={i}
                style={{
                  height: 240,
                  borderRadius: 16,
                  background:
                    "linear-gradient(90deg,#111,#222,#111)",
                  animation: "pulse 1.4s infinite",
                }}
              />
            ) : (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  height: 240,
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  background: "#000",
                }}
              >
                <img
                  src={img}
                  alt={getTitleFromImage(img)}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform .6s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.6))",
                  }}
                />

                {/* Title */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 12,
                    right: 12,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: "#d4af37",
                      textTransform: "uppercase",
                    }}
                  >
                    {activeService}
                  </span>
                  <div style={{ fontWeight: 600 }}>
                    {getTitleFromImage(img)}
                  </div>
                </div>
              </div>
            )
        )}
      </div>

      {/* ================= LOAD MORE BUTTON ================= */}
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

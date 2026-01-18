import { useEffect, useState } from "react";
import FloatingForm from "./FloatingForm";
import { HERO_IMAGES } from "../data/heroImages";

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // 🔁 Background Carousel
  useEffect(() => {
    if (!HERO_IMAGES.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 🎯 CTA Scroll
  const scrollToForm = () => {
    const form = document.getElementById("floating-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 🖼 Background Images */}
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

      {/* 🌑 Ultra-Premium Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.25) 100%)",
          zIndex: 1,
        }}
      />

      {/* 🧠 Content Wrapper */}
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
          gap: "3rem",
        }}
      >
        {/* ⭐ LEFT SIDE — ULTRA-PREMIUM GLASS CONTENT */}
        <div
          style={{
            maxWidth: "560px",
            color: "#ffffff",
            padding: "2.5rem",
            borderRadius: "18px",
            background: "rgba(0, 0, 0, 0.38)",
            backdropFilter: "blur(7px)",
            WebkitBackdropFilter: "blur(7px)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "0.5px",
            }}
          >
            Luxury Interior Design <br />
            Crafted for Elegant Living
          </h1>

          <p
            style={{
              marginTop: "0.8rem",
              fontSize: "1.1rem",
              color: "#d4af37",
              letterSpacing: "0.6px",
            }}
          >
            Designing homes that reflect your lifestyle & status
          </p>

          <ul
            style={{
              marginTop: "2rem",
              listStyle: "none",
              padding: 0,
              fontSize: "1rem",
              lineHeight: 1.9,
            }}
          >
            <li>✔ Premium Residential & Commercial Interiors</li>
            <li>✔ Turnkey Execution with Luxury Finishes</li>
            <li>✔ Transparent Pricing & On-Time Delivery</li>
          </ul>

          <button
            onClick={scrollToForm}
            style={{
              marginTop: "2.5rem",
              padding: "14px 36px",
              background: "linear-gradient(135deg, #d4af37, #b8962e)",
              color: "#000",
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(212,175,55,0.35)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Get Free Design Consultation
          </button>

          <p
            style={{
              marginTop: "1.2rem",
              fontSize: "0.9rem",
              opacity: 0.85,
            }}
          >
            Serving Luxury Interiors Across Bihar & Jharkhand
          </p>
        </div>

        {/* 📩 RIGHT SIDE — FORM */}
        <div
          id="floating-form"
          style={{
            width: "100%",
            maxWidth: "420px",
          }}
        >
          <FloatingForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useEffect, useState } from "react";

const OfferBanner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      aria-label="Special pricing offer"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0.6rem 1rem",
        background: "transparent",
      }}
    >
      <div
        style={{
          position: "relative",
          padding: "0.55rem 1.2rem",
          borderRadius: "10px",
          background: "rgba(15,23,42,0.65)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "#f5f5f5",
          fontSize: "0.95rem",
          fontWeight: 600,
          letterSpacing: "0.2px",
          overflow: "hidden",
          transform: animate ? "scale(1)" : "scale(0.95)",
          opacity: animate ? 1 : 0,
          transition: "all 500ms ease",
        }}
      >
        {/* Animated Borders */}
        {["top", "right", "bottom", "left"].map((side) => (
          <span
            key={side}
            style={{
              position: "absolute",
              background: "linear-gradient(90deg,#d4af37,#b8962e)",
              ...(side === "top" && {
                top: 0,
                left: animate ? 0 : "-100%",
                height: "2px",
                width: "100%",
                transition: "left 0.8s ease",
              }),
              ...(side === "bottom" && {
                bottom: 0,
                right: animate ? 0 : "-100%",
                height: "2px",
                width: "100%",
                transition: "right 0.8s ease 0.2s",
              }),
              ...(side === "left" && {
                left: 0,
                bottom: animate ? 0 : "-100%",
                width: "2px",
                height: "100%",
                transition: "bottom 0.8s ease 0.4s",
              }),
              ...(side === "right" && {
                right: 0,
                top: animate ? 0 : "-100%",
                width: "2px",
                height: "100%",
                transition: "top 0.8s ease 0.6s",
              }),
            }}
          />
        ))}

        {/* Text */}
        <p
          style={{
            margin: 0,
            position: "relative",
            zIndex: 2,
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          🎯{" "}
          <strong style={{ color: "#d4af37" }}>
            20% Lower Than Market Rate
          </strong>
        </p>
      </div>
    </section>
  );
};

export default OfferBanner;

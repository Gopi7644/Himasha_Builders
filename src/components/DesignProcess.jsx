import {
  FaRegHandshake,
  FaDraftingCompass,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const DesignProcess = () => {
  const steps = [
    {
      icon: <FaRegHandshake />,
      title: "Consultation",
      desc: "Understanding your vision, lifestyle, space & budget",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Concept & Design",
      desc: "Premium layouts, 3D designs & curated material selection",
    },
    {
      icon: <FaTools />,
      title: "Execution",
      desc: "Flawless execution with skilled craftsmanship",
    },
    {
      icon: <FaCheckCircle />,
      title: "Final Handover",
      desc: "Quality checks & elegant finishing touches",
    },
  ];

  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(180deg, #0b0f1a, #06080f)",
        color: "#ffffff",
      }}
    >
      {/* 🔹 Header */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 3vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "0.6px",
          }}
        >
          Our Design Process
        </h2>

        <p
          style={{
            marginTop: "0.8rem",
            color: "#d4af37",
            fontSize: "1.05rem",
          }}
        >
          A refined approach to luxury interior design
        </p>
      </div>

      {/* 🔹 Process Cards */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "4rem auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {steps.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "2.8rem 2.2rem",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
              border: "1px solid rgba(212,175,55,0.15)",
              backdropFilter: "blur(8px)",
              transition: "all 0.35s ease",
              textAlign: "center",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 25px 50px rgba(212,175,55,0.18)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Icon */}
            <div
              style={{
                fontSize: "2.6rem",
                color: "#d4af37",
                marginBottom: "1.4rem",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                letterSpacing: "0.4px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                marginTop: "0.8rem",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                opacity: 0.9,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignProcess;

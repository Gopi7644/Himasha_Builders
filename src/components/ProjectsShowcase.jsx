import { FaArrowRight } from "react-icons/fa";

const ProjectsShowcase = () => {
  const projects = [
    {
      title: "Luxury Living Room",
      category: "Residential Interior",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Modern Modular Kitchen",
      category: "Kitchen Design",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    },
    {
      title: "Elegant Bedroom Suite",
      category: "Bedroom Interior",
      image:
        "https://images.unsplash.com/photo-1615873968403-89e068629265",
    },
    {
      title: "Premium Office Space",
      category: "Commercial Interior",
      image:
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
    },
  ];

  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(180deg, #06080f, #0b0f1a)",
        color: "#ffffff",
      }}
    >
      {/* 🔹 Section Header */}
      <div
        style={{
          maxWidth: "1200px",
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
          Luxury Projects Showcase
        </h2>

        <p
          style={{
            marginTop: "0.8rem",
            color: "#d4af37",
            fontSize: "1.05rem",
          }}
        >
          A glimpse of our refined craftsmanship
        </p>
      </div>

      {/* 🔹 Projects Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "4rem auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {projects.map((item, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              height: "380px",
              borderRadius: "22px",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const overlay = e.currentTarget.querySelector(".overlay");
              overlay.style.opacity = 1;
              overlay.style.transform = "translateY(0)";
            }}
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector(".overlay");
              overlay.style.opacity = 0;
              overlay.style.transform = "translateY(20px)";
            }}
          >
            {/* Image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "transform 0.6s ease",
              }}
            />

            {/* Dark Gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.85))",
              }}
            />

            {/* Hover Reveal Content */}
            <div
              className="overlay"
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "2.2rem",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.45s ease",
              }}
            >
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "#d4af37",
                  letterSpacing: "0.6px",
                }}
              >
                {item.category}
              </span>

              <h3
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h3>

              <div
                style={{
                  marginTop: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "0.95rem",
                  color: "#ffffff",
                  opacity: 0.9,
                }}
              >
                View Project <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;

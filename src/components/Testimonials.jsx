import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Flat Owner, Patna",
    rating: 5,
    text: "The finishing quality and design exceeded our expectations. Truly a luxury experience.",
  },
  {
    name: "Anjali Verma",
    role: "Home Interior Client",
    rating: 5,
    text: "Very professional team. Timely delivery and beautiful interiors. Highly recommended.",
  },
  {
    name: "Sanjay Gupta",
    role: "Shop Owner",
    rating: 4,
    text: "Creative designs and excellent execution. My showroom now looks premium and modern.",
  },
];

const Testimonials = () => {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background: "linear-gradient(180deg,#0b0f1a,#06080f)",
        color: "#ffffff",
      }}
    >
      {/* 🔹 HEADER */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(2rem,3vw,2.6rem)",
            fontWeight: 700,
          }}
        >
          What Our Clients Say
        </h2>

        <p style={{ marginTop: "0.8rem", color: "#d4af37" }}>
          Trusted by homeowners & commercial clients
        </p>
      </div>

      {/* 🔹 TESTIMONIAL CARDS */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "4rem auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "2rem",
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              padding: "2.4rem",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))",
              border: "1px solid rgba(212,175,55,0.25)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            {/* Stars */}
            <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
              {Array.from({ length: t.rating }).map((_, j) => (
                <FaStar key={j} color="#d4af37" />
              ))}
            </div>

            <p style={{ lineHeight: 1.7, opacity: 0.9 }}>{t.text}</p>

            <div style={{ marginTop: "1.5rem" }}>
              <strong>{t.name}</strong>
              <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

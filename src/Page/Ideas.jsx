import React from "react";

const ideas = [
  { title: "Modern Living Room", img: "/src/assets/ideas/idea1.jpg" },
  { title: "Luxury Bedroom", img: "/src/assets/ideas/idea2.jpg" },
  { title: "Minimalist Kitchen", img: "/src/assets/ideas/idea3.jpg" },
  { title: "Elegant Bathroom", img: "/src/assets/ideas/idea4.jpg" },
];

const Ideas = () => {
  return (
    <section style={{ background: "#fff", padding: "4rem 1.5rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
        Design Ideas & Inspiration
      </h1>

      <div style={grid}>
        {ideas.map((idea, i) => (
          <div key={i} style={card}>
            <img src={idea.img} alt={idea.title} style={img} />
            <h3>{idea.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const grid = {
  maxWidth: 1300,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "1.6rem",
};

const card = { borderRadius: 18, overflow: "hidden" };
const img = { width: "100%", height: 280, objectFit: "cover" };

export default Ideas;

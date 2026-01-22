import React from "react";

const lights = [
  { title: "Chandeliers", img: "/src/assets/lights/light1.jpg" },
  { title: "Ceiling Lights", img: "/src/assets/lights/light2.jpg" },
  { title: "Wall Lights", img: "/src/assets/lights/light3.jpg" },
  { title: "LED Strip Lights", img: "/src/assets/lights/light4.jpg" },
];

const Lights = () => {
  return (
    <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>
        Designer Lighting Solutions
      </h1>

      <div style={grid}>
        {lights.map((l, i) => (
          <div key={i} style={card}>
            <img src={l.img} alt={l.title} style={img} />
            <h3 style={{ marginTop: "1rem" }}>{l.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const grid = {
  maxWidth: 1200,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "1.5rem",
};

const card = {
  padding: "1rem",
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
  textAlign: "center",
};

const img = { width: "100%", borderRadius: 12 };

export default Lights;

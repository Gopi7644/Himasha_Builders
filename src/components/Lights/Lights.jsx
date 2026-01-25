import React from "react";
import { NavLink } from "react-router-dom";

import heroImg from "../../assets/lights/hero.jpg";
import l1 from "../../assets/lights/light1.jpg";
import l2 from "../../assets/lights/light2.jpg";
import l3 from "../../assets/lights/light3.jpg";
import l4 from "../../assets/lights/light4.jpg";
import l5 from "../../assets/lights/light5.jpg";
import l6 from "../../assets/lights/light6.jpg";

const lights = [
  { title: "Luxury Chandeliers", style: "Premium", image: l1 },
  { title: "Designer Ceiling Lights", style: "Modern", image: l2 },
  { title: "Ambient Wall Lights", style: "Classic", image: l3 },
  { title: "LED Strip Lighting", style: "Contemporary", image: l4 },
  { title: "Pendant Lighting", style: "Luxury", image: l5 },
  { title: "Smart Lighting System", style: "Smart", image: l6 },
];

const features = [
  "Energy Efficient",
  "Smart Control",
  "Long Life LEDs",
  "Premium Finish",
  "Low Heat Emission",
  "Eco Friendly",
];

const Lights = () => {
  return (
    <section className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <div
        className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Designer Lighting Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Illuminate your spaces with elegance, technology and timeless beauty.
          </p>
          <NavLink
            to="/contact"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black font-bold text-lg"
          >
            Get Free Lighting Consultation
          </NavLink>
        </div>
      </div>

      {/* ================= FEATURE STRIP ================= */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white shadow hover:shadow-lg transition font-semibold text-gray-800"
            >
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {lights.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-70 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-6 bg-white">
              <span className="text-sm text-[#d4af37] font-semibold">
                {item.style}
              </span>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <NavLink
                to="/contact"
                className="inline-block mt-4 text-[#d4af37] font-semibold hover:underline"
              >
                Explore →
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={l6}
            alt="Smart Lighting"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold">
              Smart Lighting for Modern Living
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our lighting solutions are engineered to enhance ambience while
              reducing energy consumption. Experience intelligent lighting that
              adapts to your lifestyle and mood.
            </p>
            <NavLink
              to="/contact"
              className="inline-block mt-6 px-7 py-3 rounded-full bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black font-bold"
            >
              Talk to Our Lighting Expert
            </NavLink>
          </div>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold">
          Transform your home with intelligent lighting
        </h2>
        <p className="mt-4 text-gray-600">
          Book a free consultation and get customized lighting solutions.
        </p>
        <NavLink
          to="/contact"
          className="inline-block mt-6 px-9 py-3 rounded-full bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black font-bold"
        >
          Book Appointment
        </NavLink>
      </div>
    </section>
  );
};

export default Lights;

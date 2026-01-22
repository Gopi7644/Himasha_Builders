import React from "react";
import { NavLink } from "react-router-dom";

import heroImg from "../assets/doors/hero.jpg";
import door1 from "../assets/doors/door1.jpg";
import door2 from "../assets/doors/door2.jpg";
import door3 from "../assets/doors/door3.jpg";
import window1 from "../assets/doors/window1.jpg";
import window2 from "../assets/doors/window2.jpg";
import window3 from "../assets/doors/window3.jpg";

const products = [
  {
    title: "Premium Wooden Doors",
    type: "Door",
    desc: "High-quality wooden doors with weather-resistant coating.",
    image: door1,
  },
  {
    title: "Modern Glass Doors",
    type: "Door",
    desc: "Elegant glass doors with thermal insulation.",
    image: door2,
  },
  {
    title: "Designer Main Doors",
    type: "Door",
    desc: "Crafted designer doors with durability and elegance.",
    image: door3,
  },
  {
    title: "French Windows",
    type: "Window",
    desc: "Classic French windows with premium finish.",
    image: window1,
  },
  {
    title: "Sliding Windows",
    type: "Window",
    desc: "Space-saving sliding windows with UV protection.",
    image: window2,
  },
  {
    title: "Panoramic Windows",
    type: "Window",
    desc: "Wide glass windows for maximum daylight.",
    image: window3,
  },
];

const features = [
  "Weather Resistant",
  "UV Protection",
  "Sound Insulation",
  "Long Lasting Finish",
  "Energy Efficient",
  "Low Maintenance",
];

const Doors = () => {
  return (
    <section className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <div
        className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Doors & Windows
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Discover premium weather-resistant doors and windows engineered for
            durability, beauty, and protection.
          </p>
          <NavLink
            to="/enquiry"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-black font-bold"
          >
            Get Free Consultation
          </NavLink>
        </div>
      </div>

      {/* ================= FEATURES STRIP ================= */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white shadow hover:shadow-lg transition font-semibold"
            >
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-6">
              <span className="text-sm text-[#d4af37] font-semibold">
                {item.type}
              </span>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                {item.desc}
              </p>

              <NavLink
                to={`/doors/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                className="inline-block mt-4 text-sm font-semibold text-[#d4af37] hover:underline"
              >
                View Details →
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold">
          Build weather-resistant homes with premium doors & windows
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Designed to withstand extreme weather conditions while enhancing your
          home's beauty and safety.
        </p>
        <NavLink
          to="/enquiry"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8962e] text-black font-bold"
        >
          Talk to Our Expert
        </NavLink>
      </div>
    </section>
  );
};

export default Doors;

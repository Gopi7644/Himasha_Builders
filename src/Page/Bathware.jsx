import React from "react";
import { NavLink } from "react-router-dom";

import heroVideo from "../assets/bathware/hero.mp4";
import bath1 from "../assets/bathware/bath1.jpg";
import bath2 from "../assets/bathware/bath2.jpg";
import bath3 from "../assets/bathware/bath3.jpg";
import bath4 from "../assets/bathware/bath4.jpg";

const bathwareItems = [
  {
    title: "Luxury Showers",
    desc: "Rain showers with temperature control & mist spray technology.",
    image: bath1,
  },
  {
    title: "Designer Washbasins",
    desc: "Modern washbasins crafted with ceramic precision.",
    image: bath2,
  },
  {
    title: "Premium Bathtubs",
    desc: "Deep soaking tubs with spa-like comfort.",
    image: bath3,
  },
  {
    title: "Wall Mounted Fixtures",
    desc: "Minimal fixtures with concealed elegance.",
    image: bath4,
  },
];

const features = [
  "Water Efficient",
  "Anti-Rust Coating",
  "Thermal Control",
  "Easy Maintenance",
  "Luxury Finish",
  "Eco Friendly",
];

const Bathware = () => {
  return (
    <section className="bg-white min-h-screen">

      {/* ================= VIDEO HERO ================= */}
      <div className="relative h-[75vh] overflow-hidden flex items-center justify-center">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Luxury Bathware for Modern Living
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Redefine your bath space with elegance, innovation and comfort.
          </p>
          <NavLink
            to="/contact"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black font-bold text-lg"
          >
            Get Free Design Consultation
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

      {/* ================= PRODUCT GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {bathwareItems.map((item, i) => (
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
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                {item.desc}
              </p>
              <NavLink
                to="/contact"
                className="inline-block mt-4 text-[#d4af37] font-semibold hover:underline"
              >
                Get Quote →
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={bath3}
            alt="Luxury Bath"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold">
              Where Design Meets Comfort
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our premium bathware solutions are engineered to bring spa-like
              comfort into your home. With cutting-edge materials and timeless
              aesthetics, every piece ensures durability, luxury and ease of
              maintenance.
            </p>
            <NavLink
              to="/contact"
              className="inline-block mt-6 px-7 py-3 rounded-full bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black font-bold"
            >
              Talk to Our Expert
            </NavLink>
          </div>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold">
          Transform your bathroom into a luxury retreat
        </h2>
        <p className="mt-4 text-gray-600">
          Book a free consultation and get personalized bathware solutions.
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

export default Bathware;

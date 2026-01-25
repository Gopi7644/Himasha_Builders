import React, { useState, useEffect } from "react";

/* ================= IMAGE IMPORTS ================= */
import heroImg from "../../assets/kitchen/modular-hero.jpg";
import slide1 from "../../assets/kitchen/modular1.jpg";
import slide2 from "../../assets/kitchen/modular2.jpg";
import slide3 from "../../assets/kitchen/modular3.jpg";

import type1 from "../../assets/kitchen/lshape.jpg";
import type2 from "../../assets/kitchen/ushape.jpg";
import type3 from "../../assets/kitchen/island.jpg";
import type4 from "../../assets/kitchen/parallel.jpg";

/* ================= DATA ================= */
const slides = [slide1, slide2, slide3];

const layouts = [
  { img: type1, title: "L-Shaped Kitchen" },
  { img: type2, title: "U-Shaped Kitchen" },
  { img: type3, title: "Island Kitchen" },
  { img: type4, title: "Parallel Kitchen" },
];

const reasons = [
  "Premium Quality Materials",
  "10+ Years Warranty",
  "German Hardware Fittings",
  "3D Design Before Execution",
  "On-Time Delivery",
  "Transparent Pricing",
];

const ModularKitchens = () => {
  const [index, setIndex] = useState(0);

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Premium Modular Kitchens
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Smart. Stylish. Space Optimized. Designed for Modern Living.
          </p>

          {/* Animated Button */}
          <button className="mt-8 relative inline-flex items-center justify-center rounded-full px-10 py-4 font-bold text-black bg-linear-to-r from-[#d4af37] to-[#b8962e] overflow-hidden group">
            <span className="absolute inset-0 bg-linear-to-r from-[#b8962e] to-[#d4af37] opacity-0 group-hover:opacity-100 transition"></span>
            <span className="relative group-hover:tracking-wider transition-all">
              Book Free Design Consultation
            </span>
          </button>
        </div>
      </section>

      {/* ================= SLIDER ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Our Modular Kitchen Designs
        </h2>

        <div className="relative h-112.5 overflow-hidden rounded-3xl shadow-2xl">
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              loading="lazy"
              decoding="async"
              className={`
                absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out
                ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-110"}
              `}
            />
          ))}

          {/* Controls */}
          <button
            onClick={() =>
              setIndex((index - 1 + slides.length) % slides.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-xl hover:scale-110 transition"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex((index + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-xl hover:scale-110 transition"
          >
            ›
          </button>
        </div>
      </section>

      {/* ================= MODULAR VS SIMPLE ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          Modular Kitchen vs Simple Kitchen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-white p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-[#b8962e]">
              Modular Kitchen
            </h3>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✔ Factory finished precision cabinets</li>
              <li>✔ Modern storage & accessories</li>
              <li>✔ Easy installation & maintenance</li>
              <li>✔ Highly customizable</li>
              <li>✔ Premium aesthetics</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-black text-white p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4 text-[#d4af37]">
              Simple Kitchen
            </h3>
            <ul className="space-y-3 font-medium">
              <li>✖ On-site carpentry work</li>
              <li>✖ Limited storage options</li>
              <li>✖ Longer construction time</li>
              <li>✖ Low customization</li>
              <li>✖ Basic appearance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= LAYOUT TYPES ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          Popular Modular Kitchen Layouts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {layouts.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="absolute bottom-0 w-full text-center p-4 text-white font-bold text-lg tracking-wide">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          Why Choose Our Modular Kitchens?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-neutral-900 p-6 text-center font-semibold hover:scale-105 hover:bg-neutral-800 transition-all duration-500"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Transform Your Kitchen Today
        </h2>
        <p className="mt-4 text-lg font-medium">
          Book your free design consultation now.
        </p>

        {/* Animated CTA Button */}
        <button className="mt-8 relative inline-flex items-center justify-center rounded-full px-12 py-4 font-bold text-white bg-black overflow-hidden group">
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition"></span>
          <span className="relative group-hover:tracking-wider transition-all">
            Get Free Quote
          </span>
        </button>
      </section>

    </div>
  );
};

export default ModularKitchens;

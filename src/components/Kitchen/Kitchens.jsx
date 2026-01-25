import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

/* ================= IMAGE IMPORTS ================= */
import modular from "../../assets/kitchen/modular.jpg";
import island from "../../assets/kitchen/island.jpg";
import parallel from "../../assets/kitchen/parallel.jpg";
import open from "../../assets/kitchen/open.jpg";

import hero1 from "../../assets/kitchen/hero1.jpg";
import hero2 from "../../assets/kitchen/hero2.jpg";
import hero3 from "../../assets/kitchen/hero3.jpg";

/* ================= DATA ================= */
const heroSlides = [
  { image: hero1, title: "Modular Kitchens", subtitle: "Designed for smart living" },
  { image: hero2, title: "Island Kitchens", subtitle: "Luxury & social cooking" },
  { image: hero3, title: "Open Kitchens", subtitle: "Seamless modern elegance" },
];

const kitchenTypes = [
  {
    title: "Modular Kitchen",
    desc: "Highly efficient, factory-finished cabinets with smart storage and modern design. Perfect for long-term durability and luxury living.",
    image: modular,
  },
  {
    title: "Island Kitchen",
    desc: "A statement kitchen with a central island for cooking, dining and socializing. Ideal for spacious modern homes.",
    image: island,
  },
  {
    title: "Parallel Kitchen",
    desc: "Best for compact homes, offering maximum efficiency and seamless workflow between cooking and cleaning zones.",
    image: parallel,
  },
  {
    title: "Open Kitchen",
    desc: "Blends your kitchen with living space for openness, light and premium aesthetics.",
    image: open,
  },
];

const Kitchens = () => {
  const [current, setCurrent] = useState(0);

  /* ================= AUTO SLIDE (RIGHT → LEFT) ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-linear-to-b from-gray-50 to-gray-100 min-h-screen">

      {/* ================= HERO SLIDER ================= */}
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-center bg-white/70 backdrop-blur-sm px-8 py-10 rounded-2xl shadow-xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                  {slide.title}
                </h1>
                <p className="mt-4 text-gray-700 text-lg">
                  {slide.subtitle}
                </p>
                <NavLink
                  to="/enquiry"
                  className="inline-block mt-6 px-8 py-3 rounded-full bg-linear-to-r from-[#d4af37] to-[#b8962e] font-bold text-black hover:scale-105 transition"
                >
                  Book Free Design Consultation
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-4xl mx-auto text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Designed for the Way You Live
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          At Himasha Builders, we craft kitchens that are visually stunning and
          enhance your lifestyle with comfort, efficiency and elegance.
        </p>
      </div>

      {/* ================= STYLISH KITCHEN TYPES ================= */}
      {kitchenTypes.map((item, index) => (
        <div
          key={index}
          className={`max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-12 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-xl group">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-90 object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {item.desc}
            </p>
            <NavLink
              to="/enquiry"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-black text-white font-semibold hover:scale-105 transition"
            >
              Explore Designs →
            </NavLink>
          </div>
        </div>
      ))}

      {/* ================= EASY LIFE ================= */}
      <div className="bg-black text-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          How Our Kitchens Make Your Life Easier
        </h2>
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Smart space utilization",
            "Effortless cleaning",
            "Long-lasting materials",
            "Time-saving workflow",
            "Energy-efficient layouts",
            "Premium comfort & safety",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-neutral-900 p-6 rounded-2xl font-semibold hover:scale-105 transition"
            >
              ✔ {text}
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-linear-to-r from-[#d4af37] to-[#b8962e] py-20 text-center text-black px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Your Dream Kitchen Starts Here
        </h2>
        <p className="mt-4 text-lg font-medium">
          Get expert guidance, transparent pricing and flawless execution.
        </p>
        <NavLink
          to="/enquiry"
          className="inline-block mt-8 px-10 py-4 rounded-full bg-black text-white font-bold hover:scale-110 transition"
        >
          Talk to Our Kitchen Expert
        </NavLink>
      </div>
    </section>
  );
};

export default Kitchens;

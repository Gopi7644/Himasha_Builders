import React from "react";
import { NavLink } from "react-router-dom";

import heroImg from "../../assets/wardrobes/hero.jpg";
import w1 from "../../assets/wardrobes/design1.jpg";
import w2 from "../../assets/wardrobes/design2.jpg";
import w3 from "../../assets/wardrobes/design3.jpg";
import w4 from "../../assets/wardrobes/design4.jpg";
import w5 from "../../assets/wardrobes/design5.jpg";
import w6 from "../../assets/wardrobes/design6.jpg";
import w7 from "../../assets/wardrobes/design7.jpg";
import w8 from "../../assets/wardrobes/design8.jpg";

const wardrobes = [
  { id: 1, title: "Sliding Door Wardrobe", style: "Modern", image: w1 },
  { id: 2, title: "Walk-in Closet", style: "Luxury", image: w2 },
  { id: 3, title: "Wood Finish Wardrobe", style: "Classic", image: w3 },
  { id: 4, title: "Minimal Wardrobe", style: "Modern", image: w4 },
  { id: 5, title: "Glass Wardrobe", style: "Luxury", image: w5 },
  { id: 6, title: "Premium Closet", style: "Luxury", image: w6 },
  { id: 7, title: "Compact Wardrobe", style: "Compact", image: w7 },
  { id: 8, title: "Designer Wardrobe", style: "Premium", image: w8 },
];

const Wardrobes = () => {
  return (
    <section className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Sleek Wardrobes
          </h1>
          <p className="mt-3 text-lg md:text-xl opacity-90">
            Designed for style, space & elegance
          </p>
        </div>
      </div>

      {/* ================= FILTER STRIP (Asian Paints Inspired) ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {["All", "Modern", "Luxury", "Classic", "Compact", "Premium"].map(
            (filter) => (
              <button
                key={filter}
                className="px-5 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-[#d4af37] hover:text-black transition"
              >
                {filter}
              </button>
            )
          )}
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {wardrobes.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-75 object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-100 flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg">
                {item.title}
              </h3>
              <span className="text-sm text-[#d4af37]">{item.style}</span>

              <NavLink
                to={`/wardrobes/${item.id}`}
                className="mt-2 inline-block text-sm font-semibold text-[#d4af37] hover:underline"
              >
                View Details →
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-gray-100 py-14 text-center">
        <h2 className="text-3xl font-bold">
          Design your perfect wardrobe today
        </h2>
        <p className="mt-3 text-gray-600">
          Get personalized wardrobe designs with transparent pricing.
        </p>
        <NavLink
          to="/enquiry"
          className="inline-block mt-6 px-8 py-3 rounded-full bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black font-bold"
        >
          Talk to a Wardrobe Expert
        </NavLink>
      </div>
    </section>
  );
};

export default Wardrobes;

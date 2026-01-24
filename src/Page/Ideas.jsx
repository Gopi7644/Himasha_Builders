import React from "react";
import { NavLink } from "react-router-dom";

import heroImg from "../assets/ideas/interior-hero.jpg";
import livingImg from "../assets/ideas/living-room.jpg";
import bedroomImg from "../assets/ideas/bedroom.jpg";
import diningImg from "../assets/ideas/dining.jpg";
import bathroomImg from "../assets/ideas/bathroom.jpg";
import officeImg from "../assets/ideas/home-office.jpg";
import kitchenImg from "../assets/ideas/kitchen.jpg";

const ideasCategories = [
  {
    title: "Living Room Ideas",
    desc: "Create a warm, inviting ambiance perfect for gatherings and relaxation.",
    image: livingImg,
    link: "/ideas/living-room",
  },
  {
    title: "Bedroom Ideas",
    desc: "Explore serene and stylish bedroom designs that enhance comfort.",
    image: bedroomImg,
    link: "/ideas/bedroom",
  },
  {
    title: "Dining Room Ideas",
    desc: "Elevate family meals with elegant dining space design concepts.",
    image: diningImg,
    link: "/ideas/dining-room",
  },
  {
    title: "Bathroom Ideas",
    desc: "Transform your bathroom into a spa-like haven with modern designs.",
    image: bathroomImg,
    link: "/ideas/bathroom",
  },
  {
    title: "Home Office Ideas",
    desc: "Design productive and stylish workspaces for remote work life.",
    image: officeImg,
    link: "/ideas/home-office",
  },
  {
    title: "Kitchen Ideas",
    desc: "Discover functional and aesthetic kitchen design inspirations.",
    image: kitchenImg,
    link: "/ideas/kitchen",
  },
];

const Ideas = () => {
  return (
    <section className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <div
        className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Interior Design Ideas & Inspiration
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Explore beautiful design ideas for every room and every lifestyle.
          </p>
        </div>
      </div>

      {/* ================= INTRO CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          Discover inspirational design concepts for each space in your home —
          from cozy living rooms and serene bedrooms to elegant dining areas
          and productive home offices. Our curated ideas help you visualise
          beautiful interiors that reflect your personality and lifestyle.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you're planning a complete renovation or just want to refresh
          a single room, these interior design ideas offer guidance and
          inspiration to help you make confident design decisions.
        </p>
      </div>

      {/* ================= CATEGORY GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ideasCategories.map((cat) => (
          <NavLink
            key={cat.title}   // ✅ stable & error-free key
            to={cat.link}
            className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <div
              className="relative h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">{cat.title}</h3>
              </div>
            </div>
            <div className="p-5 bg-white">
              <p className="text-gray-600">{cat.desc}</p>
            </div>
          </NavLink>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-gray-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
          Connect with our interior design experts to create beautiful spaces
          tailored to your lifestyle and budget.
        </p>
        <NavLink
          to="/contact"
          className="inline-block mt-6 px-8 py-3 rounded-full bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black font-semibold"
        >
          Get Expert Consultation
        </NavLink>
      </div>

    </section>
  );
};

export default Ideas;

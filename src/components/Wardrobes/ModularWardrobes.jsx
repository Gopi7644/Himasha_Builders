import React from "react";
import { FiChevronRight } from "react-icons/fi";
import wardrobe1 from "../../assets/wardrobes/design1.jpg";
import wardrobe2 from "../../assets/wardrobes/design2.jpg";
import wardrobe3 from "../../assets/wardrobes/design3.jpg";
import wardrobe4 from "../../assets/wardrobes/design4.jpg";

const features = [
  {
    title: "Customizable Layouts",
    description:
      "Design wardrobes tailored to your lifestyle with adjustable shelves, hanging rods, and drawers.",
  },
  {
    title: "Sliding & Hinged Doors",
    description:
      "Choose from space-saving sliding doors or classic hinged doors depending on your room layout.",
  },
  {
    title: "Premium Finishes",
    description:
      "Select from laminate, veneer, or high-gloss finishes for a personalized look.",
  },
  {
    title: "Smart Storage Solutions",
    description:
      "Pull-out shoe racks, accessory compartments, LED lighting, and mirrors for ease of use.",
  },
];

const WardrobeDesign = () => {
  return (
    <section className="py-24 px-6 bg-white text-gray-900">

      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-[#1f2937]">
          Sleek Modular Wardrobe Designs
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Stylish, functional, and customizable wardrobe solutions for every home.
        </p>
      </div>

      {/* IMAGE SHOWCASE */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[wardrobe1, wardrobe2, wardrobe3, wardrobe4].map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={img}
              alt={`Wardrobe design ${i + 1}`}
              className="w-full object-cover h-60 hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <div className="max-w-4xl mx-auto mt-16 space-y-10">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="text-2xl text-[#d4af37] mt-1">
              <FiChevronRight />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {f.title}
              </h3>
              <p className="text-gray-600 mt-1">{f.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact" 
          className="inline-block px-8 py-3 bg-[#d4af37] text-black font-semibold rounded-md hover:bg-[#b8962e] transition"
        >
          Book Free Consultation
        </a>
      </div>

    </section>
  );
};

export default WardrobeDesign;

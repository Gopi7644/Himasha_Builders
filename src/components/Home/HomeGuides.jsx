import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ================= DATA ================= */

const guidesData = {
  kitchen: [
    {
      title: "Modern Modular Kitchen Design",
      desc: "Best modular kitchen ideas for small and large spaces.",
      img: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7",
    },
    {
      title: "Smart Kitchen Storage Ideas",
      desc: "Make your kitchen clutter-free with smart storage.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ],

  bedroom: [
    {
      title: "Luxury Bedroom Interior",
      desc: "Create peaceful and modern bedroom interiors.",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    },
    {
      title: "Wardrobe Design Ideas",
      desc: "Stylish wardrobes with maximum storage.",
      img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    },
  ],

  living: [
    {
      title: "Living Room Makeover",
      desc: "Transform your living space beautifully.",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    },
    {
      title: "TV Unit Design",
      desc: "Modern TV units for stylish homes.",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
  ],

  kids: [
    {
      title: "Kids Room Interior",
      desc: "Fun & functional room designs for kids.",
      img: "https://images.unsplash.com/photo-1586105251261-72a756497a11",
    },
    {
      title: "Study Table for Kids",
      desc: "Ergonomic study setups for children.",
      img: "https://images.unsplash.com/photo-1598300053653-d51e0f3f83fa",
    },
  ],

  study: [
    {
      title: "Study Room Interior Design",
      desc: "Create productive workspaces at home.",
      img: "https://images.unsplash.com/photo-1616627457219-9d2d3c4a7e5c",
    },
    {
      title: "Home Office Desk Guide",
      desc: "Choose the right desk for comfort.",
      img: "https://images.unsplash.com/photo-1587614382346-acfa27f7c7d9",
    },
  ],
};

/* ================= MAIN ================= */

const HomeGuides = () => {
  const tabs = [
    { id: "kitchen", label: "Kitchen Guides" },
    { id: "bedroom", label: "Bedroom Guides" },
    { id: "living", label: "Living Room Guides" },
    { id: "kids", label: "Kids Room Guides" },
    { id: "study", label: "Study Room Guides" },
  ];

  const [activeTab, setActiveTab] = useState("kitchen");
  const [index, setIndex] = useState(0);

  const guides = guidesData[activeTab];

  /* ========== SLIDER ========== */
  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? guides.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === guides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full py-14 px-4 bg-white">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto mb-8">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Guides For Home Interiors
        </h2>

        {/* TABS */}
        <div className="flex overflow-x-auto border-b gap-6 text-sm">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIndex(0);
              }}
              className={`pb-3 whitespace-nowrap border-b-2 transition
                ${
                  activeTab === tab.id
                    ? "border-[#d4af37] text-black font-semibold"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto relative">

        {/* ARROWS (DESKTOP) */}
        <button
          onClick={prev}
          className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2
          w-10 h-10 rounded-full border bg-white shadow items-center justify-center"
        >
          <FiChevronLeft size={22} />
        </button>

        <button
          onClick={next}
          className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2
          w-10 h-10 rounded-full border bg-white shadow items-center justify-center"
        >
          <FiChevronRight size={22} />
        </button>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {guides.slice(index, index + 2).map((item, i) => (
            <div
              key={i}
              className="border rounded-xl overflow-hidden flex bg-white shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-40 sm:w-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-4 flex flex-col justify-center">

                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">

          {guides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer
                ${
                  index === i
                    ? "bg-[#d4af37]"
                    : "bg-gray-300"
                }`}
            />
          ))}
        </div>

        {/* LINK */}
        <div className="text-center mt-8">

          <a
            href="#"
            className="text-[#0891b2] text-sm font-medium hover:underline"
          >
            View All Design Guides →
          </a>

        </div>

      </div>
    </section>
  );
};

export default HomeGuides;

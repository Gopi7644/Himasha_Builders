import React from "react";

// 🔹 Import Images
import kitchen1 from "../../assets/guides/kitchen1.jpg";
import kitchen2 from "../../assets/guides/kitchen2.jpg";
import bedroom1 from "../../assets/guides/bedroom1.jpg";
import bedroom2 from "../../assets/guides/bedroom2.jpg";

const guidesData = [
  {
    section: "Modular Kitchen Design Guides",
    items: [
      {
        title: "How to Maximise Storage Space in Your Modular Kitchen",
        desc: "Struggling with storage in your kitchen? Discover smart space-saving tips and modular solutions.",
        image: kitchen1,
      },
      {
        title: "A Guide To Different Types Of Kitchen Layouts",
        desc: "Confused about planning your kitchen space? Explore layouts that fit your lifestyle.",
        image: kitchen2,
      },
    ],
  },
  {
    section: "Bedroom Interior Design Guides",
    items: [
      {
        title: "A Bedroom Interior Design Checklist",
        desc: "Plan your bedroom interiors perfectly with our expert-approved checklist.",
        image: bedroom1,
      },
      {
        title: "10 Interior Design Styles For Your Bedroom",
        desc: "Explore stunning bedroom styles to build your dream personal space.",
        image: bedroom2,
      },
    ],
  },
];

const Guides = () => {
  return (
    <section className="bg-white py-20 px-5 sm:px-6">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-16 text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Home Interiors Guides
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed text-base">
          Discover expert home interior design guides by Himasha Builders to
          transform every corner of your home. Explore smart ideas, modern
          layouts and luxury inspirations.
        </p>
      </div>

      {/* SECTIONS */}
      <div className="max-w-7xl mx-auto space-y-24">
        {guidesData.map((group, idx) => (
          <div key={idx}>

            {/* SECTION TITLE */}
            <h2 className="text-2xl font-bold text-gray-900 mb-10 border-l-4 border-[#d4af37] pl-4">
              {group.section}
            </h2>

            {/* CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 h-full">

                    {/* IMAGE */}
                    <div className="relative aspect-4/3 sm:aspect-auto sm:h-full w-full overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                      <button className="mt-5 text-[#d4af37] font-semibold text-sm w-fit hover:underline transition">
                        Read More →
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* LOAD MORE */}
            <div className="mt-12 text-center">
              <button className="text-[#d4af37] font-semibold hover:underline text-sm tracking-wide">
                Load More {group.section}
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Guides;

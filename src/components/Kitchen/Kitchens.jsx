import { NavLink } from "react-router-dom";
import modular from "../../assets/kitchen/modular.jpg";
import island from "../../assets/kitchen/island.jpg";
import parallel from "../../assets/kitchen/parallel.jpg";
import open from "../../assets/kitchen/open.jpg";
import hero1 from "../../assets/kitchen/hero1.jpg";

const kitchenTypes = [
  {
    title: "Modular Kitchens",
    desc: "Precision-built factory finished kitchens with smart storage & premium finish.",
    image: modular,
  },
  {
    title: "Island Kitchens",
    desc: "Luxury kitchens with a central island for cooking, dining and social living.",
    image: island,
  },
  {
    title: "Parallel Kitchens",
    desc: "Best for compact homes with efficient workflow and space optimization.",
    image: parallel,
  },
  {
    title: "Open Kitchens",
    desc: "Modern kitchens blending with living spaces for openness & elegance.",
    image: open,
  },
];

const Kitchen = () => {
  return (
    <section className="bg-gray-50 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative bg-white/80 backdrop-blur-md px-8 md:px-12 py-10 md:py-14 rounded-3xl shadow-2xl text-center max-w-2xl mx-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Premium Modular Kitchens
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Designed for elegance, engineered for everyday living
          </p>
          <NavLink
            to="/enquiry"
            className="inline-block mt-6 px-8 py-4 rounded-full bg-black text-white font-semibold transition-transform duration-300 hover:scale-105"
          >
            Book Free Consultation
          </NavLink>
        </div>
      </div>

      {/* ================= TYPES ================= */}
      <div className="max-w-7xl mx-auto py-20 md:py-24 px-5 md:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Explore Kitchen Styles
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
          {kitchenTypes.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-8 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="md:w-1/2 aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 will-change-transform"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-7 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
                <NavLink
                  to="/enquiry"
                  className="mt-5 inline-block w-fit px-6 py-3 rounded-full bg-gray-900 text-white transition-transform duration-300 hover:scale-105"
                >
                  Explore →
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= WHY US ================= */}
      <div className="bg-black text-white py-20 md:py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Why Choose Himasha Kitchens
        </h2>

        <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            "10+ Years Warranty",
            "German Hardware",
            "Factory Precision Finish",
            "3D Design Preview",
            "On-Time Delivery",
            "Transparent Pricing",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-neutral-900 rounded-2xl p-6 text-center font-semibold transition-transform duration-300 hover:scale-105"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </div>

      {/* ================= COMPARISON ================= */}
      <div className="py-20 md:py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Modular Kitchen vs Carpenter Kitchen
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-green-600">
              Modular Kitchen
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Factory finished cabinets</li>
              <li>✔ Premium hardware fittings</li>
              <li>✔ Quick installation</li>
              <li>✔ Long durability</li>
            </ul>
          </div>

          <div className="bg-gray-100 shadow-xl rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-red-600">
              Simple Kitchen
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✖ On-site manual finishing</li>
              <li>✖ Limited warranty</li>
              <li>✖ Longer time</li>
              <li>✖ Uneven quality</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="bg-gray-900 text-white py-20 md:py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Our Kitchen Design Process
        </h2>

        <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {["Consult", "Design", "Build", "Deliver"].map((step, i) => (
            <div
              key={i}
              className="bg-neutral-800 rounded-xl p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="text-2xl font-bold text-[#d4af37]">
                {i + 1}
              </div>
              <h4 className="mt-3 font-semibold">{step}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-linear-to-r from-[#d4af37] to-[#b8962e] py-16 md:py-20 text-center text-black px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Let’s Design Your Dream Kitchen
        </h2>
        <p className="mt-4 text-lg">
          Book your free design consultation today
        </p>
        <NavLink
          to="/enquiry"
          className="inline-block mt-8 px-10 py-4 rounded-full bg-black text-white font-bold transition-transform duration-300 hover:scale-110"
        >
          Get Free Quote
        </NavLink>
      </div>
    </section>
  );
};

export default Kitchen;

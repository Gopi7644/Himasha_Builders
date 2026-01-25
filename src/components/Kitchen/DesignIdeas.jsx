import { NavLink } from "react-router-dom";
import hero from "../../assets/ideas/hero1.jpg";
import bedroom from "../../assets/ideas/bedroom1.jpg";
import livingroom from "../../assets/ideas/livingroom1.jpg";
import bathroom from "../../assets/ideas/premiumbathroom.jpg";
import diningarea from "../../assets/ideas/diningarea.jpg";
import modularkitchen from "../../assets/ideas/modularkitchen1.jpg";
import kidsroom from "../../assets/ideas/kidsroom.jpg";


const ideas = [
  {
    title: "Luxury Living Room",
    tag: "Living Room",
    desc: "Create a grand first impression with plush seating, layered lighting and artistic walls.",
    image: livingroom,
  },
  {
    title: "Modern Bedroom",
    tag: "Bedroom",
    desc: "Relax in a serene bedroom designed with soft tones, smart storage and cozy textures.",
    image: bedroom,
  },
  {
    title: "Smart Modular Kitchen",
    tag: "Kitchen",
    desc: "High-efficiency layouts with stylish finishes that elevate your cooking experience.",
    image: modularkitchen,
  },
  {
    title: "Premium Bathroom",
    tag: "Bathroom",
    desc: "Spa-inspired bathrooms with elegant fittings and space-saving designs.",
    image: bathroom,
  },
  {
    title: "Elegant Dining Area",
    tag: "Dining",
    desc: "Where comfort meets conversation with warm lighting and designer furniture.",
    image: diningarea,
  },
  {
    title: "Kids Room Ideas",
    tag: "Kids",
    desc: "Playful yet practical rooms designed for creativity and comfort.",
    image: kidsroom,
  },
];

const DesignIdeas = () => {
  return (
    <section className="bg-linear-to-b from-[#f9fafb] to-[#f1f5f9] text-gray-900">

      {/* HERO */}
      <div className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            Design Ideas That Inspire Living
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover beautiful interior inspirations curated by Himasha Builders
          </p>
          <NavLink
            to="/enquiry"
            className="inline-block mt-6 px-8 py-4 rounded-full bg-black text-white font-semibold hover:scale-105 transition"
          >
            Book Free Design Consultation
          </NavLink>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Your Home, Your Style, Our Expertise
        </h2>
        <p className="mt-5 text-gray-600 text-lg leading-relaxed">
          From luxurious living rooms to smart kitchens and cozy bedrooms, explore design
          ideas crafted to match your lifestyle and elevate everyday living.
        </p>
      </div>

      {/* IDEAS GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {ideas.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <span className="absolute top-4 left-4 bg-black/80 text-white text-xs px-4 py-1 rounded-full tracking-wide">
                {item.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
              <NavLink
                to="/enquiry"
                className="inline-block mt-4 text-sm font-semibold text-black hover:underline"
              >
                Explore Designs →
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-black text-white py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Why Customers Love Our Designs
        </h2>

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            "Tailored Design Concepts",
            "Premium Material Selection",
            "3D Visualization",
            "Turnkey Execution",
            "On-Time Delivery",
            "Luxury Finishing",
            "Budget Transparency",
            "Dedicated Support",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-neutral-900 rounded-2xl p-6 text-center font-semibold hover:scale-105 transition"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-linear-to-r from-[#d4af37] to-[#b8962e] py-20 text-center text-black px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Transform Your Home?
        </h2>
        <p className="mt-4 text-lg">
          Let our experts design a home that reflects your personality.
        </p>
        <NavLink
          to="/enquiry"
          className="inline-block mt-8 px-10 py-4 rounded-full bg-black text-white font-bold hover:scale-110 transition"
        >
          Get Free Design Consultation
        </NavLink>
      </div>
    </section>
  );
};

export default DesignIdeas;

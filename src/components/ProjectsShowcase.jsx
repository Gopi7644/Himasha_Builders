import { FaArrowRight } from "react-icons/fa";
import Showcase1 from "../assets/Showcase/showcase1.jpg";
import Showcase2 from "../assets/Showcase/showcase2.jpg";
import Showcase3 from "../assets/Showcase/showcase3.jpg";
import Showcase4 from "../assets/Showcase/showcase4.jpg";

const projects = [
  {
    title: "Luxury Living Room",
    category: "Residential Interior",
    image: Showcase1,
  },
  {
    title: "Modern Modular Kitchen",
    category: "Kitchen Design",
    image: Showcase2,
  },
  {
    title: "Elegant Bedroom Suite",
    category: "Bedroom Interior",
    image: Showcase3,
  },
  {
    title: "Premium Office Space",
    category: "Commercial Interior",
    image: Showcase4,
  },
];

const ProjectsShowcase = () => {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-[#06080f] to-[#0b0f1a] text-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          Luxury Projects Showcase
        </h2>
        <p className="mt-3 text-[#d4af37] text-lg">
          A glimpse of our refined craftsmanship
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects.map((item, i) => (
          <div
            key={i}
            className="
              group rounded-2xl overflow-hidden
              bg-neutral-900
              ring-1 ring-[#d4af37]/10
              hover:ring-[#d4af37]/40
              transition-all duration-500
              shadow-lg hover:shadow-[#d4af37]/20
            "
          >
            {/* Image */}
            <div className="relative w-full h-60 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
            </div>

            {/* Content Box */}
            <div
              className="
                p-5 bg-[#0f1422]
                flex flex-col gap-2
                border-t border-white/5
              "
            >
              <span className="text-xs tracking-widest text-[#d4af37] uppercase">
                {item.category}
              </span>

              <h3 className="text-lg font-semibold tracking-wide">
                {item.title}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-sm text-white/80 group-hover:text-white transition">
                View Project
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;

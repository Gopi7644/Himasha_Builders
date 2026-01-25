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

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {projects.map((item, i) => (
          <div
            key={i}
            className="
              group relative rounded-3xl overflow-hidden shadow-xl
              ring-1 ring-[#d4af37]/10
              hover:ring-[#d4af37]/40
              transition-all duration-500
              bg-neutral-900
            "
          >
            {/* Aspect Ratio Box (Prevents Layout Shift) */}
            <div className="relative aspect-3/4 w-full overflow-hidden">

              {/* Skeleton Loader */}
              <div className="absolute inset-0 animate-pulse bg-neutral-800" />

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="
                  absolute inset-0 h-full w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
                onLoad={(e) => {
                  e.currentTarget.previousSibling.style.display = "none";
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

              {/* Content */}
              <div
                className="
                  absolute inset-0 flex flex-col justify-end
                  p-6
                  translate-y-4 opacity-0
                  transition-all duration-500 ease-out
                  group-hover:translate-y-0 group-hover:opacity-100
                "
              >
                <span className="text-sm tracking-widest text-[#d4af37] uppercase">
                  {item.category}
                </span>

                <h3 className="mt-2 text-xl font-semibold tracking-wide">
                  {item.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-white/90">
                  View Project
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;

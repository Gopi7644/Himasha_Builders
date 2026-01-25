import { NavLink } from "react-router-dom";
import { useState } from "react";
import kitchens from "../assets/ServicesCards/kitchen.jpg";
import doors from "../assets/ServicesCards/doors.jpg";
import furniture from "../assets/ServicesCards/furniture.jpg";
import furnishings from "../assets/ServicesCards/furnishing.jpg";
import wardrobes from "../assets/ServicesCards/wardrobe.jpg";
import bathware from "../assets/ServicesCards/bath.jpg";
import lights from "../assets/ServicesCards/lights.jpg";
import rugs from "../assets/ServicesCards/rugs.jpg";

const SERVICES = [
  { title: "Kitchens", img: kitchens, slug: "kitchens" },
  { title: "Doors & Windows", img: doors, slug: "doors" },
  { title: "Furniture", img: furniture, slug: "furniture" },
  { title: "Furnishings", img: furnishings, slug: "furnishings" },
  { title: "Wardrobes", img: wardrobes, slug: "wardrobes" },
  { title: "Bathware", img: bathware, slug: "bathware" },
  { title: "Lights", img: lights, slug: "lights" },
  { title: "Rugs", img: rugs, slug: "rugs" },
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-[#0b0f1a] text-white">
      
      {/* Header */}
      <header className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#d4af37]">
          Ready to give your home a makeover?
        </h1>
        <p className="mt-3 text-white/80 text-lg">
          Discover styles that blend form & function
        </p>
      </header>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {SERVICES.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <NavLink
      to={`/service/${service.slug}`}
      className="
        group relative rounded-2xl overflow-hidden
        shadow-xl ring-1 ring-[#d4af37]/10
        hover:ring-[#d4af37]/40
        transition-all duration-500
        bg-neutral-900
        will-change-transform
      "
    >
      {/* Stable Layout Wrapper */}
      <div className="relative aspect-4/3 w-full min-h-60 overflow-hidden">

        {/* Skeleton */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-neutral-800" />
        )}

        {/* Image */}
        <img
          src={service.img}
          alt={service.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`
            absolute inset-0 h-full w-full object-cover
            transition-transform duration-700
            group-hover:scale-110
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        {/* Title */}
        <div className="
          absolute bottom-5 left-5
          text-lg font-bold tracking-wide
          text-white
          transition-transform duration-500
          group-hover:-translate-y-1
        ">
          {service.title}
        </div>
      </div>
    </NavLink>
  );
};

export default Services;

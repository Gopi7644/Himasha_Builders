import { useEffect, useState } from "react";
import { HERO_IMAGES } from "../data/heroImages";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [showCard, setShowCard] = useState(true);

  // 🔁 Background Carousel
  useEffect(() => {
    if (!HERO_IMAGES.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 🎬 Animate Glass Card on Slide Change
  useEffect(() => {
    setShowCard(false); // hide
    const timer = setTimeout(() => {
      setShowCard(true); // show after delay
    }, 800); // delay before showing again

    return () => clearTimeout(timer);
  }, [index]);

  const scrollToForm = () => {
    const form = document.getElementById("floating-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* 🌄 Background Slider */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`
            absolute inset-0 bg-cover bg-center
            transition-opacity duration-1200 ease-in-out
            will-change-opacity
            ${index === i ? "opacity-100" : "opacity-0"}
          `}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* 🧠 Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-14">

        {/* ⭐ Glass Card with Hide/Show Animation */}
        <div
          className={`
            w-full max-w-md
            bg-black/35 backdrop-blur-sm
            rounded-xl p-6 sm:p-7
            text-white shadow-xl
            border border-white/10
            transition-all duration-700 ease-in-out
            will-change-transform will-change-opacity
            ${
              showCard
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95 pointer-events-none"
            }
          `}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-wide">
            Luxury Interior Design
          </h1>

          <p className="mt-1 text-sm sm:text-base text-[#d4af37] tracking-wide">
            Crafted for Elegant Living
          </p>

          <ul className="mt-4 space-y-1.5 text-sm sm:text-base leading-relaxed opacity-90">
            <li>✔ Premium Residential & Commercial Interiors</li>
            <li>✔ Turnkey Luxury Execution</li>
            <li>✔ Transparent Pricing</li>
          </ul>

          {/* CTA */}
          <button
            onClick={scrollToForm}
            className="
              mt-5 inline-flex items-center justify-center
              px-6 py-2.5 rounded-full text-sm font-semibold
              bg-linear-to-r from-[#d4af37] to-[#b8962e]
              text-black shadow-md
              transition-transform duration-300
              hover:-translate-y-0.5 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50
            "
          >
            Get Free Consultation
          </button>

          <p className="mt-3 text-xs opacity-75">
            Bihar & Jharkhand
          </p>
        </div>

        {/* 📩 RIGHT SIDE — FORM PLACEHOLDER */}
        <div id="floating-form" className="w-full max-w-md">
          {/* <FloatingForm /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useEffect, useState } from "react";
import { HERO_IMAGES } from "../data/heroImages";
import FormPopup from "./FormPopup";

const HeroWithForm = () => {
  const [index, setIndex] = useState(0);
  const [showCard, setShowCard] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!HERO_IMAGES.length) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setShowCard(false);
    const timer = setTimeout(() => setShowCard(true), 700);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === i ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex justify-center">
        <div
          className={`bg-black/35 backdrop-blur-sm text-white rounded-xl p-6 shadow-xl max-w-md transition-all duration-700 ${showCard ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <h1 className="text-2xl font-bold">Luxury Interior Design</h1>
          <p className="mt-1 text-[#d4af37]">Crafted for Elegant Living</p>

          <ul className="mt-4 space-y-1 text-sm">
            <li>✔ Premium Residential & Commercial Interiors</li>
            <li>✔ Turnkey Luxury Execution</li>
            <li>✔ Transparent Pricing</li>
          </ul>

          <button
            onClick={() => setShowForm(true)}
            className="mt-5 px-6 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black shadow-md cursor-pointer"
          >
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Reusable Popup Form */}
      <FormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
};

export default HeroWithForm;

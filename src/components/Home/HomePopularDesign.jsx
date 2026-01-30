import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import kitchen from "../../assets/designs/kitchen.jpg";
import office from "../../assets/designs/office.jpg";
import bedroom from "../../assets/designs/bedroom.jpg";
import living from "../../assets/designs/living.jpg";
import space from "../../assets/designs/space.jpg";
import wardrobe from "../../assets/designs/wardrobe.jpg";
import kids from "../../assets/designs/kids.jpg";
import twoBHK from "../../assets/designs/twoBHK.jpg";
import threeBHK from "../../assets/designs/threeBHK.jpg";

/* ---------------- DATA ---------------- */
const designs = [
  { title: "2 BHK Designs", img: twoBHK },
  { title: "3 BHK Designs", img: threeBHK },
  { title: "Modular Kitchen Designs", img: kitchen },
  { title: "Home Office Designs", img: office },
  { title: "Bedroom Designs", img: bedroom },
  { title: "Living Room Designs", img: living },
  { title: "Space Designs", img: space },
  { title: "Wardrobe Designs", img: wardrobe },
  { title: "Kids Bedroom Designs", img: kids },
];

/* clone first 3 for infinite loop */
const slides = [...designs, ...designs.slice(0, 3)];

const HomePopularDesigns = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef(null);

  /* -------- RESPONSIVE CARDS COUNT -------- */
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3; // desktop
    if (window.innerWidth >= 640) return 2;  // tablet
    return 1;                                // mobile
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const onResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slideWidth = 100 / visibleCards;

  /* -------- AUTO SLIDE -------- */
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
      setAnimate(true);
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [visibleCards]);

  /* -------- INFINITE LOOP FIX -------- */
  useEffect(() => {
    if (index >= designs.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 700); // same as animation duration
    }
  }, [index]);

  /* -------- CONTROLS -------- */
  const prev = () => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
    setAnimate(true);
  };

  const next = () => {
    setIndex((prev) => prev + 1);
    setAnimate(true);
  };

  return (
    <section className="bg-[#efefed] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
          Browse Our Popular Designs
        </h2>

        {/* Slider Wrapper (NO overflow hidden here) */}
        <div
          className="relative"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* Slides Only */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${index * slideWidth}%)`,
                transition: animate ? "transform 0.7s ease-in-out" : "none",
              }}
            >
              {slides.map((item, i) => (
                <div
                  key={i}
                  style={{ width: `${slideWidth}%` }}
                  className="px-3 shrink-0"
                >
                  <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg transition">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="h-60 w-full object-cover"
                    />
                    <div className="py-3 text-center text-gray-900 font-medium">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons (outside cards) */}
          <button
            onClick={prev}
            className="
              absolute left-0 md:-left-10 top-1/2 -translate-y-1/2
              z-20
              w-9 h-9 rounded-full
              bg-white shadow-md
              flex items-center justify-center
              hover:bg-gray-100 transition
            "
          >
            <FiChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="
              absolute right-0 md:-right-10 top-1/2 -translate-y-1/2
              z-20
              w-9 h-9 rounded-full
              bg-white shadow-md
              flex items-center justify-center
              hover:bg-gray-100 transition
            "
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="text-[#0ea5a4] underline underline-offset-4">
            View All Designs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePopularDesigns;

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  { name: "Rahul Sharma", role: "Flat Owner, Patna", text: "The finishing quality and design exceeded our expectations." },
  { name: "Anjali Verma", role: "Home Interior Client", text: "Very professional team. Timely delivery and beautiful interiors." },
  { name: "Sanjay Gupta", role: "Shop Owner", text: "Creative designs and excellent execution. My showroom looks premium." },
  { name: "Neha Singh", role: "Villa Owner", text: "Elegant designs with perfect space utilization." },
  { name: "Amit Kumar", role: "Office Interior", text: "Professional execution with modern design sense." },
  { name: "Pooja Mishra", role: "Apartment Owner", text: "High quality materials and great finishing." },
  { name: "Rohit Agarwal", role: "Commercial Space", text: "Very satisfied with the final outcome." },
  { name: "Kavita Joshi", role: "Home Renovation", text: "Excellent service and premium look delivered." },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const cardsPerView = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };

  const totalSlides = Math.ceil(testimonials.length / cardsPerView.desktop);

  const next = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-28 bg-linear-to-b from-[#0b0f1a] to-[#06080f] text-white overflow-hidden">

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-[#d4af37] text-lg">
          Trusted by 500+ Happy Clients
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto mt-20 px-6">

        {/* Cards Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {testimonials.map((t, i) => {
            const rating = (i + 1) % 3 === 0 ? 4 : 5;

            return (
              <div
                key={i}
                className="
                  min-w-full sm:min-w-1/2 md:min-w-1/3
                  px-4
                "
              >
                <div
                  className="
                    relative h-full rounded-2xl p-10
                    bg-white/5 backdrop-blur-xl
                    border border-[#d4af37]/20
                    shadow-2xl
                    transition-all duration-500
                    hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(212,175,55,0.25)]
                  "
                >
                  {/* Stars */}
                  <div className="flex items-center gap-2 mb-5">
                    {(() => {
                      const isThirdCard = (i + 1) % 3 === 0;
                      const rating = isThirdCard ? 4 : 5;

                      return (
                        <>
                          <div className="flex gap-1">
                            {Array.from({ length: rating }).map((_, j) => (
                              <FaStar key={j} className="text-[#d4af37]" />
                            ))}
                            {isThirdCard && (
                              <FaStar className="text-gray-500 opacity-40" />
                            )}
                          </div>

                          {/* 4/5 or 5/5 text */}
                          <span className="text-sm text-gray-400 ml-2">
                            {rating}/5
                          </span>
                        </>
                      );
                    })()}
                  </div>


                  {/* Review */}
                  <p className="text-gray-300 leading-relaxed">
                    “{t.text}”
                  </p>

                  {/* Client */}
                  <div className="mt-8">
                    <strong className="text-white">{t.name}</strong>
                    <div className="text-sm text-gray-400">{t.role}</div>
                  </div>

                  {/* Glow Line */}
                  <div className="
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0
                    bg-linear-to-r from-transparent via-[#d4af37] to-transparent
                    transition-all duration-500
                    hover:w-3/4
                  " />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="
            absolute left-2 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full
            bg-[#d4af37] text-black
            flex items-center justify-center
            shadow-lg hover:scale-105 transition
          "
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full
            bg-[#d4af37] text-black
            flex items-center justify-center
            shadow-lg hover:scale-105 transition
          "
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

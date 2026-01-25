import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Flat Owner, Patna",
    rating: 5,
    text: "The finishing quality and design exceeded our expectations. Truly a luxury experience.",
  },
  {
    name: "Anjali Verma",
    role: "Home Interior Client",
    rating: 5,
    text: "Very professional team. Timely delivery and beautiful interiors. Highly recommended.",
  },
  {
    name: "Sanjay Gupta",
    role: "Shop Owner",
    rating: 4,
    text: "Creative designs and excellent execution. My showroom now looks premium and modern.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-[#0b0f1a] to-[#06080f] text-white">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-[#d4af37] text-lg">
          Trusted by homeowners & commercial clients
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
              group relative rounded-2xl p-10
              bg-white/5 backdrop-blur-xl
              border border-[#d4af37]/20
              shadow-2xl
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(212,175,55,0.25)]
              will-change-transform
            "
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <FaStar key={j} className="text-[#d4af37]" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-300 leading-relaxed">
              “{t.text}”
            </p>

            {/* Client Info */}
            <div className="mt-8">
              <strong className="text-white tracking-wide">{t.name}</strong>
              <div className="text-sm text-gray-400">
                {t.role}
              </div>
            </div>

            {/* Decorative Glow Line */}
            <div className="
              absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0
              bg-linear-to-r from-transparent via-[#d4af37] to-transparent
              transition-all duration-500
              group-hover:w-3/4
            " />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

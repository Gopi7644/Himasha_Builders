import {
  FaRegHandshake,
  FaDraftingCompass,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: FaRegHandshake,
    title: "Consultation",
    desc: "Understanding your vision, lifestyle, space & budget",
  },
  {
    icon: FaDraftingCompass,
    title: "Concept & Design",
    desc: "Premium layouts, 3D designs & curated material selection",
  },
  {
    icon: FaTools,
    title: "Execution",
    desc: "Flawless execution with skilled craftsmanship",
  },
  {
    icon: FaCheckCircle,
    title: "Final Handover",
    desc: "Quality checks & elegant finishing touches",
  },
];

const DesignProcess = () => {
  return (
    <section className="py-24 px-6 bg-linear-to-b from-[#0b0f1a] to-[#06080f] text-white">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          Our Design Process
        </h2>
        <p className="mt-3 text-[#d4af37] text-lg">
          A refined approach to luxury interior design
        </p>
      </div>

      {/* Process Cards */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {steps.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="
                group relative rounded-2xl p-10 text-center
                bg-white/5 backdrop-blur-lg
                border border-[#d4af37]/20
                shadow-xl
                transition-transform duration-500 ease-out
                hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(212,175,55,0.2)]
              "
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="
                  text-[#d4af37] text-4xl
                  transition-transform duration-500
                  group-hover:scale-110 group-hover:rotate-6
                ">
                  <Icon />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                {item.desc}
              </p>

              {/* Glow Line */}
              <div className="
                absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5
                bg-linear-to-r from-transparent via-[#d4af37] to-transparent
                transition-all duration-500
                group-hover:w-3/4
              "></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DesignProcess;

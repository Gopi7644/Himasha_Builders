import step1 from "../../assets/process/step1.jpg";
import step2 from "../../assets/process/step2.jpg";
import step3 from "../../assets/process/step3.jpg";
import step4 from "../../assets/process/step4.webp";

const steps = [
  {
    id: "01",
    title: "Book an appointment",
    img: step1,
  },
  {
    id: "02",
    title: "Meet our designers",
    img: step2,
  },
  {
    id: "03",
    title: "Personalise your designs",
    img: step3,
  },
  {
    id: "04",
    title: "Move in",
    img: step4,
  },
];

const HomeProcess = () => {
  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Home Interiors Made Easy
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Book a <strong>FREE</strong> consultation, get expert guidance from
            top designers, and relax as we handle everything from design to
            installation.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  className="
                    w-full h-65 object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-3xl font-light text-gray-400">
                  {step.id}
                </span>
                <h3 className="text-lg font-medium text-gray-900">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap items-center gap-6">
          <button className="text-[#0ea5a4] underline underline-offset-4">
            Learn More
          </button>

          <button className="
            px-8 py-3 rounded-md
            bg-[#0ea5a4] text-white font-semibold
            hover:bg-[#0891b2] transition
          ">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;

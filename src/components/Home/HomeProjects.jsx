import project1 from "../../assets/projects/bedroom.jpg";
import project2 from "../../assets/projects/kitchen.jpg";

const projects = [
  {
    title: "Bhanu’s Hyderabad Villa With Modern Interiors",
    img: project1,
    location: "Hyderabad",
  },
  {
    title: "Mr. Ruban Prasanth’s 2BHK Earthy Home",
    img: project2,
    location: "Coimbatore",
  },
];

const HomeProjects = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <h3 className="text-sm text-gray-500">
            <strong>15,000+</strong> Dream Homes Delivered Across India
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {projects.map((p, i) => (
            <div
              key={i}
              className="
                group
                bg-gray-50
                rounded-xl
                overflow-hidden
                transition
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="
                    w-full
                    h-60 sm:h-75
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 leading-snug">
                  {p.title}
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  {p.location}
                </p>

                <button
                  className="
                    mt-4
                    text-sm
                    text-[#0ea5a4]
                    font-medium
                    hover:underline
                  "
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap gap-6 items-center">
          <button className="text-[#0ea5a4] underline underline-offset-4">
            View More Projects
          </button>

          <button
            className="
              px-7 py-2.5 rounded-md
              bg-[#0ea5a4]
              text-white
              font-semibold
              hover:bg-[#0891b2]
              transition
            "
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;

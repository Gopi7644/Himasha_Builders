import { useState } from "react";

import img1 from "../../assets/why/personalised.webp";
import img2 from "../../assets/why/quality.webp";
import img3 from "../../assets/why/management.webp";
import img4 from "../../assets/why/emi.webp";
import img5 from "../../assets/why/delivery.webp";

const TABS = [
  {
    key: "personalised",
    label: "Personalised for You",
    image: img1,
    badge: "50+",
    badgeText: "Awards for Innovative Design",
    title: "Designed around your lifestyle",
    desc: [
      "Tell our experts what inspires you and we design interiors tailored to your taste.",
      "From minimal homes to bold designs, we bring your vision to life.",
      "Smart layouts help you create up to 20% more usable space."
    ],
    cta: "Personalise Your Design"
  },
  {
    key: "quality",
    label: "Quality Guaranteed",
    image: img2,
    badge: "25",
    badgeText: "Years Warranty",
    title: "Uncompromised material quality",
    desc: [
      "We use termite-resistant plywood with superior moisture protection.",
      "ISI-certified materials ensure durability across all spaces.",
      "Every product passes multiple quality checks."
    ],
    cta: "Get Assured Quality"
  },
  {
    key: "management",
    label: "Project Management from A to Z",
    image: img3,
    badge: "51",
    badgeText: "Quality Checks",
    title: "End-to-end project handling",
    desc: [
      "Dedicated project managers keep timelines on track.",
      "Trained teams follow strict SOPs for flawless execution.",
      "Regular updates keep you informed at every stage."
    ],
    cta: "Talk To An Expert Today"
  },
  {
    key: "emi",
    label: "Easy EMI options",
    image: img4,
    badge: "0%",
    badgeText: "EMI Available",
    title: "Interiors made affordable",
    desc: [
      "Flexible EMI plans up to 36 months.",
      "Start interiors with just 20% upfront payment.",
      "Transparent pricing with no hidden costs."
    ],
    cta: "Avail Attractive EMIs"
  },
  {
    key: "delivery",
    label: "On-time Delivery",
    image: img5,
    badge: "60",
    badgeText: "Days to Move In",
    title: "Guaranteed delivery timelines",
    desc: [
      "Factory-finished products ensure consistent quality.",
      "Safe packaging avoids transit damage.",
      "We deliver exactly when we promise."
    ],
    cta: "Start Your Project"
  }
];

const WhyChooseUs = () => {
  const [active, setActive] = useState(TABS[0]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
          Why Choose Us
        </h2>

        {/* Tabs */}
        <div className="border-b mb-12 overflow-x-auto">
          <div className="flex min-w-max gap-8">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActive(tab)}
                className={`
                  pb-3 text-sm md:text-base whitespace-nowrap
                  transition
                  ${active.key === tab.key
                    ? "text-black border-b-2 border-[#d4af37] font-semibold"
                    : "text-gray-500 hover:text-black"}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src={active.image}
              alt={active.label}
              className="w-full h-65 sm:h-80 md:h-105 object-cover rounded-md"
              loading="lazy"
            />

            {/* Badge */}
            <div className="absolute -bottom-8 left-6 bg-white px-6 py-4 shadow-lg">
              <div className="text-4xl font-bold text-[#6b8e23]">
                {active.badge}
              </div>
              <div className="text-sm text-gray-700 mt-1">
                {active.badgeText}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {active.title}
            </h3>

            <div className="space-y-3 text-gray-700 leading-relaxed">
              {active.desc.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <button className="
              mt-6 inline-block
              bg-[#0ea5a4] text-white
              px-7 py-3 rounded-md
              font-medium
              hover:bg-[#0891b2]
              transition
            ">
              {active.cta}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

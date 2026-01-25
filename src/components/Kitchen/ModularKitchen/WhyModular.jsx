const features = [
  "Long lasting materials",
  "Easy maintenance",
  "Smart storage",
  "Quick installation",
  "Hygienic design",
  "Premium finish",
];

const WhyModular = () => (
  <section className="py-20 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold">Why Modular Kitchens?</h2>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {features.map((f, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
          ✔ {f}
        </div>
      ))}
    </div>
  </section>
);

export default WhyModular;

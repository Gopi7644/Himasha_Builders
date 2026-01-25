const materials = ["Acrylic", "Laminate", "PU Finish", "Glass", "Wood"];

const Materials = () => (
  <section className="py-20 text-center">
    <h2 className="text-3xl font-bold">Materials & Finishes</h2>
    <div className="mt-10 flex flex-wrap justify-center gap-6">
      {materials.map((m, i) => (
        <span key={i} className="px-6 py-3 bg-gray-100 rounded-full shadow">
          {m}
        </span>
      ))}
    </div>
  </section>
);

export default Materials;

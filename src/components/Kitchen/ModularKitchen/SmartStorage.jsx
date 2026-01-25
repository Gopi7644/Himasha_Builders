const storage = ["Tandem drawers", "Corner carousel", "Tall unit", "Pull-out baskets"];

const SmartStorage = () => (
  <section className="py-20 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold">Smart Storage Solutions</h2>
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {storage.map((s, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow">
          {s}
        </div>
      ))}
    </div>
  </section>
);

export default SmartStorage;

const Comparison = () => (
  <section className="py-20 bg-gray-100">
    <h2 className="text-3xl font-bold text-center">Modular vs Carpenter</h2>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow">
        <h3 className="font-bold mb-4">Modular</h3>
        <ul className="space-y-2">
          <li>✔ Factory finish</li>
          <li>✔ Warranty</li>
          <li>✔ Smart hardware</li>
        </ul>
      </div>
      <div className="bg-black text-white p-8 rounded-xl shadow">
        <h3 className="font-bold mb-4">Carpenter</h3>
        <ul className="space-y-2">
          <li>✖ No warranty</li>
          <li>✖ Uneven finish</li>
          <li>✖ Slow work</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Comparison;

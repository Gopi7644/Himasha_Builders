const steps = ["Consult", "Design", "Build", "Install", "Handover"];

const Process = () => (
  <section className="py-20 bg-black text-white text-center">
    <h2 className="text-3xl font-bold">Our Process</h2>
    <div className="mt-10 flex flex-wrap justify-center gap-8">
      {steps.map((s, i) => (
        <div key={i} className="px-8 py-6 bg-neutral-800 rounded-xl">
          {i + 1}. {s}
        </div>
      ))}
    </div>
  </section>
);

export default Process;

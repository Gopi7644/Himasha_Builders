import l from "../../../assets/kitchen/lshape.jpg";
import u from "../../../assets/kitchen/ushape.jpg";
import i from "../../../assets/kitchen/island.jpg";
import p from "../../../assets/kitchen/parallel.jpg";

const layouts = [
  { img: l, title: "L Shape" },
  { img: u, title: "U Shape" },
  { img: i, title: "Island" },
  { img: p, title: "Parallel" },
];

const KitchenLayouts = () => (
  <section className="py-20">
    <h2 className="text-3xl font-bold text-center">Kitchen Layouts</h2>
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {layouts.map((l, i) => (
        <div key={i} className="rounded-xl overflow-hidden shadow group">
          <img src={l.img} className="h-60 w-full object-cover group-hover:scale-110 transition" />
          <p className="p-4 font-semibold">{l.title}</p>
        </div>
      ))}
    </div>
  </section>
);

export default KitchenLayouts;

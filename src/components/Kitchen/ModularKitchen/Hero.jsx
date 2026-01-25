import { NavLink } from "react-router-dom";
import hero1 from "../../../assets/kitchen/hero1.jpg";
import hero2 from "../../../assets/kitchen/hero2.jpg";
import hero3 from "../../../assets/kitchen/hero3.jpg";
import { useState, useEffect } from "react";

const slides = [
    { img: hero1, title: "Luxury Modular Kitchens", sub: "Designed for modern living" },
    { img: hero2, title: "Smart Storage Solutions", sub: "Space optimized kitchens" },
    { img: hero3, title: "Elegant Finishes", sub: "Style that lasts long" },
];

const Hero = () => {
    const [i, setI] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setI((p) => (p + 1) % slides.length), 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            {slides.map((s, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-1000 ${i === idx ? "opacity-100 scale-100" : "opacity-0 scale-110"
                        }`}
                >
                    <img src={s.img} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 flex items-center px-10">
                        <div className="bg-black/40 p-10 rounded-3xl text-white max-w-xl">
                            <h1 className="text-4xl font-extrabold">{s.title}</h1>
                            <p className="mt-4 text-lg">{s.sub}</p>
                            <NavLink to="/enquiry" className="mt-6 inline-block bg-[#d4af37] px-8 py-4 rounded-full font-bold text-black">
                                Get Free Design
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Hero;

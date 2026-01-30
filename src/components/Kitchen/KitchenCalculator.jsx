import { useState } from "react";
import { NavLink } from "react-router-dom";
import kitchenBg from "../../assets/kitchen/kitchen-bg.jpg";
import lShape from "../../assets/calculator/l-shape.png";
import uShape from "../../assets/calculator/u-shape.png";
import parallel from "../../assets/calculator/parallel.png";
import singleWall from "../../assets/calculator/single-wall.png";

/* ================= DATA ================= */

const sizes = [
    { label: "7 ft x 10 ft", tag: "Small" },
    { label: "8 ft x 9 ft", tag: "Small" },
    { label: "9 ft x 10 ft", tag: "Medium" },
    { label: "10 ft x 10 ft", tag: "Medium" },
    { label: "11.5 ft x 10 ft", tag: "Large" },
    { label: "Custom", tag: null },
];


const shapes = [
    { name: "L-Shaped Platform", img: lShape },
    { name: "U-Shaped Platform", img: uShape },
    { name: "Parallel Platform", img: parallel },
    { name: "Single Wall Platform", img: singleWall },
];

const packages = [
    {
        id: "economy",
        title: "Economy",
        theme: "bg-green-700",
        body: "bg-green-50",
        features: [
            "Matt Laminate Finish",
            "High Gloss Laminate Finish",
            "Matt Pro Finish",
        ],
    },
    {
        id: "premium",
        title: "Premium",
        theme: "bg-blue-700",
        body: "bg-blue-50",
        features: [
            "Acrylic Finish",
            "Matt Laminate",
            "High Gloss Laminate Finish",
            "Matt Pro Finish",
        ],
    },
    {
        id: "luxury",
        title: "Luxury",
        theme: "bg-amber-900",
        body: "bg-amber-50",
        features: [
            "PU Gloss / Matt Finish",
            "Acrylic Finish",
            "Matt Laminate",
            "High Gloss Laminate Finish",
            "Matt Pro Finish",
        ],
    },
    {
        id: "custom",
        title: "Custom Package",
        theme: "bg-gray-900",
        body: "bg-gray-800 text-white",
        features: ["Our designers will customise your package"],
    },
];

/* ================= COMPONENT ================= */

const KitchenCalculator = () => {
    const [step, setStep] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedPackage, setSelectedPackage] = useState("");

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        pincode: "",
    });

    return (
        <>
            <section
                className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
                style={{ backgroundImage: `url(${kitchenBg})` }}
            >
                <div className="w-full max-w-6xl bg-[#f7f6f2] rounded-2xl shadow-2xl p-6 sm:p-10">

                    {/* STEP */}
                    <p className="text-center text-sm text-gray-500 mb-2">Step {step}/4</p>

                    {/* ================= STEP 1 ================= */}
                    {step === 1 && (
                        <>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                                Select the nearest dimension of your kitchen
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
                                {sizes.map((size) => (
                                    <label
                                        key={size.label}
                                        className={`flex items-center justify-between gap-4 border rounded-xl px-5 py-4 cursor-pointer transition
          ${selectedSize === size.label
                                                ? "border-purple-500 ring-2 ring-purple-200 bg-purple-50"
                                                : "border-gray-200 bg-white hover:border-purple-400"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="radio"
                                                name="kitchenSize"
                                                checked={selectedSize === size.label}
                                                onChange={() => setSelectedSize(size.label)}
                                                className="accent-purple-600 w-5 h-5"
                                            />
                                            <span className="text-gray-800 font-medium text-sm sm:text-base">
                                                {size.label}
                                            </span>
                                        </div>

                                        {/* TAG (Small/Medium/Large) */}
                                        {size.tag && (
                                            <span className="bg-orange-400 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                                {size.tag}
                                            </span>
                                        )}
                                    </label>
                                ))}
                            </div>
                        </>
                    )}


                    {/* ================= STEP 2 ================= */}
                    {step === 2 && (
                        <>
                            <h2 className="text-2xl font-bold text-center mb-8">
                                Select the shape of your kitchen
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                                <div className="space-y-4">
                                    {shapes.map((shape) => (
                                        <button
                                            key={shape.name}
                                            onClick={() => setSelectedShape(shape.name)}
                                            className={`w-full border rounded-xl px-6 py-4 text-left font-medium transition
                    ${selectedShape === shape.name
                                                    ? "border-purple-500 ring-2 ring-purple-200 bg-white"
                                                    : "border-gray-200 bg-white hover:border-purple-400"
                                                }`}
                                        >
                                            {shape.name}
                                        </button>
                                    ))}
                                </div>

                                <div className="bg-white rounded-xl shadow p-6 flex justify-center items-center min-h-60">
                                    {!selectedShape ? (
                                        <p className="text-gray-400 text-sm text-center">
                                            Select a shape to preview
                                        </p>
                                    ) : (
                                        shapes.map(
                                            (s) =>
                                                s.name === selectedShape && (
                                                    <img
                                                        key={s.name}
                                                        src={s.img}
                                                        alt={s.name}
                                                        className="w-full max-w-xs object-contain"
                                                    />
                                                )
                                        )
                                    )}
                                </div>
                            </div>
                        </>
                    )}

                    {/* ================= STEP 3 ================= */}
                    {/* ================= STEP 3 ================= */}
                    {step === 3 && (
                        <>
                            <h2 className="text-2xl font-bold text-center mb-8">
                                Select the package that suits you best
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                                {packages.map((pkg) => (
                                    <div
                                        key={pkg.id}
                                        onClick={() => setSelectedPackage(pkg.id)}
                                        className={`relative rounded-xl border shadow-md cursor-pointer transition-all duration-300 overflow-hidden group
          ${selectedPackage === pkg.id
                                                ? "ring-2 ring-purple-600 scale-[1.03]"
                                                : "hover:scale-[1.03] hover:shadow-xl"
                                            }`}
                                    >
                                        {/* Header */}
                                        <div className={`p-4 text-white font-semibold text-lg ${pkg.theme}`}>
                                            {pkg.title}
                                        </div>

                                        {/* Body */}
                                        <div
                                            className={`p-5 flex flex-col justify-between h-full ${pkg.body}`}
                                        >
                                            <ul className="space-y-2 text-sm mb-6">
                                                {pkg.features.map((f, i) => (
                                                    <li key={i} className="flex items-center gap-2">
                                                        <span className="text-green-600">✔</span>
                                                        <span>{f}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* BUTTON */}
                                            <button
                                                className={`mt-auto py-2 rounded-full text-sm border font-medium transition-all duration-300
              ${selectedPackage === pkg.id
                                                        ? "bg-purple-600 text-white border-purple-600 shadow-md"
                                                        : "border-purple-500 text-purple-600 hover:bg-purple-50"
                                                    }`}
                                            >
                                                {selectedPackage === pkg.id ? "Selected ✔" : "Select"}
                                            </button>
                                        </div>

                                        {/* SELECTED BADGE */}
                                        {selectedPackage === pkg.id && (
                                            <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                                                Selected
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}


                    {/* ================= STEP 4 ================= */}

                    {step === 4 && (
                        <>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2">
                                Excited to be part of your dream kitchen journey!
                            </h2>
                            <p className="text-center text-gray-600 mb-10">
                                Your free quote is just a few details away!
                            </p>

                            {/* FORM GRID */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                                {/* NAME */}
                                <div className="relative">
                                    <label className="absolute -top-2 left-4 bg-[#f7f6f2] px-2 text-xs text-gray-500">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-purple-400 outline-none bg-transparent"
                                    />
                                </div>

                                {/* PINCODE */}
                                <div className="relative">
                                    <label className="absolute -top-2 left-4 bg-[#f7f6f2] px-2 text-xs text-gray-500">
                                        PIN Code
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Pincode"
                                        value={form.pincode}
                                        onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                                        className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-purple-400 outline-none bg-transparent"
                                    />
                                </div>

                                {/* PHONE */}
                                <div className="relative">
                                    <label className="absolute -top-2 left-4 bg-[#f7f6f2] px-2 text-xs text-gray-500">
                                        Phone Number
                                    </label>
                                    <div className="flex items-center border rounded-xl overflow-hidden bg-transparent focus-within:ring-2 focus-within:ring-purple-400">
                                        <span className="px-4 flex items-center gap-2 bg-gray-100 border-r">
                                            🇮🇳 <span className="text-sm font-medium">+91</span>
                                        </span>
                                        <input
                                            type="tel"
                                            placeholder="Enter Your Number"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            className="flex-1 px-4 py-4 outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div className="relative">
                                    <label className="absolute -top-2 left-4 bg-[#f7f6f2] px-2 text-xs text-gray-500">
                                        Email ID
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email ID"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-purple-400 outline-none bg-transparent"
                                    />
                                </div>
                            </div>

                            {/* WHATSAPP CHECK */}
                            <div className="max-w-4xl mx-auto mt-8">
                                <label className="flex items-start gap-3 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="accent-purple-600 mt-1 w-4 h-4"
                                    />
                                    Yes, I would like to receive important updates and notifications on WhatsApp.
                                </label>

                                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                                    By proceeding, you authorize Beautiful Homes and its suggested contractors
                                    to get in touch with you through calls, SMS, or email.
                                </p>
                            </div>
                        </>
                    )}


                    {/* ================= NAVIGATION ================= */}
                    <div className="flex justify-between items-center mt-12">
                        {step > 1 ? (
                            <button
                                onClick={() => setStep(step - 1)}
                                className="text-purple-600 font-semibold"
                            >
                                ← Back
                            </button>
                        ) : (
                            <div />
                        )}

                        {step < 4 ? (
                            <button
                                onClick={() => setStep(step + 1)}
                                disabled={
                                    (step === 1 && !selectedSize) ||
                                    (step === 2 && !selectedShape) ||
                                    (step === 3 && !selectedPackage)
                                }
                                className={`px-10 py-3 rounded-full font-semibold
              ${(step === 1 && selectedSize) ||
                                        (step === 2 && selectedShape) ||
                                        (step === 3 && selectedPackage)
                                        ? "bg-purple-600 text-white hover:bg-purple-700"
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                Next
                            </button>
                        ) : (
                            <button className="px-10 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700">
                                Submit
                            </button>
                        )}
                    </div>
                </div>

            </section>
            <div className="mx-45  m-5 p-5">
                <h2 className="text-2xl">About Modular Kitchen Cost Calculator </h2>
                <p>
                    A modular kitchen cost calculator is a tool that helps you estimate the total cost of designing and installing a modular kitchen in your home. Modular kitchens are pre-fabricated kitchen units that are designed to be easily assembled and installed, offering a modern and efficient cooking space. <br /> The cost calculator takes into account various factors such as the size of the kitchen, the type of materials used, the design and layout, and any additional features or appliances you may want to include. By inputting these details into the calculator, you can get an approximate cost for your modular kitchen project, allowing you to plan your budget accordingly. This tool is especially useful for homeowners looking to renovate or upgrade their kitchens, as it provides a clear understanding of the financial investment required for a modular kitchen setup.
                </p>
                <h2 className="text-2xl">How Does Modular Kitchen Calculator Work?</h2>
                <p className="mb-5">
                    The modular kitchen cost calculator works by taking user-provided specifics such as kitchen size, layout, material preferences, and accessory choices and generates a detailed cost estimate.
                    The cost of making a modular kitchen design primarily depends on the following factors:
                </p>
                <h2 className="text-2xl">Shape of Kitchen </h2>
                <p>The shape of the kitchen is an important factor in determining the layout and dynamics, impacting the overall design and functionality. Whether it's L-Shaped, U-shaped, or a straight layout, the calculator assesses how the kitchen's form affects the cost.</p>

            </div>
        </>

    );
};

export default KitchenCalculator;

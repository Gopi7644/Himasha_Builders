import { useState } from "react";
import { FiX } from "react-icons/fi";
import OfferImg from "../assets/Offers/interior-offer.png";

const OfferBanner = () => {
  const [open, setOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-999 bg-black/50 flex items-end md:items-center justify-center px-3 py-4">

      {/* MODAL */}
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-hidden">

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 bg-white rounded-full p-1 shadow hover:bg-gray-100"
        >
          <FiX size={20} />
        </button>

        {/* MOBILE CARD VIEW */}
        {!showForm && (
          <div
            onClick={() => setShowForm(true)}
            className="md:hidden cursor-pointer"
          >
            <img
              src={OfferImg}
              alt="Interior Offer"
              className="w-full h-44 object-cover rounded-t-xl"
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Free Interior Consultation</h3>
              <p className="text-sm text-gray-600 mt-1">
                Tap to book your free design session
              </p>
            </div>
          </div>
        )}

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid grid-cols-2">
          <img
            src={OfferImg}
            alt="Interior Offer"
            className="w-full h-full object-cover"
          />
          {renderForm()}
        </div>

        {/* MOBILE FORM */}
        {showForm && (
          <div className="md:hidden">
            {renderForm()}
          </div>
        )}
      </div>
    </div>
  );

  function renderForm() {
    return (
      <div className="p-5 md:p-7 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Get Free Design Consultation
        </h2>
        <p className="text-gray-600 text-sm mt-1 mb-4">
          Talk to our interior experts today
        </p>

        {/* PROPERTY TYPE */}
        <div className="mb-4">
          <p className="text-sm font-semibold mb-2">Select Property Type</p>
          <div className="flex flex-wrap gap-2">
            {["1 BHK", "2 BHK", "3 BHK", "4+ BHK"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedProperty(type)}
                className={`px-3 py-1.5 rounded-full text-xs border transition ${
                  selectedProperty === type
                    ? "bg-[#d4af37] text-black border-[#d4af37]"
                    : "border-gray-300 text-gray-700 hover:bg-[#d4af37] hover:text-black"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* INPUTS */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Property Location"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#d4af37]"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#d4af37]"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#d4af37]"
          />
        </div>

        {/* CTA */}
        <button className="mt-4 bg-[#9e1b1b] hover:bg-[#7f1414] text-white py-2.5 rounded-md font-semibold text-sm transition">
          Book Free Consultation
        </button>

        <p className="text-[11px] text-gray-500 mt-2">
          By submitting, you agree to our terms & privacy policy.
        </p>
      </div>
    );
  }
};

export default OfferBanner;

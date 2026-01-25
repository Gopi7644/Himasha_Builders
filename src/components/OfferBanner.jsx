import { useState } from "react";
import { FiX } from "react-icons/fi";
import OfferImg from "../assets/Offers/interior-offer.png";

const OfferBanner = () => {
  const [open, setOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [form, setForm] = useState({
    location: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!open) return null;

  /* ================= VALIDATION ================= */
  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (!/^[a-zA-Z .]{2,40}$/.test(form.name)) {
      newErrors.name = "Enter a valid name (letters only)";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter mobile number";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit mobile number";
    }

    if (!form.location.trim()) {
      newErrors.location = "Please enter property location";
    }

    if (!selectedProperty) {
      newErrors.propertyType = "Please select property type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/offer-enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          propertyType: selectedProperty,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Submission failed");

      setMessage("✅ Thank you! Our team will contact you shortly.");
      setForm({ location: "", name: "", phone: "" });
      setSelectedProperty("");
      setErrors({});
    } catch (err) {
      setMessage("❌ Server issue. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end md:items-center justify-center px-3 py-4">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-hidden">

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 bg-white rounded-full p-1 shadow hover:bg-gray-100 cursor-pointer"
        >
          <FiX size={20} />
        </button>

        {/* MOBILE CARD VIEW */}
        {!showForm && (
          <div onClick={() => setShowForm(true)} className="md:hidden cursor-pointer">
            <img src={OfferImg} alt="Offer" className="w-full h-44 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">Free Interior Consultation</h3>
              <p className="text-sm text-gray-600 mt-1">
                Tap to book your free design session
              </p>
            </div>
          </div>
        )}

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-2">
          <img src={OfferImg} alt="Offer" className="w-full h-full object-cover" />
          {renderForm()}
        </div>

        {/* MOBILE FORM */}
        {showForm && <div className="md:hidden">{renderForm()}</div>}
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
          <p className="text-sm font-semibold mb-2">
            Select Property Type <span className="text-red-500">*</span>
          </p>
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
          {errors.propertyType && (
            <p className="text-red-500 text-xs mt-1">{errors.propertyType}</p>
          )}
        </div>

        {/* INPUTS */}
        <div className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Property Location *"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#d4af37]"
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">{errors.location}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#d4af37]"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Mobile Number *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#d4af37]"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* MESSAGE */}
        {message && (
          <p
            className={`mt-3 text-sm ${
              message.includes("Thank") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* CTA */}
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="mt-4 bg-[#9e1b1b] hover:bg-[#7f1414] text-white py-2.5 rounded-md font-semibold text-sm transition disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Submitting..." : "Book Free Consultation"}
        </button>

        <p className="text-[11px] text-gray-500 mt-2">
          * indicates mandatory fields
        </p>
      </div>
    );
  }
};

export default OfferBanner;

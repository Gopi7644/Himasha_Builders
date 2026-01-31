import { useState } from "react";
import { FiX } from "react-icons/fi";
import { toast, Toaster } from "react-hot-toast";

/* ===== Outlined Input ===== */

const OutlinedInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="relative">

      <span
        className={`absolute -top-2.5 left-3 bg-white px-2 text-xs z-10
        ${error ? "text-red-500" : "text-gray-600"}`}
      >
        {label}
      </span>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg px-4 py-3 text-sm border outline-none
        ${
          error
            ? "border-red-500"
            : "border-gray-300 focus:border-[#d4af37]"
        }`}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

    </div>
  );
};

/* ================= MAIN ================= */

const FormPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedProperty, setSelectedProperty] = useState("");

  const [form, setForm] = useState({
    location: "",
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* ===== CHANGE ===== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* ===== VALIDATION ===== */

  const validateForm = () => {
    const err = {};

    if (!form.location.trim()) err.location = "Enter location";

    if (!form.name.trim()) {
      err.name = "Enter name";
    } else if (!/^[a-zA-Z .]{2,40}$/.test(form.name)) {
      err.name = "Invalid name";
    }

    if (!form.phone.trim()) {
      err.phone = "Enter mobile";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      err.phone = "Invalid number";
    }

    if (!selectedProperty) err.propertyType = "Select type";

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  /* ===== SUBMIT ===== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const toastId = toast.loading("Submitting your request...");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/offer-enquiry`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            propertyType: selectedProperty,
          }),
        }
      );

      if (!res.ok) throw new Error();

      toast.success("🎉 Our team will contact you shortly!", {
        id: toastId,
      });

      setForm({ location: "", name: "", phone: "" });
      setSelectedProperty("");

      setTimeout(onClose, 1200);

    } catch {
      toast.error("Server error. Try again.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">

      {/* CENTER TOASTER */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#111827",
            color: "#fff",
            padding: "14px 22px",
            borderRadius: "10px",
            fontSize: "14px",
            textAlign: "center",
          },
        }}
        containerStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />

      {/* CARD */}
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-xl p-6 md:p-8">

        {/* LOADING OVERLAY */}
        {loading && (
          <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-20 rounded-xl">

            <div className="w-8 h-8 border-4 border-gray-300 border-t-[#9e1b1b] rounded-full animate-spin" />

            <p className="mt-3 text-sm font-medium text-gray-700">
              Submitting...
            </p>

          </div>
        )}

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <FiX size={22} />
        </button>

        <h2 className="text-xl font-bold text-gray-900">
          Get Free Design Consultation
        </h2>

        <p className="text-gray-600 text-sm mb-5">
          Talk to our interior experts today
        </p>

        <form onSubmit={handleSubmit}>

          {/* PROPERTY TYPE */}
          <div className="mb-4">

            <p className="text-sm font-semibold mb-2">
              Property Type *
            </p>

            <div className="flex gap-2 flex-nowrap">

              {["1 BHK", "2 BHK", "3 BHK", "4+ BHK/Duplex"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => {
                    setSelectedProperty(type);
                    setErrors({});
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs border transition whitespace-nowrap cursor-pointer
                  ${
                    selectedProperty === type
                      ? "bg-[#d4af37] border-[#d4af37]"
                      : "border-gray-300 hover:bg-[#fff3c4]"
                  }`}
                >
                  {type}
                </button>
              ))}

            </div>

            {errors.propertyType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.propertyType}
              </p>
            )}
          </div>

          {/* INPUTS */}
          <div className="space-y-4">

            <OutlinedInput
              label="Location"
              name="location"
              placeholder="Enter location"
              value={form.location}
              onChange={handleChange}
              error={errors.location}
            />

            <OutlinedInput
              label="Name"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />

            <OutlinedInput
              label="Phone"
              name="phone"
              type="tel"
              placeholder="10 digit mobile"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
            />

          </div>

          {/* SUBMIT */}
          <button
            disabled={loading}
            type="submit"
            className="mt-5 w-full bg-[#9e1b1b] hover:bg-[#7f1414]
            text-white py-2.5 rounded-md font-semibold transition
            disabled:opacity-70 cursor-pointer"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default FormPopup;

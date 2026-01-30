import { useState } from "react";
import { FiX } from "react-icons/fi";
import { toast } from "react-hot-toast";

/* ===== Outlined Label Input (Image-style) ===== */
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
      {/* LABEL */}
      <span
        className={`
          absolute -top-2.5 left-3 bg-white px-2 text-xs z-10
          ${error ? "text-red-500" : "text-gray-600"}
        `}
      >
        {label}
      </span>

      {/* INPUT */}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full rounded-lg px-4 py-3 text-sm
          border outline-none transition
          ${error
            ? "border-red-500"
            : "border-gray-300 focus:border-[#d4af37]"
          }
        `}
      />

      {/* ERROR */}
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

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
  const [message, setMessage] = useState("");

  /* ===== HANDLE CHANGE ===== */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* ===== VALIDATION ===== */
  const validateForm = () => {
    const newErrors = {};

    if (!form.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z .]{2,40}$/.test(form.name.trim())) {
      newErrors.name = "Enter valid name";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!selectedProperty) {
      newErrors.propertyType = "Please select property type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ===== SUBMIT ===== */
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setLoading(true);

  // loading toast
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

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Submission failed");

    toast.success("🎉 Thank you! Our team will contact you shortly.", {
      id: toastId,
    });

    setForm({ location: "", name: "", phone: "" });
    setSelectedProperty("");
    setErrors({});
  } catch (err) {
    toast.error("Something went wrong. Please try again later.", {
      id: toastId,
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center px-4">
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-xl p-6 md:p-8 animate-scaleIn">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <FiX size={22} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900">
          Get Free Design Consultation
        </h2>
        <p className="text-gray-600 text-sm mt-1 mb-6">
          Talk to our interior experts today
        </p>

        <form onSubmit={handleSubmit}>
          {/* PROPERTY TYPE */}
          <div className="mb-5">
            <p className="text-sm font-semibold mb-2">
              Select Property Type <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {["1 BHK", "2 BHK", "3 BHK", "4+ BHK/Duplex"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => {
                    setSelectedProperty(type);
                    setErrors((prev) => ({ ...prev, propertyType: "" }));
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs border transition cursor-pointer
                    ${selectedProperty === type
                      ? "bg-[#d4af37] text-black border-[#d4af37]"
                      : "border-gray-300 text-gray-700 hover:bg-[#fff3c4]"
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

          {/* INPUTS (LABEL UPDATED) */}
          <div className="space-y-5">
            <OutlinedInput
              label="Property Location"
              name="location"
              placeholder="Enter your location"
              value={form.location}
              onChange={handleChange}
              error={errors.location}
            />

            <OutlinedInput
              label="Name"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />

            <OutlinedInput
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Enter your mobile number"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>

          {/* MESSAGE */}
          {message && (
            <div
              className={`mt-4 text-sm ${message.includes("Thank")
                  ? "text-green-600"
                  : "text-red-600"
                }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
    mt-6 w-full flex items-center justify-center gap-2
    bg-[#9e1b1b] text-white py-2.5 rounded-md
    disabled:opacity-70 cursor-pointer font-semibold
  "
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Submitting
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      {/* Animation */}
      <style>{`
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out forwards;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default FormPopup;

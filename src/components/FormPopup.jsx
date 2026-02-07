import { useState } from "react";
import { FiX } from "react-icons/fi";
import { toast } from "react-hot-toast";

/* ================= INPUT ================= */

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
    <div className="relative w-full">

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
        ${error
            ? "border-red-500"
            : "border-gray-300 focus:border-[#d4af37]"
          }`}
      />

      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}

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

  /* ================= CHANGE ================= */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* ================= VALIDATION ================= */

  const validateForm = () => {

    const err = {};

    if (!form.location.trim()) {
      err.location = "Enter location";
    }

    if (!form.name.trim()) {
      err.name = "Enter name";
    }
    else if (!/^[a-zA-Z .]{2,40}$/.test(form.name)) {
      err.name = "Invalid name";
    }

    if (!form.phone.trim()) {
      err.phone = "Enter mobile number";
    }
    else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      err.phone = "Invalid number";
    }

    if (!selectedProperty?.trim()) {
      err.propertyType = "Select property type";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("🔍 handleSubmit triggered");
    console.log("📋 Form data:", form);
    console.log("🏠 Selected property:", selectedProperty);

    if (!validateForm()) {
      console.log("❌ Form validation failed");
      return;
    }

    console.log("✅ Form validation passed");

    setLoading(true);

    const toastId = toast.loading("Submitting...");

    try {

      const payload = {
        ...form,
        propertyType: selectedProperty,
      };

      console.log("📤 Sending payload:", payload);
      console.log("🌐 API URL:", import.meta.env.VITE_API_URL);

      const GOOGLE_SHEET_API =
        "https://script.google.com/macros/s/AKfycbyv272vnQuaknjlyT5X-3mT5sypRSzWqEo911IAuYLq8FMdz6pIj2koq0VTo7AmTYgP7Q/exec";

      console.log(GOOGLE_SHEET_API)

      const formData = new FormData();

      formData.append("location", form.location);
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("propertyType", selectedProperty);

      const res = await fetch(GOOGLE_SHEET_API, {
        method: "POST",
        body: formData, // 👈 No headers
      });


      console.log("📨 Response status:", res.status);
      console.log("✔️ Response ok:", res.ok);

      if (!res.ok) {
        const text = await res.text();
        console.log("Raw Response:", text);

        let errorData;
        try {
          errorData = JSON.parse(text);
        } catch {
          throw new Error("Invalid JSON from server");
        }

        console.error("❌ Server error response:", errorData);
        throw new Error(`Server error: ${res.status}`);
      }

      console.log("🎉 Request successful");

      toast.success("🎉 Our team will contact you shortly!", {
        id: toastId,
        duration: 2500,
      });

      setForm({
        location: "",
        name: "",
        phone: "",
      });

      setSelectedProperty("");

      setTimeout(() => {
        onClose();
      }, 1000);

    } catch (error) {

      console.error("💥 Catch error:", error);
      console.error("📍 Error message:", error.message);
      console.error("🔗 Error type:", error.name);

      // Handle CORS errors
      if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
        console.error("🚫 CORS Error detected - Check API URL and server headers");
        console.error("💡 CORS Exception Info:");
        console.error("   • Check if API URL is correct");
        console.error("   • Server must respond with CORS headers");
        console.error("   • Ensure backend has 'Access-Control-Allow-Origin' header");

        toast.error("❌ CORS Error: Cannot connect to server. Check network settings.", {
          id: toastId,
          duration: 3000,
        });
      }
      // Handle network errors
      else if (error instanceof TypeError) {
        console.error("🌐 Network error detected");
        toast.error("❌ Network error. Please check your internet connection.", {
          id: toastId,
          duration: 2500,
        });
      }
      // Handle server errors
      else {
        console.error("⚠️ Server error detected");
        toast.error("❌ Server error. Try again.", {
          id: toastId,
          duration: 2500,
        });
      }

    } finally {
      setLoading(false);
      console.log("🏁 handleSubmit completed");
    }
  };

  /* ================= UI ================= */

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-3 sm:px-4">

      <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-xl shadow-xl p-5 sm:p-7">

        {/* Loading */}
        {loading && (
          <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-20 rounded-xl">

            <div className="w-8 h-8 border-4 border-gray-300 border-t-[#9e1b1b] rounded-full animate-spin" />

            <p className="mt-3 text-sm font-medium text-gray-700">
              Submitting...
            </p>

          </div>
        )}

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <FiX size={22} />
        </button>

        {/* Header */}
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          Get Free Design Consultation
        </h2>

        <p className="text-gray-600 text-sm mb-5">
          Talk to our interior experts today
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Property Type */}
          <div>

            <p className="text-sm font-semibold mb-2">
              Property Type *
            </p>

            <div className="flex flex-wrap gap-2">

              {["1 BHK", "2 BHK", "3 BHK", "4+ BHK/Duplex"].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => {
                    setSelectedProperty(type);

                    // ✅ Only clear property error
                    setErrors((prev) => ({
                      ...prev,
                      propertyType: "",
                    }));
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs border transition
                  ${selectedProperty === type
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

          {/* Inputs */}
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

          {/* Submit */}
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-[#9e1b1b] hover:bg-[#7f1414]
            text-white py-2.5 rounded-md font-semibold transition
            disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default FormPopup;

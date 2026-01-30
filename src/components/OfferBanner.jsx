import { useState, useEffect } from "react";
import { FiX, FiArrowLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import OfferImg from "../assets/Offers/interior-offer.png";

/* ================= FLOATING INPUT ================= */

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
        className={`w-full rounded-lg px-4 py-3 text-sm border outline-none transition
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

const OfferBanner = () => {
  const [open, setOpen] = useState(false);
  const [showFormMobile, setShowFormMobile] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const [form, setForm] = useState({
    location: "",
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* ===== AUTO OPEN ===== */
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  /* ===== CHANGE ===== */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* ===== VALIDATE ===== */
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

    const toastId = toast.loading("Submitting...");

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

      toast.success("🎉 We will contact you shortly!", {
        id: toastId,
      });

      setForm({ location: "", name: "", phone: "" });
      setSelectedProperty("");

      setTimeout(() => {
        setOpen(false);
        setShowFormMobile(false);
      }, 1300);

    } catch {
      toast.error("Server error. Try again.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
        >

          {/* CENTER TOAST */}
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
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
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
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden"
          >

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 bg-white rounded-full p-1 shadow"
            >
              <FiX size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* IMAGE */}
              <div
                className={`cursor-pointer ${
                  showFormMobile ? "hidden md:block" : "block"
                }`}
                onClick={() => setShowFormMobile(true)}
              >
                <img
                  src={OfferImg}
                  alt="Offer"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* FORM */}
              <div
                className={`p-5 md:p-6 flex flex-col justify-center
                ${showFormMobile ? "block" : "hidden md:block"}`}
              >

                {/* MOBILE BACK */}
                {showFormMobile && (
                  <button
                    onClick={() => setShowFormMobile(false)}
                    className="md:hidden flex items-center gap-1 text-sm mb-3 text-gray-600"
                  >
                    <FiArrowLeft /> Back
                  </button>
                )}

                <h2 className="text-lg font-bold text-gray-900">
                  Free Design Consultation
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                  Get expert guidance for your home
                </p>

                <form onSubmit={handleSubmit}>

                  {/* PROPERTY TYPE */}
                  <div className="mb-4">

                    <p className="text-sm font-semibold mb-2">
                      Property Type *
                    </p>

                    <div className="flex gap-2 flex-nowrap">

                      {["1 BHK", "2 BHK", "3 BHK", "4+ BHK"].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => {
                            setSelectedProperty(type);
                            setErrors({});
                          }}
                          className={`px-3 py-1.5 rounded-full text-xs border transition whitespace-nowrap
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
                      placeholder="Enter property location"
                      value={form.location}
                      onChange={handleChange}
                      error={errors.location}
                    />

                    <OutlinedInput
                      label="Name"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                    />

                    <OutlinedInput
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="10 digit mobile number"
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
                    disabled:opacity-70"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>

                </form>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default OfferBanner;

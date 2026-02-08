import { useState, useEffect } from "react";
import { FiX, FiArrowLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

import OfferImg from "../assets/Offers/holi.png";

/* ================= INPUT ================= */

const OutlinedInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) => (
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
      ${
        error
          ? "border-red-500"
          : "border-gray-300 focus:border-[#d4af37]"
      }`}
    />

    {error && (
      <p className="text-red-500 text-xs mt-1">{error}</p>
    )}
  </div>
);


/* ================= MAIN ================= */

const OfferBanner = () => {

  /* ================= STATE ================= */

  const [open, setOpen] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const [form, setForm] = useState({
    location: "",
    name: "",
    phone: "",
  });

  const [propertyType, setPropertyType] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  /* ================= AUTO OPEN ================= */

  useEffect(() => {

    const timer = setTimeout(() => setOpen(true), 900);

    return () => clearTimeout(timer);

  }, []);


  /* ================= CHANGE ================= */

  const handleChange = (e) => {

    const { name, value } = e.target;

    // Phone → Numbers Only
    if (name === "phone") {

      const num = value.replace(/\D/g, "");

      if (num.length > 10) return;

      setForm({ ...form, phone: num });

      setErrors({ ...errors, phone: "" });

      return;
    }

    setForm({ ...form, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };


  /* ================= VALIDATION ================= */

  const validate = () => {

    const err = {};

    if (!form.location.trim())
      err.location = "Enter location";

    if (!/^[a-zA-Z .]{2,40}$/.test(form.name))
      err.name = "Enter valid name";

    if (!/^[6-9]\d{9}$/.test(form.phone))
      err.phone = "Enter valid number";

    if (!propertyType)
      err.propertyType = "Select property type";

    setErrors(err);

    return Object.keys(err).length === 0;
  };


  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (loading) return;

    if (!validate()) {
      toast.error("❌ Please fix form errors");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Submitting...");

    try {

      const formData = new FormData();

      formData.append("location", form.location);
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("propertyType", propertyType);
      formData.append("source", "Offer Banner");


      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyv272vnQuaknjlyT5X-3mT5sypRSzWqEo911IAuYLq8FMdz6pIj2koq0VTo7AmTYgP7Q/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const text = await res.text();

      if (text !== "success") throw new Error(text);


      toast.success("🎉 We will contact you shortly!", {
        id: toastId,
        duration: 2200,
      });


      // Reset
      setForm({ location: "", name: "", phone: "" });
      setPropertyType("");

      setTimeout(() => {
        setOpen(false);
        setShowMobile(false);
      }, 800);


    } catch (err) {

      console.error(err);

      toast.error("❌ Submit failed. Try again.", {
        id: toastId,
        duration: 2200,
      });

    } finally {

      setLoading(false);
    }
  };


  /* ================= UI ================= */

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-3"
        >

          <motion.div
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden"
          >

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 bg-white rounded-full p-1 shadow"
            >
              <FiX size={20} />
            </button>


            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Image */}
              <div
                className={`cursor-pointer flex items-center justify-center bg-black
                ${showMobile ? "hidden md:flex" : "flex"}`}
                onClick={() => setShowMobile(true)}
              >
                <img
                  src={OfferImg}
                  alt="Offer"
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>


              {/* Form */}
              <div
                className={`p-5 md:p-6 flex flex-col justify-center
                ${showMobile ? "block" : "hidden md:block"}`}
              >

                {/* Mobile Back */}
                {showMobile && (
                  <button
                    onClick={() => setShowMobile(false)}
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


                <form
                  onSubmit={handleSubmit}
                  className={`space-y-4
                  ${loading ? "pointer-events-none opacity-80" : ""}`}
                >

                  {/* Property */}
                  <div>

                    <p className="text-sm font-semibold mb-2">
                      Property Type *
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {["1 BHK", "2 BHK", "3 BHK", "4+ BHK/Duplex"].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => {
                            setPropertyType(t);
                            setErrors({ ...errors, propertyType: "" });
                          }}
                          className={`px-3 py-1.5 rounded-full text-xs border
                          ${
                            propertyType === t
                              ? "bg-[#d4af37] border-[#d4af37]"
                              : "border-gray-300 hover:bg-[#fff3c4]"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {errors.propertyType && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.propertyType}
                      </p>
                    )}
                  </div>


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

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default OfferBanner;

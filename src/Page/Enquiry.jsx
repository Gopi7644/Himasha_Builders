import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { toast } from "react-hot-toast";

const Enquiry = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors = {};

    if (!form.name || form.name.trim().length < 2) {
      newErrors.name = "Enter valid name";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter 10 digit mobile number";
    }

    if (!form.service) {
      newErrors.service = "Select service";
    }

    if (!form.message || form.message.trim().length < 5) {
      newErrors.message = "Minimum 5 characters required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  /* ================= CHANGE ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("❌ Please fix form errors");
      return;
    }
    setLoading(true);
    const toastId = toast.loading("Submitting...");

    try {

      // ✅ Create FormData
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // ✅ Identify this form
      formData.append("source", "Enquiry Page");

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyv272vnQuaknjlyT5X-3mT5sypRSzWqEo911IAuYLq8FMdz6pIj2koq0VTo7AmTYgP7Q/exec",
        {
          method: "POST",
          body: formData, // ❗ No headers
        }
      );

      const text = await res.text();

      if (text !== "success") {
        throw new Error(text);
      }

      toast.success("🎉 Submitted Successfully!", {
        id: toastId,
        duration: 2200,
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (err) {

      console.error(err);

      toast.error("⚠️ Submit failed. Try again.", {
        id: toastId,
        duration: 2200,
      });

    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="min-h-screen py-20 px-6 bg-linear-to-b from-[#06080f] to-[#0b0f1a] text-white relative">

      {/* toasts handled by app-level Toaster in Layout.jsx */}

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Request a Free Consultation
        </h1>

        <p className="mt-3 text-[#d4af37]">
          Let’s design something beautiful together
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT INFO */}
        <div className="p-10 rounded-3xl bg-white/5 backdrop-blur border border-[#d4af37]/30 shadow-2xl">

          <h2 className="text-2xl font-semibold mb-6">
            Contact Information
          </h2>

          <div className="flex items-center gap-4 mb-5">
            <FaPhoneAlt className="text-[#d4af37]" />
            <a href="tel:+917739905017">+91 7739905017</a>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <FaEnvelope className="text-[#d4af37]" />
            info@himashabuilders.com
          </div>

          <div className="flex items-start gap-4 mb-8">
            <FaMapMarkerAlt className="text-[#d4af37] mt-1" />
            <p>
              RK Puram Near Peepal Tree Chowk,
              <br />
              Saguna, Danapur, Patna
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Our design experts will contact you shortly.
          </p>

          {/* MAP (UNCHANGED) */}
          <div className="mt-10 rounded-xl overflow-hidden border border-[#d4af37]/20">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d404.62179518177624!2d85.0383451!3d25.615575!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzU2LjEiTiA4NcKwMDInMTguNiJF!5e1!3m2!1sen!2sin!4v1768810811965!5m2!1sen!2sin"
              className="w-full h-56 border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className={`p-10 rounded-3xl bg-white/5 backdrop-blur border border-[#d4af37]/30 shadow-2xl space-y-5
  ${loading ? "pointer-events-none opacity-80" : ""}`}
        >


          <h2 className="text-xl font-semibold">
            Send Your Requirements
          </h2>

          <p className="text-sm text-gray-400 mb-3">
            Our experts will contact you shortly
          </p>

          {/* NAME */}
          <div>
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="input"
            />
            {errors.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="input"
            />
            {errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, ""); // only numbers

                if (val.length <= 10) {
                  setForm({ ...form, phone: val });
                }

                setErrors((prev) => ({ ...prev, phone: "" }));
              }}
              maxLength={10}
              inputMode="numeric"
              className="input"
            />
            {errors.phone && (
              <p className="error">{errors.phone}</p>
            )}
          </div>

          {/* SERVICE */}
          <div>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="input"
            >
              <option value="">Select Service</option>
              <option>Flat Interior</option>
              <option>Home Interior</option>
              <option>Marriage Hall</option>
              <option>Shop Design</option>
            </select>

            {errors.service && (
              <p className="error">{errors.service}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about project"
              value={form.message}
              onChange={handleChange}
              className="input resize-none"
            />

            {errors.message && (
              <p className="error">{errors.message}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-200
  flex items-center justify-center gap-2
  ${loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black hover:scale-[1.02]"
              }`}
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Submit Enquiry"
            )}
          </button>


        </form>
      </div>

      {/* REUSABLE STYLES */}
      <style>{`
        .input {
          width: 100%;
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 12px 14px;
          color: white;
          outline: none;
        }

        .input:focus {
          border-color: #d4af37;
          box-shadow: 0 0 0 1px #d4af37;
        }

        .error {
          font-size: 12px;
          color: #f87171;
          margin-top: 4px;
        }
      `}</style>

    </section>
  );
};

export default Enquiry;

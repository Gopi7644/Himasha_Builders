import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Enquiry = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Validation
  const validate = () => {
    if (form.name.trim().length < 2) return "Please enter valid name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Enter valid email address";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      return "Enter valid 10-digit mobile number";
    if (!form.service) return "Please select service";
    if (form.message.trim().length < 5) return "Enter brief message";
    return null;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Proper backend response handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();

      if (data.success) {
        setShowSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server issue. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-linear-to-b from-[#06080f] to-[#0b0f1a] text-white">
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
        {/* LEFT SIDE INFO */}
        <div className="p-10 rounded-3xl bg-white/5 backdrop-blur border border-[#d4af37]/30 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <div className="flex items-center gap-4 mb-5">
            <FaPhoneAlt className="text-[#d4af37]" />
            <a href="tel:+917739905017">+91 7739905017</a>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <FaEnvelope className="text-[#d4af37]" />
            <a href="mailto:info@himashabuilders.com">
              info@himashabuilders.com
            </a>
          </div>

          <div className="flex items-start gap-4 mb-8">
            <FaMapMarkerAlt className="text-[#d4af37] mt-1" />
            <p>
              RK Puram Near Peepal Tree Chowk,<br />
              Saguna, Danapur, Patna
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Share your requirements with us and our design experts will get in
            touch with you shortly for a personalized consultation.
          </p>

          {/* MAP */}
          <div className="mt-10 rounded-xl overflow-hidden border border-[#d4af37]/20">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d404.62179518177624!2d85.0383451!3d25.615575!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzU2LjEiTiA4NcKwMDInMTguNiJF!5e1!3m2!1sen!2sin!4v1768810811965!5m2!1sen!2sin"
              className="w-full h-56 border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-10 rounded-3xl bg-white/5 backdrop-blur border border-[#d4af37]/30 shadow-2xl space-y-5"
        >
          <h2 className="text-xl font-semibold">Send Us Your Requirements</h2>
          <p className="text-sm text-gray-400 mb-3">
            Our experts will contact you shortly
          </p>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#d4af37] outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#d4af37] outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#d4af37] outline-none"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#d4af37] outline-none"
          >
            <option value="">Select Service</option>
            <option value="Flat">Flat Interior</option>
            <option value="Interior">Home Interior</option>
            <option value="Marriage">Marriage Hall</option>
            <option value="Shop">Shop Design</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your project"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#d4af37] outline-none resize-none"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black hover:scale-[1.02]"
            }`}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
          
        </form>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur p-10 rounded-2xl border border-[#d4af37]/40 text-center shadow-2xl">
            <FaCheckCircle size={64} className="text-[#d4af37] mx-auto mb-4" />
            <h2 className="text-xl font-semibold">Thank You!</h2>
            <p className="mt-2 text-gray-300">
              Our team will contact you shortly.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Enquiry;

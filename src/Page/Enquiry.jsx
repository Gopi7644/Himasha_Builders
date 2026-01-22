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

  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Frontend Validation
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    // ⚡ Instant UX feedback
    setShowSuccess(true);

    // reset form
    const payload = { ...form };
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    // 🔥 Fire backend silently
    fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.error("API error:", err);
      setError("Server issue. We'll still contact you shortly.");
    });

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "5rem 1.5rem",
        background: "linear-gradient(180deg,#06080f,#0b0f1a)",
        color: "#ffffff",
      }}
    >
      {/* ================= HEADER ================= */}
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(2.2rem,3.5vw,3rem)",
            fontWeight: 700,
          }}
        >
          Request a Free Consultation
        </h1>
        <p style={{ marginTop: "0.8rem", color: "#d4af37" }}>
          Let’s design something beautiful together
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        style={{
          maxWidth: 1200,
          margin: "4rem auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "3rem",
        }}
      >
        {/* ================= LEFT INFO PANEL ================= */}
        <div
          style={{
            padding: "2.5rem",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))",
            border: "1px solid rgba(212,175,55,0.25)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            animation: "fadeInLeft 1s ease",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
            Contact Information
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <FaPhoneAlt color="#d4af37" />
            <a
              href="tel:+917739905017"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              +91 7739905017
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <FaEnvelope color="#d4af37" />
            <a
              href="mailto:info@himashabuilders.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              info@himashabuilders.com
            </a>
          </div>


          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <FaMapMarkerAlt color="#d4af37" />
            <span><p>RK Puram Near Peepal Tree Chowk,<br /> Saguna, Danapur, Patna</p></span>
          </div>

          <p style={{ marginTop: "2rem", lineHeight: 1.7, opacity: 0.9 }}>
            Share your requirements with us and our design experts will get in
            touch with you shortly for a personalized consultation.
          </p>

          {/* ================= GOOGLE MAP EMBED ================= */}
          <div
            style={{
              marginTop: "2.5rem",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(212,175,55,0.25)",
            }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d404.62179518177624!2d85.0383451!3d25.615575!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzU2LjEiTiA4NcKwMDInMTguNiJF!5e1!3m2!1sen!2sin!4v1768810811965!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "3rem",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <div style={{ display: "grid", gap: "1.3rem" }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              style={inputStyle}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Service</option>
              <option value="Flat">Flat Interior</option>
              <option value="Interior">Home Interior</option>
              <option value="Marriage">Marriage Hall</option>
              <option value="Shop">Shop Design</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows={4}
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: "none" }}
            />

            {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}

            <button
              type="submit"
              style={{
                padding: "0.9rem 2rem",
                borderRadius: "14px",
                background: "linear-gradient(135deg,#d4af37,#b8962e)",
                color: "#111827",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div style={successOverlay}>
          <div style={successBox}>
            <FaCheckCircle size={64} color="#d4af37" />
            <h2>Thank You!</h2>
            <p>Your enquiry has been submitted successfully.</p>
          </div>
        </div>
      )}
    </section>
  );
};

/* ================= Styles ================= */

const infoRow = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 14,
};

const inputStyle = {
  padding: "0.9rem 1rem",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(0,0,0,0.4)",
  color: "#fff",
  outline: "none",
};

const successOverlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const successBox = {
  padding: "3rem",
  borderRadius: "24px",
  background:
    "linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))",
  border: "1px solid rgba(212,175,55,0.35)",
  textAlign: "center",
  boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
};

export default Enquiry;

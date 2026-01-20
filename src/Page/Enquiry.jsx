import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const Enquiry = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });


  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        // 🔥 Success
        setShowSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // Auto close modal after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Server not reachable. Please try later.");
    } finally {
      setLoading(false);
    }
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
            letterSpacing: "0.6px",
          }}
        >
          Request a Free Consultation
        </h1>
        <p
          style={{
            marginTop: "0.8rem",
            color: "#d4af37",
            fontSize: "1.05rem",
          }}
        >
          Let’s design something beautiful together
        </p>
      </div>

      {/* ================= CONTENT GRID ================= */}
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

        {/* ================= ENQUIRY FORM ================= */}
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "3rem",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))",
            border: "1px solid rgba(212,175,55,0.25)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            animation: "fadeInRight 1s ease",
          }}
        >
          <div style={{ display: "grid", gap: "1.4rem" }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select Service</option>
              <option value="Flat">Flat Interior</option>
              <option value="Interior">Home Interior</option>
              <option value="Marriage">Marriage Hall</option>
              <option value="Shop">Shop Design</option>
              <option value="Any">Any Others</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows={4}
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: "none" }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: "1rem",
                padding: "0.9rem 2rem",
                borderRadius: "14px",
                background: "linear-gradient(135deg,#d4af37,#b8962e)",
                color: "#111827",
                fontWeight: 700,
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>

          </div>
        </form>
        {error && (
          <p style={{ color: "#ff6b6b", marginBottom: "1rem" }}>
            {error}
          </p>
        )}

      </div>

      {/* ================= SUCCESS MODAL ================= */}
      {showSuccess && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              padding: "3rem",
              borderRadius: "24px",
              background:
                "linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))",
              border: "1px solid rgba(212,175,55,0.35)",
              backdropFilter: "blur(10px)",
              textAlign: "center",
              animation: "scaleIn .5s ease",
              boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
            }}
          >
            <FaCheckCircle size={64} color="#d4af37" />
            <h2 style={{ marginTop: "1rem" }}>Thank You!</h2>
            <p style={{ marginTop: "0.8rem", opacity: 0.9 }}>
              Your enquiry has been submitted successfully.
            </p>
          </div>
        </div>
      )}

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

const inputStyle = {
  padding: "0.9rem 1rem",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(0,0,0,0.4)",
  color: "#fff",
  outline: "none",
  fontSize: "0.95rem",
};

export default Enquiry;

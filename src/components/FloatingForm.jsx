import { useState } from "react";

const FloatingForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    designType: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (form.name.trim().length < 2) return "Enter a valid name";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      return "Enter valid 10-digit mobile number";
    if (form.address.trim().length < 5) return "Enter full address";
    if (!form.designType) return "Select design type";
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

    // ⚡ Instant success UX
    setSuccess(true);
    setForm({ name: "", phone: "", address: "", designType: "" });

    // 🔥 Fire backend silently
    fetch(`${import.meta.env.VITE_API_URL}/api/book-visit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).catch((err) => {
      console.error("Background API error:", err);
    });

    setTimeout(() => setSuccess(false), 3500);
  };

  return (
    <div style={boxStyle}>
      <h3 style={heading}>Get Your Free Site Visit</h3>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="designType"
          value={form.designType}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="">Select Design Type</option>
          <option>Home</option>
          <option>Flat</option>
          <option>Modular Kitchen</option>
          <option>Shop</option>
          <option>Any Others</option>
        </select>

        {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}

        <button type="submit" style={buttonStyle}>
          Book Visit
        </button>

        {success && (
          <p
            style={{
              color: "#4ade80",
              textAlign: "center",
              marginTop: "0.6rem",
              fontWeight: 600,
            }}
          >
            ✅ Thank you! Our team will contact you shortly.
          </p>
        )}
      </form>
    </div>
  );
};

/* ===== Styles ===== */

const boxStyle = {
  width: "100%",
  maxWidth: "380px",
  padding: "2rem",
  marginBottom: "6rem",
  borderRadius: "18px",
  background: "linear-gradient(135deg, rgba(17,24,39,0.75), rgba(15,23,42,0.65))",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(212,175,55,0.25)",
  boxShadow: "0 25px 60px rgba(0,0,0,0.55)",
  color: "#f5f5f5",
};

const heading = {
  textAlign: "center",
  marginBottom: "1.6rem",
  fontSize: "1.45rem",
  fontWeight: 800,
  color: "#d4af37",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem 0.85rem",
  borderRadius: "10px",
  border: "1px solid rgba(212,175,55,0.3)",
  background: "rgba(15,23,42,0.75)",
  color: "#f5f5f5",
  fontSize: "0.95rem",
  outline: "none",
};

const buttonStyle = {
  marginTop: "0.5rem",
  width: "100%",
  padding: "0.85rem",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: 800,
  color: "#111827",
  background: "linear-gradient(135deg, #d4af37 0%, #b8962e 100%)",
};

export default FloatingForm;

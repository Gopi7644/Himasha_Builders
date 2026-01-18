const FloatingForm = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "380px",
        padding: "2rem",
        marginBottom: "6rem",
        borderRadius: "18px",
        background:
          "linear-gradient(135deg, rgba(17,24,39,0.75), rgba(15,23,42,0.65))",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(212,175,55,0.25)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.55)",
        color: "#f5f5f5",
        animation: "fadeUp 0.9s ease forwards",
      }}
    >
      {/* Heading */}
      <h3
        style={{
          textAlign: "center",
          marginBottom: "1.6rem",
          fontSize: "1.45rem",
          fontWeight: 800,
          color: "#d4af37",
          letterSpacing: "0.4px",
        }}
      >
        Get Your Free Site Visit
      </h3>

      {/* Form */}
      <form
        aria-label="Free Site Visit Inquiry Form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          required
          aria-label="Name"
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
          aria-label="Mobile Number"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Address"
          required
          aria-label="Address"
          style={inputStyle}
        />

        <select
          required
          aria-label="Design Type"
          style={{
            ...inputStyle,
            cursor: "pointer",
          }}
        >
          <option value="">Select Design Type</option>
          <option>Home</option>
          <option>Flat</option>
          <option>Modular Kitchen</option>
          <option>Shop</option>
          <option>Any Other</option>
        </select>

        <button
          type="submit"
          style={{
            marginTop: "0.5rem",
            width: "100%",
            padding: "0.85rem",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: 800,
            color: "#111827",
            background:
              "linear-gradient(135deg, #d4af37 0%, #b8962e 100%)",
            boxShadow: "0 10px 30px rgba(212,175,55,0.35)",
            transition: "transform .25s ease, box-shadow .25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 18px 45px rgba(212,175,55,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(212,175,55,0.35)";
          }}
        >
          Book Visit
        </button>
      </form>

      {/* Inline Animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

/* ===== Reusable Input Style ===== */
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

export default FloatingForm;

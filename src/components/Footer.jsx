import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const GOLD = "#d4af37";

// 👇 Change this according to your header height
const HEADER_OFFSET = 90;

const Footer = () => {

  /* ================= SCROLL HANDLER ================= */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (!el) return;

    const elementPosition =
      el.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = elementPosition - HEADER_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1c1c1c 100%)",
        borderTop: "1px solid rgba(212,175,55,0.25)",
        color: "#e5e7eb",
      }}
    >
      {/* ================= MAIN ================= */}
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "2.5rem 1.25rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* ================= BRAND ================= */}
        <div>
          <h3 style={{ color: GOLD, fontWeight: 800 }}>
            Himasha Builders
          </h3>

          <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
            Interior Design & Construction Pvt. Ltd. <br />
            Premium residential & commercial solutions.
          </p>

          {/* SOCIAL */}
          <div
            style={{
              marginTop: "1.4rem",
              display: "flex",
              gap: "12px",
            }}
          >
            {[
              { icon: <FaFacebookF />, color: "#1877F2" },
              { icon: <FaInstagram />, color: "#E4405F" },
              { icon: <FaLinkedinIn />, color: "#0A66C2" },
              { icon: <FaYoutube />, color: "#FF0000" },
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1rem",
                  boxShadow: `0 6px 18px ${item.color}55`,
                  transition: "all .3s ease",
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h4 style={{ color: GOLD, marginBottom: "0.75rem" }}>
            Quick Links
          </h4>

          {[
            { name: "Home", id: "hero" },
            { name: "Services", id: "service" },
            { name: "Enquiry", id: "enquiry" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                display: "block",
                background: "none",
                border: "none",
                padding: 0,
                marginBottom: "0.5rem",
                color: "#e5e7eb",
                cursor: "pointer",
                fontSize: "0.9rem",
                textAlign: "left",
                transition: "color .25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = GOLD)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#e5e7eb")
              }
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 style={{ color: GOLD, marginBottom: "0.75rem" }}>
            Contact
          </h4>

          <p>📞 +91 7903550309</p>

          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaWhatsapp style={{ color: "#25D366" }} />

            <a
              href="https://wa.me/917739905017"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#e5e7eb",
                textDecoration: "none",
              }}
            >
              +91 7739905017
            </a>
          </p>

          <p>
            📍 RK Puram Near Peepal Tree Chowk,
            <br />
            Saguna, Danapur, Patna
          </p>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div
        style={{
          borderTop: "1px solid rgba(212,175,55,0.15)",
          padding: "0.75rem",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "#c7b873",
        }}
      >
        © {new Date().getFullYear()} Himasha Builders. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

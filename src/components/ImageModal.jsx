import { useEffect, useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageModal = ({ images = [], index = 0, onClose }) => {
  const [current, setCurrent] = useState(index);
  const [touchStart, setTouchStart] = useState(null);

  // 🔁 Sync index
  useEffect(() => {
    setCurrent(index);
  }, [index]);

  // ⌨️ Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const next = () =>
    setCurrent((c) => (c + 1) % images.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + images.length) % images.length);

  // 📱 Touch swipe handlers
  const onTouchStart = (e) =>
    setTouchStart(e.touches[0].clientX);

  const onTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 60) next();
    if (diff < -60) prev();
    setTouchStart(null);
  };

  if (!images.length) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        style={{
          position: "relative",
          maxWidth: "1100px",
          width: "100%",
          maxHeight: "90vh",
          borderRadius: "18px",
          overflow: "hidden",
          background: "rgba(20,20,20,0.65)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(0,0,0,0.6)",
            border: "none",
            color: "#fff",
            padding: "0.6rem",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <FaTimes />
        </button>

        {/* Prev */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            top: "50%",
            left: "12px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.6)",
            border: "none",
            color: "#fff",
            padding: "0.7rem",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <FaChevronLeft />
        </button>

        {/* Next */}
        <button
          onClick={next}
          style={{
            position: "absolute",
            top: "50%",
            right: "12px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.6)",
            border: "none",
            color: "#fff",
            padding: "0.7rem",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          <FaChevronRight />
        </button>

        {/* Image */}
        <img
          src={images[current]}
          alt="Project preview"
          style={{
            width: "100%",
            height: "90vh",
            objectFit: "contain",
            display: "block",
            background: "#000",
          }}
        />
      </div>
    </div>
  );
};

export default ImageModal;

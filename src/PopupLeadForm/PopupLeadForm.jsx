import React, { useEffect, useState } from "react";
import "./popupForm.css";

const PopupLeadForm = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="popup-backdrop">
      <div className="popup-card">
        <button className="close-btn" onClick={() => setShow(false)}>×</button>

        <h2>Book Free Inspection</h2>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Mobile Number" required />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Pin Code" required />

          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default PopupLeadForm;

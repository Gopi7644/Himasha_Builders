import React, { useEffect, useState } from "react";
import "./offerBanner.css";

const OfferBanner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="offer-wrapper"
      aria-label="Special pricing offer"
    >
      <div className={`offer-box ${animate ? "animate" : ""}`}>
        <span className="border top" />
        <span className="border right" />
        <span className="border bottom" />
        <span className="border left" />

        <p className="offer-text">
          🎯 <strong>20% Lower Than Market Rate</strong>
        </p>
      </div>
    </section>
  );
};

export default OfferBanner;

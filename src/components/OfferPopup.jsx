import { useState, useEffect } from "react";

const OfferPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000); // smooth delayed appearance

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
        fixed top-20 right-4 z-40
        w-[90%] max-w-sm
        bg-white rounded-xl shadow-2xl
        border border-gray-200
        overflow-hidden
        animate-slide-in-right
      "
    >
      {/* CONTENT */}
      <div className="flex gap-4 p-4">
        {/* Icon */}
        <div className="shrink-0 w-11 h-11 bg-teal-500 rounded-lg flex items-center justify-center text-white text-xl">
          🏠
        </div>

        {/* Text */}
        <div className="text-gray-800 text-sm leading-relaxed">
          <p>
            Stay updated with{" "}
            <span className="font-semibold">Himasha Builders</span>'s latest
            designs & offers.
          </p>
          <p className="mt-1 font-semibold text-gray-900">
            Get FLAT 25% OFF on home interiors.
          </p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="grid grid-cols-2 border-t text-sm">
        <button
          onClick={() => setVisible(false)}
          className="
            py-3 cursor-pointer
            hover:bg-gray-100
            transition
          "
        >
          Not Now
        </button>
        <button
          onClick={() => {
            setVisible(false);
            alert("Subscribed for notifications!");
          }}
          className="
            py-3 cursor-pointer
            text-teal-600 font-semibold
            hover:bg-teal-50
            transition
          "
        >
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default OfferPopup;

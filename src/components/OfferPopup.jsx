import { useState, useEffect } from "react";

const OfferPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 800); // slight delay for better UX

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-22.5 left-4 z-40 w-[90%] max-w-md bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden animate-fade-in">

      <div className="flex gap-4 p-4">
        {/* Icon */}
        <div className="shrink-0 w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
          🏠
        </div>

        {/* Content */}
        <div className="text-gray-800 text-sm leading-relaxed">
          <p>
            Stay updated about{" "}
            <span className="font-semibold">Himasha Builders</span>'s latest
            interior designs, offers and more.
          </p>
          <p className="mt-1 font-semibold text-gray-900">
            Get a FLAT 25% OFF on your home interiors.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 border-t text-sm">
        <button
          onClick={() => setVisible(false)}
          className="py-3 hover:bg-gray-100 transition"
        >
          Not Now
        </button>
        <button
          onClick={() => {
            setVisible(false);
            alert("Subscribed for notifications!");
          }}
          className="py-3 text-teal-600 font-semibold hover:bg-teal-50 transition"
        >
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default OfferPopup;

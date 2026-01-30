import { useState } from "react";
import kitchenPreview from "../../assets/kitchen/ushape.jpg"; // preview image

const KitchenConfigurator = () => {
  const [activeTab, setActiveTab] = useState("customize");

  return (
    <section className="w-full bg-gray-50 py-10 px-4">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto text-sm text-gray-500 mb-4">
        Home &gt; Kitchen Configurator &gt; U-Shaped Kitchen
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-0">

        {/* LEFT – KITCHEN PREVIEW */}
        <div className="relative bg-black">
          <img
            src={kitchenPreview}
            alt="Kitchen Preview"
            className="w-full h-full object-cover min-h-80 lg:min-h-125"
          />

          {/* Hotspots (demo) */}
          <div className="absolute top-[40%] left-[35%] w-4 h-4 bg-white rounded-full shadow-md border animate-pulse"></div>
          <div className="absolute top-[55%] left-[50%] w-4 h-4 bg-white rounded-full shadow-md border animate-pulse"></div>
          <div className="absolute top-[45%] left-[70%] w-4 h-4 bg-white rounded-full shadow-md border animate-pulse"></div>
        </div>

        {/* RIGHT – CONFIG PANEL */}
        <div className="flex flex-col justify-between p-6">

          {/* Tabs */}
          <div>
            <div className="flex border-b mb-6">
              {["customize", "items", "details"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-semibold border-b-2 transition ${
                    activeTab === tab
                      ? "border-purple-600 text-purple-600"
                      : "border-transparent text-gray-500 hover:text-purple-600"
                  }`}
                >
                  {tab === "customize"
                    ? "Customize"
                    : tab === "items"
                    ? "In-room Items"
                    : "Details"}
                </button>
              ))}
            </div>

            {/* TAB CONTENT */}
            {activeTab === "customize" && (
              <div className="space-y-4 text-sm text-gray-700">
                <p className="font-medium text-gray-900">
                  Click on the hotspots and select items or replace them.
                </p>

                <div className="space-y-3">
                  <Option title="Cabinet Finish" value="High Gloss White" />
                  <Option title="Countertop" value="Quartz Stone" />
                  <Option title="Backsplash" value="Matte Tiles" />
                  <Option title="Handles" value="Brushed Steel" />
                </div>
              </div>
            )}

            {activeTab === "items" && (
              <div className="space-y-4 text-sm text-gray-700">
                <Item title="Chimney" desc="Auto-clean wall mounted" />
                <Item title="Hob" desc="4 Burner Glass Hob" />
                <Item title="Sink" desc="Double bowl granite sink" />
                <Item title="Tall Unit" desc="Built-in pantry storage" />
              </div>
            )}

            {activeTab === "details" && (
              <div className="space-y-3 text-sm text-gray-700">
                <Detail label="Kitchen Type" value="U-Shaped Modular" />
                <Detail label="Material" value="HDHMR + Acrylic" />
                <Detail label="Warranty" value="10 Years" />
                <Detail label="Delivery" value="45 Days" />
              </div>
            )}
          </div>

          {/* PRICE + CTA */}
          <div className="border-t pt-5 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xl font-bold text-gray-900">
              ₹ 10,51,391
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg">
              Get this design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= Reusable Components ================= */

const Option = ({ title, value }) => (
  <div className="flex justify-between bg-gray-50 rounded-lg px-4 py-2 border">
    <span>{title}</span>
    <span className="font-medium text-gray-900">{value}</span>
  </div>
);

const Item = ({ title, desc }) => (
  <div className="border rounded-lg p-4 hover:shadow transition bg-white">
    <h4 className="font-semibold text-gray-900">{title}</h4>
    <p className="text-xs text-gray-500 mt-1">{desc}</p>
  </div>
);

const Detail = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium text-gray-900">{value}</span>
  </div>
);

export default KitchenConfigurator;

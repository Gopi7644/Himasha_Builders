import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-hb.jpeg";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const MENU = [
  {
    title: "Kitchens",
    path: "/kitchens",
    items: [
      "Modular Kitchens",
      "Kitchen Cost Calculator",
      "Design Ideas",
      "Kitchen Configurator",
    ],
  },
  {
    title: "Wardrobes",
    path: "/wardrobes",
    items: ["Sliding Wardrobes", "Walk-in Wardrobes", "Luxury Closets"],
  },
  {
    title: "Doors & Windows",
    path: "/doors",
    items: ["Main Doors", "Windows", "Balcony Doors"],
  },
  // {
  //   title: "Furnishings",
  //   path: "/furnishings",
  //   items: ["Curtains", "Blinds", "Sofas", "Upholstery"],
  // },
  {
    title: "Bathware",
    path: "/bathware",
    items: ["Showers", "Sanitaryware", "Mirrors"],
  },
  {
    title: "Lights",
    path: "/lights",
    items: ["Chandeliers", "LED Panels", "Decorative Lights"],
  },
  {
    title: "Design Ideas",
    path: "/ideas",
    items: ["Small Homes", "Luxury Homes", "Budget Interiors"],
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f1a] border-b border-[rgba(212,175,55,0.2)]">
      {/* ================= DESKTOP HEADER ================= */}
      <div className="max-w-350 mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-[#d4af37]"
          />
          <div>
            <div className="text-lg font-extrabold text-white">
              Himasha Builders
            </div>
            <div className="text-sm text-[#d4af37]">
              & Construction Pvt. Ltd.
            </div>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {MENU.map((menu) => (
            <div key={menu.title} className="relative group">
              <NavLink
                to={menu.path}
                className="text-gray-200 font-medium hover:text-[#d4af37] transition"
              >
                {menu.title}
              </NavLink>

              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-4 w-64 bg-[#111827] rounded-xl shadow-xl border border-[rgba(212,175,55,0.3)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                {menu.items.map((item, i) => (
                  <div
                    key={i}
                    className="px-5 py-3 text-gray-200 hover:bg-[#d4af37] hover:text-black cursor-pointer transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <NavLink
          to="/enquiry"
          className="hidden md:inline-block bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black px-5 py-2 rounded-lg font-bold"
        >
          Book Appointment
        </NavLink>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#0b0f1a] z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[#d4af37] font-bold text-lg">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl"
            >
              <FiX />
            </button>
          </div>

          {MENU.map((menu, i) => (
            <div key={menu.title} className="mb-4">
              {/* Main Menu */}
              <div
                onClick={() =>
                  setActiveMobileMenu(activeMobileMenu === i ? null : i)
                }
                className="flex justify-between items-center text-white font-medium text-lg cursor-pointer hover:text-[#d4af37] transition"
              >
                {menu.title}
                <FiChevronDown
                  className={`transition-transform ${
                    activeMobileMenu === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Submenu */}
              {activeMobileMenu === i && (
                <div className="ml-4 mt-2 space-y-2">
                  {menu.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-gray-300 hover:text-[#d4af37] cursor-pointer transition"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-8 inline-block bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black px-5 py-2 rounded-lg font-bold"
          >
            Book Appointment
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;

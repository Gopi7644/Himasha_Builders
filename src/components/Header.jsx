import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-hb.jpeg";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { MENU } from "./menuData.js";
import MenuItem from "./MenuItem";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f1a] border-b border-[#d4af37]/30">

      {/* DESKTOP */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full border-2 border-[#d4af37]" />
          <div>
            <div className="text-lg font-extrabold text-white">
              Himasha Builders
            </div>
            <div className="text-sm text-[#d4af37]">
              & Construction Pvt. Ltd.
            </div>
          </div>
        </NavLink>

        <nav className="hidden md:flex gap-8">
          {MENU.map((menu) => (
            <MenuItem key={menu.title} menu={menu} />
          ))}
        </nav>

        <NavLink
          to="/enquiry"
          className="hidden md:inline-block bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black px-5 py-2 rounded-lg font-bold"
        >
          Book Appointment
        </NavLink>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* MOBILE */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#0b0f1a] z-50 p-6 overflow-y-auto">
          <div className="flex justify-between mb-6">
            <span className="text-[#d4af37] font-bold text-lg">Menu</span>
            <button onClick={() => setMobileOpen(false)} className="text-white text-2xl">
              <FiX />
            </button>
          </div>

          {MENU.map((menu, i) => (
            <div key={menu.title} className="mb-4">
              <div
                onClick={() =>
                  setActiveMobileMenu(activeMobileMenu === i ? null : i)
                }
                className="flex justify-between items-center text-white text-lg font-medium cursor-pointer hover:text-[#d4af37]"
              >
                {menu.title}
                <FiChevronDown
                  className={`transition-transform ${activeMobileMenu === i ? "rotate-180" : ""
                    }`}
                />
              </div>

              {activeMobileMenu === i && (
                <div className="ml-4 mt-2 space-y-2">
                  {menu.items.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-300 hover:text-[#d4af37]"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

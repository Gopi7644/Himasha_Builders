import { NavLink, useLocation } from "react-router-dom";

const MenuItem = ({ menu }) => {
  const location = useLocation();

  const isActive = location.pathname.startsWith(menu.path);

  return (
    <div className="relative group">
      <NavLink
        to={menu.path}
        className={`font-medium transition flex items-center gap-1 ${
          isActive
            ? "text-[#d4af37]"
            : "text-gray-200 hover:text-[#d4af37]"
        }`}
      >
        {menu.title}
      </NavLink>

      {/* Dropdown */}
      <div className="absolute top-full left-0 mt-4 w-64 bg-[#111827] rounded-xl shadow-xl border border-[#d4af37]/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 z-50">
        {menu.items.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className="block px-5 py-3 text-gray-200 hover:bg-[#d4af37] hover:text-black transition font-medium"
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;

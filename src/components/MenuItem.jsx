import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const MenuItem = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isParentActive =
    menu.path !== "/" && location.pathname.startsWith(menu.path);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* PARENT TAB */}
      <NavLink
        to={menu.path}
        className={`
          relative pb-1 flex items-center gap-1
          font-medium transition-all duration-300
          ${open || isParentActive ? "text-[#d4af37]" : "text-white"}
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:w-full after:bg-[#d4af37]
          after:scale-x-0 after:origin-left after:transition-transform after:duration-300
          hover:after:scale-x-100
          ${open || isParentActive ? "after:scale-x-100" : ""}
        `}
      >
        {menu.title}
        {menu.items && (
          <FiChevronDown
            className={`text-sm mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""
              }`}
          />
        )}
      </NavLink>

      {/* SUBMENU */}
      {menu.items && (
        <div
          className={`
            absolute left-0 top-full pt-3
            transition-opacity duration-200
            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        >
          <div className="flex flex-col gap-2 bg-white px-4 py-3 rounded-md shadow-lg min-w-45">
            {menu.items.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `
    relative px-3 py-2 rounded-md
    text-sm whitespace-nowrap
    transition-all duration-300 ease-out

    ${isActive
                    ? "text-[#8b6f1f] font-medium bg-linear-to-r from-[#fff7db] to-[#f3e3a0]"
                    : "text-gray-700"
                  }

    hover:text-[#8b6f1f]
    hover:bg-linear-to-r hover:from-[#fff7db] hover:to-[#f3e3a0]
    hover:translate-x-0.5
    `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;

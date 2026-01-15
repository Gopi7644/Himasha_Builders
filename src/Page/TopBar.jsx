import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-6">
        
        {/* Phone */}
        <a
          href="tel:+919718160984"
          className="flex items-center gap-2 hover:text-black transition"
        >
          <Phone size={16} />
          <span>+91 9718160984</span>
        </a>

        {/* Email */}
        <a
          href="mailto:info.dwellcraft@gmail.com"
          className="flex items-center gap-2 hover:text-black transition"
        >
          <Mail size={16} />
          <span>info.dwellcraft@gmail.com</span>
        </a>

      </div>
    </div>
  );
};

export default TopBar;

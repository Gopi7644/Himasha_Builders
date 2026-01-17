import { Phone, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-6">
        
        {/* Phone */}
        <a
          href="tel:+917739905017"
          className="flex items-center gap-2 hover:text-orange-400 transition"
        >
          <BsWhatsapp size={16} />
          <span>+91 7739905017</span>
        </a>
        <a
          href="tel:+917903550309"
          className="flex items-center gap-2 hover:text-orange-400 transition"
        >
          <Phone size={16} />
          <span>+91 7903550309</span>
        </a>

        {/* Email */}
        <a
          href="mailto:info.himashabuilders@gmail.com"
          className="flex items-center gap-2 hover:text-black transition"
        >
          <Mail size={16} />
          <span>info@himashabuilders.com</span>
        </a>

      </div>
    </div>
  );
};

export default TopBar;

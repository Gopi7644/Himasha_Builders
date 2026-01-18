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
        <p
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '6px',
          }}
        >
          📍
          <a
            href="https://www.google.com/maps/place/25%C2%B036'56.3%22N+85%C2%B002'19.1%22E/@25.6156418,85.0360731,743m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d25.615637!4d85.038648?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'black-500',
              textDecoration: 'none',
              lineHeight: '1.5',
            }}
          >
            RK Puram Near Peepal Tree Chowk,<br />
            <span className="ml-1">Shaguna, Danapur, Patna</span>
          </a>
        </p>

      </div>
    </div>
  );
};

export default TopBar;

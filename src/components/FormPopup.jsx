import { useState } from "react";
import { FiX } from "react-icons/fi";
import { toast } from "react-hot-toast";

/* ================= INPUT ================= */

const OutlinedInput = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div className="relative w-full">

    <span
      className={`absolute -top-2.5 left-3 bg-white px-2 text-xs z-10
      ${error ? "text-red-500" : "text-gray-600"}`}
    >
      {label}
    </span>

    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full rounded-lg px-4 py-3 text-sm border outline-none
      ${
        error
          ? "border-red-500"
          : "border-gray-300 focus:border-[#d4af37]"
      }`}
    />

    {error && (
      <p className="text-red-500 text-xs mt-1">{error}</p>
    )}
  </div>
);

/* ================= MAIN ================= */

const FormPopup = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  const [form, setForm] = useState({
    location: "",
    name: "",
    phone: "",
  });

  const [propertyType, setPropertyType] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  /* ================= CHANGE ================= */

  const handleChange = (e) => {

    const { name, value } = e.target;

    // Phone → Only Numbers (10 digit max)
    if (name === "phone") {

      const num = value.replace(/\D/g, "");

      if (num.length > 10) return;

      setForm({ ...form, phone: num });

      setErrors({ ...errors, phone: "" });

      return;
    }

    setForm({ ...form, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };


  /* ================= VALIDATION ================= */

  const validate = () => {

    const err = {};

    if (!form.location.trim()) err.location = "Enter location";

    if (!/^[a-zA-Z .]{2,40}$/.test(form.name))
      err.name = "Enter valid name";

    if (!/^[6-9]\d{9}$/.test(form.phone))
      err.phone = "Enter valid number";

    if (!propertyType)
      err.propertyType = "Select property type";

    setErrors(err);

    return Object.keys(err).length === 0;
  };


  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (loading) return;

    if (!validate()) {
      toast.error("❌ Please fix form errors");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Submitting...");

    try {

      const formData = new FormData();

      formData.append("location", form.location);
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("propertyType", propertyType);
      formData.append("source", "Form Popup");

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyv272vnQuaknjlyT5X-3mT5sypRSzWqEo911IAuYLq8FMdz6pIj2koq0VTo7AmTYgP7Q/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const text = await res.text();

      if (text !== "success") {
        throw new Error(text);
      }

      toast.success("🎉 We will contact you shortly!", {
        id: toastId,
        duration: 2200,
      });

      // Reset
      setForm({
        location: "",
        name: "",
        phone: "",
      });

      setPropertyType("");

      setTimeout(onClose, 800);

    } catch (err) {

      console.error(err);

      toast.error("❌ Submit failed. Try again.", {
        id: toastId,
        duration: 2200,
      });

    } finally {
      setLoading(false);
    }
  };


  /* ================= UI ================= */

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-3">

      <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl p-6">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <FiX size={22} />
        </button>


        <h2 className="text-lg font-bold text-gray-900">
          Free Design Consultation
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          Talk to our interior experts
        </p>


        <form
          onSubmit={handleSubmit}
          className={`
            space-y-4
            ${loading ? "pointer-events-none opacity-80" : ""}
          `}
        >

          {/* Property */}
          <div>

            <p className="text-sm font-semibold mb-2">
              Property Type *
            </p>

            <div className="flex flex-wrap gap-2">

              {["1 BHK", "2 BHK", "3 BHK", "4+ BHK/Duplex"].map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => {
                    setPropertyType(t);
                    setErrors({ ...errors, propertyType: "" });
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs border
                  ${
                    propertyType === t
                      ? "bg-[#d4af37] border-[#d4af37]"
                      : "border-gray-300 hover:bg-[#fff3c4]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {errors.propertyType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.propertyType}
              </p>
            )}
          </div>


          <OutlinedInput
            label="Location"
            name="location"
            placeholder="Enter location"
            value={form.location}
            onChange={handleChange}
            error={errors.location}
          />

          <OutlinedInput
            label="Name"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />

          <OutlinedInput
            label="Phone"
            name="phone"
            type="tel"
            placeholder="10 digit mobile"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
          />


          <button
            disabled={loading}
            type="submit"
            className="w-full bg-[#9e1b1b] hover:bg-[#7f1414]
            text-white py-2.5 rounded-md font-semibold transition
            disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default FormPopup;

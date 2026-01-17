import "../styles/form.css";

const FloatingForm = () => {
  return (
    <div className="form-card fade-in">
      <h3>Get Your Free Site Visit</h3>

      <form>
        <input type="text" placeholder="Name" required />
        <input type="tel" placeholder="Mobile Number" required />
        <input type="text" placeholder="Address" required />

        <select required>
          <option value="">Select Design Type</option>
          <option>Home</option>
          <option>Flat</option>
          <option>Modular Kitchen</option>
          <option>Shop</option>
          <option>Any Other</option>
        </select>

        <button type="submit">Book Visit</button>
      </form>
    </div>
  );
};

export default FloatingForm;

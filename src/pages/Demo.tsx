import  { useState } from "react";

const Demo = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("USA");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!/^\d{10}$/.test(number)) {
      newErrors.number = "Please enter a valid mobile number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 space-y-10 text-gray-800"
    >
      {/* Name Section */}
      <div>
        <h2 className="text-2xl font-semibold">Enter your Name</h2>
        <p className="text-gray-600 mb-4">
          We'll set up your account or use the one you already have.
        </p>
        <label className="block font-medium mb-1">Name</label>
        <input
          type="text"
          className={`w-full border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded px-4 py-2`}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Number Section */}
      <div>
        <h2 className="text-2xl font-semibold">Enter your number</h2>
        <p className="text-gray-600 mb-4">
          We'll set up your account or use the one you already have.
        </p>
        <div className="flex space-x-2">
          <select
            className="border border-gray-300 rounded px-4 py-2"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
          </select>
          <input
            type="text"
            className={`flex-1 border ${
              errors.number ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2`}
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        {errors.number && (
          <p className="text-red-500 text-sm mt-1">{errors.number}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Demo;

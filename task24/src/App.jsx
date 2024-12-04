import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-700">Register</h2>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.name ? "border-red-500" : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.email ? "border-red-500" : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.password ? "border-red-500" : "focus:ring-blue-500 focus:border-blue-500"
            }`}
            placeholder="Your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

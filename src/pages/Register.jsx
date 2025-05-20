import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    accountNo: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "savings"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      // Simulate saving data
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Registered Successfully!");
      navigate("/login");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input type="date" name="dob" onChange={handleChange} required />
      <input name="accountNo" placeholder="Account Number" onChange={handleChange} required />
      <input name="address" placeholder="Address" onChange={handleChange} required />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
      <select name="accountType" onChange={handleChange}>
        <option value="savings">Savings</option>
        <option value="current">Current</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

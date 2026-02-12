import { useState } from "react";
import axios from "axios";
import "./register.css";
import {  useNavigate } from "react-router-dom"

export const Register = () => {
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:1919/api/auth/register",
        formData
      );
      console.log("Registration successful:", response.data);
      alert("Registration successful!");
      navigate("/login")
    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="container">
      <div className="sub_container">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="content">
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="content">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="content">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Click To Register</button>
          </div>
        </form>
        <div>
          <p>
            You already have an account <button onClick={() => navigate("/login")}>Login Here</button>
          </p>
        </div>
      </div>
    </div>
  );
};

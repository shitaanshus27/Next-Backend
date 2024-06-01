"use client";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
    const response = axios.post("http://localhost:3000/api/user", formData);

    console.log("Form submitted", response);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-5">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="mt-2 p-2 w-full border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 p-2 w-full border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

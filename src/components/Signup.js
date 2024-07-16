// Signup Component
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import image from "../assets/background.jpg";


const Signup = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_lastname: 'Doe',
    user_email: '',
    user_password: '',
    user_phone: '',
    user_city: 'Hyderabad',
    user_zipcode: '500072'
});

const navigate = useNavigate();
const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();

   

    try {
        const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Registration successful:', data);
            navigate("/login")
        } else {
            console.error('Registration failed:', response.statusText);
            
        }
    } catch (error) {
        console.error('Error during registration:', error);
        
    }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
      <div className="relative w-full lg:w-4/4 max-w-full overflow-hidden rounded-lg shadow-md flex">
        <div className="relative w-1/2 h-screen overflow-hidden">
          <img src={image} alt="Background" className="absolute inset-0 w-full h-full object-cover filter brightness-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl mb-4">Welcome to Our <br/> community</h1>
            <p className="text-lg">Sign up to get started</p>
          </div>
        </div>
        <div className="w-1/2 bg-white p-8 rounded-r-lg">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
            <p className="text-sm text-center mt-4">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/login')}>Login</span></p>
            <div className="mb-4 mt-8">
              <label className="block text-gray-700">Full name *</label>
              <input
                type="text"
                name="user_firstname"
                value={formData.user_firstname}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email address *</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone number *</label>
              <input
                type="text"
                name="user_phone"
                value={formData.user_phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password *</label>
              <input
                type="password"
                name="user_password"
                value={formData.user_password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

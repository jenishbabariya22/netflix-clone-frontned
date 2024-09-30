import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div className=' bg-black' style={{ height: "630px", display: "flex", alignItems: "center", justifyContent: "center" }}>

      <div className="flex items-center justify-center ">
        <form
          onSubmit={onSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg " style={{ width: "400px", height: "360px" }}
        >
          <h2 className="text-3xl text-white font-bold mb-6">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

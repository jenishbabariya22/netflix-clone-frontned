import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(res.data);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div className=' bg-black' style={{ height: "630px", display: "flex", alignItems: "center", justifyContent: "center" }}>

      <div className="flex items-center justify-center ">
        <form
          onSubmit={onSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg "
          style={{ width: "400px" }}
        >
          <h2 className="text-3xl text-white font-bold mb-6">Register</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              required
            />
          </div>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

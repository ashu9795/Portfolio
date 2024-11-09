import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/Login/login", {
        username,
        password,
      });

      // Assuming the response has a data object with user details on successful login
      if (response.status === 200 && response.data) {
        sessionStorage.setItem("Token", JSON.stringify(response.data));  // Using sessionStorage
        setError("");
        alert("Login successful!");
        navigate("/Admin");
        // Redirect or perform additional actions as needed
      }

    } catch (err) {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border text-black border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 text-black mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

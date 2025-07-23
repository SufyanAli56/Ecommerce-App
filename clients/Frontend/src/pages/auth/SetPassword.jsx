import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SetPassword() {
  const [password, setPassword] = useState("");
  const email = localStorage.getItem("pendingEmail");
  const navigate = useNavigate();

  const handleSetPassword = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/set-password", {
        email,
        password,
      });
      localStorage.removeItem("pendingEmail");
      alert("Password set! Now login.");
      navigate("/login");
    } catch (error) {
      alert("Error setting password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Set Password</h2>
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSetPassword}
          className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
        >
          Set Password
        </button>
      </div>
    </div>
  );
}

export default SetPassword;

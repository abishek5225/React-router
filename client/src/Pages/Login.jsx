import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { Authentication } from "../Authentication/Authentication";
import { useNavigate, } from "react-router-dom";
import {useAuth} from "../Authentication/Authentication"

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
      const isSuccess = login(username, password);

      if (isSuccess) {
        navigate("/home"); // Redirect to home page after login
      } else {
        setError("Invalid username or password!");
      }
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-10 bg-white shadow-xl rounded-2xl max-w-sm w-full text-center"
      >
        <motion.h2
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-orange-600 mb-6"
        >
          Login
        </motion.h2>
        <form className="flex flex-col gap-4">
          <input
            type="username"
            placeholder="Username"
            value={username}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogin}
            className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Sign In
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

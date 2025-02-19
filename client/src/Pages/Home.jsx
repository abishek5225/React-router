import React from 'react'
import { motion } from "framer-motion";

function HOme() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-10 bg-white shadow-xl rounded-2xl max-w-lg"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-orange-600 mb-4"
        >
          Hello there...
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gray-700 text-lg"
        >
          This site is built to experiment with React Router DOM. A playground
          for testing React Router DOM in action!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
        >
          Yohohoo
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HOme
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 p-6">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="p-10 bg-white shadow-xl rounded-2xl max-w-2xl text-center"
      >
        <motion.h2
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-orange-600 mb-4"
        >
          About This Site
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gray-700 text-lg"
        >
          This site is built to explore and test React Router DOM. It serves as
          a dynamic playground for seamless navigation experiments and
          interactive routing experiences.
        </motion.p>
      </motion.div>
    </div>
  );
}

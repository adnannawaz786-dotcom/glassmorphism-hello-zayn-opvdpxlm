import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Glassmorphism container */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-12 max-w-2xl w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Glassmorphism inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl" />
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </motion.div>
      </motion.div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-white/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-6 h-6 bg-white/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-3 h-3 bg-white/25 rounded-full"
        animate={{
          x: [0, 20, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
    </div>
  );
};

export default Layout;
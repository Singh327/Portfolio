import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-20 text-center md:text-left ${
        darkMode
          ? "bg-gradient-to-br from-[#1a1c2c] via-[#2a213b] to-[#3b1e45] text-white"
          : "bg-gradient-to-br from-[#ffffff] via-[#e0f2ff] to-[#c7d2fe] text-black"
      }`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Gurpreet Singh
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Full Stack Developer 🚀
        </motion.h2>

        <motion.p
          className={`max-w-xl ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
         I’m a passionate Full Stack Developer skilled in building dynamic and responsive web applications using modern technologies like React, Node.js, TypeScript, Tailwind CSS, and ShadCN UI. I bring ideas to life with clean, efficient code and intuitive design — from pixel-perfect frontends to robust, scalable backends with MySQL and MongoDB.

        </motion.p>
      </div>

      {/* Avatar Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v="
          alt="profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-500 object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

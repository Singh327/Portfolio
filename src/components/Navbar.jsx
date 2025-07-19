import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";

const sections = ["Home", "Projects", "About", "Skills", "Contact"];
const sectionIds = ["#", "#projects", "#about", "#skills", "#contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const { darkMode, setDarkMode } = useTheme();

  // ScrollSpy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      const anchors = sectionIds.map((id) =>
        id === "#" ? document.body : document.querySelector(id)
      );

      anchors.forEach((section, index) => {
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(sections[index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-3 md:px-20 py-4 backdrop-blur-lg shadow-md ${darkMode 
  ? "bg-gradient-to-br from-[#1f1b2e] via-[#2d2143] to-[#3b2758] text-white"

  : "bg-gradient-to-br from-[#ffffff] via-[#f0f4ff] to-[#e0e7ff] text-gray-800"
}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight text-blue-500">
          Gurpreet Singh
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium ">
          <ul className="flex gap-6">
            {sections.map((sec, i) => (
              <motion.li
                key={sec}
                whileHover={{ scale: 1.05 }}
                className={`cursor-pointer transition-colors duration-300 ${
    active === sec
      ? darkMode
        ? "text-blue-400"
        : "text-blue-600"
      : darkMode
      ? "text-gray-400"
      : "text-gray-600"
  }`}
              >
                <a href={sectionIds[i]}>
                  {sec}
                  {active === sec && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center ml-4 positon-relative right-0">
            {/* GitHub */}
            <a
              href="https://github.com/Singh327"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className={`mx-5 text-xl ${darkMode ? "text-white" : "text-gray-600"} text-gray-600 dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-400 transition`}
            >
              <FaGithub />
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle theme"
              className={`text-xl ${darkMode ? "text-gray-100" : "text-gray-600"} hover:text-yellow-400 dark:hover:text-yellow-300 transition`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className={`flex flex-col gap-6 mt-4 px-6 md:hidden font-medium ${
            darkMode ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {sections.map((sec, i) => (
            <li key={sec} className="border-b pb-2">
              <a
                href={sectionIds[i]}
                onClick={() => {
                  setIsOpen(false);
                  setActive(sec);
                }}
                className={`block ${
                  active === sec
                    ? "text-blue-600 dark:text-blue-400"
                    : ""
                }`}
              >
                {sec}
              </a>
            </li>
          ))}

          {/* GitHub */}
          <li className="flex items-center gap-2 border-t pt-4">
            <FaGithub className="text-xl" />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </li>

          {/* Dark Mode Toggle */}
          <li className="flex items-center gap-2">
            {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setIsOpen(false);
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Toggle Theme
            </button>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;

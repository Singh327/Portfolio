import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
const Footer = () => {
   const { darkMode } = useTheme();
  return (
    <footer className={`py-6 px-6 md:px-20 text-center ${darkMode ? " bg-gradient-to-br from-[#1c1c24] via-[#2e2e38] to-[#3f3f4e] text-white"    : "bg-blue-100 text-black"}`}>
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a  
          href="https://github.com/Singh327"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/gurpreet-singh-07829b29a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:singhpreet1123576@gmail.com"
          className="hover:text-blue-400"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Gurpreet Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

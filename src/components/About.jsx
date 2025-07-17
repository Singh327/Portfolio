import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 px-6 md:px-20 ${
        darkMode
          ? "bg-gradient-to-br from-[#2b2239] via-[#3c2a4d] to-[#4b325c] text-white"

          : "bg-gradient-to-br from-[#f0f9ff] via-[#dbeafe] to-[#e0f2fe] text-black"
      }`}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        👋 About Me
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row gap-50 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Avatar or illustration */}
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="About me"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500 object-cover shadow-lg"
        />

        {/* Text content */}
        <div className="text-center md:text-left space-y-4 max-w-xl">
          <div className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          <p className="text-lg leading-relaxed">
            I'm <span className="font-bold text-blue-500">Gurpreet Singh</span>, a passionate
            software developer who loves building clean and scalable applications.
            I enjoy solving problems, exploring new technologies, and turning
            ideas into real-world projects.
          </p>

          <p className="text-lg leading-relaxed">
            My tech stack includes <strong>React</strong>, <strong>Java</strong>,{" "}
            <strong>Python</strong>, and more. I also love working
            with UI/UX to make my projects visually stunning and user-friendly.
          </p>

          <p className="text-lg leading-relaxed">
            When I'm not coding, you’ll find me playing chess, listening to music,
            or exploring new places.
          </p>
          </div>
          {/* Download Resume Button */}
          <motion.a
            href="/Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition duration-300"
          >
            📄 Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

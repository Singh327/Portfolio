import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { useTheme } from "./ThemeContext";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt />, level: 85 },
  { name: "JavaScript", icon: <FaJs />, level: 80 },
  { name: "React", icon: <FaReact />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 80 },
  { name: "Java", icon: <FaJava />, level: 75 },
  { name: "Python", icon: <FaPython />, level: 75 },
  { name: "MySQL", icon: <SiMysql />, level: 70 },
  { name: "Git", icon: <FaGitAlt />, level: 85 },
  { name: "DBMS", icon: <FaDatabase />, level: 80 },
];

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`py-20 px-6 md:px-20 ${
        darkMode
          ? "bg-gradient-to-br from-[#1e1b32] via-[#2e1f47] to-[#3d255c] text-white"
          : "bg-gradient-to-br from-[#f0fdfa] via-[#dbeafe] to-[#e0f2fe] text-black"
      }`}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💻 Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="space-y-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-lg font-medium">
              <span className="text-2xl text-blue-500">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>

            <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full">
              <motion.div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${skill.level}%` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

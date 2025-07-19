import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import passwordImg from '../assets/password.png';
import quizImg from '../assets/quiz.jpg';
import spotifyImg from '../assets/spotify.jpg';
import todoImg from '../assets/todo.png';
import portfolioImg from '../assets/portfolio.png';
import textEncryptImg from '../assets/photo.jpg';
import textUtilImg from '../assets/text.jpg';

const projects = [
  { 
    title:"Password Manager",
    description: "Secure password storage and management tool using React.",    
    image: passwordImg,
    link: "https://github.com/Singh327/Password-Manager",
  },
  {
    title: "Java Quiz App",
    description: "A desktop quiz app with login system using Java and MySQL.",
    image: quizImg,
    link: "https://github.com/Singh327/Java-Quiz-Application",
  },
  {
    title: "Spotify Clone",
    description: "Responsive music streaming UI built with React and Tailwind.",
    image: spotifyImg,
    link: "https://github.com/Singh327/Spotify-Clone",
  },
  {
    title: "Todo List App",
    description: "A simple todo list app with local storage using React.",  
    image: todoImg,
    link: "https://github.com/Singh327/ToDo-List",
  },
  {
    title:"Portfolio Website",
    description: "My personal portfolio showcasing projects and skills.", 
    image: portfolioImg,
    link: "#",
  },
   {
    title: "Text Encryption Project",
    description: "Encrypt/decrypt messages with a simple custom algorithm.",
    image: textEncryptImg,
    link: "https://github.com/Singh327/Python-project",
  },
  {
    title: "Text Utility App",
    description: "Text analysis and formatting tool using React.",
    image: textUtilImg,
    link: "https://github.com/Singh327/Text-Utility-App-React-App-",
  },
  
 
 
  
  
];

const Projects = () => {
  const { darkMode } = useTheme();

  return (
   <section
  id="projects"
  className={`py-20 px-6 md:px-20 ${
    darkMode
      ? "bg-gradient-to-br from-[#251e3e] via-[#3b2e5a] to-[#5d3e75] text-white"
      : "bg-gradient-to-br from-[#fdf2f8] via-[#fae8ff] to-[#f0f9ff] text-black"
  }`}
>

      <motion.h2
        className="text-4xl font-extrabold mb-14 text-center tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🚀 My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`
              group rounded-xl overflow-hidden relative transition duration-300 border 
              ${darkMode ? "bg-gradient-to-br from-[#2a213b] via-[#3a2e4d] to-[#4b3b5f] text-gray-100" : 
              "bg-gradient-to-br from-white to-blue-50 border-gray-300"}
              hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]
              hover:scale-[1.02] 
              hover:border-blue-500
            `}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:brightness-90 transition"
              />
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

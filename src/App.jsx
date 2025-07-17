import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useTheme } from "./components/ThemeContext";
import Projects from "./components/Projects"; // Assuming you have a Projects component
import Contacts from "./components/Contacts"; // Assuming you have a Contacts component
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`transition-colors duration-300 ${
        darkMode ? "from-[#4C1D95] via-[#9333EA] to-[#E879F9] text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      <Hero />

      {/* Add spacing for upcoming sections */}
      
        <Projects />
        <About/>

      
       
 
      <Skills />
       <Contacts />
      <Footer/>
    </div>
  );
}

export default App;

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTheme } from "./ThemeContext";

const Contact = () => {
  const form = useRef();
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6f45npk",     // Replace with actual service ID
        "template_r8b26bq",    // Replace with actual template ID
        form.current,
        "wHAWy7BQQ5UgYwzxP"      // Replace with actual public key
      )
      .then(
        () => {
          setDone(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`py-20 px-6 md:px-20 ${
        darkMode
          ? "bg-gradient-to-br from-[#2a1a2f] via-[#3b2441] to-[#4e2c56] text-white"
          : "bg-gradient-to-br from-[#fff1f2] via-[#fce7f3] to-[#f3e8ff] text-black"
      }`}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        📬 Get In Touch
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-4xl mx-auto grid gap-8 bg-white/20 dark:bg-black/20 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-white/30 dark:border-gray-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full p-4 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
        />

        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          className={`w-full sm:w-fit px-8 py-3 rounded-lg font-semibold shadow-lg transition text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {done && (
          <motion.p
            className="text-green-600 font-medium text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;

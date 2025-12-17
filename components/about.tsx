"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
  <section id="about" className="w-full bg-gray-50 text-black pt-20 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}    
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.4, ease: "easeOut" }} 
          className="text-3xl md:text-5xl font-extrabold mb-10 tracking-wide"
        >
          About Me
        </motion.h2>

        {/* Paragraphs */}
        <motion.div
          className="space-y-6 text-sm md:text-lg leading-relaxed text-gray-700"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.35,
              },
            },
          }}
        >
          {/* Paragraph 1 */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Hi! I am a passionate Frontend Developer with 1 year of professional
            experience, specializing in building modern, responsive, and
            user-friendly web applications.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            I have hands-on experience with <strong>React.js</strong>,{" "}
            <strong>Next.js</strong>, <strong>PayloadCMS</strong>, <strong>Core Vue.js</strong>, <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>JavaScript</strong>. I focus on writing clean,
            maintainable code while creating engaging user interfaces that work
            seamlessly across devices.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            I enjoy transforming design concepts into fully functional websites,
            optimizing performance, and ensuring a smooth user experience. My
            goal is to deliver high-quality solutions that meet client
            requirements and help businesses grow online.
          </motion.p>

          {/* Paragraph 4 */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            As a motivated developer, I continuously learn and explore new
            technologies to enhance my skills. I am committed to building
            projects that are not only visually appealing but also reliable,
            efficient, and scalable.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

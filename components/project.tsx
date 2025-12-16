"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Just Keep Investing",
    github: "",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    description:
      "I worked on the Just Keep Investing website as part of the team at Silico Software Company. This project was built using React.js, Tailwind CSS, and smooth animations to deliver a modern, responsive, and interactive web experience. I developed key UI components, optimized layouts for different screen sizes, and enhanced user engagement using animated effects. My work helped improve the look, feel, and usability of the site while maintaining high performance and clean code.",
  },
  {
    title: "LaslesVPN – Landing Page",
    github: "https://github.com/NiraliMoghariya/LaslesVPN",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    description:
      "I recreated the LaslesVPN landing page using pure HTML and CSS, focusing on clean layout structure, pixel-perfect UI, and smooth responsiveness across all devices. The website is fully optimized for mobile, tablet, and desktop, ensuring a consistent user experience on every screen size. This project highlights my strong understanding of modern layouts, flexbox, grid, responsive design, and writing clean, maintainable CSS.",
  },
  {
    title: "Personal Portfolio",
    github: "https://github.com/NiraliMoghariya/my-portfolio",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    description:
      "A fully responsive and modern personal portfolio website built using Next.js and Tailwind CSS, designed to showcase my skills, education, projects, and experience. The website includes smooth animations, an interactive UI, and API-integrated contact form functionality. Users can explore sections like Home, About, Skills, Projects, Education, and Contact through a clean and minimal layout. This project highlights my ability to create high-performance web applications.",
  },
  {
    title: "Online Food Ordering",
    github: "https://github.com/NiraliMoghariya/food_order",
    tags: ["PHP", "JavaScript", "HTML/CSS"],
    description:
      "This project is a fully responsive Online Food Ordering Website built using HTML, CSS, JavaScript, and PHP. It allows users to browse a menu, add items to a cart, and place food orders through an interactive user interface. I focused on building clean frontend layouts with responsive design so the site works seamlessly on mobile, tablet, and desktop screens. Dynamic features such as adding to cart and calculating totals were handled using JavaScript and PHP.",
  },
];

// Animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="w-full bg-gray-50 py-20" id="projects">
      <div className="max-w-6xl mx-auto px-5">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-[#1f5297] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => {
            const isExpanded = expanded[index];
            const isLongText = project.description.length > 150;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-semibold text-[#1f5297] bg-white rounded-full border border-blue-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1}}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-black"
                    >
                      <FaGithub size={28} />
                    </motion.a>
                  )}
                </div>

                <div className="w-full h-px bg-gray-100 mb-4" />

                {/* Description */}
                <AnimatePresence initial={false}>
                  <motion.p
                    key={isExpanded ? "expanded" : "collapsed"}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-gray-600 leading-relaxed overflow-hidden"
                  >
                    {isExpanded
                      ? project.description
                      : `${project.description.slice(0, 150)}...`}
                  </motion.p>
                </AnimatePresence>

                {/* Read More */}
                {isLongText && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-4 cursor-pointer text-sm font-semibold text-[#1f5297] hover:text-[#1f5297] self-start"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

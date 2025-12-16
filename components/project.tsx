"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Just Keep Investing",
    github: "",
    description:
      "I worked on the Just Keep Investing website as part of the team at Silico Software Company. This project was built using React.js, Tailwind CSS, and smooth animations to deliver a modern, responsive, and interactive web experience. I developed key UI components, optimized layouts for different screen sizes, and enhanced user engagement using animated effects. My work helped improve the look, feel, and usability of the site while maintaining high performance and clean code.",
  },
  {
    title: "LaslesVPN – Landing Page",
    github: "https://github.com/NiraliMoghariya/LaslesVPN",
    description:
      "I recreated the LaslesVPN landing page using pure HTML and CSS, focusing on clean layout structure, pixel-perfect UI, and smooth responsiveness across all devices. The website is fully optimized for mobile, tablet, and desktop, ensuring a consistent user experience on every screen size.This project highlights my strong understanding of modern layouts, flexbox, grid, responsive design, and writing clean, maintainable CSS.",
  },
  {
    title: "Personal Portfolio Website",
    github: "https://github.com/NiraliMoghariya/my-portfolio",
    description:
      "A fully responsive and modern personal portfolio website built using Next.js and Tailwind CSS, designed to showcase my skills, education, projects, and experience. The website includes smooth animations, an interactive UI, and API-integrated contact form functionality. Users can explore sections like Home, About, Skills, Projects, Education, and Contact through a clean and minimal layout.This project highlights my ability to create high-performance, fast-loading web applications with seamless user experience.",
  },
  {
    title: "Online Food Ordering Website",
    github: "https://github.com/NiraliMoghariya/food_order",
    description:
      "This project is a fully responsive Online Food Ordering Website built using HTML, CSS, JavaScript, and PHP. It allows users to browse a menu, add items to a cart, and place food orders through an interactive user interface. I focused on building clean frontend layouts with responsive design so the site works seamlessly on mobile, tablet, and desktop screens. Dynamic features such as adding to cart, updating quantities, and calculating totals were handled using JavaScript and PHP. This project helped enhance my understanding of web fundamentals, server-side scripting, and responsive design techniques.",
  },
];

export default function Projects() {

    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
 <section className="w-full bg-white py-14" id="projects">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-10 tracking-wide text-center">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const isExpanded = expanded[index];

            return (
              <div
                key={index}
                className="relative p-6 shadow-md rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                {/* GitHub Icon */}
                {project.github && project.github.trim() !== "" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-gray-800 hover:text-black transition"
                  >
                    <FaGithub size={24} />
                  </a>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                {/* Description with Show More / Show Less */}
                <p
                  className={`text-gray-700 leading-relaxed transition-all duration-300 ${
                    isExpanded ? "" : "line-clamp-6"
                  }`}
                >
                  {project.description}
                </p>

                {/* Show More / Less Button */}
                {project.description.length > 120 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-2 text-[#9A9A9A] font-medium hover:underline"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  //  <section className="w-full bg-white py-14" id="projects">
  //     <div className="max-w-6xl mx-auto px-5">
  //       <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-10 tracking-wide text-center">
  //         Projects
  //       </h2>

  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  //         {projects.map((project, index) => {
  //           const isExpanded = expanded[index];

  //           // ✨ Alternate Left / Right Animation
  //           const direction = index % 2 === 0 ? -100 : 100;

  //           return (
  //             <motion.div
  //               key={index}
  //               initial={{ opacity: 0, x: direction }}
  //               whileInView={{ opacity: 1, x: 0 }}
  //               transition={{ duration: 0.8, ease: "easeOut" }}
  //               viewport={{ once: false }}
  //               className="relative p-6 shadow-md rounded-xl border border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-white"
  //             >
  //               {project.github && project.github.trim() !== "" && (
  //                 <a
  //                   href={project.github}
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                   className="absolute top-4 right-4 text-gray-800 hover:text-black transition"
  //                 >
  //                   <FaGithub size={24} />
  //                 </a>
  //               )}

  //               <h3 className="text-2xl font-bold text-gray-900 mb-2">
  //                 {project.title}
  //               </h3>

  //               <p
  //                 className={`text-gray-700 leading-relaxed transition-all duration-300 ${
  //                   isExpanded ? "" : "line-clamp-6"
  //                 }`}
  //               >
  //                 {project.description}
  //               </p>

  //               {project.description.length > 120 && (
  //                 <button
  //                   onClick={() => toggleExpand(index)}
  //                   className="mt-2 text-[#9A9A9A] font-medium hover:underline"
  //                 >
  //                   {isExpanded ? "Show Less" : "Show More"}
  //                 </button>
  //               )}
  //             </motion.div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </section>
  );
}
// "use client";

// import { FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "Just Keep Investing",
//     github: "",
  
//     description:
//       "I worked on the Just Keep Investing website as part of the team at Silico Software Company. This project was built using React.js, Tailwind CSS, and smooth animations to deliver a modern, responsive, and interactive web experience. I developed key UI components, optimized layouts for different screen sizes, and enhanced user engagement using animated effects. My work helped improve the look, feel, and usability of the site while maintaining high performance and clean code.",
//   },
//   {
//     title: "Personal Portfolio Website",
//     github: "https://github.com/NiraliMoghariya/my-portfolio",
   
//     description:
//       "A fully responsive and modern personal portfolio website built using Next.js and Tailwind CSS, designed to showcase my skills, education, projects, and experience. The website includes smooth animations, an interactive UI, and API-integrated contact form functionality.",
//   },
//   {
//     title: "LaslesVPN – Landing Page",
//     github: "https://github.com/NiraliMoghariya/LaslesVPN",
//     description:
//       "I recreated the LaslesVPN landing page using pure HTML and CSS, focusing on clean layout structure, pixel-perfect UI, and smooth responsiveness across all devices. The website is fully optimized for mobile, tablet, and desktop, ensuring a consistent user experience on every screen size.This project highlights my strong understanding of modern layouts, flexbox, grid, responsive design, and writing clean, maintainable CSS.",
//   },
//   {
//     title: "Online Food Ordering Website",
//     github: "https://github.com/NiraliMoghariya/food_order",
//     description:
//       "This project is a fully responsive Online Food Ordering Website built using HTML, CSS, JavaScript, and PHP. Users can browse menus, add items to cart, and place orders. This improved my understanding of frontend + backend logic.",
//   },
// ];

// export default function Projects() {
//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <h3 className="text-3xl md:text-5xl font-extrabold text-[#050d18] mb-6 ml-2">
//           Projects
//         </h3>

//         {/* Timeline */}
//         <div className="space-y-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="relative border-l-2 border-[#1f5297] pl-6"
//             >
//               {/* Dot */}
//               <span className="absolute left-[-9px] top-1 w-4 h-4 bg-white border-2 border-[#1f5297] rounded-full"></span>

//               {/* GitHub Icon */}
//               {project.github && project.github.trim() !== "" && (
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="absolute right-2 top-0 text-[#050d18] hover:text-black transition"
//                 >
//                   <FaGithub size={22} />
//                 </a>
//               )}

//               {/* Title */}
//               <h4 className="text-xl font-semibold uppercase text-[#050d18] mb-2">
//                 {project.title}
//               </h4>

//               {/* Description (unchanged, full text) */}
//               <p className="text-gray-700 leading-relaxed">
//                 {project.description}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

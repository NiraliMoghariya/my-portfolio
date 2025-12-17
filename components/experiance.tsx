"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Silico Software Solutions",
    date: "July 2025 - Present",
    location: "Surat, India",
    points: [
      "Building responsive, user-friendly web interfaces using React.js, Next.js, and Tailwind CSS.",
      "Implementing animations, API integrations, and reusable components to improve UI/UX.",
      "Collaborating with UI/UX designers and backend developers to deliver high-quality features.",
      "Optimizing website performance, accessibility, and code quality.",
      "Working on real client projects and contributing to scalable, production-level applications.",
    ],
  },
  {
    title: "ReactJS Intern",
    company: "Appegic Technologies",
    date: "Sep 2024 - May 2025",
    location: "Ahmedabad, India",
    points: [
      "Assisted in developing dynamic and responsive web applications using React.js and modern JavaScript.",
      "Built reusable components and collaborated with the team to implement frontend features.",
      "Gained hands-on experience with state management, API integration, and version control (Git).",
      "Participated in code reviews and learned best practices for clean, maintainable, and scalable code.",
      "Contributed to real client projects, enhancing both technical skills and understanding of professional workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-[#050d18] mb-6 ">
          Experience
        </h3>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
            >
              <motion.div
                className="absolute left-0 top-0 w-0.5 bg-[#1f5297] h-full"
                variants={{
                  hidden: { scaleY: 0 },
                  visible: { scaleY: 1 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
              <motion.span
                className="absolute left-[-7px] top-1 w-4 h-4 bg-white border-2 border-[#1f5297] rounded-full"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-semibold uppercase text-[#050d18] mb-2">
                  {exp.title}
                </h4>

                <h5 className="bg-[#e4edf9] text-black inline-block text-sm font-semibold px-3 py-1 mb-2">
                  {exp.date}
                </h5>

                <p className="italic text-gray-700 mb-3">{exp.company}</p>

                <ul className="list-disc pl-4 text-gray-700 space-y-1">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

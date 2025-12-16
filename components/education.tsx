"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institute: "Silver Oak University",
    date: "Aug 2022 - May-2025",
    location: "Ahmedabad, India",
    points: [
      "Gained strong foundational and advanced knowledge in programming, software development, and web technologies.",
      "Completed multiple hands-on projects using React.js, Vue.js, Next.js, Tailwind CSS, API integration, and modern frontend development practices.",
      "Studied core subjects including Data Structures, Database Management, Operating Systems, Networking, and Software Engineering.",
      "Participated in practical labs, team projects, and problem-solving activities to strengthen real-world technical skills.",
      "Developed a strong interest in frontend development, UI/UX, and modern JavaScript frameworks.",
    ],
  },
  {
    degree: "Higher Secondary Education",
    institute: "Gujarat Board",
    date: "Aug 2021 - May-2022",
    location: "Surat, India",
    points: [
      "Completed 12th Commerce with a strong academic foundation.",
      "Developed skills in accounting, business studies, and economics.",
      "Built strong interest in problem-solving, logical thinking, and analytical decision-making.",
      "Actively participated in school-level academic activities and coursework.",
    ],
  },
];

export default function Education() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-extrabold text-[#050d18] mb-6">
          Education
        </h3>

        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="relative pl-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
            >
              {/* Animated vertical line */}
              <motion.div
                className="absolute left-0 top-0 w-0.5 bg-[#1f5297] h-full"
                variants={{
                  hidden: { scaleY: 0 },
                  visible: { scaleY: 1 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />

              {/* Animated circle */}
              <motion.span
                className="absolute left-[-7px] top-1 w-4 h-4 bg-white border-2 border-[#1f5297] rounded-full"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />

              {/* Content */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-semibold uppercase text-[#050d18] mb-2">
                  {edu.degree}
                </h4>

                <h5 className="bg-[#e4edf9] text-black inline-block text-sm font-semibold px-3 py-1 mb-2">
                  {edu.date}
                </h5>

                <p className="italic text-gray-700 mb-3">
                  {edu.institute}
                </p>

                <ul className="list-disc pl-4 text-gray-700 space-y-1">
                  {edu.points.map((p, idx) => (
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

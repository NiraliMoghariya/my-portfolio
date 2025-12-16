"use client";

import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section className="w-full bg-white pt-10" id="myjourney">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}          // Down
          whileInView={{ opacity: 1, y: 0 }}       // Up
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false }}               // show every time on scroll
          className="text-3xl md:text-5xl font-extrabold text-[#050d18] mb-6"
        >
          Summary
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.3, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-gray-700 text-sm md:text-lg leading-relaxed"
        >
          Highly dedicated Frontend Developer with a strong foundation in
          React.js, Next.js, and modern web technologies. Experienced in
          building scalable, user-focused applications with clean UI, optimized
          performance, and secure authentication. Worked on real-world projects
          involving dynamic routing, API integration, and Payload CMS.
          Passionate about continuous learning, problem-solving, and writing
          clean, maintainable code. My goal is to grow as a developer and
          contribute to impactful, high-quality digital products.
        </motion.p>

      </div>
    </section>
  );
}

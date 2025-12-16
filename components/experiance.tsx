"use client";

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
        <h3 className="text-3xl font-extrabold text-[#050d18] mb-6 ml-2">
          Experience
        </h3>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative border-l-2 border-[#1f5297] pl-6">
              {/* Circle */}
              <span className="absolute left-[-9px] top-1 w-4 h-4 bg-white border-2 border-[#1f5297] rounded-full"></span>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

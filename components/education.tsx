"use client";

interface EducationItem {
  institute: string;
  degree: string;
  location: string;
  date: string;
  points: string[];
}

const education: EducationItem[] = [
  {
    institute: "Silver Oak University",
    degree: "Bachelor of Engineering – Computer Engineering",
    location: "Ahmedabad, India",
    date: "2021 - 2025",
    points: [
      "Focused on Web Development & Cloud Technology",
      "Completed multiple real-world projects using React & Next.js",
      "Participated in coding competitions and tech workshops",
    ],
  },
  {
    institute: "Gujarat Board",
    degree: "Higher Secondary Education",
    location: "Surat, India",
    date: "2020 - 2021",
    points: [
      "Completed 12th Science (PCM)",
      "Strong interest in problem-solving & logic building",
    ],
  },
];

export default function Education() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-10 tracking-wide">
            EDUCATION
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative md:pl-16 pt-5">
          {/* Full vertical line */}
          <div className="hidden md:block absolute left-8 top-0 w-[3px] bg-black h-full" />

          {education.map((edu, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row gap-4 pb-16 text-center md:text-left"
            >
              {/* Dot on line - Desktop */}
              <div className="hidden md:block absolute -left-11 top-2">
                <div className="w-6 h-6 bg-black rounded-full" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="font-bold text-xl text-black">{edu.degree}</h3>
                    <p className="text-indigo-600 font-semibold">{edu.institute}</p>
                  </div>

                  <div>
                    <p className="font-medium text-black">{edu.date}</p>
                    <p className="text-gray-600 text-sm">{edu.location}</p>
                  </div>
                </div>

                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2 text-left md:text-left">
                  {edu.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  date: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Silico Software Solutions",
    role: "Frontend Developer",
    location: "Surat, India",
    date: "July 2025 - Present",
    points: [
      "Developed core Next.js web application with dynamic routing & SSR/CSR",
      "Built a headless CMS using Payload CMS with custom APIs",
      "Improved performance using Next/Image & Axios",
      "Handled secure routing and cookie-based authentication",
    ],
  },
  {
    company: "Appegic Technologies",
    role: "ReactJS Intern",
    location: "Ahmedabad, India",
    date: "Sep 2024 - May 2025",
    points: [
      "Built and maintained interactive web apps using ReactJS",
      "Optimized components for performance across devices",
      "Worked with UI/UX team to improve user experience",
      "Participated in code reviews & Agile workflows",
    ],
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-white">
        <div className=" max-w-5xl mx-auto px-6">

        
       <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-black font-extrabold mb-10 tracking-wide">
          EXPERIANCE
        </h2>
      </div>

<div className="relative md:pl-16  pt-5 ">
  {/* Full vertical connector line */}
<div className="hidden md:block absolute left-8 top-0 w-[3px] bg-black h-full"></div>

  {/* {experiences.map((exp, index) => (
    <div 
      key={index}
      className="relative grid grid-cols-1 md:grid-cols-4 gap-4 pb-16"
    >
<div className="hidden md:block absolute -left-11 top-2">
        <div className="relative flex items-center justify-center">
          <div className="w-6 h-6 bg-black rounded-full"></div>
        </div>
      </div>

      <div className="col-span-3">
        <h3 className="font-bold text-xl text-black">{exp.role}</h3>
        <p className="text-indigo-600 font-semibold">{exp.company}</p>

        <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
          {exp.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      <div className="text-right">
        <p className="font-medium text-black">{exp.date}</p>
        <p className="text-gray-500 text-sm">{exp.location}</p>
      </div>
    </div>
  ))} */}
  {experiences.map((exp, index) => (
  <div
    key={index}
    className="relative flex flex-col md:flex-row md:items-start gap-4 pb-16"
  >

    {/* Circle - only Desktop */}
    <div className="hidden md:block absolute -left-11 top-2">
      <div className="w-6 h-6 bg-black rounded-full"></div>
    </div>

    {/* LEFT — Role + Company + Points */}
   <div className="flex-1 text-center md:text-left">
  <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-4">

        <div>
      <h3 className="font-bold text-xl text-black">{exp.role}</h3>
      <p className="text-indigo-600 font-semibold">{exp.company}</p>
</div>
<div>
      <p className="font-medium text-black">{exp.date}</p>
      <p className="text-gray-500 text-sm">{exp.location}</p>
</div>
</div>
      <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
        {exp.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>

    {/* RIGHT — Date + Location */}
 
  </div>
))}

</div>



      </div>
    </section>


  );
}

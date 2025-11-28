export default function SkillsCurveSection() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "TailwindCSS",
    "JavaScript",
    "ReactJS",
    "NextJS",
    "PayloadCMS"
  ];

  // Repeat 3 times for seamless loop
  const repeatList = [...skills, ...skills, ...skills];

  return (
    <section className=" relative w-full overflow-hidden bg-[#6B6B6B] py-3">
      <div className="marquee whitespace-nowrap inline-block">
        {repeatList.map((skill, i) => (
          <span key={i} className="mx-6 text-xl font-semibold">
            #{skill}
          </span>
        ))}
      </div>
    </section>
  );
}

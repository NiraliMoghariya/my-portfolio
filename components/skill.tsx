export default function SkillsCurveSection() {
  const skills = [
    "WordPress",
    "Laravel",
    "Elementor",
    "Node.Js",
    "JavaScript",
    "Next.Js",
    "TailwindCSS",
  ];

  return (
    <section className="relative z-30 w-full bg-pink-300 text-black h-[250px] flex justify-center items-center text-center overflow-hidden">
      {/* TOP CURVE */}
      <div
        className="absolute top-0 left-0 w-full h-44 bg-black"
        style={{
          clipPath: "ellipse(56% 55% at 50% -20%)",
        }}
      />

      {/* CONTENT (CENTERED NOW) */}
      <div className="relative z-10 flex flex-wrap gap-6 text-xl font-semibold -mt-8">
        {skills.map((skill, i) => (
          <span key={i} className="opacity-90 hover:opacity-100 transition">
            #{skill}
          </span>
        ))}
      </div>

      {/* BOTTOM CURVE */}
      <div
        className="absolute bottom-0 left-0 w-full h-44 bg-white"
        style={{
          clipPath: "ellipse(60% 55% at 50% 100%)",
        }}
      />
    </section>
  );
}

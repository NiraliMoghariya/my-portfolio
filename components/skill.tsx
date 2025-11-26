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
    <section className="relative z-30 w-full bg-pink-300 text-white pt-32 pb-20 overflow-hidden -mt-18">
      {/* TOP CURVE */}
      <div
        className="absolute top-0 left-0 w-full h-44 bg-black"
        style={{
          clipPath: "ellipse(80% 60% at 50% -20%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center" >

        <div className="flex flex-wrap justify-center gap-8 text-xl font-semibold">
          {skills.map((skill, i) => (
            <span key={i} className="opacity-90 hover:opacity-100 transition">
              #{skill}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div
        className="absolute bottom-0 left-0 w-full h-44 bg-black"
        style={{
          clipPath: "ellipse(80% 60% at 50% 100%)",
        }}
      />
    </section>
  );
}
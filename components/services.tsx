import RoundedButton from "./common/ServiceChip";

export default function Services() {
  return (
    <div className="w-full bg-white ">
      <h2 className="text-3xl md:text-5xl font-extrabold text-black max-w-5xl mx-auto text-center">
        MY SERVICES
      </h2>

      <div className="max-w-6xl mx-auto pb-10 pt-10 px-10 flex flex-wrap justify-center gap-4">
        {[
          "Front End Development",
          "React",
          "Next.js",
          "JavaScript",
          "Tailwind CSS",
          "Bootstrap",
          "Payload CMS",
          "TypeScript",
        ].map((service, index) => (
          <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_48%] md:flex-[0_0_32%]">
            <RoundedButton label={service} />
          </div>
        ))}
      </div>
    </div>
  );
}

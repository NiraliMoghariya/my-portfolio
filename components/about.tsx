export default function AboutSection() {
  return (
    <section  id="about" className="w-full bg-white text-black pt-5 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 tracking-wide">
          ABOUT ME
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
          <p>
            Why Do You Hire Me For Your Next Website Project?
          </p>

          <p>
            With Over 6 Years Of Experience As A Full-Stack Developer, 
            I Bring Expertise In Laravel, Node.Js, Next.Js, And JavaScript 
            To Deliver Dynamic And Scalable Web Solutions. My Passion Lies 
            In Building Websites That Enhance User Experiences While 
            Addressing Unique Business Challenges.
          </p>

          <p>
            Whether It’s Crafting Seamless Applications Or Designing 
            Platforms That Drive Growth, I Focus On Delivering Results 
            That Truly Make An Impact. I Am Committed To Providing 
            Innovative, Reliable, And Future-Proof Solutions Tailored 
            To Your Specific Needs.
          </p>

          <p>
            Combining Creativity With Technical Precision, I Ensure Every 
            Project Is Completed On Time And Exceeds Expectations. 
            Let Me Help You Turn Your Vision Into Reality And Build 
            A Digital Presence That Sets You Apart.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-[#9A9A9A]  hover:bg-[#B5B5B5] text-black transition"
          >
            Hire Me Now
          </a>

          <a
            href="https://wa.me/your_number"
            target="_blank"
            className="px-8 py-3 rounded-lg border border-gray-700 text-black transition"
          >
            <span>Whatsapp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

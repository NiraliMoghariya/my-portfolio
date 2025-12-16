// C:\Nirali\portfolio\my-portfolio\app\page.tsx
// import Home from "@/components/home";
"use client";

import { motion } from "framer-motion";

import AboutSection from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experiance";
import Projects from "@/components/project";
import Summary from "@/components/resume";
import SkillsCurveSection from "@/components/skill";

export default function Page() {
  return (
    <>
      <SkillsCurveSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <Summary />
    <section className="w-full bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 px-5">
    
    {/* EXPERIENCE */}
    <div className="flex-1 min-w-0">
      <Experience />
    </div>

    {/* EDUCATION */}
    <div className="flex-1 min-w-0">
      <Education />
    </div>

  </div>
</section>

      <Projects />

      <Contact />
    </>
  );
}

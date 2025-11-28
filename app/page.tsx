// C:\Nirali\portfolio\my-portfolio\app\page.tsx
// import Home from "@/components/home";

import AboutSection from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experiance";
import ServicesSection from "@/components/services";
import SkillsCurveSection from "@/components/skill";

export default function Page() {
  return (
    <>
      <SkillsCurveSection />
      <AboutSection />
      {/* <ServicesSection /> */}

      <Experience/>
      <Education/>
      <Contact/>
    </>
  );
}

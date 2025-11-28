"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegHand,
} from "react-icons/fa6";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-black">
      {/* Hero Background Image */}
      <div
        className="absolute bg-transparent inset-0 z-0"
        style={{
          backgroundImage: ` 
                      url('https://karbon.caliberthemes.com/wp-content/uploads/2025/09/Home-Hero-3-slider-3.webp')`,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      {/* NAVBAR */}
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black shadow-lg" : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl  px-6  mx-auto flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="cursor-pointer z-50">
            <Image
              src={"/LOGO.png"}
              alt="Logo"
              width={scrolled ? 80 : 140}
              height={scrolled ? 60 : 120}
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex items-center 
  gap-8 lg:gap-6 md:gap-4
  font-medium z-50 transition-all duration-300 text-white
  whitespace-nowrap 
  lg:text-base md:text-sm`}
          >
            <li>
              <Link href="#home" className="hover:text-indigo-600">
                HOME
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-indigo-600">
                ABOUT
              </Link>
            </li>

            <li className="hover:text-indigo-600 cursor-pointer">EXPERIENCE</li>
            <li className="hover:text-indigo-600 cursor-pointer">PROJECTS</li>
            <li className="hover:text-indigo-600 cursor-pointer">CONTACT</li>
            <li className="flex items-center cursor-pointer">
              <a
                href="/resume.pdf"
                target="_blank"
                className="mr-1 text-[#9A9A9A] hover:text-white"
              >
                <HiOutlineDocumentText size={22} />
              </a>
              <span className="hover:text-indigo-600 underline underline-offset-4">
                MY RESUME
              </span>
            </li>
            <button className="py-2 px-4 bg-[#9A9A9A] cursor-pointer text-black rounded-md hover:bg-[#B5B5B5]">
              Hire Me Now
            </button>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button onClick={() => setOpen(!open)}>
              <span className="text-3xl text-white">&#9776;</span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden w-full px-6 py-4 space-y-4 font-medium text-white z-50">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>EXPERIENCE</p>
            <p>MY WORK</p>
            <p>CONTACT</p>
            <p>MY RESUME</p>
            <button className="py-2 px-4 bg-[#9A9A9A] text-black rounded-md hover:bg-[#B5B5B5]">
              Hire Me Now
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-50 pb-20 px-10 gap-10 z-20 text-white"
      >
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 text-xl">
            <FaRegHand className="text-indigo-600 text-3xl" />
            <span>HELLO I'M</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-2 leading-tight">
            NIRALI <br />
            MOGHARIYA
          </h1>

          <p className="mt-4 max-w-xxl leading-relaxed">
            Welcome to my Frontend Developer Portfolio! As a passionate and
            skilled web developer, I am dedicated to creating innovative and
            user-friendly websites that leave a lasting impression. With a
            strong foundation in web technologies and a keen eye for design, I
            take pride in delivering cutting-edge solutions that meet clients'
            needs and exceed their expectations.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mt-6">
            <button className="py-3 px-6 cursor-pointer bg-[#9A9A9A] text-black rounded-lg text-lg hover:bg-[#B5B5B5]">
              Hire Me Now
            </button>

            <button className="py-3 px-6 cursor-pointer border border-gray-700 rounded-lg text-lg">
              WhatsApp
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5 mt-6 text-xl">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              className="text-white hover:text-blue-600"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/nirali-moghariya-548564293/"
              target="_blank"
              className="text-white hover:text-blue-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

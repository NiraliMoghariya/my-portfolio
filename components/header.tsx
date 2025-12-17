"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  FaInstagram,
  FaLinkedinIn,
  FaRegHand,
  FaWhatsapp,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import toast from "react-hot-toast";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyles =
    "relative text-sm tracking-widest uppercase text-gray-300 \
   after:absolute after:left-0 after:-bottom-2 \
   after:h-[2px] after:w-0 after:bg-[#388bff] \
   after:transition-all after:duration-300 after:ease-out \
    hover:after:w-full";

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Journey", href: "#myjourney" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <main className="relative bg-black min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://karbon.caliberthemes.com/wp-content/uploads/2025/09/Home-Hero-3-slider-3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/80 to-black z-0" />

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50">
            <Image
              src="/LOGO.png"
              alt="Logo"
              width={scrolled ? 90 : 120}
              height={60}
              className="object-contain transition-all"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkStyles}>
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="/resume.pdf"
                download="Nirali_Resume.pdf"
                onClick={() => toast.success("Downloading Resume…")}
                className="flex items-center gap-2 relative text-sm tracking-widest uppercase text-gray-300 \
                after:absolute after:left-0 after:-bottom-2 \
                after:h-[2px] after:w-0 after:bg-[#388bff] \
                after:transition-all after:duration-300 after:ease-out \
                 hover:after:w-full"
              >
                <HiOutlineDocumentText className="text-[#388bff]" size={18} />
                <span className="text-sm tracking-widest uppercase">
                  Resume
                </span>
              </a>
            </li>

            <li>
              <Link href="#contact">
                <button className="py-2.5 px-6 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#1f5297] cursor-pointer hover:text-white transition-all">
                  CONTACT
                </button>
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white z-50"
          >
            {open ? <FaXmark size={26} /> : <FaBars size={26} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6"
            >
              <ul className="flex flex-col gap-6 text-gray-300 font-medium">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={linkStyles}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <li className="pt-4 border-t border-white/10">
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 hover:text-[#388bff]"
                  >
                    <HiOutlineDocumentText size={18} />
                    <span className="text-sm tracking-widest uppercase">
                      Resume
                    </span>
                  </a>
                </li>

                <li>
                  <Link href="#contact" onClick={() => setOpen(false)}>
                    <button className="w-full mt-4 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-[#1f5297] hover:text-white transition-all">
                      CONTACT
                    </button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section
        id="/"
        className="relative max-w-7xl mx-auto px-6 pt-40 md:pt-40 md:pb-20 pb-10 text-white z-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-[560px]"
        >
          {/* Hello */}
          <div className="flex items-center gap-3 text-sm sm:text-base tracking-[0.25em] text-[#388bff] ">
            <FaRegHand className="animate-pulse" />
            <span>HELLO I'M</span>
          </div>

          {/* Name */}
          <h1 className="mt-4 text-[2.7rem] sm:text-[3rem] md:text-[3.9rem] lg:text-[4.7rem] font-extrabold leading-tight">
            NIRALI <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
              MOGHARIYA
            </span>
          </h1>

          {/* Text */}
          <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-[1.09rem] leading-relaxed">
             Welcome to my Frontend Developer Portfolio! As a passionate and
            skilled web developer, I am dedicated to creating innovative and
            user-friendly websites that leave a lasting impression. With a
            strong foundation in web technologies and a keen eye for design, I
            take pride in delivering cutting-edge solutions that meet clients'
            needs and exceed their expectations.
          </p>

          {/* Button */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block py-2.5 px-6 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#1f5297] hover:text-white transition-all"
            >
              CONTACT ME
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-6 mt-7 text-xl text-gray-400">
            <a
              href="https://wa.me/917777939764"
              target="_blank"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/nir__1804/"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/nirali-moghariya-548564293/"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

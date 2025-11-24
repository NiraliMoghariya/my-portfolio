"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      <div className="max-w-8xl mx-auto flex items-center justify-between pl-7 pr-15 py-4
  max-[768px]:pl-3 max-[768px]:pr-8 ">

        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo.jpg"
            alt="Nirali Moghariya Logo"
            width={120}
            height={120}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/resume" className="hover:text-blue-500">Resume</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Mobile Toggle Button (Hidden when open) */}
        {!open && (
          <button className="md:hidden cursor-pointer" onClick={() => setOpen(true)}>
            <Menu size={32} />
          </button>
        )}
      </div>

      {/* Mobile Sidebar Menu */}
      {open && (
        <div className="fixed inset-0 bg-black backdrop-blur-md z-50 md:hidden transition-all duration-300 ">

          {/* Sidebar */}
          <div className="h-full w-72 px-4 py-4 flex flex-col ml-5">

            {/* Top Row with Logo + Close Icon */}
            <div className=" flex justify-between items-center mb-6 ">
               <Link href="/" className="cursor-pointer">
          <Image
            src="/logo.jpg"
            alt="Nirali Moghariya Logo"
            width={120}
            height={120}
            className="cursor-pointer"
          />
        </Link>
              <button onClick={() => setOpen(false)}>
                <X size={32} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-4 text-lg font-medium ">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Resume", href: "/resume" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="pb-3 border-b border-gray-300 -ml-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white pb-5 pt-10 px-6 text-center">
      
      {/* Logo + Title */}
      <h2 className="text-3xl font-bold tracking-widest">NIRALI</h2>
      <p className="text-sm mt-1 tracking-[0.3em]">MOGHARIYA</p>

      {/* Description */}
      <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-relaxed text-sm md:text-base">
        Building Dynamic And Scalable Web Applications With Precision.
        A Passionate Full-Stack Developer Skilled In React, Next.Js, And Node.Js.
        I Provide Innovative Solutions To Solve Complex Challenges.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-5 text-xl">
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

      {/* Divider */}
      <div className="w-full max-w-3xl mx-auto border-t border-gray-600 my-6"></div>



      {/* Bottom Copyright */}
      <p className="text-gray-400 text-xs mt-6">
        © 2025 Nirali Moghariya — All Rights Reserved.
      </p>
    </footer>
  );
}

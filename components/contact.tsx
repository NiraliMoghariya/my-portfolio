"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
          toast.success("Message sent successfully! 🎉");

        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-black">Contact</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Connect with me through the contact form and let's explore
            opportunities together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
            <div className="mb-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#9A9A9A] text-white flex items-center justify-center rounded-full">
                <HiLocationMarker className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black">Location:</h4>
                <p className="text-gray-700">
                  Whispering Palms, Masma, Olpad, Surat - 394540
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#9A9A9A] text-white flex items-center justify-center rounded-full">
                <HiMail className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black">Email:</h4>
                <p className="text-gray-700">niralimoghariya@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#9A9A9A] text-white flex items-center justify-center rounded-full">
                <HiPhone className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black">Call:</h4>
                <p className="text-gray-700">+91 7777939764</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="bg-white p-6 rounded-xl shadow-md border">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* NAME */}
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border text-black rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#9A9A9A]"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border text-black rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#9A9A9A]"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full border text-black rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#9A9A9A]"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border text-black rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#9A9A9A]"
                ></textarea>
              </div>

              {/* BUTTON */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#9A9A9A] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#B5B5B5] transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* STATUS MESSAGE */}
              {status && (
                <p className="text-center text-sm text-green-600 font-medium">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
    
  );
}

"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-black font-extrabold mb-10 tracking-wide">
          CONTACT
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full mx-auto flex flex-col gap-6  px-6"
      >
        {/* Row 1 - Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col text-left">
            <label className="font-semibold text-black mb-1">Full Name</label>
            <input
              type="text"
                placeholder="Your Full Name"

              name="name"
className="p-3  border-1 border-[#9A9A9A] rounded text-black bg-white"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="font-semibold text-black mb-1">Your Email</label>
            <input
              type="email"
              name="email"
                              placeholder="Your Email"

className="p-3  border-1 border-[#9A9A9A] rounded text-black bg-white"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2 - Message */}
        <div className="flex flex-col text-left">
          <label className="font-semibold text-black mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={4}
className="p-3 border-1 border-[#9A9A9A] rounded text-black bg-white"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Row 3 - Button */}
        {/* <button
          type="submit"
          className="py-3 px-6 cursor-pointer bg-[#9A9A9A] text-black rounded-md hover:bg-[#B5B5B5] font-semibold"
        >
          Send
        </button> */}
  <button
  type="submit"
  className="py-3 px-6 w-32 cursor-pointer bg-[#9A9A9A] text-black rounded-md 
  hover:bg-[#B5B5B5] font-semibold mx-auto"
>
  Send
</button>


      </form>
    </div>
  );
}

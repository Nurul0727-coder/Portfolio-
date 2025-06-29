"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { LiaArrowRightSolid } from "react-icons/lia";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setForm({ ...form, message: e.target.value });
  }

  function handleSend() {
    setLoading(true);
    setError("");
    setSent(false);

    if (!form.firstName || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_kami4xa",
        "template_1n2x528",
        {
          from_name: form.firstName + " " + form.lastName,
          from_email: form.email,
          message: form.message,
        },
        "WYhKJsUmZp8xNfVO0"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setForm({ firstName: "", lastName: "", email: "", message: "" });
        },
        (err) => {
          setLoading(false);
          setError("Failed to send message. Please try again later.");
          console.error(err);
        }
      );
  }

  const animationProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="p-20 bg-[#fef9f5] text-black">
      <motion.div {...animationProps} className="flex">
        <div className="bg-amber-400 w-4 h-4 rounded-full mt-1 mr-3"></div>
        <p
          className="text-xl font-medium w-[100px]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Contact
        </p>
      </motion.div>

      <motion.div {...animationProps} className="ml-80 ">
        <h1
          className="text-5xl font-medium w-[750px] text-[#29292a]"
          style={{ fontFamily: "var(--font-pt-serif)" }}
        >
          "Success isn’t found in haste, but in the steady steps you take with
          persistence."
        </h1>
      </motion.div>
      <div className="ml-80">
        <motion.div
          {...animationProps}
          className="my-10"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <p className="font-light">Please get in touch.</p>
          <p className="font-light">
            Send me a message here,
            <a className="cursor-pointer underline pl-1">email </a>
            or
            <a className="cursor-pointer underline pl-1">call </a>
            me.
          </p>
        </motion.div>

        <motion.div
          {...animationProps}
          className="flex gap-6"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <div className="text-xs font-medium">
            First name
            <Input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-[300px] mt-1 border-b border-[#919194] bg-white text-black"
              placeholder="Rachel"
            />
          </div>
          <div className="text-xs font-medium">
            Last name
            <Input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-[300px] mt-1 border-b border-[#919194] bg-white text-black"
              placeholder="Lee"
            />
          </div>
        </motion.div>

        <motion.div {...animationProps}>
          <div
            className="my-4 text-xs font-medium"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Email address
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-[625px] mt-1 border-b border-[#919194] bg-white text-black"
              placeholder="rachel.lee@example.com"
            />
          </div>

          <div
            className="my-4 text-xs font-medium"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleMessageChange}
              className="w-[625px] border-b border-[#919194] bg-white text-black resize-none p-3 "
              placeholder="Send message..."
            />
          </div>
        </motion.div>

        <motion.div {...animationProps}>
          {error && <p className="text-red-600 mt-2">{error}</p>}
          {sent && (
            <p className="text-green-600 mt-2">Message sent successfully!</p>
          )}
        </motion.div>

        <motion.button
          {...animationProps}
          disabled={loading}
          onClick={handleSend}
          className="bg-[#fb9016] w-[140px] h-[40px] rounded-xl flex justify-center items-center text-xl mt-10 hover:bg-[#f48404] pl-2 disabled:opacity-50"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Send
          <LiaArrowRightSolid className="m-2" />
        </motion.button>
      </div>
    </div>
  );
}

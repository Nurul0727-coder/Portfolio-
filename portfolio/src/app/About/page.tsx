"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-[#fef9f5] w-full min-h-screen text-black pt-20 px-6">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto">
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-light text-[#29292a] mb-10"
            style={{ fontFamily: "var(--font-pt-serif)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            "The small piece of code you write today might be the foundation of
            a great system tomorrow."
          </motion.h1>

          {[
            "Hi! I’m a Fullstack Developer, trained and graduated from Pinecone Academy. I'm passionate about every project I work on, and I quickly adapt to new environments and teams.",
            "Having worked with diverse teams, I’m equally comfortable learning independently and collaborating closely with teammates to build meaningful solutions.",
            "I believe in never stopping learning I code every day, experiment with new technologies, and value a culture of teamwork and growth.",
            "My goal is to become a reliable developer who contributes to impactful projects that make a real difference in the future.",
          ].map((text, idx) => (
            <motion.p
              key={idx}
              className="text-lg lg:text-xl mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}

          <Link href="/projects"></Link>
        </motion.div>

        <motion.div
          className="mt-10 lg:mt-0 lg:ml-14"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/Gegee.jpg"
            alt="Gegee"
            width={320}
            height={460}
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}

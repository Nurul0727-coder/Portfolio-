"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Concert Ticket Booking",
    description:
      "A full-featured concert ticket booking system with seat selection, payment integration, and order tracking.",
    image: "/Concert.png",
    link: "https://concert-frontend-theta.vercel.app/",
  },
  {
    title: "Boox",
    description:
      "A platform for exchanging and sharing books. Includes rare book search, location-based features, and user chat.",
    image: "/Boox.png",
    link: "https://boox-pi.vercel.app/",
  },
  {
    title: "Movie App",
    description:
      "A movie search and discovery app integrated with the TMDB API, featuring genre filters and dynamic results.",
    image: "/MovieApp.png",
    link: "https://movie-app-indol-two-46.vercel.app/",
  },
  {
    title: "Buy Me a Coffee",
    description:
      "A donation platform built with Stripe. Includes user profiles, comment system, and real-time feedback.",
    image: "/buyMeACoffee.png",
    link: "https://hackhawks-frontend.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "A minimalistic weather application that displays real-time conditions with clean and simple UI.",
    image: "/Weather.png",
    link: "https://weather-app-two-rho-tvj7zi3bf2.vercel.app/",
  },
  {
    title: "Unread",
    description:
      "A blog/news reader site with responsive layout and modern UI/UX design focused on readability.",
    image: "/Unread.png",
    link: "https://unread-mocha.vercel.app/",
  },
  {
    title: "PineTour",
    description:
      "A travel platform that recommends curated tour programs with a user-friendly design.",
    image: "/MovieApp.png",
    link: "https://pine-tour-mauve.vercel.app/",
  },
  {
    title: "Multi Step Form",
    description:
      "A step-by-step form with validation and improved UX flow. Designed for user onboarding processes.",
    image: "/Form.png",
    link: "https://form-three-indol.vercel.app/",
  },
];

export default function ProjectCards() {
  return (
    <section className="bg-gradient-to-br bg-[#fef9f5] text-black py-20 px-6 md:px-20">
      <div style={{ fontFamily: "var(--font-montserrat)" }}>
        <h2
          className="text-4xl font-bold text-center mb-12 "
          style={{ fontFamily: "var(--font-pt-serif)" }}
        >
          My Projects
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden flex flex-col transition duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-sm bg-black text-white py-2 px-4 rounded-full text-center hover:bg-[#f48404] transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Concert Ticket Booking",
    description:
      "Бүрэн функциональ концертын тасалбар захиалгын систем. Хэрэглэгчийн захиалга, тайзны зураглал, төлбөр тооцооны интеграци зэргийг агуулсан.",
    image: "/Concert.png",
    link: "https://concert-frontend-theta.vercel.app/",
  },
  {
    title: "Boox",
    description:
      "Ном солилцох, хуваалцах вэб апп. Ховор, хуучин номын хайлт, хэрэглэгч хоорондын чат, байрлалд суурилсан функцуудтай.",
    image: "/Boox.png",
    link: "https://boox-pi.vercel.app/",
  },
  {
    title: "Movie app",
    description:
      "Бүтээлч хүмүүст дэмжлэг илгээх платформ. Stripe интеграци, хэрэглэгчийн профайл, урамшууллын систем багтсан.",
    image: "/MovieApp.png",
    link: "https://movie-app-indol-two-46.vercel.app/",
  },
  {
    title: "Buy me a coffee",
    description:
      "Бүтээлч хүмүүст дэмжлэг илгээх платформ. Stripe интеграци, хэрэглэгчийн профайл, урамшууллын систем багтсан.",
    image: "/buyMeACoffee.png",
    link: "https://hackhawks-frontend.vercel.app/",
  },
  {
    title: "Weather app",
    description:
      "Бүтээлч хүмүүст дэмжлэг илгээх платформ. Stripe интеграци, хэрэглэгчийн профайл, урамшууллын систем багтсан.",
    image: "/Weather.png",
    link: "hhttps://weather-app-two-rho-tvj7zi3bf2.vercel.app/",
  },
  {
    title: "Unread",
    description:
      "Бүтээлч хүмүүст дэмжлэг илгээх платформ. Stripe интеграци, хэрэглэгчийн профайл, урамшууллын систем багтсан.",
    image: "/Unread.png",
    link: "https://unread-mocha.vercel.app/",
  },
  {
    title: "PineTour",
    description:
      "Бүтээлч хүмүүст дэмжлэг илгээх платформ. Stripe интеграци, хэрэглэгчийн профайл, урамшууллын систем багтсан.",
    image: "/MovieApp.png",
    link: "https://pine-tour-mauve.vercel.app/",
  },
  {
    title: "Multi step form",
    description:
      "Бүтээлч хүмүүст дэмжлэг илгээх платформ. Stripe интеграци, хэрэглэгчийн профайл, урамшууллын систем багтсан.",
    image: "/Form.png",
    link: "https://form-three-indol.vercel.app/",
  },
];

export default function ProjectCards() {
  return (
    <div className="bg-white text-black py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
      <div className="relative border-l-4 border-black pl-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-16 relative bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-md hover:shadow-xl p-6 group cursor-pointer"
          >
            <div className="absolute -left-3 top-6 w-6 h-6 bg-black rounded-full border-4 border-white"></div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-full md:w-1/3 h-52 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

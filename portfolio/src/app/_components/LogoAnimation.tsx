"use client";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaNode,
  FaGithub,
  FaNpm,
  FaYarn,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiMysql,
  SiRender,
  SiFirebase,
  SiExpress,
  SiReacthookform,
  SiPostman,
  SiShadcnui,
  SiPostgresql,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";

export default function LogoAnimation() {
  const icons = [
    { icon: <FaHtml5 className="w-20 h-20" />, name: "HTML5" },
    { icon: <FaCss3 className="w-20 h-20" />, name: "CSS3" },
    { icon: <RiTailwindCssFill className="w-20 h-20" />, name: "Tailwind" },
    { icon: <FaJsSquare className="w-20 h-20" />, name: "JavaScript" },
    { icon: <FaReact className="w-20 h-20" />, name: "React" },
    { icon: <FaNode className="w-20 h-20" />, name: "Node.js" },
    { icon: <FaGithub className="w-20 h-20" />, name: "GitHub" },
    { icon: <FaNpm className="w-20 h-20" />, name: "NPM" },
    { icon: <FaYarn className="w-20 h-20" />, name: "Yarn" },
    { icon: <SiNextdotjs className="w-20 h-20" />, name: "Next.js" },
    { icon: <SiPrisma className="w-20 h-20" />, name: "Prisma" },
    { icon: <FaFigma className="w-20 h-20" />, name: "Figma" },
    { icon: <SiMongodb className="w-20 h-20" />, name: "MongoDB" },
    { icon: <IoLogoVercel className="w-20 h-20" />, name: "Vercel" },
    { icon: <BiLogoTypescript className="w-20 h-20" />, name: "TypeScript" },
    { icon: <SiMysql className="w-20 h-20" />, name: "MySQL" },
    { icon: <SiRender className="w-20 h-20" />, name: "Render" },
    { icon: <GrGraphQl className="w-20 h-20" />, name: "GraphQL" },
    { icon: <SiFirebase className="w-20 h-20" />, name: "Firebase" },
    { icon: <SiExpress className="w-20 h-20" />, name: "Express" },
    {
      icon: <SiReacthookform className="w-20 h-20" />,
      name: "React Hook Form",
    },
    { icon: <SiPostman className="w-20 h-20" />, name: "Postman" },
    { icon: <SiShadcnui className="w-20 h-20" />, name: "shadcn/ui" },
    { icon: <SiPostgresql className="w-20 h-20" />, name: "PostgreSQL" },
  ];

  return (
    <div className="bg-white text-black overflow-hidden py-50">
      <div className="w-[200%] flex animate-scroll gap-10">
        {icons.concat(icons).map((item, index) => (
          <div key={index} className="flex flex-col items-center w-28">
            {item.icon}
            <p className="text-md mt-2 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

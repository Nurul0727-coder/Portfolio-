"use client";

import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import BlurText from "./BlurText";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

type VantaEffect = {
  destroy: () => void;
};

type VantaInit = (options: {
  el: HTMLElement;
  THREE: typeof THREE;
  [key: string]: any;
}) => VantaEffect;

export function Header() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        (FOG as VantaInit)({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xe1ab03,
          midtoneColor: 0xff3c1e,
          lowlightColor: 0x2d00ff,
          baseColor: 0xf2c3c3,
          blurFactor: 0.6,
          speed: 1.0,
        })
      );
    }

    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  function handleAnimationComplete() {
    console.log("Animation complete!");
  }

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen relative text-white flex flex-col"
    >
      <nav className="w-full flex justify-between items-center px-8 md:px-14 py-4 fixed top-0 left-0 z-50 bg-black bg-opacity-40 backdrop-blur-md">
        <div
          className="flex items-center space-x-8"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <Link
            href="/About"
            className="text-lg cursor-pointer hover:text-yellow-400 transition"
          >
            About
          </Link>
          <Link
            href="/ProjectCards"
            className="text-lg cursor-pointer hover:text-yellow-400 transition"
          >
            Projects
          </Link>
          <Link
            href="/Contact"
            className="text-lg cursor-pointer hover:text-yellow-400 transition"
          >
            Contact
          </Link>
        </div>

        <div
          className="text-2xl font-normal tracking-wide select-none "
          style={{ fontFamily: "var(--font-pt-serif)" }}
        >
          Nurul Sugirsuren
        </div>

        <div className="flex space-x-5 text-2xl mr-6">
          <a
            href="https://www.facebook.com/gegeenee.nurul.swn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-400 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/gegeenee-nurul-12170435a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/priinccess__swn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>

      <div className="flex flex-col flex-grow items-center justify-center px-6 md:px-0 pt-20 text-center max-w-4xl mx-auto">
        <>
          <BlurText
            text="Welcome to My Portfolio"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg"
          />
          <motion.p
            className="text-lg md:text-xl max-w-2xl text-yellow-100 drop-shadow-md"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Hi, I’m Nurul — a dedicated Fullstack Developer who crafts engaging,
            cutting-edge web experiences that connect people and inspire
            innovation.
          </motion.p>
        </>
      </div>
    </div>
  );
}

export default Header;

"use client";

import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import BlurText from "./BlurText";
import Link from "next/link";

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
          highlightColor: 0xc8e8ff,
          midtoneColor: 0xdddbf7,
          lowlightColor: 0xe396af,
          baseColor: 0xf7d8ef,
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

  return (
    <div ref={vantaRef} className="w-full h-screen text-white flex flex-col">
      <nav className="w-full flex justify-between items-center px-14 py-4 fixed top-0 left-0 z-50">
        <ul className="flex space-x-6 text-white">
          <div className="text-lg  cursor-pointer">About</div>
          <Link href={`/contact`} className="text-lg">
            Contact
          </Link>
        </ul>
        <ul className="text-2xl font-bold ml-[-80px] ">Nurul Sugirsuren</ul>

        <ul className="flex space-x-6 text-white">
          <li className="text-lg cursor-pointer">Menu</li>
        </ul>
      </nav>

      <div className="flex flex-col flex-grow items-center justify-center pt-16">
        <BlurText
          text="Welcome to My Portfolio"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-6xl mb-4 font-serif font-bold"
        />
      </div>
    </div>
  );
}

export default Header;

"use client";

import About from "../About/page";
import Contact from "../Contact/page";
import ProjectCards from "../ProjectCards/page";
import Header from "./Header";
import LogoAnimation from "./LogoAnimation";

export default function DesktopPage() {
  return (
    <div>
      <Header />
      <About />
      <ProjectCards />
      <LogoAnimation />
      <Contact />
    </div>
  );
}

import Header from "./_components/Header";
import LogoAnimation from "./_components/LogoAnimation";
import About from "./About/page";
import Contact from "./Contact/page";
import ProjectCards from "./ProjectCards/page";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <ProjectCards />
      <LogoAnimation />
      <Contact />
    </>
  );
}

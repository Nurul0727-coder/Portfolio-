import Contact from "./_components/Contact";
import { Footer } from "./_components/Footer";
import Header from "./_components/Header";
import HomePage from "./_components/HomePage";
import LogoAnimation from "./_components/LogoAnimation";
import ProjectCards from "./_components/ProjectCards";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <ProjectCards />
      <LogoAnimation />
      <Contact />
      <Footer />
    </>
  );
}

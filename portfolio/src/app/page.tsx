"use client";
import { useEffect, useState } from "react";
import MobilePage from "./_components/MobilePage";
import DesktopPage from "./_components/DesktopPage";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isMobile ? <MobilePage /> : <DesktopPage />;
}

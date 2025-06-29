"use client";
import { useEffect, useState } from "react";

export default function ResponsiveWarning() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setIsMobile(window.innerWidth < 768);
    }

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isMobile) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#fb9016",
        color: "white",
        textAlign: "center",
        padding: "10px",
        fontFamily: "var(--font-montserrat)",
        zIndex: 9999,
      }}
    >
      Хэзээ нэг өдөр утаснаас харагддаг болгоно доо хө!👻🌟
    </div>
  );
}

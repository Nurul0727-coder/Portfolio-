import React, { useEffect, useState } from "react";

type BlurTextProps = {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom" | "left" | "right";
  onAnimationComplete?: () => void;
  className?: string;
};

export function BlurText({
  text,
  delay = 100,
  animateBy = "letters",
  direction = "top",
  onAnimationComplete,
  className,
}: BlurTextProps) {
  const [visibleCount, setVisibleCount] = useState(0);

  const items = animateBy === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    if (visibleCount < items.length) {
      const timer = setTimeout(() => {
        setVisibleCount(visibleCount + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      if (onAnimationComplete) onAnimationComplete();
    }
  }, [visibleCount, items.length, delay, onAnimationComplete]);

  return (
    <div
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap" }}
    >
      {items.map((item, i) => {
        const isVisible = i < visibleCount;
        return (
          <span
            key={i}
            style={{
              opacity: isVisible ? 1 : 0,
              filter: isVisible ? "blur(0)" : "blur(4px)",
              transform: isVisible
                ? "translate(0,0)"
                : direction === "top"
                ? "translateY(10px)"
                : direction === "bottom"
                ? "translateY(-10px)"
                : direction === "left"
                ? "translateX(10px)"
                : "translateX(-10px)",
              transition: "all 0.3s ease",
              marginRight: animateBy === "words" ? "0.25em" : undefined,
              display: "inline-block",
            }}
          >
            {animateBy === "words" ? item : item === " " ? "\u00A0" : item}
          </span>
        );
      })}
    </div>
  );
}

export default BlurText;

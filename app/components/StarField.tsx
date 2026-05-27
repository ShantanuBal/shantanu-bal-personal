"use client";

import { useEffect, useState } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const t = setTimeout(() => {
      setStars(
        Array.from({ length: 200 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() < 0.2 ? 2 : 1,
          duration: 2 + Math.random() * 5,
          delay: Math.random() * 6,
        }))
      );
    }, 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none hidden dark:block overflow-hidden z-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationName: "twinkle",
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
          }}
        />
      ))}
    </div>
  );
}

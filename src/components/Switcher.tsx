"use client";
import React, { useState, useEffect } from "react";

const TECH = [
  { tech: "c++", color: "#659bd3" },
  { tech: "JavaScript", color: "#f0db4e" },
  { tech: "TypeScript", color: "#2f74c0" },
  { tech: "NodeJs", color: "#6fb352" },
];

const Switcher = () => {
  const [techStack, setTechStack] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTechStack((prevTechStack) => (prevTechStack + 1) % TECH.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const currentTech = TECH[techStack];

  return (
    <div
      className={`flex w-1/3 rounded-xl mt-10 p-9`}
      style={{ background: `${TECH[techStack].color}` }}
    >
      <div className="text-3xl text-center flex justify-center items-center h-full">
        {currentTech.tech}
      </div>
    </div>
  );
};

export default Switcher;

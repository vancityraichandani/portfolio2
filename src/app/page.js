"use client";

import { useState, useEffect } from "react";
import AnimatedLine from "./components/AnimatedLine";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProfessionalWork from "./components/ProfessionalWork";
import Stack from "./components/Stack";
import ResumeChat from "./components/ResumeChat";

export default function Home() {
  const [windoww, setWindow] = useState(null);

  useEffect(() => {
    setWindow(window);
    
  }, []);

  return (
    <>
      <div
        className="min-h-screen bg-[#0a0a0a]"
        style={{
          display: `${windoww && windoww.innerWidth > 767 ? "block" : "none"}`,
        }}
      >
        <Hero />
        <AnimatedLine />
        <ProfessionalWork />
        <AnimatedLine />
        <Stack />
        <AnimatedLine />
        <Contact />
      </div>
      {windoww && windoww.innerWidth <= 767 && (
        <div className="p-4 pt-40 text-center text-sm text-white">
          For the best experience, please view this portfolio on a desktop or
          laptop.
        </div>
      )}
    </>
  );
}

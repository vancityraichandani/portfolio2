"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import ResumeChat from "./ResumeChat";

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 50, y: 50 });
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const GRID_SIZE = 40;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.1;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.1;

      // Grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 3;

      for (let x = 0; x < canvas.width; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Glow orb
      const gradient = ctx.createRadialGradient(
        glowPos.current.x,
        glowPos.current.y,
        0,
        glowPos.current.x,
        glowPos.current.y,
        220,
      );
      gradient.addColorStop(0, "rgba(79, 42, 202, 0.58)");
      gradient.addColorStop(0.5, "rgba(50, 88, 214, 0.19)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-ai-chat", handler);
    return () => window.removeEventListener("open-ai-chat", handler);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ paddingTop: '155px' }}
      className="relative flex items-center overflow-hidden hero-wrapper"
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />

      {/* Fade overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, transparent 40%, #0a0a0a 100%)",
        }}
      />
      {/* <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=" relative z-10 cursor-pointer flex items-center gap-2 text-zinc-500 hover:text-white transition text-sm mt-12"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Chat with my AI
      </motion.button> */}
      {/* Content - right aligned */}
      <motion.div
        style={{ opacity, position: "relative", zIndex: 1 }}
        className="hero-content"
      >
        <div class="hero-text">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-zinc-400 text-sm tracking-widest uppercase"
          >
            Frontend Engineer · With a simple goal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold text-white leading-tight mt-2"
          >
            Performance <br />
            <span className="text-zinc-500">Designed Perfectly</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-zinc-400 text-lg max-w-md mt-7"
          >
            5+ years of crafting high-performance, seamless interfaces at global
            scale with millions of users. Beautifully built UI/UX combined with
            rock-solid performance.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 hero-buttons"
        >
          <a
            href="#work"
            className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition"
          >
            Contact Me
          </a>{" "}
          <a
            href="/resume.pdf"
            style={{ position: "relative" }}
            download="Somesh_Raichandani_Resume.pdf"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition"
          >
            Resume
            <CgSoftwareDownload
              style={{
                fontSize: "32px",
                paddingBottom: "5px",
                display: "inline",
              }}
            />
          </a>
        </motion.div>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg mx-4 rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden max-h-[80vh] flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-between">
              <div className="cursor-pointer flex z-10 items-right justify-start px-6 py-4 border-b border-white/10 shrink-0">
                Somesh AI
              </div>
              <div
                onClick={() => setOpen(false)}
                className="cursor-pointer flex z-10 items-right justify-end px-6 py-4 border-b border-white/10 shrink-0"
              >
                X
              </div>
            </div>

            {/* Chat - scrollable */}
            <div className="overflow-y-auto flex-1">
              <ResumeChat />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function GridBackground() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 50 });
  const glowPos = useRef({ x: 0, y: 50 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = 2 * window.innerHeight;

    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 2 * window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const GRID_SIZE = 30;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.1;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.1;

      // Grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 2.5;

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
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
    />
  );
}

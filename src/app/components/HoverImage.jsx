"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HoverImage({ word, image, alt }) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <span className="relative inline-block">
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className="underline decoration-dotted decoration-zinc-600 cursor-default"
      >
        {word}
      </span>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 pointer-events-none"
            style={{
              left: pos.x - 250,
              top: pos.y + 20,
            }}
          >
            <img
              src={image}
              alt={alt}
              className="max-w-none h-[400px] object-contain rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

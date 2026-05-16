"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AnimatedLine() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const pathLength1 = useTransform(scrollYProgress, [0, 0.8], [0, 1])
  const pathLength2 = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])
  const pathLength3 = useTransform(scrollYProgress, [0.2, 1], [0, 1])
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className="w-full py-8 overflow-hidden">
      <svg viewBox="0 0 1200 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
        
        {/* Glow filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(120,80,255,0)" />
            <stop offset="30%" stopColor="rgba(120,80,255,0.8)" />
            <stop offset="70%" stopColor="rgba(80,120,255,0.8)" />
            <stop offset="100%" stopColor="rgba(80,120,255,0)" />
          </linearGradient>
        </defs>

        {/* Background faint path */}
        <motion.path
          d="M 0 100 Q 200 20 400 100 Q 600 180 800 100 Q 1000 20 1200 100"
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
          style={{ opacity: opacity1 }}
        />

        {/* Main glowing path */}
        <motion.path
          d="M 0 100 Q 200 20 400 100 Q 600 180 800 100 Q 1000 20 1200 100"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          filter="url(#glow)"
          style={{ pathLength: pathLength1, opacity: opacity1 }}
        />

        {/* Second offset path */}
        <motion.path
          d="M 0 120 Q 200 40 400 120 Q 600 200 800 120 Q 1000 40 1200 120"
          fill="none"
          stroke="rgba(120,80,255,0.2)"
          strokeWidth="1"
          filter="url(#glow)"
          style={{ pathLength: pathLength2, opacity: opacity1 }}
        />

        {/* Third thin accent path */}
        <motion.path
          d="M 0 80 Q 200 0 400 80 Q 600 160 800 80 Q 1000 0 1200 80"
          fill="none"
          stroke="rgba(80,120,255,0.15)"
          strokeWidth="1"
          style={{ pathLength: pathLength3, opacity: opacity1 }}
        />

        {/* Traveling dot on main path */}
        <motion.circle
          r="4"
          fill="rgba(180,140,255,0.9)"
          filter="url(#glow)"
          style={{ opacity: opacity1 }}
        >
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M 0 100 Q 200 20 400 100 Q 600 180 800 100 Q 1000 20 1200 100"
          />
        </motion.circle>

      </svg>
    </div>
  )
}
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const first = "Somesh";
const last = "Raichandani";

function NavLogo() {
  return (
    <div
      style={{ color: "#6b6177" }}
      className="flex items-center text-xl font-bold  overflow-hidden"
    >
      <motion.span
        initial={{ width: "1ch" }}
        animate={{ width: "auto" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "linear" }}
        className="inline-block overflow-hidden whitespace-nowrap"
      >
        {first}
      </motion.span>
      <span className="mx-1" />
      <motion.span
        initial={{ width: "1.3ch" }}
        animate={{ width: "auto" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "linear" }}
        className="inline-block overflow-hidden whitespace-nowrap"
      >
        {last}
      </motion.span>
    </div>
  );
}

function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [windoww, setWindow] = useState(null);

  useEffect(() => {
    setWindow(window);
  }, []);
  return (
    <nav
      id="navbar"
      style={{ visibility: windoww?.innerWidth > 767 ? "visible" : "hidden" }}
      className="flex items-center justify-between px-12 pr-20 py-4 border-b border-white/10 backdrop-blur-md fixed top-0 w-full z-50"
    >
      <div
        onClick={() =>
          isHome ? window.location.reload() : (window.location.href = "/")
        }
        style={{ cursor: "pointer" }}
        className="hover:text-white transition"
      >
        <NavLogo />
      </div>

      <div className="flex gap-14 text-sm text-zinc-400">
        {isHome ? (
          <a
            onClick={() => window.dispatchEvent(new Event("open-ai-chat"))}
            className="flex cursor-pointer items-center gap-2 text-zinc-400 hover:text-white hover:border-white/30 transition text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
            Somesh AI
          </a>
        ) : null}
        {isHome ? (
          <Link href="/about" className="hover:text-white transition">
            About Me
          </Link>
        ) : (
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
        )}
        <a
          href={isHome ? "#work" : "/#work"}
          className="hover:text-white transition"
        >
          Work
        </a>
        <a
          href={isHome ? "#skills" : "/#skills"}
          className="hover:text-white transition"
        >
          Skills
        </a>
        <a
          href={isHome ? "#contact" : "/#contact"}
          className="hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaFileAlt } from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "someshraichandani1@gmail.com",
    href: "mailto:someshraichandani1@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Mobile",
    value: "+91 88603 57257 (One Tap to WhatsApp)",
    href: "https://wa.me/918860357257?text=Hey%20Somesh%2C%20I%20saw%20your%20portfolio%20and%20I%20have%20an%20exciting%20opportunity%20I'd%20love%20to%20discuss!",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/somesh7",
    href: "https://www.linkedin.com/in/somesh7",
  },
];

export default function Contact() {
  const [verified, setVerified] = useState(false);
  const [checked, setChecked] = useState(false);

  const [displayNow, setDisplayNow] = useState(false);

  const handleCheck = () => {
    setChecked(true);
    setTimeout(() => setVerified(true), 600);
  };

  useEffect(()=>{
    if(verified){
        setTimeout(()=>{
            setDisplayNow(true)
        }, 1000)
    }
  }, [verified])

  return (
    <section id="contact" className="pb-24 px-16 contact-wrapper">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-4"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-zinc-500 mb-4 text-lg"
      >
        Open to new opportunities. Let's talk.
      </motion.p>

      <div className="flex flex-col gap-6 max-w-xl mx-auto">
        {/* Bot check */}
        <AnimatePresence>
          {!verified && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] mt-2"
            >
              <div
                onClick={!checked ? handleCheck : undefined}
                className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 cursor-pointer transition-all duration-300 ${
                  checked
                    ? "bg-zinc-400 border-zinc-400"
                    : "border-zinc-600 hover:border-zinc-400"
                }`}
              >
                <AnimatePresence>
                  {checked && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="w-3 h-3 text-black"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </div>
              <span className="text-zinc-600 text-sm">
                {checked ? "Verifying..." : "I'm not a robot"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Verified message */}
        <AnimatePresence>
          {verified && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
               style={{display: 'block',visibility: displayNow ? 'visible' : 'hidden', textAlign:'center'}}
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] mt-2"
            >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500 text-sm text-center mt-2"
            >
              ✓ Verified
            </motion.p></motion.div>
          )}
        </AnimatePresence>

        {/* Contacts */}
        {contacts.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative "
            >
              <a
              target="_blank"
                href={verified ? item.href : undefined}
                className={`flex items-center gap-5 p-5 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all ${verified ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Icon className="text-zinc-400 text-lg" />
                </div>
                <div className="flex flex-col">
                  <span style={{textAlign: 'left'}} className="text-zinc-500 text-xs uppercase tracking-widest">
                    {item.label}
                  </span>
                  <span
                    className={`text-white mt-0.5 transition-all duration-500 ${
                      verified ? "" : "blur-sm select-none"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              </a>
            </motion.div>
          );
        })}

       
      </div>
    </section>
  );
}

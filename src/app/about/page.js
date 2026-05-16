"use client";

import { motion } from "framer-motion";

const facts = [
  { emoji: "🛼", label: "Multi-year Zonal Skating Championship", sub: "Gold Medalist" },
  { emoji: "🏆", label: "Hult Prize x MAIT 2020", sub: "Winning Team Lead" },
  { emoji: "📖", label: "Zonal English Olympiad", sub: "Gold Medalist" },
  { emoji: "🎓", label: "Maharaja Agrasen Institute of Technology", sub: "B.Tech · Mechanical & Automation Engineering · 8.24 CGPA" },
];

const interests = [
  { emoji: "🎸", label: "Guitar" },
  { emoji: "🛼", label: "Skating" },
  { emoji: "🏏", label: "Cricket" },
  { emoji: "🎵", label: "Making Music (R&B)" },
  { emoji: "📺", label: "Classic Netflix" },
  { emoji: "🧠", label: "Philosophy" },
];

const languages = ["English", "Hindi", "Sindhi", "Spanish (a bit, amigo)", "French (a bit, amie)"];

const timeline = [
  {
    year: "School",
    event: "Built my school website on Notepad.",
    sub: "That was the moment. No IDE, no tutorials. Just curiosity and HTML.",
  },
  {
    year: "College",
    event: "Mechanical & Automation Engineering.",
    sub: "Studied engineering, but never stopped building for the web on the side.",
  },
  {
    year: "2021",
    event: "Turned frontend into a career.",
    sub: "Realized I was a product and UX thinker first, engineer second. Frontend was the perfect intersection.",
  },
  {
    year: "Now",
    event: "Engineer II at Ticketmaster.",
    sub: "Building experiences for millions of fans across 30+ countries. Actively looking for what's next.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-16 py-32 max-w-4xl mx-auto">

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
          About Me
        </p>
        <h1 className="text-6xl font-bold text-white leading-tight mb-8">
          Hey, I'm Somesh. <br />
          <span className="text-zinc-500">Engineer by degree. <br/> Developer by obsession.</span>
        </h1>
        <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl">
          I'm a frontend engineer based in New Delhi, India. Currently working at Ticketmaster, 
          building fan experiences at a global scale. 
          I'm a product and UX thinker first — I don't just build what's asked, 
          I think about what should be built and why.
        </p>
      </motion.div>

      {/* Origin Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <p className="text-zinc-500 text-sm uppercase tracking-widest mb-10">
          The Journey
        </p>
        <div className="flex flex-col gap-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-8 group"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-white transition-colors mt-1.5 shrink-0" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-zinc-800 my-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <span className="text-zinc-600 text-xs uppercase tracking-widest">
                  {item.year}
                </span>
                <p className="text-white font-semibold text-lg mt-1">
                  {item.event}
                </p>
                <p className="text-zinc-500 mt-1 leading-relaxed">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tools Evolution */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <p className="text-zinc-500 text-sm uppercase tracking-widest mb-6">
          Evolution of Tools
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          {["Notepad", "Sublime Text", "VS Code", "Cursor", "Claude Code"].map((tool, i, arr) => (
            <div key={tool} className="flex items-center gap-4">
              <span className={`text-lg font-medium ${i === arr.length - 1 ? "text-white" : "text-zinc-500"}`}>
                {tool}
              </span>
              {i < arr.length - 1 && (
                <span className="text-zinc-700">→</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-zinc-600 text-sm mt-4">
          Started with just a text editor and curiosity. Still have both.
        </p>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <p className="text-zinc-500 text-sm uppercase tracking-widest mb-8">
          Beyond Work
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {facts.map((fact) => (
            <motion.div
              key={fact.label}
              variants={itemVariants}
              className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all"
            >
              <span className="text-2xl">{fact.emoji}</span>
              <div>
                <p className="text-white font-medium">{fact.label}</p>
                <p className="text-zinc-500 text-sm mt-0.5">{fact.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <p className="text-zinc-500 text-sm uppercase tracking-widest mb-8">
          When I'm Not Coding
        </p>
        <div className="flex flex-wrap gap-3">
          {interests.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              <span>{item.emoji}</span>
              <span className="text-zinc-300 text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <p className="text-zinc-500 text-sm uppercase tracking-widest mb-6">
          Languages
        </p>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <span
              key={lang}
              className="px-5 py-2 rounded-full border border-white/10 text-zinc-400 text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </motion.div>


    </main>
  );
}
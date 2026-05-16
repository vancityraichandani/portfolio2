"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    name: "Ticketmaster",
    role: "Engineer II",
    period: "July 2023 — Present",
    location: "Gurugram, India",
    tag: "Global Scale · Live Entertainment · Millions of Fans",
    color: "from-blue-500/10 to-purple-500/10",
    border: "border-blue-500/20",
    accentColor: "text-blue-400",
    description:
      "Engineered the fan-facing product experience powering live entertainment across 30+ countries — from Taylor Swift and Coldplay world tours to NBA, NFL, and MLB seasons. Built and scaled critical post-purchase flows including ticket transfer, resale, exchange, upgrade, donation, and add-to-wallet across white-label platforms serving 500M+ annual transactions.",
    highlights: [
      { value: "500M+", label: "Annual Tickets" },
      { value: "30+", label: "Countries" },
      { value: "38%", label: "Faster Load Times" },
      { value: "21.5%", label: "Higher Completion Rate" },
    ],
    details: [
      "Architected high-performance micro-frontend experiences across My Events, Event Details, My Profile, and Site Settings — optimized for concurrent users at massive scale.",
      "Owned the Account Manager product — a complex internal workflow tool used by enterprise clients managing bulk ticket operations across leagues and venues worldwide.",
      "Built internal developer tooling including a Chrome extension for network log scraping, adopted by QA teams globally to streamline debugging workflows.",
      "Selected as Ticketmaster Global Ambassador — driving culture, values, and internal community across the organization.",
    ],
  },
  {
    name: "CCTech",
    role: "Software Developer",
    period: "March 2022 — June 2023",
    location: "Pune, India",
    tag: "Startup · Scientific Computing · Product Launch",
    color: "from-emerald-500/10 to-purple-500/10",
    border: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    description:
      "Joined a fast-paced engineering startup building scientific web applications. Contributed to the ground-up launch of AHC — an interactive computational platform — from zero to its first paying clients.",
    highlights: [
      {
        value: "BS2023",
        label:
          "Research paper published for Modeling Indoor Air Quality at the Design Stage",
      },
      {
        value: "Product Launch AHC",
        label:
          "Part of the first ever launch team for the Autonomous HVAC CFD web app",
      },
    ],
    details: [
      "Built interactive data visualization applications (AHC and AVC) using React.js and scientific visualization libraries.",
      "Developed and maintained the customer-facing product suite — website, customer portal, pricing, payments, blogs, newsletters, and webinar infrastructure.",
      "Played a key role in AHC's initial launch and early client onboarding.",
    ],
  },
  {
    name: "Cognizant",
    role: "Software Developer",
    period: "October 2021 — March 2022",
    location: "Gurugram, India",
    tag: "Enterprise · Event Management · Ticketing",
    color: "from-orange-500/10 to-purple-500/10",
    border: "border-orange-500/20",
    accentColor: "text-orange-400",
    description:
      "Worked on large-scale event management workflows for a major entertainment client, building responsive and accessible fan-facing ticketing journeys.",
    highlights: [
      { value: "Large Scale", label: "Event Management" },
      { value: "Post-Purchase", label: "Ticketing Flows" },
    ],
    details: [
      "Developed interactive UI/UX experiences for post-purchase ticketing flows.",
      "Contributed to responsive design and accessibility across fan-facing platforms.",
    ],
  },
  {
    name: "Maruti Suzuki India",
    role: "Engineering Intern",
    period: "2019",
    location: "New Delhi, India",
    tag: "Automotive · India's Largest Car Manufacturer",
    color: "from-zinc-500/10 to-purple-500/10",
    border: "border-zinc-500/20",
    accentColor: "text-zinc-400",
    highlights: [
      { value: "Safety", label: "Mechanism Developed" },
      { value: "Diesel Dept", label: "Line Worker Protection" },
    ],
    description:
      "Interned at Maruti Suzuki India — one of India's largest automotive manufacturers. Developed a safety mechanism for line workers at the diesel engine maintenance department, contributing to worker protection at an industrial scale.",

    details: [
      "Designed and developed a safety mechanism to protect line workers during diesel engine maintenance operations.",
      "Worked within a large cross-functional engineering team, gaining exposure to enterprise-grade industrial processes.",
      "Experienced the discipline and precision of one of India's most respected manufacturing organizations.",
    ],
  },
];

const projects = [
  {
    name: "Nidanam",
    description:
      "A health diagnosis platform helping users identify symptoms and get preliminary insights.",
    impact: "Helping people understand their health better.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "",
    live: "https://nidanam.netlify.app/",
    image: "/projects/nidanam.png",
  },
  {
    name: "Instagram Clone",
    description:
      "A full-featured Instagram clone with real-time feed , auth, and social interactions.",
    impact: null,
    stack: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/vancityraichandani/insta-reels",
    live: "https://insta-reels-somesh.netlify.app/login",
    image: "/projects/insta.png",
  },
  {
    name: "MS Excel Clone",
    description:
      "A browser-based spreadsheet application with formula support and cell operations using DOM manipulation with vanilla JS and jQuery.",
    impact: null,
    stack: ["JavaScript", "HTML", "CSS", "jQuery"],
    github: "https://github.com/vancityraichandani/Excel-Clone",
    live: "https://vancityraichandani.github.io/Excel-Clone",
    image: "/projects/excel.png",
  },
  {
    name: "DBZ Birthday Game",
    description:
      "A Dragon Ball Z themed interactive birthday game with animations and mini-games.",
    impact: null,
    stack: ["React", "Framer Motion", "MUI", "styled-components"],
    github: "",
    live: "https://dbz-bday.netlify.app/",
    image: "/projects/dbz.png",
  },
  {
    name: "IPL Scraper",
    description:
      "A web scraper that pulls multi-year IPL match data, scores, and player statistics and gets them to you in a neat excel file.",
    impact: null,
    stack: ["Node.js", "Puppeteer"],
    github: "https://github.com/vancityraichandani/ESPN-Cricinfo-IPL-Scraper",
    live: null,
    video: "https://drive.google.com/file/d/1Mq0hQ8cyed8xGdNPhhUmK9PC8X0qtR4N/view?usp=drive_link",
    image: "/projects/ipl.png",
  },
  {
    name: "Office Organizer",
    description:
      "A file and folder organizer tool that automatically sorts files just by a simple and powerful Terminal command. Say goodbye to messy desktops.",
    impact: null,
    stack: ["Node.js", "fs", "path"],
    github: "https://github.com/vancityraichandani/MS-Office-Organizer",
    video: "https://drive.google.com/file/d/1cwMG3diTZm2KjhcGEluhMCSlu2E-EztK/view?usp=drive_link",
    live: null,
    image: "/projects/organizer.png",
  },
  {
    name: "Rakt",
    description:
      "A blood donation platform connecting donors with recipients in real-time.",
    impact: "Connecting donors with those in need.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/vancityraichandani/rakt",
    live: "https://vancityraichandani.github.io/rakt",
    image: "/projects/rakt.png",
  },
  {
    name: "RGB Calculator",
    description:
      "An interactive RGB color calculator and picker with real-time preview.",
    impact: null,
    stack: ["React", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/vancityraichandani/rgbcalc",
    live: "https://rgbcalculator.netlify.app",
    image: "/projects/calc.png",
  },
];

function CompanyModal({ company, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className={`w-full max-w-2xl rounded-3xl border ${company.border} bg-[#0a0a0a] bg-gradient-to-br ${company.color} p-8 max-h-[85vh] overflow-y-auto`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">
                {company.tag}
              </p>
              <h3 className="text-3xl font-bold text-white">{company.name}</h3>
              <p className="text-zinc-400 mt-1">
                {company.role} · {company.location}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-zinc-500 text-sm shrink-0">
                {company.period}
              </span>
              <button
                onClick={onClose}
                className="text-zinc-600 hover:text-white transition text-xl shrink-0"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-300 text-base leading-relaxed mb-8">
            {company.description}
          </p>

          {/* Stats */}
          {company.highlights.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-8">
              {company.highlights.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 rounded-2xl p-4 border border-white/10"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-zinc-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Details */}
          <div className="flex flex-col gap-4">
            {company.details.map((detail, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-2 w-1 h-1 rounded-full bg-zinc-500 shrink-0" />
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProfessionalWork() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <section id="work" className="pb-4 pt-20 px-16">
      {/* Professional Work */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-4"
      >
        Professional Work
      </motion.h2>

      {/* Company Cards - 2 per row */}
      <div className="grid grid-cols-2 gap-4 mb-24">
        {companies.map((company, index) => (
          <motion.div
            key={company.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            onClick={() => setSelectedCompany(company)}
            className={`relative rounded-2xl border ${company.border} bg-gradient-to-br ${company.color} p-6 cursor-pointer hover:border-white/20 hover:scale-[1.02] transition-all duration-300 group`}
          >
            <span className="absolute top-5 right-6 text-6xl font-bold text-white/[0.04] select-none pointer-events-none">
              0{index + 1}
            </span>

            <p className="text-zinc-600 text-xs uppercase tracking-widest mb-3">
              {company.tag}
            </p>
            <h3 className="text-xl font-bold text-white mb-1">
              {company.name}
            </h3>
            <p className="text-zinc-500 text-sm mb-4">
              {company.role} · {company.period}
            </p>

            {company.highlights.length > 0 && (
              <div className="flex gap-3 flex-wrap">
                {company.highlights.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 rounded-xl px-3 py-1.5 border border-white/10"
                  >
                    <span className="text-white font-semibold text-sm">
                      {stat.value}
                    </span>
                    <span className="text-zinc-500 text-xs ml-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <span
              className={`absolute bottom-5 right-6 text-xs ${company.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`}
            >
              View details →
            </span>
          </motion.div>
        ))}
      </div>

      {/* Personal Projects */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-4"
      >
        Personal Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-zinc-500 mb-12"
      >
        Things I built for fun, learning, and solving real problems.
      </motion.p>

      {/* Project Cards - 2 per row */}
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-white/15 hover:bg-white/5 transition-all duration-300 group flex flex-col gap-4"
          >
            {/* Image placeholder */}
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={144}
                className="w-full h-50 object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-46 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                <span className="text-zinc-700 text-sm">No preview</span>
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-white font-semibold text-lg">
                {project.name}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {project.description}
              </p>
              {project.impact && (
                <p className="text-zinc-400 text-xs italic">{project.impact}</p>
              )}
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-zinc-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2 border-t border-white/5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-white transition text-xs flex items-center gap-1"
                >
                  ↗ GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-white transition text-xs flex items-center gap-1"
                >
                  ↗ Live
                </a>
              )}
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-white transition text-xs flex items-center gap-1"
                >
                  ↗ Video
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Company Modal */}
      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </section>
  );
}

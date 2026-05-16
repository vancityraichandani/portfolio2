"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaShieldAlt,
  FaExchangeAlt,
  FaChartBar,
  FaUniversalAccess,
  FaTerminal,
  FaUsers,
  FaPuzzlePiece,
  FaGlobe,
} from "react-icons/fa";
import { BsClaude } from "react-icons/bs";
import { HiLightningBolt } from "react-icons/hi";
import { AiFillOpenAI } from "react-icons/ai";

import { MdAccessibility } from "react-icons/md";
import { TbBrandFramerMotion } from "react-icons/tb";
import GridBackground from "./GridBackground";
import { SiSnyk } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa";

const groups = [
  {
    label: null,
    tier: "core",
    items: [
      { name: "React", icon: "devicon", cls: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon", cls: "devicon-nextjs-plain" },
      {
        name: "JavaScript",
        icon: "devicon",
        cls: "devicon-javascript-plain colored",
      },
      { name: "HTML", icon: "devicon", cls: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon", cls: "devicon-css3-plain colored" },
    ],
  },
  {
    label: "Styling",
    tier: "mid",
    items: [
      {
        name: "Tailwind",
        icon: "devicon",
        cls: "devicon-tailwindcss-plain colored",
      },
      {
        name: "Material UI",
        icon: "devicon",
        cls: "devicon-materialui-plain colored",
      },
      {
        name: "Bootstrap",
        icon: "devicon",
        cls: "devicon-bootstrap-plain colored",
      },
      {
        name: "Styled Components",
        icon: "devicon",
        cls: "devicon-css3-plain colored",
      },
    ],
  },
  {
    label: "State & Architecture",
    tier: "mid",
    items: [
      { name: "Redux", icon: "devicon", cls: "devicon-redux-original colored" },
      {
        name: "Micro-frontends",
        icon: "react",
        Component: () => (
          <FaPuzzlePiece style={{ fontSize: 36, color: "#446677" }} />
        ),
      },
      {
        name: "Webpack",
        icon: "devicon",
        cls: "devicon-webpack-plain colored",
      },
      { name: "Node.js", icon: "devicon", cls: "devicon-nodejs-plain colored" },
    ],
  },
  {
    label: "AI Tools",
    tier: "mid",
    items: [
      {
        name: "Claude Code",
        icon: "react",
        Component: () => <BsClaude style={{ fill: "#d97757", fontSize: 36 }} />,
      },
      {
        name: "Claude Cowork",
        icon: "react",
        Component: () => (
          <HiLightningBolt style={{ fill: "#d97757", fontSize: 36 }} />
        ),
      },
      {
        name: "ChatGPT",
        icon: "react",
        Component: () => (
          <AiFillOpenAI style={{ fill: "#70a597", fontSize: 36 }} />
        ),
      },
    ],
  },
  {
    label: "a11y & i18n",
    tier: "small",
    items: [
      {
        name: "WCAG",
        icon: "react",
        Component: () => (
          <FaUniversalAccess style={{ fontSize: 30, color: "#225577" }} />
        ),
      },
      {
        name: "Internationalization",
        icon: "react",
        Component: () => <FaGlobe style={{ fontSize: 30, color: "#165432" }} />,
      },
      {
        name: "NVDA",
        icon: "react",
        Component: () => (
          <MdAccessibility style={{ fontSize: 30, color: "#674322" }} />
        ),
      },
      { name: "VoiceOver", icon: "devicon", cls: "devicon-apple-original" },
    ],
  },
  {
    label: "Tools",
    tier: "small",
    items: [
      { name: "Git", icon: "devicon", cls: "devicon-git-plain colored" },
      { name: "GitLab", icon: "devicon", cls: "devicon-gitlab-plain colored" },
      { name: "Jira", icon: "devicon", cls: "devicon-jira-plain colored" },
      {
        name: "npm",
        icon: "devicon",
        cls: "devicon-npm-original-wordmark colored",
      },
      {
        name: "Snyk",
        icon: "react",
        Component: () => <SiSnyk style={{ fontSize: 36, color: "#505076" }} />,
      },
      {
        name: "Requestly",
        icon: "react",
        Component: () => (
          <FaExchangeAlt style={{ fontSize: 36, color: "#225577" }} />
        ),
      },
      {
        name: "Splunk",
        icon: "react",
        Component: () => (
          <FaChevronRight style={{ fontSize: 36, color: "#229933" }} />
        ),
      },
    ],
  },
  {
    label: "Libraries",
    tier: "small",
    items: [
      {
        name: "Lodash",
        icon: "devicon",
        cls: "devicon-javascript-plain colored",
      },
      { name: "Framer Motion", icon: "react", Component: TbBrandFramerMotion },
      { name: "Axios", icon: "devicon", cls: "devicon-axios-plain colored" },
    ],
  },
];

const tierSize = {
  core: { icon: "text-6xl", text: "text-sm", padding: "p-6" },
  mid: { icon: "text-4xl", text: "text-xs", padding: "p-4" },
  small: { icon: "text-3xl", text: "text-xs", padding: "p-3" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function IconRenderer({ item, sizeClass }) {
  if (item.icon === "devicon") {
    return <i className={`${item.cls} ${sizeClass}`} />;
  }
  const Icon = item.Component;
  return <Icon className={`${sizeClass} text-zinc-400`} />;
}

export default function Stack() {
  return (
    <section id="skills" className="pb-4 pt-20 relative min-h-screen  overflow-hidden stack-wrapper">
      <div>
        <GridBackground />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "linear-gradient(to top, transparent 40%, #0a0a0a 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "linear-gradient(to bottom, transparent 40%, #0a0a0a 100%)",
        }}
      />

      <div
        style={{ position: "relative", zIndex: 1 }}
        className="relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-16"
        >
          Tech Stack
        </motion.h2>

        <div className="flex flex-col gap-16 groups-wrapper">
          {groups.map((group) => {
            const size = tierSize[group.tier];
            return (
              <div key={group.label || "core"}>
                {group.label && (
                  <p
                    style={{ fontWeight: "bold", fontSize: 16 , color:'#454545'}}
                    className=" text-xs uppercase tracking-widest mb-6"
                  >
                    {group.label}
                  </p>
                )}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-4"
                >
                  {group.items.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      whileHover={{ y: -4, backgroundColor: '#fefefe22', transition: { duration: 0.2 } }}
                      className={`flex flex-col items-center gap-2 ${size.padding} rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors cursor-default`}
                    >
                      <IconRenderer item={item} sizeClass={size.icon} />
                      <span
                        className={`${size.text} text-zinc-400 text-center`}
                      >
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

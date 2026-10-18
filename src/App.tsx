
import { motion } from "motion/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import EngineeringOrb from "./components/EngineeringOrb";



const socials = [
  { label: "GitHub", href: "https://github.com/Vaibhav140705" },
  { label: "LinkedIn", href: "https://in.linkedin.com/in/vaibhav-dikshit-a225722b4" },
  { label: "Instagram", href: "https://www.instagram.com/vaib_1407/" },
  { label: "X / Twitter", href: "https://x.com/vaibhavdxt14" },
  { label: "Chess.com", href: "https://www.chess.com/member/dxt_vaib14" },
];

// const focusAreas = [
//   { number: "01", title: "Software & AI", detail: "Applications · APIs · LLMs" },
//   { number: "02", title: "Embedded Systems", detail: "Microcontrollers · IoT" },
//   { number: "03", title: "VLSI & Digital Design", detail: "RTL · Verification · FPGA" },
// ];

function Icon({
  name,
  size = "md",
  color = "currentColor",
}: {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
}) {
  const iconSize =
    size === "xl" ? 24 : size === "lg" ? 20 : size === "sm" ? 16 : 18;
  const paths: Record<string, string> = {
    "code-2": "M8 9l-3 3 3 3m8-6l3 3-3 3m-5 3l2-12",
    "circuit-board": "M4 4h16v16H4zM8 8h8v8H8zM4 9H2m2 3H2m18-3h2m-2 3h2M9 4V2m3 2V2m3 2V2M9 20v2m3-2v2m3-2v2",
    microchip: "M9 9h6v6H9zM9 4v2m3-2v2m3-2v2M9 18v2m3-2v2m3-2v2M4 9h2M4 12h2m-2 3h2m12-6h2m-2 3h2m-2 3h2",
    cpu: "M9 9h6v6H9zM4 9h2m-2 3h2m-2 3h2m12-6h2m-2 3h2m-2 3h2M9 4v2m3-2v2m3-2v2M9 18v2m3-2v2m3-2v2",
  };

  return (
    <svg
      aria-hidden="true"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name] ?? paths.cpu} />
    </svg>
  );
}


function ProjectVisual({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  const isVlsi = category === "VLSI";
  const isEmbedded = category === "Embedded Systems";

  const accent = isVlsi
    ? "#a78bfa"
    : isEmbedded
      ? "#34d399"
      : "#43e8ff";

  const isExpense = title === "ExpensePilot";
  const isMcq = title === "MCQ Generator using LLMs";
  const isAlu = title === "4-bit ALU";
  const isAxi = title.includes("AXI4-Lite");

  return (
    <div
      className="group/visual relative mb-6 flex h-44 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#080d17]"
      style={{ "--project-accent": accent } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div
        className="pointer-events-none absolute h-32 w-32 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: accent }}
      />

      {isVlsi ? (
        <svg viewBox="0 0 320 150" className="relative h-full w-full p-3">
          {[0, 1, 2, 3].map((line) => (
            <motion.path
              key={line}
              d={`M 12 ${30 + line * 28} H ${75 + line * 10} V 75 H 125`}
              fill="none"
              stroke={accent}
              strokeWidth="1.5"
              strokeOpacity=".65"
              initial={{ pathLength: 0.2, opacity: 0.3 }}
              animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 3,
                delay: line * 0.25,
                repeat: Infinity,
              }}
            />
          ))}

          <rect
            x="125"
            y="38"
            width="78"
            height="74"
            rx="8"
            fill="#111827"
            stroke={accent}
            strokeWidth="1.5"
          />

          {isAlu ? (
            <>
              <text x="164" y="66" fill={accent} fontSize="12" textAnchor="middle">ALU</text>
              <text x="164" y="83" fill="#d1d5db" fontSize="9" textAnchor="middle">4-BIT</text>
              <text x="164" y="98" fill="#9ca3af" fontSize="8" textAnchor="middle">A + B / LOGIC</text>
            </>
          ) : (
            <>
              <text x="164" y="65" fill={accent} fontSize="10" textAnchor="middle">
                {isAxi ? "AXI4-LITE" : "RTL CORE"}
              </text>
              <text x="164" y="82" fill="#d1d5db" fontSize="9" textAnchor="middle">
                {isAxi ? "UVM / TB" : "LOGIC"}
              </text>
              <text x="164" y="98" fill="#9ca3af" fontSize="8" textAnchor="middle">
                {isAxi ? "VERIFY" : "DESIGN"}
              </text>
            </>
          )}

          {[0, 1, 2, 3].map((line) => (
            <motion.path
              key={`out-${line}`}
              d={`M 203 75 H ${245 + line * 12} V ${30 + line * 28} H 308`}
              fill="none"
              stroke={accent}
              strokeWidth="1.5"
              strokeOpacity=".7"
              initial={{ pathLength: 0.2 }}
              animate={{ pathLength: [0.2, 1, 0.2] }}
              transition={{ duration: 3, delay: line * 0.2, repeat: Infinity }}
            />
          ))}
        </svg>
      ) : isEmbedded ? (
        <div className="relative flex items-center gap-5">
          <motion.div
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex h-20 w-24 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-300/[0.08] shadow-[0_0_35px_rgba(52,211,153,0.12)]"
          >
            <svg viewBox="0 0 80 60" className="w-20">
              <rect x="16" y="12" width="48" height="36" rx="4" fill="#0b1720" stroke={accent} />
              <rect x="27" y="22" width="26" height="16" rx="2" fill={accent} fillOpacity=".2" stroke={accent} />
              {Array.from({ length: 6 }).map((_, i) => (
                <g key={i} stroke={accent} strokeWidth="1.5">
                  <path d={`M ${21 + i * 7} 12 V 5`} />
                  <path d={`M ${21 + i * 7} 48 V 55`} />
                </g>
              ))}
            </svg>
          </motion.div>

          <div className="space-y-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.25, 1, 0.25], scaleX: [0.7, 1, 0.7] }}
                transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }}
                className="h-1.5 rounded-full"
                style={{
                  width: `${34 + i * 13}px`,
                  backgroundColor: accent,
                }}
              />
            ))}
            <p className="font-mono text-[9px] tracking-widest text-emerald-300/80">
              SIGNAL / ACTIVE
            </p>
          </div>
        </div>
      ) : (
        <div className="relative flex w-full items-center justify-center gap-4 px-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.06]">
            <svg viewBox="0 0 64 64" className="w-14">
              <rect x="9" y="8" width="46" height="48" rx="7" fill="#0d1827" stroke={accent} />
              {isExpense ? (
                <>
                  <path d="M18 42 L27 32 L34 37 L47 20" fill="none" stroke={accent} strokeWidth="2.5" />
                  <path d="M18 47 H47" stroke="#64748b" />
                  <circle cx="47" cy="20" r="3" fill={accent} />
                </>
              ) : isMcq ? (
                <>
                  {[0, 1, 2].map((i) => (
                    <g key={i}>
                      <circle cx="20" cy={21 + i * 12} r="3" fill={accent} fillOpacity=".8" />
                      <path d={`M 28 ${21 + i * 12} H 46`} stroke="#94a3b8" strokeWidth="2" />
                    </g>
                  ))}
                </>
              ) : (
                <>
                  <rect x="17" y="17" width="30" height="5" rx="2" fill={accent} fillOpacity=".8" />
                  {[0, 1, 2].map((i) => (
                    <path key={i} d={`M 18 ${30 + i * 8} H ${37 + (i % 2) * 8}`} stroke="#94a3b8" strokeWidth="2" />
                  ))}
                </>
              )}
            </svg>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-[10px] tracking-[0.18em]" style={{ color: accent }}>
              {isExpense ? "FINANCIAL INTELLIGENCE" : isMcq ? "LLM / GENERATION" : "APPLICATION / SYSTEM"}
            </p>
            <div className="flex items-end gap-1">
              {[24, 38, 28, 48, 34, 56, 42].map((height, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [height * 0.55, height, height * 0.75] }}
                  transition={{ duration: 1.5, delay: i * 0.08, repeat: Infinity }}
                  className="w-2 rounded-t-sm"
                  style={{ backgroundColor: accent }}
                />
              ))}
            </div>
            <p className="font-mono text-[9px] text-gray-500">SYSTEM / VISUALIZED</p>
          </div>
        </div>
      )}

      <div className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500">
        Project / {isVlsi ? "Digital" : isEmbedded ? "Hardware" : "Software"}
      </div>

      <div
        className="absolute right-3 top-3 h-2 w-2 rounded-full"
        style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}` }}
      />
    </div>
  );
}



type Project = {
  title: string;
  category: "Software & AI" | "Embedded Systems" | "VLSI";
  description: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
};


const projects: Project[] = [
  {
    title: "ExpensePilot",
    category: "Software & AI",
    description:
      "An expense intelligence platform combining receipt OCR, AI-powered expense categorization, authentication, and analytics dashboards.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "LLMs"],
    featured: true,
    github: "https://github.com/Vaibhav140705/Expense-Pliot",
  },
  {
    title: "MCQ Generator using LLMs",
    category: "Software & AI",
    description:
      "A tool that transforms PDF and text content into structured multiple-choice assessments using language models.",
    technologies: ["Python", "LangChain", "Groq API", "Streamlit"],
    github: "https://github.com/Vaibhav140705/MCQ-Generator",
  },
  {
    title: "Task Management Web App",
    category: "Software & AI",
    description:
      "A task management application with CRUD operations, a Python web backend, and persistent SQLite storage.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    github: "https://github.com/Vaibhav140705/Task-Manager",
  },
  {
    title: "RFID-Based University ID System",
    category: "Embedded Systems",
    description:
      "An RFID-based system for university workflows, with student records, attendance tracking, and database-backed management.",
    technologies: ["ESP32", "RFID", "Python", "SQLite"],
    featured: true,
  },
  {
    title: "IoT Vehicle Health Monitoring",
    category: "Embedded Systems",
    description:
      "An embedded monitoring project that reads vehicle-related sensor data, checks configurable thresholds, and transmits telemetry using MQTT.",
    technologies: ["ESP32", "Embedded C", "MQTT", "Proteus"],
    github: "https://github.com/Vaibhav140705/Vehicle-Health-Monitoring-System",
  },
  {
    title: "Bluetooth Smart Automation",
    category: "Embedded Systems",
    description:
      "A microcontroller-based automation project using Bluetooth commands to control connected peripherals.",
    technologies: ["ESP32", "Embedded C", "UART", "Bluetooth"],
    github: "https://github.com/Vaibhav140705/HelmetSoftware",
  },
  {
    title: "4-bit ALU",
    category: "VLSI",
    description:
      "A digital design project exploring arithmetic and logic operations in a four-bit arithmetic logic unit.",
    technologies: ["Digital Logic", "ALU Design", "VLSI Fundamentals"],
    featured: true,
  },
  {
    title: "AXI4-Lite Slave IP & UVM Verification",
    category: "VLSI",
    description:
      "An RTL design and verification project involving memory-mapped register access, a UVM testbench, assertions, and functional coverage.",
    technologies: ["SystemVerilog", "UVM", "AXI4-Lite", "SVA"],
    github: "https://github.com/Vaibhav140705/axi4-lite-uvm",
  },
];



const skillGroups = [
  {
    title: "Software & AI",
    number: "01",
    description: "Applications, APIs, data, and intelligent systems.",
    skills: [
      "Python", "Java", "C", "JavaScript", "React", "Flask",
      "FastAPI", "SQL", "PostgreSQL", "SQLite", "LangChain", "Streamlit",
    ],
  },
  {
    title: "Embedded Systems",
    number: "02",
    description: "Microcontrollers, firmware, and device communication.",
    skills: [
      "Embedded C", "ESP32", "Arduino", "UART", "SPI", "I²C",
      "CAN", "MQTT", "Sensors", "Proteus", "Keil uVision",
    ],
  },
  {
    title: "VLSI & Digital Design",
    number: "03",
    description: "RTL design, verification, and programmable logic.",
    skills: [
      "Verilog", "SystemVerilog", "UVM", "SVA", "RTL Design",
      "FPGA", "AXI4-Lite", "Quartus Prime", "GTKWave",
    ],
  },
  {
    title: "Core CS & Developer Tools",
    number: "04",
    description: "Fundamentals and tools for building reliable software.",
    skills: [
      "OOP", "DBMS", "Operating Systems", "Computer Networks",
      "Git", "GitHub", "VS Code",
    ],
  },
];


function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Software & AI",
    "Embedded Systems",
    "VLSI",
  ];

  const [contactStatus, setContactStatus] = useState<
  "idle" | "sending" | "success" | "error"
  >("idle");

  const handleContactSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  // Simple honeypot to discourage automated spam.
  if (formData.get("company_website")) {
    return;
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    setContactStatus("error");
    return;
  }

  setContactStatus("sending");

  try {
    await emailjs.sendForm(serviceId, templateId, form, {
      publicKey,
      blockHeadless: true,
      limitRate: {
        id: "portfolio-contact",
        throttle: 10000,
      },
    });

    form.reset();
    setContactStatus("success");
  } catch (error) {
  console.error("EmailJS submission failed:", error);

  if (error && typeof error === "object" && "text" in error) {
    console.error("EmailJS details:", error.text);
  }

  setContactStatus("error");
}
};


  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );
      
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080a10] text-gray-100">
      <div className="grid-background absolute inset-0 opacity-70" />
      <div className="glow pointer-events-none absolute -top-64 left-1/2 h-[650px] w-[900px] -translate-x-1/2" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <a href="#home" className="text-lg font-bold tracking-tight">
          VD<span className="text-violet-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <a className="transition hover:text-white" href="#about">About</a>
          <a className="transition hover:text-white" href="#focus">What I Do</a>
          <a className="transition hover:text-white" href="#contact">Connect</a>
          <a className="transition hover:text-white" href="#resumes">Resumes</a>
          <a className="transition hover:text-white" href="#skills">Skills</a>
        </nav>

        <a
          href="https://github.com/Vaibhav140705"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-violet-400 hover:bg-white/5"
        >
          GitHub ↗
        </a>

        

        
      </header>

      <section id="home"
        className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-6 py-20 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl lg:max-w-[58%]"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            Electronics & Communication Engineering
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
            Engineer · Builder · Problem Solver
          </p>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
            Hi, I’m
            <br />
            <span className="gradient-text">Vaibhav Dikshit.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build across software, embedded systems, and digital hardware —
            turning ideas into practical projects with code, circuits, and AI.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#focus"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-violet-200"
            >
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a
              href="#connect"
              className="rounded-full border border-white/15 px-6 py-3 font-medium transition hover:border-violet-400 hover:bg-white/5"
            >
              Let’s connect
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-violet-300"
            >
              {social.label} ↗
            </a>
          ))}
        </motion.div>

        

<motion.div
  initial={{ opacity: 0, scale: 0.92, x: 24 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.25 }}
  className="pointer-events-auto relative mx-auto mt-12 w-full max-w-[390px] lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[46%] lg:-translate-y-1/2 xl:right-4"
>
  
<div className="relative mx-auto w-full max-w-[390px]">
  {/* Animated 3D background */}
  <div className="absolute inset-[-32%] z-0">
    <EngineeringOrb />
  </div>

  {/* Ambient lighting */}
  <div className="pointer-events-none absolute inset-0 z-0 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
  <div className="pointer-events-none absolute inset-0 z-0 rounded-[2rem] bg-violet-500/10 blur-3xl" />

  
{/* Technical HUD overlay */}
<div className="pointer-events-none absolute inset-0 z-[5] font-mono">
  {/* Top-left system readout */}
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1, duration: 0.7 }}
    className="absolute left-0 top-0 rounded-lg border border-cyan-300/15 bg-[#080b14]/75 px-3 py-2 backdrop-blur-md"
  >
    <p className="text-[9px] tracking-[0.2em] text-cyan-300">
      SYS / 001
    </p>
    <p className="mt-1 text-[10px] text-slate-400">
      ECE_ENGINEERING
    </p>
  </motion.div>

  {/* Top-right coordinates */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="absolute right-0 top-[8%] text-right"
  >
    <p className="text-[9px] tracking-widest text-violet-300">
      ORBITAL / CORE
    </p>
    <p className="mt-1 text-[10px] text-slate-500">
      X 00.84 · Y 01.20
    </p>
  </motion.div>

  {/* Bottom telemetry line */}
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.4, duration: 0.7 }}
    className="absolute bottom-0 left-[5%] right-[5%] flex items-center justify-between border-t border-white/10 pt-3"
  >
    <span className="text-[9px] tracking-widest text-slate-500">
      VAIBHAV.D / PORTFOLIO
    </span>
    <span className="flex items-center gap-2 text-[9px] tracking-widest text-cyan-300">
      <span className="status-pulse h-1.5 w-1.5 rounded-full bg-cyan-300" />
      SYSTEM ONLINE
    </span>
  </motion.div>
</div>


  {/* Foreground profile panel */}
  <motion.div
    whileHover={{ y: -5, scale: 1.015 }}
    transition={{ type: "spring", stiffness: 220, damping: 20 }}
    className="relative z-10 mx-auto mt-8 w-[72%] max-w-[270px] overflow-hidden rounded-[2rem] border border-white/20 bg-[#0b1220]/55 p-2 shadow-[0_0_60px_rgba(67,232,255,0.12)] backdrop-blur-md"
  >
    <div className="relative overflow-hidden rounded-[1.5rem]">
      <img
        src="/profile.jpg"
        alt="Vaibhav Dikshit"
        loading="eager"
        className="h-[330px] w-full object-cover object-center sm:h-[380px]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-transparent to-transparent" />

      <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md">
        <span className="status-pulse h-1.5 w-1.5 rounded-full bg-cyan-300" />
        <span className="font-mono text-[9px] tracking-widest text-white">
          ENGINEER / ECE
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-lg font-semibold tracking-tight text-white">
          Vaibhav Dikshit
        </p>
        <p className="mt-1 text-xs text-slate-300">
          Software · Embedded · VLSI
        </p>
        <div className="mt-3 h-px w-full bg-gradient-to-r from-cyan-300 via-violet-400/60 to-transparent" />
      </div>
    </div>
  </motion.div>

  {/* Floating technical labels */}
  <motion.div
    animate={{ y: [0, -7, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -left-3 top-[18%] z-20 rounded-xl border border-cyan-300/20 bg-[#0b1220]/90 px-3 py-2 shadow-lg shadow-cyan-500/10 sm:-left-8"
  >
    <p className="font-mono text-[9px] tracking-widest text-cyan-300">
      CORE.SYSTEM
    </p>
    <p className="mt-1 text-[11px] text-slate-300">
      Hardware × Software
    </p>
  </motion.div>

  <motion.div
    animate={{ y: [0, 7, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -right-2 bottom-[18%] z-20 rounded-xl border border-violet-300/20 bg-[#0b1220]/90 px-3 py-2 shadow-lg shadow-violet-500/10 sm:-right-8"
  >
    <p className="font-mono text-[9px] tracking-widest text-violet-300">
      STATUS
    </p>
    <p className="mt-1 flex items-center gap-2 text-[11px] text-slate-300">
      <span className="status-pulse h-1.5 w-1.5 rounded-full bg-cyan-300" />
      Building what&apos;s next
    </p>
  </motion.div>


</div>

</motion.div>


      </section>

      
<section id="focus" className="relative z-10 overflow-hidden border-t border-white/10">
  <div className="pointer-events-none absolute left-1/3 top-0 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
    >
      <div>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
          <span className="h-px w-8 bg-cyan-300" />
          02 / What I do
        </p>

        <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Where ideas meet
          <br />
          <span className="gradient-text">engineering.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
          I explore the intersection of software, intelligent applications,
          and electronics — building projects that connect ideas to practical
          solutions.
        </p>
      </div>

      <p className="font-mono text-xs leading-6 text-gray-500 md:text-right">
        THREE DOMAINS
        <br />
        <span className="text-cyan-300/80">ONE ENGINEERING MINDSET</span>
      </p>
    </motion.div>

    <div className="grid gap-5 lg:grid-cols-3">
      {[
        {
          number: "01",
          title: "Software & AI",
          subtitle: "APPLICATIONS / INTELLIGENCE",
          description:
            "Developing useful applications, backend services, and AI-powered tools that transform ideas and data into practical experiences.",
          tags: ["Python", "React", "FastAPI", "LLMs"],
          accent: "#43e8ff",
          type: "software",
        },
        {
          number: "02",
          title: "Embedded Systems",
          subtitle: "HARDWARE / CONNECTIVITY",
          description:
            "Connecting microcontrollers, sensors, and communication interfaces to build responsive systems that interact with the physical world.",
          tags: ["Arduino", "ESP32", "Sensors", "IoT"],
          accent: "#34d399",
          type: "embedded",
        },
        {
          number: "03",
          title: "VLSI & Digital Design",
          subtitle: "LOGIC / RTL / VERIFICATION",
          description:
            "Exploring digital circuits, hardware description languages, FPGA design workflows, and the fundamentals of verification.",
          tags: ["Verilog", "RTL", "FPGA", "Digital Logic"],
          accent: "#a78bfa",
          type: "vlsi",
        },
      ].map((item, index) => (
        <motion.article
          key={item.number}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: index * 0.12 }}
          whileHover={{ y: -6 }}
          className="lab-panel group relative overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-white/20"
        >
          <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#080d17]">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div
              className="absolute h-32 w-32 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: item.accent }}
            />

            {item.type === "software" ? (
              <div className="relative w-[72%]">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="rounded-xl border border-cyan-300/30 bg-[#0b1421]/95 p-3 shadow-[0_0_30px_rgba(67,232,255,0.08)]"
                >
                  <div className="mb-3 flex items-center gap-1.5 border-b border-white/10 pb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/70" />
                    <span className="ml-auto font-mono text-[8px] text-gray-500">APP / ENGINE</span>
                  </div>
                  <div className="space-y-2">
                    {[["w-[65%]", "0.5"], ["w-[85%]", "0.25"], ["w-[48%]", "0.7"]].map(([width, opacity], i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [Number(opacity), 1, Number(opacity)] }}
                        transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
                        className={`h-1.5 rounded-full bg-cyan-300 ${width}`}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-md bg-cyan-300/[0.07] px-2 py-2">
                    <span className="font-mono text-[9px] text-cyan-200">DATA → INSIGHT</span>
                    <span className="text-xs text-cyan-300">↗</span>
                  </div>
                </motion.div>
              </div>
            ) : item.type === "embedded" ? (
              <div className="relative flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative flex h-24 w-28 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-300/[0.07]"
                >
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-2 w-2 rounded-sm ${i === 4 ? "bg-emerald-300 shadow-[0_0_10px_#34d399]" : "bg-emerald-300/30"}`}
                      />
                    ))}
                  </div>
                  <span className="absolute -bottom-2 rounded bg-[#080d17] px-2 font-mono text-[8px] text-emerald-300">MCU / ESP32</span>
                </motion.div>
                <div className="space-y-3">
                  {[30, 43, 24].map((width, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.75, 1, 0.75] }}
                      transition={{ duration: 1.8, delay: i * 0.25, repeat: Infinity }}
                      className="h-1.5 rounded-full bg-emerald-300"
                      style={{ width }}
                    />
                  ))}
                  <span className="block font-mono text-[8px] tracking-widest text-emerald-300/80">SIGNAL / I/O</span>
                </div>
              </div>
            ) : (
              <svg viewBox="0 0 300 140" className="relative w-[90%]">
                {[0, 1, 2].map((i) => (
                  <motion.path
                    key={`input-${i}`}
                    d={`M 10 ${35 + i * 35} H 75 V 70 H 112`}
                    fill="none"
                    stroke={item.accent}
                    strokeWidth="1.5"
                    initial={{ pathLength: 0.2, opacity: 0.3 }}
                    animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2.8, delay: i * 0.2, repeat: Infinity }}
                  />
                ))}
                <rect x="112" y="42" width="76" height="56" rx="7" fill="#111827" stroke={item.accent} />
                <text x="150" y="66" fill={item.accent} fontSize="12" textAnchor="middle">RTL</text>
                <text x="150" y="82" fill="#d1d5db" fontSize="9" textAnchor="middle">LOGIC CORE</text>
                {[0, 1, 2].map((i) => (
                  <motion.path
                    key={`output-${i}`}
                    d={`M 188 70 H 220 V ${35 + i * 35} H 290`}
                    fill="none"
                    stroke={item.accent}
                    strokeWidth="1.5"
                    initial={{ pathLength: 0.2, opacity: 0.3 }}
                    animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2.8, delay: i * 0.2 + 0.3, repeat: Infinity }}
                  />
                ))}
              </svg>
            )}

            <span className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.18em] text-gray-500">
              DOMAIN / {item.number}
            </span>
            <span
              className="absolute right-4 top-4 h-2 w-2 rounded-full"
              style={{ backgroundColor: item.accent, boxShadow: `0 0 12px ${item.accent}` }}
            />
          </div>

          <div className="p-6 sm:p-7">
            <p
              className="font-mono text-[9px] tracking-[0.18em]"
              style={{ color: item.accent }}
            >
              {item.subtitle}
            </p>

            <h3 className="mt-3 text-xl font-medium text-white">
              {item.title}
            </h3>

            <p className="mt-3 min-h-[96px] text-sm leading-7 text-gray-400">
              {item.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[10px] text-gray-400 transition-colors group-hover:border-white/20 group-hover:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-gray-600">
                Engineering / Focus
              </span>
              <span
                className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: item.accent }}
              >
                ↗
              </span>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>


      
<section id="about" className="relative z-10 overflow-hidden border-t border-white/10">
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />
  <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-violet-300">
          <span className="h-px w-8 bg-violet-400" />
          01 / About me
        </p>
        <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Curious by nature.
          <br />
          <span className="gradient-text">Technical by choice.</span>
        </h2>
      </div>

      <div className="font-mono text-xs leading-6 text-gray-500 md:text-right">
        <p>PROFILE / VAIBHAV.D</p>
        <p className="text-cyan-300/80">STATUS: ALWAYS LEARNING</p>
      </div>
    </motion.div>

    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="lab-panel lab-border relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-9"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/[0.07] blur-3xl" />

        <div className="relative">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08]">
              <Icon name="cpu" size="xl" color="#43e8ff" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-100">Engineer in progress</p>
              <p className="font-mono text-xs text-gray-500">ECE / CLASS OF 2027</p>
            </div>
          </div>

          <p className="max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
            I'm an Electronics and Communication Engineering student at VIT
            Bhopal University, interested in building technology across
            software, AI, embedded systems, and digital hardware.
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
            I enjoy exploring how things work beneath the surface — connecting
            code, circuits, and intelligent systems to turn ideas into
            practical projects. I'm always looking to learn, experiment, and
            build something useful.
          </p>
        </div>

        <div className="relative mt-10 grid grid-cols-2 gap-3">
          {/* <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
              Academic CGPA
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
              9.55<span className="text-lg text-cyan-300">/10</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">B.Tech · ECE</p>
          </div> */}

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
              Core mindset
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Build<span className="text-cyan-300">.</span> Learn<span className="text-violet-300">.</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">Improve every iteration</p>
          </div>
        </div>

        <div className="relative mt-6 flex items-center gap-2 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-gray-500">
          <span className="status-pulse h-2 w-2 rounded-full bg-emerald-400" />
          Open to learning & engineering opportunities
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {[
          {
            number: "01",
            icon: "code-2",
            title: "Software & AI",
            description:
              "Building Python applications, web platforms, APIs, and LLM-powered tools.",
            tags: ["Python", "React", "FastAPI", "LLMs", "JavaScript", "SQL", "Java"],
            color: "text-cyan-300",
            borderColor: "group-hover:border-cyan-300/30",
          },
          {
            number: "02",
            icon: "circuit-board",
            title: "Embedded Systems",
            description:
              "Connecting microcontrollers, sensors, and communication interfaces to real-world applications.",
            tags: ["Arduino", "ESP32", "Sensors", "IoT"],
            color: "text-violet-300",
            borderColor: "group-hover:border-violet-300/30",
          },
          {
            number: "03",
            icon: "microchip",
            title: "VLSI & Digital Design",
            description:
              "Exploring digital logic, RTL design, FPGA workflows, and verification concepts.",
            tags: ["Verilog", "RTL", "FPGA", "Verification"],
            color: "text-sky-300",
            borderColor: "group-hover:border-sky-300/30",
          },
        ].map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className={`lab-panel group rounded-2xl border border-white/10 p-5 transition duration-300 hover:-translate-y-1 ${item.borderColor} sm:p-6`}
          >
            <div className="flex items-start gap-4">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] ${item.color}`}>
                <Icon name={item.icon} size="xl" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="text-base font-medium text-white">{item.title}</h3>
                  <span className="font-mono text-xs text-gray-600">{item.number}</span>
                </div>

                <p className="text-sm leading-6 text-gray-400">{item.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


      
<section id="projects" className="relative z-10 border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-violet-300">
      Selected work
    </p>

    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-3xl font-medium sm:text-5xl">
          Projects & experiments
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-gray-400">
          A collection of things I have built across software, AI,
          embedded systems, and digital design.
        </p>
      </div>

      <span className="text-sm text-gray-500">
        {filteredProjects.length} projects
      </span>
    </div>

    <div className="mt-10 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setActiveCategory(category)}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            activeCategory === category
              ? "border-violet-400 bg-violet-500/15 text-white"
              : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>

    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {filteredProjects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: index * 0.04 }}
          className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.045]"
        >
          <ProjectVisual title={project.title} category={project.category} />
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
              {project.category}
            </span>

            {project.featured && (
              <span className="text-xs text-gray-500">Featured</span>
            )}
          </div>

          <h3 className="mt-6 text-xl font-medium">
            {project.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-white/[0.05] px-2.5 py-1 text-xs text-gray-400"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-sm text-gray-500">
            {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-cyan-300"
  >
    View Repository ↗
  </a>
)}
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>



<section id="skills" className="relative z-10 overflow-hidden border-t border-white/10">
  <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-cyan-400/[0.06] blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
    >
      <div>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-violet-300">
          <span className="h-px w-8 bg-violet-400" />
          03 / Technical toolkit
        </p>

        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          Skills that
          <br />
          <span className="gradient-text">connect the dots.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          A multidisciplinary toolkit spanning software development,
          embedded electronics, AI applications, and digital hardware.
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3 self-start rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 md:self-auto">
        <span className="status-pulse h-2 w-2 rounded-full bg-emerald-400" />
        <div>
          <p className="font-mono text-xs text-gray-200">TOOLKIT.INIT</p>
          <p className="mt-1 font-mono text-[10px] text-gray-500">
            MULTIDISCIPLINARY / ECE
          </p>
        </div>
      </div>
    </motion.div>

    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {skillGroups.map((group, index) => (
        <motion.article
          key={group.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="lab-panel group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 sm:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-30 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-400/[0.05] blur-3xl transition-colors duration-300 group-hover:bg-cyan-300/[0.10]" />

          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] font-mono text-sm text-cyan-200 transition duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/[0.12]">
                  {group.number}
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-100">
                    {group.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-gray-400">
                    {group.description}
                  </p>
                </div>
              </div>

              <span className="hidden font-mono text-[10px] uppercase tracking-widest text-gray-600 sm:block">
                MODULE
              </span>
            </div>

            <div className="my-6 h-px bg-white/[0.07]" />

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.06 + skillIndex * 0.025,
                  }}
                  className="cursor-default rounded-lg border border-white/[0.09] bg-white/[0.025] px-3 py-2 text-sm text-gray-300 transition duration-200 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:text-cyan-100"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-gray-600">
              <span>SKILLSET / {group.number}</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
                EXPLORING & BUILDING
              </span>
            </div>
          </div>
        </motion.article>
      ))}
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600"
    >
      Continuously learning · Experimenting · Engineering
    </motion.p>
  </div>
  </section>




<section id="resumes" className="relative z-10 overflow-hidden border-t border-white/10">
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
    >
      <div>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-violet-300">
          <span className="h-px w-8 bg-violet-400" />
          06 / Career resources
        </p>

        <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          The right resume.
          <br />
          <span className="gradient-text">The right opportunity.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          Choose the version tailored to the technical role you're exploring.
          Each resume highlights a different part of my engineering toolkit.
        </p>
      </div>

      <div className="flex items-center gap-3 self-start rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 md:self-auto">
              <Icon name="files" size="xl" color="#a78bfa" />
        <div>
          <p className="font-mono text-xs text-gray-200">RESUME LIBRARY</p>
          <p className="mt-1 font-mono text-[10px] text-gray-500">PDF / 3 PROFILES</p>
        </div>
      </div>
    </motion.div>

    <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          title: "Software & AI",
          description: "Python, web development, APIs, databases, and AI applications.",
          file: "/software-resume.pdf",
          tag: "Software roles",
          number: "01",
          accent: "#43e8ff",
          icon: "code-2",
          skills: ["Python", "FastAPI", "SQL"],
        },
        {
          title: "Embedded Systems",
          description: "Microcontrollers, embedded programming, IoT, and hardware interfaces.",
          file: "/embedded-resume.pdf",
          tag: "Firmware roles",
          number: "02",
          accent: "#34d399",
          icon: "cpu",
          skills: ["Embedded C", "ESP32", "IoT"],
        },
        {
          title: "VLSI & Verification",
          description: "RTL design, digital logic, FPGA workflows, and verification concepts.",
          file: "/vlsi-resume.pdf",
          tag: "Hardware roles",
          number: "03",
          accent: "#a78bfa",
          icon: "circuit-board",
          skills: ["Verilog", "RTL", "Verification"],
        },
      ].map((resume, index) => (
        <motion.article
          key={resume.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          className="lab-panel group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-7"
        >
          <div
            className="absolute inset-x-0 top-0 h-px opacity-60"
            style={{ backgroundColor: resume.accent }}
          />

          <div className="flex items-start justify-between gap-3">
            <div>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.18em]"
                style={{ color: resume.accent }}
              >
                {resume.tag}
              </span>
              <h3 className="mt-3 text-xl font-medium text-white">
                {resume.title}
              </h3>
            </div>

            <span className="font-mono text-xs text-gray-600">
              {resume.number}
            </span>
          </div>

          <div className="relative my-7 flex h-40 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#080d17]">
            <div
              className="absolute h-28 w-28 rounded-full opacity-15 blur-3xl"
              style={{ backgroundColor: resume.accent }}
            />

            <motion.div
              whileHover={{ y: -4, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative h-[122px] w-[96px] rounded-t-md border border-white/20 bg-[#111a29] p-3 shadow-xl"
            >
              <div
                className="mb-3 h-1 w-8 rounded-full"
                style={{ backgroundColor: resume.accent }}
              />
              <div className="mb-4 h-1 w-full rounded-full bg-white/20" />

              <div className="flex gap-2">
                <div
                  className="h-9 w-1 rounded-full"
                  style={{ backgroundColor: resume.accent }}
                />
                <div className="flex-1 space-y-2 pt-0.5">
                  {[0, 1, 2].map((line) => (
                    <motion.div
                      key={line}
                      animate={{ opacity: [0.35, 0.85, 0.35] }}
                      transition={{
                        duration: 2.5,
                        delay: line * 0.25,
                        repeat: Infinity,
                      }}
                      className="h-1 rounded-full bg-white/25"
                      style={{ width: `${100 - line * 20}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                <div className="h-1 w-full rounded-full bg-white/15" />
                <div className="h-1 w-4/5 rounded-full bg-white/15" />
                <div className="h-1 w-3/5 rounded-full bg-white/15" />
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: resume.accent }}
              />
            </motion.div>

            <div className="absolute bottom-3 right-3 flex items-center gap-2 font-mono text-[9px] tracking-widest text-gray-500">
              <Icon name={resume.icon} size="sm" />
              PDF / PROFILE {resume.number}
            </div>
          </div>

          <p className="min-h-[72px] text-sm leading-7 text-gray-400">
            {resume.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 font-mono text-[10px] text-gray-400"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-3 border-t border-white/[0.08] pt-5">
            <a
              href={resume.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-gray-200 transition hover:border-white/30 hover:bg-white/[0.05]"
            >
              <Icon name="eye" size="sm" />
              View PDF
            </a>

            <a
              href={resume.file}
              download
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm transition hover:bg-white/[0.05]"
              style={{ color: resume.accent }}
            >
              <Icon name="download" size="sm" />
              Download
            </a>
          </div>
        </motion.article>
      ))}
    </div>

    <p className="mt-7 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-gray-600">
      Role-specific profiles / Select the most relevant version
    </p>
  </div>
</section>





<section id="contact"
  className="relative z-10 overflow-hidden border-t border-white/10"
>
  <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-[110px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-500/[0.08] blur-[110px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
        <span className="h-px w-8 bg-cyan-300" />
        07 / Establish connection
      </p>

      <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Have something
        <br />
        <span className="gradient-text">worth building?</span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
        Have an opportunity, a project idea, or a technical question?
        Send me a message. Let's explore what we can create together.
      </p>
    </motion.div>

    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5"
      >
        <div className="lab-panel lab-border rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07]">
              <Icon name="radio-tower" size="xl" color="#43e8ff" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Connection terminal</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                Direct communication
              </p>
            </div>
          </div>

          <div className="my-7 h-px bg-white/10" />

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Preferred channel
          </p>

          <a
            href="mailto:vaib140705@gmail.com"
            className="mt-3 flex items-center gap-3 break-all text-sm text-cyan-300 transition hover:text-cyan-100 sm:text-base"
          >
            <Icon name="mail" size="lg" />
            vaib140705@gmail.com
            <span className="shrink-0">↗</span>
          </a>

          <div className="mt-7 flex items-center gap-3 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.04] p-3">
            <span className="status-pulse h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <div>
              <p className="text-xs text-emerald-300">Open to conversations</p>
              <p className="mt-1 text-[11px] text-gray-500">
                Opportunities · Collaborations · Ideas
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
            Find me online
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://github.com/Vaibhav140705"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <Icon name="github" size="sm" />
              GitHub ↗
            </a>

            <a
              href="https://in.linkedin.com/in/vaibhav-dikshit-a225722b4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-gray-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <Icon name="linkedin" size="sm" />
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="px-1 font-mono text-[10px] leading-6 tracking-wider text-gray-600">
          <p>CHANNEL / EMAIL</p>
          <p>PROTOCOL / DIRECT MESSAGE</p>
          <p>ENDPOINT / VAIBHAV.D</p>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        onSubmit={handleContactSubmit}
        className="lab-panel relative rounded-2xl border border-white/10 p-6 shadow-[0_0_60px_rgba(67,232,255,0.04)] sm:p-8"
      >
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-medium text-white">Send a message</h3>
            <p className="mt-2 text-sm text-gray-500">
              Fill in the details below to reach me.
            </p>
          </div>
          <span className="hidden rounded-lg border border-white/10 px-3 py-2 font-mono text-[10px] text-gray-500 sm:inline">
            FORM / 001
          </span>
        </div>

        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label>
            Leave this field empty
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm text-gray-300"
            >
              Your name
            </label>
            <input
              id="contact-name"
              name="user_name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/10 bg-[#080d17]/80 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm text-gray-300"
            >
              Your email
            </label>
            <input
              id="contact-email"
              name="user_email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="mail@example.com"
              className="w-full rounded-xl border border-white/10 bg-[#080d17]/80 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10"
            />
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="contact-subject"
            className="mb-2 block text-sm text-gray-300"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            maxLength={150}
            placeholder="Let's discuss an opportunity"
            className="w-full rounded-xl border border-white/10 bg-[#080d17]/80 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm text-gray-300"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="Tell me a little about what you have in mind..."
            className="w-full resize-y rounded-xl border border-white/10 bg-[#080d17]/80 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10"
          />
        </div>

        {contactStatus === "success" && (
          <p role="status" className="mt-4 text-sm text-emerald-400">
            Message sent successfully! Thanks for reaching out.
          </p>
        )}

        {contactStatus === "error" && (
          <p role="alert" className="mt-4 text-sm text-rose-400">
            Sorry, your message could not be sent. Please try again or email me directly.
          </p>
        )}

        <button
          type="submit"
          disabled={contactStatus === "sending"}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 px-5 py-3.5 font-semibold text-[#080b14] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {contactStatus === "sending" ? "Sending message..." : "Send message"}
          {contactStatus !== "sending" && <Icon name="arrow-up-right" size="sm" />}
        </button>

        <p className="mt-4 text-center text-xs leading-5 text-gray-500">
          Your message will be sent directly to my inbox.
        </p>
      </motion.form>
    </div>
  </div>
</section>

<footer id="connect" className="relative z-10 border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-8 lg:px-12">
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <a href="#home" className="group inline-flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] font-mono text-sm text-cyan-300 transition group-hover:border-cyan-300/50">
          VD
        </span>
        <span>
          <span className="block text-sm font-medium text-white">
            Vaibhav Dikshit
          </span>
          <span className="mt-1 block font-mono text-[10px] text-gray-500">
            ENGINEER · BUILDER · PROBLEM SOLVER
          </span>
        </span>
      </a>

      <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-400">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-300"
          >
            {social.label} ↗
          </a>
        ))}

        <a
          href="mailto:vaib140705@gmail.com"
          className="transition hover:text-cyan-300"
        >
          Email ↗
        </a>

        <a
          href="#home"
          className="transition hover:text-cyan-300"
        >
          Back to top ↑
        </a>
      </div>
    </div>

    <div className="mt-7 flex flex-col gap-2 border-t border-white/[0.07] pt-5 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} Vaibhav Dikshit · Built with React & TypeScript
      </p>
      <p className="font-mono tracking-wider">DESIGNED TO KEEP BUILDING.</p>
    </div>
  </div>
</footer>

    </main>
  );
}

export default App;

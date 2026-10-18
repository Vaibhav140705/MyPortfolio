
import { motion } from "motion/react";
import { useState } from "react";



const socials = [
  { label: "GitHub", href: "https://github.com/Vaibhav140705" },
  { label: "LinkedIn", href: "https://in.linkedin.com/in/vaibhav-dikshit-a225722b4" },
  { label: "Instagram", href: "https://www.instagram.com/vaib_1407/" },
  { label: "X / Twitter", href: "https://x.com/vaibhavdxt14" },
  { label: "Chess.com", href: "https://www.chess.com/member/dxt_vaib14" },
];

const focusAreas = [
  { number: "01", title: "Software & AI", detail: "Applications · APIs · LLMs" },
  { number: "02", title: "Embedded Systems", detail: "Microcontrollers · IoT" },
  { number: "03", title: "VLSI & Digital Design", detail: "RTL · Verification · FPGA" },
];


type Project = {
  title: string;
  category: "Software & AI" | "Embedded Systems" | "VLSI";
  description: string;
  technologies: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "ExpensePilot",
    category: "Software & AI",
    description:
      "An expense intelligence platform combining receipt OCR, AI-powered expense categorization, authentication, and analytics dashboards.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "LLMs"],
    featured: true,
  },
  {
    title: "MCQ Generator using LLMs",
    category: "Software & AI",
    description:
      "A tool that transforms PDF and text content into structured multiple-choice assessments using language models.",
    technologies: ["Python", "LangChain", "Groq API", "Streamlit"],
  },
  {
    title: "Task Management Web App",
    category: "Software & AI",
    description:
      "A task management application with CRUD operations, a Python web backend, and persistent SQLite storage.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS"],
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
  },
  {
    title: "Bluetooth Smart Automation",
    category: "Embedded Systems",
    description:
      "A microcontroller-based automation project using Bluetooth commands to control connected peripherals.",
    technologies: ["ESP32", "Embedded C", "UART", "Bluetooth"],
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
          <a className="transition hover:text-white" href="#connect">Connect</a>
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

      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-6 py-20 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
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
      </section>

      <section id="about" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-violet-300">
            A little about me
          </p>
          <h2 className="max-w-3xl text-3xl font-medium leading-snug sm:text-5xl">
            Curious by nature.
            <span className="text-gray-500"> Technical by choice.</span>
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            My interests span software development, AI-powered applications,
            microcontrollers, and VLSI design. I enjoy understanding how things
            work — from a line of code to the hardware underneath it.
          </p>
        </div>
      </section>

      <section id="focus" className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-violet-300">
            Areas of exploration
          </p>
          <h2 className="mb-10 text-3xl font-medium sm:text-4xl">
            One engineer. Multiple domains.
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.05]"
              >
                <span className="text-sm text-violet-300">{area.number}</span>
                <h3 className="mt-8 text-xl font-medium">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {area.detail}
                </p>
                <div className="mt-8 text-gray-600 transition group-hover:text-violet-300">
                  Explore this domain ↗
                </div>
              </motion.article>
            ))}
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
            Repository link coming soon
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>


      <footer id="connect" className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <div>
            <p className="font-medium">Have an opportunity or an idea?</p>
            <p className="mt-2 text-sm text-gray-500">
              Let’s connect and build something meaningful.
            </p>
          </div>
          
<div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-400">
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

  <a
    href="mailto:vaib140705@gmail.com"
    className="transition hover:text-violet-300"
  >
    Email ↗
  </a>

  <a
    href="tel:+916386618353"
    className="transition hover:text-violet-300"
  >
    Call me ↗
  </a>
</div>

        </div>
        <p className="border-t border-white/5 px-6 py-5 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Vaibhav Dikshit · Built with React & TypeScript
        </p>
      </footer>
    </main>
  );
}

export default App;

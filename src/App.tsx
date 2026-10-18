
import { motion } from "motion/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";



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
        </nav>

        <a
          href="https://github.com/Vaibhav140705"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-violet-400 hover:bg-white/5"
        >
          GitHub ↗
        </a>

        <a className="transition hover:text-white" href="#resumes">
          Resumes
        </a>

        <a className="transition hover:text-white" href="#skills">
          Skills
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
  initial={{ opacity: 0, scale: 0.96, x: 20 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block xl:right-16"
>
  <div className="relative">
    <div className="absolute -inset-5 rounded-[2rem] bg-violet-500/15 blur-3xl" />

    <div className="relative h-[420px] w-[300px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-2xl xl:h-[480px] xl:w-[340px]">
      <img
        src="/profile.jpg"
        alt="Vaibhav Dikshit"
        className="h-full w-full rounded-[1.5rem] object-cover object-center"
      />
    </div>

    <div className="absolute -bottom-4 -left-8 rounded-xl border border-white/10 bg-[#10121b]/95 px-4 py-3 shadow-xl">
      <p className="text-sm font-medium text-white">Vaibhav Dikshit</p>
      <p className="mt-1 text-xs text-gray-400">
        Software · Embedded · VLSI
      </p>
    </div>
  </div>
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


<section id="skills" className="relative z-10 border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-violet-300">
      Technical toolkit
    </p>

    <h2 className="text-3xl font-medium sm:text-5xl">
      Skills that connect the dots.
    </h2>

    <p className="mt-5 max-w-2xl leading-7 text-gray-400">
      A multidisciplinary toolkit spanning software development,
      embedded electronics, and digital hardware.
    </p>

    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {skillGroups.map((group) => (
        <article
          key={group.number}
          className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-medium">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {group.description}
              </p>
            </div>
            <span className="text-sm text-violet-300">{group.number}</span>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-gray-300 transition hover:border-violet-400/40 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </div>
</section>



<section id="resumes" className="relative z-10 border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-violet-300">
      Career resources
    </p>

    <h2 className="text-3xl font-medium sm:text-5xl">
      The right resume for the right role.
    </h2>

    <p className="mt-5 max-w-2xl leading-7 text-gray-400">
      My experience spans multiple technical domains. Choose the resume
      most relevant to the opportunity you're considering.
    </p>

    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {[
        {
          title: "Software & AI",
          description: "Python, web development, APIs, databases, and AI applications.",
          file: "/software-resume.pdf",
          tag: "Software roles",
        },
        {
          title: "Embedded Systems",
          description: "Microcontrollers, Embedded C, IoT, and hardware interfaces.",
          file: "/embedded-resume.pdf",
          tag: "Firmware roles",
        },
        {
          title: "VLSI & Verification",
          description: "RTL design, SystemVerilog, UVM, and digital hardware.",
          file: "/vlsi-resume.pdf",
          tag: "Hardware roles",
        },
      ].map((resume) => (
        <article
          key={resume.title}
          className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-violet-400/40"
        >
          <span className="text-xs uppercase tracking-wider text-violet-300">
            {resume.tag}
          </span>

          <h3 className="mt-5 text-xl font-medium">{resume.title}</h3>

          <p className="mt-3 min-h-20 text-sm leading-7 text-gray-400">
            {resume.description}
          </p>

          <a
            href={resume.file}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm transition hover:border-violet-400 hover:bg-white/5"
          >
            View resume <span aria-hidden="true">↗</span>
          </a>

          <a
            href={resume.file}
            download
            className="ml-3 inline-flex items-center gap-2 py-2.5 text-sm text-gray-400 transition hover:text-white"
          >
            Download ↓
          </a>
        </article>
      ))}
    </div>
  </div>
</section>



<section id="contact"
  className="relative border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
>
  <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Get in touch
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Let&apos;s build something
        <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          meaningful.
        </span>
      </h2>

      <p className="mt-6 max-w-lg leading-7 text-slate-400">
        Have an opportunity, a project idea, or just want to connect?
        Send me a message. I&apos;d be happy to hear from you.
      </p>

      <a
        href="mailto:vaib140705@gmail.com"
        className="mt-8 inline-flex items-center gap-3 text-cyan-300 transition hover:text-cyan-200"
      >
        <span className="text-xl">✉</span>
        vaib140705@gmail.com
      </a>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://github.com/Vaibhav140705"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
        >
          GitHub ↗
        </a>

        <a
          href="https://in.linkedin.com/in/vaibhav-dikshit-a225722b4"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>

    <form
      onSubmit={handleContactSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-cyan-950/10 sm:p-8"
    >
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
            className="mb-2 block text-sm text-slate-300"
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
            placeholder="John Doe"
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm text-slate-300"
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
            placeholder="john@example.com"
            className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-subject"
          className="mb-2 block text-sm text-slate-300"
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
          className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm text-slate-300"
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
          className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
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
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3.5 font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {contactStatus === "sending" ? "Sending message..." : "Send message"}
        {contactStatus !== "sending" && <span>↗</span>}
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        Your message will be sent directly to my inbox.
      </p>
    </form>
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

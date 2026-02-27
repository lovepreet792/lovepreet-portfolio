import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import SkillBadge from "../components/SkillBadge";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { Link as ScrollLink, Element } from "react-scroll";

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Redux", "Tailwind CSS",
  "Node.js", "Express", "REST APIs", "JWT", "Sequelize",
  "PostgreSQL", "MySQL", "Jest", "Git", "Figma",
];

const projects = [
  {
    title: "HPG PMS - Agile Management",
    slug: "hpg-pms",
    desc: "A comprehensive Jira-style project management platform designed to streamline agile workflows for teams. Supports sprint planning, drag-and-drop boards, hierarchical tasks, and activity auditing.",
    tech: "React, Node.js, MongoDB/MySQL",
    href: "http://13.201.10.112:6173/",
    cta: "View Live App",
    highlight: true,
  },
  {
    title: "Fiboura E-Commerce",
    slug: "fiboura",
    desc: "A sleek and modern e-commerce website that showcases clients' products. Includes advanced product catalogs, seamless interactions, and robust shopping capabilities.",
    tech: "React.js, Node, Tailwind CSS",
    href: "https://fiboura.com/",
    cta: "Live Store",
  },
  {
    title: "HPG IT Solutions EdTech",
    slug: "hpg-it-solutions",
    desc: "A learning platform for an IT company providing training and internships to students. Features content management, user tracking, and interactive program modules.",
    tech: "React, Node, Express, MySQL",
    href: "http://www.hpgitsolutions.com/",
    cta: "Live Platform",
  },
  {
    title: "Life of an Entrepreneur",
    slug: "entrepreneur",
    desc: "An immersive 3D mentorship platform designed for aspiring entrepreneurs. Showcases workshops, practical skills training, and cohort management in an attractive UI.",
    tech: "HTML, CSS, JS, GSAP",
    href: "https://lovepreet792.github.io/entrepreneur/",
    cta: "View Website",
  },
  {
    title: "FitWithPari – Live Fitness",
    slug: "fitwithpari",
    desc: "Built a real-time coach dashboard, automated Zoom routing, and dynamic attendance tracking. Passwordless login and deep links reduced overhead significantly.",
    tech: "React, Node, PostgreSQL, Zoom API",
  },
  {
    title: "Expense Manager SPA",
    slug: "expense-manager",
    desc: "Single-page robust expense tracker with inline form CRUD. Features instant, paginated tables with optimistic UI and month/year filters.",
    tech: "React, Node, Express, Tailwind",
  },
];

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 selection:bg-rose-500/30 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />

        {/* Hero Section */}
        <section className="min-h-screen max-w-7xl mx-auto px-6 flex items-center pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block mb-6 px-5 py-2 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-sm font-semibold tracking-wider uppercase">
                Available for new opportunities
              </div>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 text-white drop-shadow-2xl">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-violet-500 animate-pulse">
                  Lovepreet
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-10 max-w-lg leading-relaxed font-light">
                A Full Stack Developer crafting exceptional, scalable digital
                experiences that blend powerful engineering with striking aesthetics.
              </p>

              <div className="flex flex-wrap gap-5 items-center">
                <ScrollLink
                  to="projects"
                  smooth
                  offset={-100}
                  className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white font-bold cursor-pointer overflow-hidden shadow-[0_0_40px_rgba(244,63,94,0.4)] hover:shadow-[0_0_60px_rgba(244,63,94,0.6)] hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2 text-lg">
                    Explore Work{" "}
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </ScrollLink>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 text-white font-bold transition-all backdrop-blur-sm text-lg"
                >
                  Hire Me
                </a>
              </div>

              <div className="mt-14 flex gap-6">
                <a
                  href="mailto:mehralovepreet03@gmail.com"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 hover:border-rose-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.2)] transition-all text-slate-400 hover:text-rose-400"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lovepreet-mehra-1029b5287/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 hover:border-fuchsia-500/50 hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] transition-all text-slate-400 hover:text-fuchsia-400"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/lovepreet792"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all text-slate-400 hover:text-violet-400"
                >
                  <Github size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="relative w-full aspect-square max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 via-fuchsia-600 to-violet-600 rounded-[3rem] blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative h-full w-full bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 flex flex-col justify-center shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[100px]" />
                <h3 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-fuchsia-400 mb-8 uppercase tracking-widest">
                  Execution & Impact
                </h3>
                <div className="space-y-8">
                  <div className="border-l-4 border-rose-500 pl-6 transform hover:translate-x-2 transition-transform cursor-default">
                    <p className="text-white font-bold justify-between flex items-center text-lg">
                      Leadership
                    </p>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      Now architecting secure, full-stack learning platforms utilized globally at HPG IT Solutions.
                    </p>
                  </div>
                  <div className="border-l-4 border-fuchsia-500 pl-6 transform hover:translate-x-2 transition-transform cursor-default">
                    <p className="text-white font-bold text-lg">
                      70% Overhead Reduction
                    </p>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      Built real-time dashboards for live fitness cohorts with fully automated routing workflows.
                    </p>
                  </div>
                  <div className="border-l-4 border-violet-500 pl-6 transform hover:translate-x-2 transition-transform cursor-default">
                    <p className="text-white font-bold text-lg">
                      Enterprise Grade
                    </p>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      Role-based access controls for massive commerce portals and optimized legacy APIs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <Element name="about" className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-5xl font-black mb-8 text-white tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500">Me</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-6 font-light">
                I’m a software developer hyper-focused on business outcomes:
                faster operations, smoother user experiences, and rock-solid
                backend infrastructure.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                Whether it's building a complex Jira-style platform from
                scratch, managing scalable APIs in Node.js, or crafting mesmerizing
                frontend UI with React and Tailwind, I deliver production-ready
                features quickly.
              </p>
            </div>
            <div className="relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">
                My Approach
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="mt-1 p-2 rounded-xl bg-rose-500/20 text-rose-400"><ExternalLink size={18} /></div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Performance First</h4>
                    <p className="text-slate-400 mt-1">Optimized queries and lightning-fast frontend components.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="mt-1 p-2 rounded-xl bg-fuchsia-500/20 text-fuchsia-400"><ExternalLink size={18} /></div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Scalable Code</h4>
                    <p className="text-slate-400 mt-1">Modular architectures ensuring long-term maintainability.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="mt-1 p-2 rounded-xl bg-violet-500/20 text-violet-400"><ExternalLink size={18} /></div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Pixel Perfect</h4>
                    <p className="text-slate-400 mt-1">Obsessive attention to UI design, micro-animations, and fluid typography.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </Element>

        {/* Experience */}
        <Element
          name="experience"
          className="relative py-32 bg-black/40 border-y border-white/5"
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-5xl font-black mb-16 text-center text-white tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500">Experience</span>
            </h2>
            
            <div className="space-y-8">
              {/* HPG IT Solutions */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12 hover:border-rose-500/40 hover:bg-white/[0.04] transition-all group overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] group-hover:bg-rose-500/20 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Full Stack Developer</h3>
                    <div className="text-rose-400 font-bold text-xl tracking-wide">HPG IT Solutions</div>
                  </div>
                  <div className="px-6 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 font-bold tracking-widest uppercase text-xs shadow-[0_0_15px_rgba(244,63,94,0.15)] backdrop-blur-sm self-start md:self-auto">
                    July 2025 – Present
                  </div>
                </div>
                
                <ul className="space-y-5 relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="mt-2.5 w-2 h-2 rounded-full bg-rose-500 shrink-0 shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Spearheading the engineering of comprehensive internal management tools and public-facing ed-tech platforms serving large user cohorts.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-2.5 w-2 h-2 rounded-full bg-rose-500 shrink-0 shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Developing secure, scalable RESTful architectures utilizing React, Node.js, and MySQL optimized for high concurrency.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-2.5 w-2 h-2 rounded-full bg-rose-500 shrink-0 shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Designing deep front-end interfaces prioritizing smooth animations and perfect semantic SEO structures.
                    </p>
                  </li>
                </ul>
              </motion.div>

              {/* Instep Technologies */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white/[0.015] border border-white/5 rounded-[2rem] p-8 md:p-12 hover:border-violet-500/30 hover:bg-white/[0.03] transition-all group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px] group-hover:bg-violet-500/10 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Full Stack Developer Intern</h3>
                    <div className="text-violet-400 font-bold text-xl tracking-wide">Instep Technologies</div>
                  </div>
                  <div className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-bold tracking-widest uppercase text-xs self-start md:self-auto">
                    Feb 2025 – Jun 2025
                  </div>
                </div>
                
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-4">
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    <p className="text-slate-400 text-lg leading-relaxed">
                      Stabilized auth & permissions; resolved <strong className="text-white font-semibold">65%</strong> of user access issues ensuring platform reliability.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    <p className="text-slate-400 text-lg leading-relaxed">
                      Accelerated legacy data integration by <strong className="text-white font-semibold">90%</strong> via deployment of optimized backend Node.js APIs.
                    </p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </Element>

        {/* Skills */}
        <Element
          name="skills"
          className="relative py-32"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-black mb-16 text-center text-white tracking-tight">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-500">Stack</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {skills.map((s, idx) => (
                <SkillBadge key={idx} label={s} index={idx} />
              ))}
            </div>
          </div>
        </Element>

        {/* Projects */}
        <Element name="projects" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 bg-gradient-to-b from-black/40 to-transparent">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-violet-500">
                Projects
              </span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">
              A selection of scalable platforms and digital products I've engineered, spanning
              e-commerce, education, and agile management tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} delay={idx * 0.1} />
            ))}
          </div>
        </Element>

        {/* Contact */}
        <Element
          name="contact"
          id="contact"
          className="max-w-5xl mx-auto px-6 py-32 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-rose-900/30 via-[#0a0a0a] to-violet-900/30 border border-white/10 shadow-[0_0_80px_rgba(244,63,94,0.15)] backdrop-blur-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight drop-shadow-lg">
                Let’s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400">Together</span>
              </h2>
              <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Looking for a robust application architecture or a stunning frontend engineered to perfection? Tell me
                about your project goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a
                  href="mailto:mehralovepreet03@gmail.com"
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-slate-900 font-bold text-lg hover:bg-slate-200 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                  Send an Email
                </a>
                <a
                  href="https://www.linkedin.com/in/lovepreet-mehra-1029b5287/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </Element>

        <footer className="text-center text-slate-500 py-12 border-t border-white/5 bg-black/40">
          <p className="text-lg font-medium tracking-wide">
            © {new Date().getFullYear()} Lovepreet Mehra
          </p>
          <p className="text-sm mt-2 opacity-60">Engineered with React, Tailwind & Framer Motion</p>
        </footer>
      </div>
    </div>
  );
}

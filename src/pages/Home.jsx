import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import SkillBadge from '../components/SkillBadge'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Link as ScrollLink, Element } from 'react-scroll'

const skills = ['HTML','CSS','JavaScript','React.js','Redux','Tailwind CSS','Node.js','Express','REST APIs','JWT','Sequelize','PostgreSQL','MySQL','Jest','WhatsApp Business API','Git','Postman']

export default function Home(){
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-white">
      <Navbar />
      {/* Hero */}
      <section className="min-h-[88vh] max-w-6xl mx-auto px-4 flex items-center">
        <div className="grid md:grid-cols-2 gap-10 items-center pt-20">
          <div>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-5xl font-extrabold tracking-tight">
              Lovepreet Mehra
            </motion.h1>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-4 text-xl text-white/80">
              Full Stack Developer — I build reliable, scalable web apps for startups and SMBs.
            </motion.p>
            <div className="mt-6 flex gap-4">
              <a href="mailto:mehralovepreet03@gmail.com" className="p-2 rounded-lg border border-white/10"><Mail /></a>
              <a href="https://www.linkedin.com/in/lovepreet-mehra-1029b5287/" target="_blank" className="p-2 rounded-lg border border-white/10"><Linkedin /></a>
              <a href="https://github.com/lovepreet792" target="_blank" className="p-2 rounded-lg border border-white/10"><Github /></a>
            </div>
            <div className="mt-8 flex gap-3">
              <ScrollLink to="projects" smooth offset={-80} className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 cursor-pointer">View Projects</ScrollLink>
              <a href="#contact" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">Hire Me</a>
            </div>
          </div>
          <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="rounded-3xl border border-white/10 p-6 shadow-glow bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10">
            <p className="text-white/80">Recent wins:</p>
            <ul className="text-white/70 list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>Reduced coach coordination time by <span className="text-white font-semibold">70%</span> with real-time dashboards (FitWithPari).</li>
              <li>Cut login time by <span className="text-white font-semibold">30%</span> using passwordless deep links + WhatsApp API.</li>
              <li>Accelerated data integration by <span className="text-white font-semibold">90%</span> via optimized APIs (Internship).</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Element name="about" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-white/80 leading-relaxed">
          I’m a developer focused on business outcomes: faster ops, smoother UX, fewer bugs. I work across the stack —
          <span className="text-white font-semibold"> React, Node, Express, PostgreSQL/MySQL</span> — and ship production-grade features quickly.
          Currently based in India, open to freelance and remote roles.
        </p>
      </Element>

      {/* Skills */}
      <Element name="skills" className="bg-gray-900/40 border-y border-white/5 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((s,i)=>(<SkillBadge key={i} label={s} />))}
          </div>
        </div>
      </Element>

      {/* Projects */}
      <Element name="projects" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Expense Management System"
            slug="expense-manager"
            desc="Single-page expense tracker with CRUD: add, edit, delete entries with an instant, paginated table. Clean form UX + validation."
            tech="React, Node, Express, MySQL, Tailwind"
          />
          <ProjectCard
            title="HPG IT Solutions Website"
            slug="hpg-it-solutions"
            desc="Learning & growth platform website with admin panels for content and user management; responsive and scalable."
            tech="React, Node, Express, MySQL"
            href="http://www.uat.hpgitsolutions.com/"
            cta="Live Site"
          />
          <ProjectCard
            title="FitWithPari – Live Fitness"
            slug="fitwithpari"
            desc="Real-time coach dashboard, Zoom routing, attendance tracking; automated flows reduce overhead by 70%."
            tech="React, Node, PostgreSQL, Zoom API"
          />
          <ProjectCard
            title="FiniqBook – E‑commerce"
            slug="finiqbook"
            desc="Role-based access, product catalog, orders, invoices; React admin + Flutter apps."
            tech="Node, Express, PostgreSQL, JWT"
          />
          <ProjectCard
            title="Vendor Portal"
            slug="vendor-portal"
            desc="SAP vendor data ingestion via API with MySQL storage and responsive React UI."
            tech="React, Node, Express, MySQL"
          />
        </div>
      </Element>

      {/* Experience */}
      <Element name="experience" className="bg-gray-900/40 border-y border-white/5 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="bg-gray-900 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold">Full Stack Developer Intern — Instep Technologies (Feb 2025 – Jun 2025)</h3>
            <ul className="list-disc pl-6 text-white/75 mt-2 space-y-1 text-sm">
              <li>Stabilized auth & permissions; resolved 65% user access issues.</li>
              <li>Accelerated data integration by 90% with optimized APIs.</li>
              <li>Debugged critical legacy issues to improve stability.</li>
            </ul>
          </div>
        </div>
      </Element>

      {/* Contact */}
      <Element name="contact" id="contact" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-white/80">Tell me about your project and timeline. I’ll reply within 24 hours.</p>
        <div className="mt-6 flex gap-4">
          <a href="mailto:mehralovepreet03@gmail.com" className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600">Contact via Email</a>
          <a href="https://github.com/lovepreet792" target="_blank" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">GitHub</a>
          <a href="https://www.linkedin.com/in/lovepreet-mehra-1029b5287/" target="_blank" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">LinkedIn</a>
        </div>
      </Element>

      <footer className="text-center text-white/40 py-10">© {new Date().getFullYear()} Lovepreet Mehra</footer>
    </div>
  )
}

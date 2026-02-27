import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react'

const DATA = {
  'hpg-pms': {
    title: 'HPG PMS - Agile Project Management',
    description: `A comprehensive, Jira-style project management platform designed to streamline agile workflows for cross-functional teams. 
    The system supports sprint planning, backlog grooming, task tracking, time logging, file attachments, and comprehensive activity auditing. 
    It flawlessly replicates real-world agile development processes including life-cycle sprint management, hierarchical task structures, sophisticated drag-and-drop kanban boards, and rigorously controlled status transitions.`,
    highlights: [
      'Interactive Drag & Drop Kanban boards for tracking tasks.',
      'Comprehensive sprint lifecycle management: planning to evaluation.',
      'Hierarchical task structures (Epics, Stories, Bugs, Sub-tasks).',
      'Extensive activity auditing and time-logging capabilities.',
    ],
    tech: 'React, Node.js, Express, MongoDB/MySQL, Socket.io, Tailwind CSS',
    live: 'http://13.201.10.112:6173/',
    outcome: 'Increased agile team productivity by organizing chaotic workflows into a highly systematic framework.',
  },
  'fiboura': {
    title: 'Fiboura – E-Commerce Platform',
    description: `A vibrant and high-performance e-commerce platform built to beautifully exhibit clients' product offerings. It encompasses a highly scalable shopping experience with visually rich UI, lightning-fast product filtering, and an optimized checkout process designed to maximize conversion rates.`,
    highlights: [
      'Sleek product catalog with dynamic filtering and sorting.',
      'Responsive design emphasizing aesthetics and usability.',
      'Optimized cart and seamless secure checkout workflows.',
    ],
    tech: 'React, Node.js, Tailwind CSS, Stripe',
    live: 'https://fiboura.com/',
    outcome: 'Gave merchants an extremely professional digital storefront, drastically enhancing their brand identity.',
  },
  'hpg-it-solutions': {
    title: 'HPG IT Solutions',
    description: `The digital learning and growth hub for an IT company that provides specialized training and internships to students. 
    Provides protected administrative panels, content management for courses and announcements, and automated user onboarding pathways.`,
    highlights: [
      'Admin control panel for complete oversight of students and courses.',
      'Role-based access to safeguard internal materials.',
      'Fast, responsive marketing front-end crafted for SEO and lead generation.',
    ],
    tech: 'React, Node, Express, MySQL',
    live: 'http://www.hpgitsolutions.com/',
    outcome: 'Streamlined the enrollment processes and transformed content distribution for the learning platform.',
  },
  'entrepreneur': {
    title: 'Life of an Entrepreneur',
    description: `An extensively animated, immersive landing ecosystem for an entrepreneurial mentorship program. It is designed to maximize emotional impact and highlight practical skills training. 
    It provides prospective members an inside look at community events, 1-on-1 mentorship sessions, and exclusive monthly cohort packages.`,
    highlights: [
      'Interactive animations highlighting various learning modules and perks.',
      'Responsive, modern, dark UI with visually striking typography.',
      'Clear monetization channels pushing prospective students into cohort plans.',
    ],
    tech: 'HTML, CSS, JavaScript, GSAP, Tailwind',
    live: 'https://lovepreet792.github.io/entrepreneur/',
    outcome: 'Yielded higher prestige and perceived value of the mentorship program, increasing conversion metrics.',
  },
  'expense-manager': {
    title: 'Expense Management System',
    description: `A highly reactive single-page application engineered to track daily expenses with robust CRUD interfaces. Built with a focus on data density and usability, the UI allows for instant edits and updates via optimistic rendering.`,
    highlights: [
      'SPA with form-driven data manipulation and instant table updates',
      'Inline edit and delete operations backed by robust validations',
      'Clean architecture bridging React directly to a MySQL data store',
    ],
    tech: 'React, Node, Express, MySQL, Tailwind',
    outcome: 'Reduced manual calculation errors and significantly improved the ease of monthly financial tracking.',
  },
  'fitwithpari': {
    title: 'FitWithPari – Live Fitness',
    description: `Real-time orchestrator for fitness classes. Coaches are equipped with dynamic dashboards to monitor attendees instantly. Includes heavy integration with video APIs to completely automate zoom link routing.`,
    highlights: [
      'Automated Zoom meeting URL routing utilizing JWT token auth.',
      'Immediate real-time dashboard updates within a +-15 min class timeframe.',
      'Frictionless passwordless authentication using deep linking workflows.',
    ],
    tech: 'React, Node.js, Express, Zoom API, Sequelize, PostgreSQL',
    outcome: 'Decreased manual coach oversight and coordination labor by over 70%.',
  },
}

export default function Project() {
  const { slug } = useParams()
  const project = DATA[slug]
  
  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-slate-200 flex items-center justify-center p-10">
        <div className="text-center">
          <h2 className="text-5xl font-black text-white mb-4">Project Not Found</h2>
          <Link to="/" className="text-rose-400 hover:text-rose-300 underline underline-offset-4 text-xl">Return Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#050505] text-slate-200 min-h-screen selection:bg-rose-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-900/20 rounded-full blur-[180px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-violet-900/20 rounded-full blur-[180px] mix-blend-screen" />
      </div>

      <Navbar />
      
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-32">
        <Link to="/" className="inline-flex items-center gap-3 text-slate-400 hover:text-rose-400 transition-colors mb-12 group uppercase tracking-widest font-bold text-sm">
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight drop-shadow-xl">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-14 border-b border-white/10 pb-10">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 font-bold tracking-widest uppercase text-xs">
              <Code2 size={16} /> Technologies
            </div>
            <span className="text-slate-300 text-lg">{project.tech}</span>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-3xl font-bold text-white mb-6">
               Overview
            </h3>
            <p className="text-slate-300 text-xl font-light leading-relaxed mb-16">
              {project.description}
            </p>

            <div className="grid md:grid-cols-2 gap-10 mb-20">
              <div className="p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">
                  Key Highlights
                </h3>
                <ul className="space-y-4">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-2 w-2 h-2 rounded-full bg-rose-400 shrink-0 shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                      <span className="text-slate-300 text-lg leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-8">
                <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-rose-500/10 to-violet-500/10 border border-white/10 flex-1 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4">The Outcome</h3>
                  <p className="text-rose-200 text-lg leading-relaxed font-medium">✨ {project.outcome}</p>
                </div>
                
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex justify-between items-center p-8 rounded-[2rem] bg-gradient-to-r from-fuchsia-600 to-rose-600 text-white font-black text-xl hover:shadow-[0_0_40px_rgba(217,70,239,0.5)] hover:scale-[1.02] transition-all group"
                  >
                    View Live Repository / Site
                    <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>

            <div className="mt-16 p-12 rounded-[3rem] bg-[#0a0a0a] border border-white/10 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h4 className="text-3xl font-black text-white mb-4 tracking-tight">Need something similar built?</h4>
                <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
                  I can architect an optimized solution tailored completely to your business requirements. Let's discuss timelines and capabilities.
                </p>
                <a href="/#contact" className="inline-block px-10 py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-200 hover:scale-105 transition-all text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <footer className="text-center text-slate-500 py-12 border-t border-white/5 bg-black/40">
        <p className="text-lg font-medium">© {new Date().getFullYear()} Lovepreet Mehra</p>
      </footer>
    </div>
  )
}

import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const DATA = {
  'expense-manager': {
    title: 'Expense Management System',
    description: `A single-page application to track daily expenses with robust CRUD. Users fill a form to add expenses; entries render below in a dynamic, paginated table where records can be edited or deleted inline. Includes validation, date/category filters, and export to CSV.`,
    highlights: [
      'SPA with form-driven CRUD and instant table updates',
      'Edit & delete with inline validation and optimistic UI',
      'Pagination + month/year filters for quick reports',
      'Clean architecture: React front-end + Node/Express API + MySQL',
    ],
    tech: 'React, Node, Express, MySQL, Tailwind',
    outcome: 'Improved personal/team expense tracking efficiency and reduced manual spreadsheet work.',
  },
  'hpg-it-solutions': {
    title: 'HPG IT Solutions Website',
    description: `Corporate site for a learning & growth platform with admin panels. Implemented responsive pages, course/announcement management, and protected routes for admins to manage content and users.`,
    highlights: [
      'Admin panel: CRUD for courses, users, and announcements',
      'Role-based access with protected routes',
      'SEO-friendly responsive UI for better reach',
    ],
    tech: 'React, Node, Express, MySQL',
    live: 'http://www.uat.hpgitsolutions.com/',
    outcome: 'Delivered a scalable marketing and operations hub for platform growth.',
  },
  'fitwithpari': {
    title: 'FitWithPari – Live Fitness Platform',
    description: `Built real-time coach dashboard to visualize users & classes within ±15 minutes, with drag-and-drop assignment, Zoom URL routing, and attendance tracking.`,
    highlights: [
      'Real-time lobby routing for classes',
      'Automated Zoom URL routing with token auth',
      'Attendance tracking with PostgreSQL integration',
      'Passwordless login via WhatsApp deep links',
    ],
    tech: 'React, Node, Express, Zoom API, Sequelize, PostgreSQL/MySQL',
    outcome: 'Reduced coach coordination time by 70% and login time by 30%.',
  },
  'finiqbook': {
    title: 'FiniqBook – E‑commerce Platform',
    description: `Rescued stalled project and enabled near-live deployment. Architected role-based access for four user roles, plus catalog, orders, and invoices.`,
    highlights: [
      'RBAC for 4 roles with scoped permissions',
      'Core commerce flows: products, orders, invoicing',
      'Unified access: Flutter apps + React admin portal',
    ],
    tech: 'Node.js, Express, PostgreSQL, JWT, Sequelize',
    outcome: 'Achieved stable release path with enterprise-ready auth and data model.',
  },
  'vendor-portal': {
    title: 'Vendor Portal',
    description: `SAP vendor data ingestion via API, with normalized storage in MySQL and a responsive React frontend for browsing and filtering vendor records.`,
    highlights: [
      'Resilient API ingestion / retry + logging',
      'Structured storage and indexed queries',
      'Usable interface with filters and detail modals',
    ],
    tech: 'React, Node, Express, MySQL',
    outcome: 'Streamlined vendor management and data visibility for stakeholders.',
  },
}

export default function Project(){
  const { slug } = useParams()
  const project = DATA[slug]
  if(!project) return <div className="min-h-screen bg-gray-950 text-white p-10">Not found</div>

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <Link to="/" className="text-white/60 hover:text-white/90">← Back</Link>
        <h1 className="text-4xl font-bold mt-3">{project.title}</h1>
        <p className="text-white/80 mt-4">{project.description}</p>

        <h3 className="text-2xl font-semibold mt-8 mb-2">Highlights</h3>
        <ul className="list-disc pl-6 text-white/80 space-y-1">
          {project.highlights.map((h,i)=>(<li key={i}>{h}</li>))}
        </ul>

        <div className="mt-6 text-white/70"><span className="font-semibold">Tech:</span> {project.tech}</div>
        {project.live && <div className="mt-2"><a className="text-indigo-400 hover:text-indigo-300 underline" href={project.live} target="_blank">Live Site</a></div>}

        <div className="mt-10 p-4 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-sm text-white/70">
            Want something similar? I can adapt this architecture to your domain (fintech, edtech, health, operations) and ship in agile milestones.
          </p>
        </div>
      </main>
      <footer className="text-center text-white/40 py-10 border-t border-white/5">© {new Date().getFullYear()} Lovepreet Mehra</footer>
    </div>
  )
}

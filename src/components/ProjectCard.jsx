import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({ title, desc, tech, slug, cta, href }) {
  return (
    <motion.div whileHover={{ y:-4 }} className="bg-gray-900 rounded-2xl p-6 border border-white/10 shadow-glow">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-white/70 mb-3">{desc}</p>
      <p className="text-xs text-white/50">Tech: {tech}</p>
      <div className="mt-4 flex gap-3">
        <Link to={`/project/${slug}`} className="px-3 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20">Case Study</Link>
        {href && <a href={href} target="_blank" rel="noreferrer" className="px-3 py-2 text-sm rounded-lg bg-indigo-500/90 hover:bg-indigo-500">{cta || 'Live'}</a>}
      </div>
    </motion.div>
  )
}

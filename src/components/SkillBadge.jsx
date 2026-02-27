import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

export default function SkillBadge({ label, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all cursor-default shadow-lg"
    >
      <Code2 size={18} className="text-rose-400" />
      <span className="text-slate-300 font-bold tracking-wider text-sm uppercase">{label}</span>
    </motion.div>
  )
}

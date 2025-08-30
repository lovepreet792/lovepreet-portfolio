import { motion } from 'framer-motion'
export default function SkillBadge({ label }) {
  return (
    <motion.div whileHover={{ scale:1.06 }} className="bg-gray-900 border border-white/10 rounded-2xl py-3 text-center text-sm">
      {label}
    </motion.div>
  )
}

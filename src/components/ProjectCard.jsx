import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react'

export default function ProjectCard({ title, desc, tech, slug, cta, href, delay = 0, highlight = false }) {
  return (
    <div className="h-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -12, scale: 1.02 }}
        className={`relative group rounded-[2.5rem] p-8 md:p-10 border flex flex-col h-full transition-all duration-500 overflow-hidden ${
          highlight 
          ? 'bg-gradient-to-b from-rose-900/40 via-[#0a0a0a] to-[#050505] border-rose-500/40 hover:shadow-[0_0_60px_rgba(244,63,94,0.3)]'
          : 'bg-white/[0.03] border-white/10 hover:border-rose-500/30 hover:shadow-[0_0_40px_rgba(244,63,94,0.2)]'
        }`}
      >
        {/* Background Mesh Flare */}
        <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 transition-all duration-700 group-hover:opacity-40 pointer-events-none ${
          highlight ? 'bg-rose-500' : 'bg-fuchsia-500'
        }`} />

        {highlight && (
          <div className="absolute top-0 right-10 -translate-y-1/2 px-5 py-2 bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_0_30px_rgba(244,63,94,0.6)] z-20 flex items-center gap-2">
            <Sparkles size={10} />
            Featured
          </div>
        )}

        {/* Title */}
        <h4 className="text-3xl font-black mb-5 text-white group-hover:text-rose-400 transition-colors tracking-tight leading-tight">
          {title}
        </h4>
        
        {/* Description */}
        <p className="text-slate-400 leading-relaxed text-lg font-light mb-8 italic">
          "{desc}"
        </p>

        {/* Vertical Spacer */}
        <div className="flex-grow" />

        {/* Tech Area - Fixed min-height to handle line wrapping consistently */}
        <div className="min-h-[60px] flex items-end mb-6">
          <div className="flex items-center gap-3 bg-white/[0.03] w-fit px-4 py-2 rounded-xl border border-white/5 group-hover:border-rose-500/30 transition-all">
            <Code2 size={18} className="text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
            <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">{tech}</span>
          </div>
        </div>
        
        {/* Buttons Area - Fixed min-height to ensure horizontal alignment regardless of button count */}
        <div className="pt-8 border-t border-white/10 min-h-[100px] flex items-center">
          <div className="flex flex-wrap items-center gap-4 w-full">
            <Link 
              to={`/project/${slug}`} 
              className="flex-1 min-w-[120px] px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest transition-all border border-white/10 text-center hover:scale-[1.05] active:scale-95"
            >
              Case Study
            </Link>
            
            {href ? (
              <a 
                href={href} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-fuchsia-600 text-white font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(244,63,94,0.5)] hover:scale-[1.05] active:scale-95 transition-all group/btn relative overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmerswipe_1.5s_infinite] pointer-events-none" />
                <span className="relative z-10">{cta || 'Live View'}</span>
                <ArrowUpRight size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            ) : (
              /* Invisible placeholder for cards with only one button to maintain alignment */
              <div className="flex-1 min-w-[120px] invisible pointer-events-none" />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

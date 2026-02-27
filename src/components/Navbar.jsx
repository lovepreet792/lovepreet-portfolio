import { Link as ScrollLink } from 'react-scroll'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItem = (to, label) => {
    if (isHome) {
      return (
        <ScrollLink 
          to={to} 
          spy={true} 
          smooth={true} 
          offset={-80} 
          duration={500} 
          onClick={() => setOpen(false)} 
          className="cursor-pointer text-sm font-bold tracking-widest uppercase text-slate-300 hover:text-rose-400 transition-colors"
        >
          {label}
        </ScrollLink>
      )
    }
    return (
      <Link to={`/#${to}`} className="cursor-pointer text-sm font-bold tracking-widest uppercase text-slate-300 hover:text-rose-400 transition-colors">
        {label}
      </Link>
    )
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-black tracking-tighter text-3xl flex items-center gap-2 group">
          <span className="text-white group-hover:text-rose-400 transition-colors">LM</span>
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)] animate-pulse" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          {navItem('about', 'About')}
          {navItem('skills', 'Skills')}
          {navItem('experience', 'Experience')}
          {navItem('projects', 'Projects')}
          
          <ScrollLink 
            to="contact" 
            smooth={true} 
            offset={-80} 
            duration={500}
            className="cursor-pointer px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-rose-500/50 hover:bg-rose-500/10 text-white text-sm font-bold uppercase tracking-widest transition-all"
          >
            Hire Me
          </ScrollLink>
        </nav>

        <button 
          className="md:hidden p-3 text-slate-300 hover:text-white rounded-2xl border border-white/5 bg-white/[0.02]" 
          onClick={() => setOpen(!open)} 
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] py-6' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col px-6 gap-8">
          {navItem('about', 'About')}
          {navItem('skills', 'Skills')}
          {navItem('experience', 'Experience')}
          {navItem('projects', 'Projects')}
          
          <ScrollLink 
            to="contact" 
            smooth={true} 
            offset={-80} 
            onClick={() => setOpen(false)}
            className="cursor-pointer text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white font-bold tracking-widest uppercase shadow-lg shadow-rose-500/20"
          >
            Hire Me
          </ScrollLink>
        </div>
      </div>
    </header>
  )
}

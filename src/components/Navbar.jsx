import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)
  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const navItem = (to, label) => (
    <ScrollLink to={to} spy={true} smooth={true} offset={-80} duration={500} onClick={() => setOpen(false)} className="cursor-pointer hover:text-white/90">
      {label}
    </ScrollLink>
  )
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition ${atTop ? 'bg-transparent' : 'bg-gray-900/70 backdrop-blur'} border-b border-white/5`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold tracking-tight text-xl">LM</Link>
        <nav className="hidden md:flex gap-8 text-white/80">
          {navItem('about','About')}
          {navItem('skills','Skills')}
          {navItem('projects','Projects')}
          {navItem('experience','Experience')}
          {navItem('contact','Contact')}
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-white/10" onClick={()=>setOpen(!open)} aria-label="Menu">
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-white/10 px-4 py-3 space-y-3">
          <div>{navItem('about','About')}</div>
          <div>{navItem('skills','Skills')}</div>
          <div>{navItem('projects','Projects')}</div>
          <div>{navItem('experience','Experience')}</div>
          <div>{navItem('contact','Contact')}</div>
        </div>
      )}
    </header>
  )
}

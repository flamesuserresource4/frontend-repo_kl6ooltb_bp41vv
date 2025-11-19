import { useState } from 'react'
import { Menu, X, Rocket, Zap } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-blue-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-blue-500/30 ring-1 ring-white/20">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">NowCode Studio</p>
              <p className="text-[11px] text-white/60 -mt-0.5">Low-code MVPs, insanely fast</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink>Services</NavLink>
            <NavLink>Process</NavLink>
            <NavLink>Work</NavLink>
            <NavLink>Contact</NavLink>
          </nav>

          <div className="hidden md:flex">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-lg shadow-white/20 hover:shadow-white/30 transition-shadow">
              <Zap className="h-4 w-4" /> Start in 48h
            </a>
          </div>

          <button className="md:hidden text-white/90" onClick={() => setOpen(v => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur px-4 py-4 space-y-3">
            <NavLink>Services</NavLink>
            <NavLink>Process</NavLink>
            <NavLink>Work</NavLink>
            <NavLink>Contact</NavLink>
            <a href="#" className="block text-center rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold">Start in 48h</a>
          </div>
        )}
      </div>
    </header>
  )
}

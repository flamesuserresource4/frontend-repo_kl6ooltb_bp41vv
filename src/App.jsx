import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-fuchsia-500/40 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Process />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} NowCode Studio — All rights reserved.</p>
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

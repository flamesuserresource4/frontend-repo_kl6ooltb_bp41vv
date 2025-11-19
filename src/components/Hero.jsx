import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ship MVPs 5-10x faster with low-code
          </div>
          <h1 className="mt-5 text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Build, iterate, and launch faster than ever
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/80">
            We design and develop production-ready apps using Webflow, Bubble, Retool, and more. Go from idea to users in days, not months.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/20 hover:shadow-white/30">
              Get a free scope in 24h
            </a>
            <a href="#work" className="inline-flex justify-center items-center rounded-xl bg-slate-900/60 ring-1 ring-white/20 text-white px-5 py-3 font-semibold backdrop-blur hover:bg-slate-900/70">
              See recent work
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="pointer-events-none absolute inset-x-0 -bottom-40 h-80 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-emerald-400/10 blur-3xl"
      />
    </section>
  )
}

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Ready to build your MVP?</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Tell us about your idea and we’ll send a detailed scope with timeline and budget in 24 hours.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-2xl mx-auto">
            <input type="email" required placeholder="Work email" className="w-full rounded-xl bg-white/10 text-white placeholder-white/50 px-4 py-3 ring-1 ring-white/20 focus:ring-white/40 outline-none" />
            <button className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/20 hover:shadow-white/30">Get free scope</button>
          </form>
          <p className="mt-3 text-white/60 text-xs">No spam. We’ll reply within one business day.</p>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent via-blue-500/10 to-fuchsia-500/10 blur-3xl" />
    </section>
  )
}

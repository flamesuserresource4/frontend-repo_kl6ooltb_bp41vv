import { motion } from 'framer-motion'
import { Lightbulb, PenTool, Wrench, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    title: 'Scope in 24h',
    desc: 'We map goals, features, and constraints — crystal clear requirements.',
  },
  {
    icon: PenTool,
    title: 'Design & prototype',
    desc: 'Wireframes and UI styles quickly to align on look and flow.',
  },
  {
    icon: Wrench,
    title: 'Build in sprints',
    desc: 'We ship working software weekly with demos and feedback loops.',
  },
  {
    icon: Rocket,
    title: 'Launch & iterate',
    desc: 'Analytics-driven improvements, growth experiments, and support.',
  },
]

export default function Process() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">A battle-tested delivery process</h2>
            <p className="mt-4 text-white/70">Transparent, predictable, and optimized for speed. You always know what’s coming next.</p>
            <div className="mt-10 space-y-4">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-fuchsia-500 via-blue-500 to-emerald-400 flex items-center justify-center ring-1 ring-white/20 shadow-lg shadow-blue-500/30">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{s.title}</h3>
                    <p className="text-white/70 text-sm">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
            <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            <p className="mt-4 text-white/70 text-sm">We combine no-code platforms with code when needed. The result: production apps that scale.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

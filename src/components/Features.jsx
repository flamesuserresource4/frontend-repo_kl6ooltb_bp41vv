import { motion } from 'framer-motion'
import { Rocket, Wrench, Clock, ShieldCheck, Layout, Workflow } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Launch in days',
    desc: 'Rapid sprints to ship your MVP to real users fast.',
  },
  {
    icon: Layout,
    title: 'Pixel-perfect UI',
    desc: 'Modern, responsive design with smooth micro-interactions.',
  },
  {
    icon: Workflow,
    title: 'Automations',
    desc: 'Connect data and workflows with Zapier, Airtable, and APIs.',
  },
  {
    icon: Wrench,
    title: 'Extendable',
    desc: 'Low-code foundations with room to grow into custom code.',
  },
  {
    icon: Clock,
    title: 'Time & cost efficient',
    desc: 'Deliver the same outcome 5-10x faster with lower risk.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-grade',
    desc: 'Auth, roles, audit logs, analytics — built-in from day one.',
  },
]

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Everything you need to validate and scale</h2>
          <p className="mt-4 text-white/70">We craft real products your users will love — not just prototypes. From idea to growth, we own the entire journey.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:border-white/20 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 via-blue-500 to-emerald-400 flex items-center justify-center ring-1 ring-white/20 shadow-lg shadow-blue-500/30">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

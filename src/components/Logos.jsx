import { motion } from 'framer-motion'

const brands = [
  'Webflow', 'Bubble', 'Retool', 'Zapier', 'Airtable', 'Stripe'
]

export default function Logos() {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-white/70 text-sm mb-6">We build on top of the best platforms</p>
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
            className="flex gap-10 whitespace-nowrap"
          >
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/80 text-sm">
                {b}
              </span>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
        </div>
      </div>
    </section>
  )
}

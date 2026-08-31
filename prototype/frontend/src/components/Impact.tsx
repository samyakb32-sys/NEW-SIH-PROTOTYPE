import { motion } from "framer-motion"
import { outcomes } from "../data/content"

export default function Impact() {
  return (
    <section id="impact" className="relative py-28 overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold text-brand-light uppercase tracking-widest">Impact</span>
          <h2 className="mt-3 text-4xl font-extrabold text-white">Real outcomes for real farmers</h2>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center backdrop-blur-sm"
            >
              <div className="text-4xl font-extrabold text-brand-light">{o.value}</div>
              <div className="mt-2 text-sm text-gray-300">{o.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

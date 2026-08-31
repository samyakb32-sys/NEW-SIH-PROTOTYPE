import { motion } from "framer-motion"
import { flowSteps } from "../data/content"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 bg-gradient-to-b from-[#f7faf7] to-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">The Journey</span>
          <h2 className="mt-3 text-4xl font-extrabold text-ink">From harvest to payment, in 8 steps</h2>
          <p className="mt-4 text-gray-600">
            A single guided flow takes every lot from listing to a completed, paid transaction.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-brand/10 via-brand/40 to-brand/10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {flowSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex flex-col items-start"
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border-2 border-brand text-brand font-extrabold text-xl grid place-items-center shadow-md shadow-brand/10">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from "framer-motion"
import { ArrowRight, Smartphone } from "lucide-react"

export default function CTA() {
  return (
    <section id="cta" className="py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand via-brand-dark to-ink px-8 py-16 sm:px-16 text-center"
        >
          <div className="pointer-events-none absolute inset-0 opacity-20 bg-grid" />
          <div className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 bg-amber/30 rounded-full blur-3xl animate-blob" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
              Ready to sell your next harvest at the right price?
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Join thousands of farmers and buyers already using AgriConnect for
              transparent, fair, and fast agricultural trade.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-dark font-semibold shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                Start Selling Today
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20 transition-colors"
              >
                <Smartphone size={18} />
                Get the App
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

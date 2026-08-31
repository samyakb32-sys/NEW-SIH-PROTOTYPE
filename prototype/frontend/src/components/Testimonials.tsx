import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { testimonials } from "../data/content"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#f7faf7]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">Voices</span>
          <h2 className="mt-3 text-4xl font-extrabold text-ink">Trusted across the value chain</h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm"
            >
              <Quote className="text-brand/30" size={28} />
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand font-bold grid place-items-center text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from "framer-motion"
import { Check, Sprout, Building2, ShieldCheck } from "lucide-react"
import { roles } from "../data/content"

const icons: Record<string, React.ReactNode> = {
  Sprout: <Sprout size={40} />,
  Building2: <Building2 size={40} />,
  ShieldCheck: <ShieldCheck size={40} />,
}

export default function Roles() {
  return (
    <section id="roles" className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">Built For Everyone</span>
          <h2 className="mt-3 text-4xl font-extrabold text-ink">One platform, three roles</h2>
          <p className="mt-4 text-gray-600">
            Farmers, buyers, and regulators each get a purpose-built experience.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {roles.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`relative h-48 bg-gradient-to-br ${r.gradient} overflow-hidden`}>
                <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -right-2 bottom-4 w-20 h-20 rounded-full bg-white/10" />
                <div className="absolute inset-0 flex items-center justify-center text-white/90">
                  {icons[r.icon]}
                </div>
                <div className="absolute bottom-4 left-5 text-white font-bold text-lg drop-shadow">
                  {r.name}
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <p className="text-sm text-gray-600">{r.tagline}</p>
                <ul className="mt-4 space-y-2">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-ink">
                      <Check size={16} className="text-brand shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

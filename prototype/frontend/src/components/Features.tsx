import { motion } from "framer-motion"
import { TrendingUp, Sparkles, Users, FileSignature, Truck, ShieldCheck } from "lucide-react"
import { features } from "../data/content"

const icons: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={22} />,
  Sparkles: <Sparkles size={22} />,
  Users: <Users size={22} />,
  FileSignature: <FileSignature size={22} />,
  Truck: <Truck size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
}

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-sm font-semibold text-brand uppercase tracking-widest">Platform</span>
          <h2 className="mt-3 text-4xl font-extrabold text-ink">
            Everything a farmer needs to sell smarter
          </h2>
          <p className="mt-4 text-gray-600">
            From price discovery to final payment — one platform covers the entire
            selling journey, backed by real-time data and AI recommendations.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand grid place-items-center group-hover:bg-brand group-hover:text-white transition-colors">
                {icons[f.icon]}
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

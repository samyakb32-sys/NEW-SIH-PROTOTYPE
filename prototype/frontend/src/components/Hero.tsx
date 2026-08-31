import { motion } from "framer-motion"
import { ArrowRight, PlayCircle, TrendingUp, MapPin } from "lucide-react"
import HeroArt from "./HeroArt"

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 bg-grid">
      {/* animated blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-light/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-amber/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-brand/20 text-brand text-xs font-semibold shadow-sm">
            🌾 SIH26132 · AI Market Linkage Platform
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.08]">
            Sell your harvest at the{" "}
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              best price
            </span>
            , every time.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            AgriConnect gives farmers real-time mandi prices, AI-powered selling
            recommendations, and direct access to verified buyers — no middleman,
            no guesswork.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand text-white font-semibold shadow-lg shadow-brand/30 hover:bg-brand-dark transition-all hover:-translate-y-0.5"
            >
              Get Started Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink font-semibold border border-gray-200 hover:border-brand/40 transition-colors"
            >
              <PlayCircle size={18} className="text-brand" />
              See How It Works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-500">
            <div>
              <div className="text-2xl font-bold text-ink">12,400+</div>
              Farmers Onboarded
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-ink">₹42Cr+</div>
              Produce Traded
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-ink">340+</div>
              Verified Buyers
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand/20 border border-white/50">
            <HeroArt />
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-10 bg-white rounded-2xl shadow-xl p-4 w-56 border border-gray-100"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-brand">
              <TrendingUp size={16} /> Best Price Today
            </div>
            <div className="mt-1 text-xl font-bold text-ink">₹2,840 / quintal</div>
            <div className="text-xs text-gray-500 mt-0.5">Wheat · Indore Mandi</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-6 bottom-10 bg-white rounded-2xl shadow-xl p-4 w-52 border border-gray-100"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-600">
              <MapPin size={16} /> Buyer Matched
            </div>
            <div className="mt-1 text-sm font-semibold text-ink">Sunita Traders, Pune</div>
            <div className="text-xs text-gray-500 mt-0.5">96% match score</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

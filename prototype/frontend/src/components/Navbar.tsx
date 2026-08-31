import { useEffect, useState } from "react"
import { Leaf, Menu, X, Globe } from "lucide-react"
import { motion } from "framer-motion"

const links = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "For You", href: "#roles" },
  { label: "Impact", href: "#impact" },
  { label: "Testimonials", href: "#testimonials" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-lg text-ink">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand text-white">
            <Leaf size={18} />
          </span>
          AgriConnect
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand transition-colors">
            <Globe size={16} /> EN / हिं
          </button>
          <a
            href="#cta"
            className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-brand hover:bg-brand-dark shadow-sm shadow-brand/30 transition-colors"
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700">
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-brand text-center">
            Get Started
          </a>
        </div>
      )}
    </motion.header>
  )
}

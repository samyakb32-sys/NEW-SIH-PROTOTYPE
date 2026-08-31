import { Leaf } from "lucide-react"

const columns = [
  {
    title: "Product",
    links: ["Features", "How it Works", "Pricing", "For Buyers", "For Admins"],
  },
  {
    title: "Company",
    links: ["About", "SIH26132", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "API", "Mandi Price Index", "Support"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-gray-400 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand text-white">
                <Leaf size={18} />
              </span>
              AgriConnect
            </div>
            <p className="mt-4 text-sm max-w-xs">
              Strengthening market linkages and price discovery for farmers —
              built for SIH26132.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold text-white">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-brand-light transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>© 2026 AgriConnect. Built for Smart India Hackathon.</span>
          <span>SIH26132 · Strengthening Market Linkages and Price Discovery for Farmers</span>
        </div>
      </div>
    </footer>
  )
}

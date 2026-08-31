const partners = [
  "Ministry of Agriculture",
  "e-NAM",
  "APMC Network",
  "FPO Federation",
  "AgriStack",
  "NABARD",
  "Krishi Vigyan Kendra",
]

export default function LogoMarquee() {
  const loop = [...partners, ...partners]
  return (
    <div className="border-y border-gray-100 bg-white/60 py-6 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4">
        Aligned with India's digital agriculture initiatives
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-16 animate-marquee whitespace-nowrap">
          {loop.map((p, i) => (
            <span key={i} className="text-lg font-semibold text-gray-300">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

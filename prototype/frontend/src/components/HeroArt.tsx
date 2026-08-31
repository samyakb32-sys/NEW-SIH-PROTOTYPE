export default function HeroArt() {
  return (
    <svg viewBox="0 0 560 480" className="w-full h-[480px]" role="img" aria-label="Illustration of farm-to-market data flow">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eafaf0" />
          <stop offset="100%" stopColor="#d7f2df" />
        </linearGradient>
        <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#66bb6a" />
          <stop offset="100%" stopColor="#2e7d32" />
        </linearGradient>
        <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a5d6a7" />
          <stop offset="100%" stopColor="#4caf50" />
        </linearGradient>
        <linearGradient id="card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f3fbf4" />
        </linearGradient>
      </defs>

      <rect width="560" height="480" rx="28" fill="url(#sky)" />

      {/* sun */}
      <circle cx="460" cy="80" r="46" fill="#f59e0b" opacity="0.25" />
      <circle cx="460" cy="80" r="28" fill="#f59e0b" opacity="0.55" />

      {/* rolling hills / fields */}
      <path d="M0 340 Q140 280 280 330 T560 320 V480 H0 Z" fill="url(#hill2)" />
      <path d="M0 380 Q160 330 320 375 T560 365 V480 H0 Z" fill="url(#hill1)" />

      {/* crop rows */}
      {Array.from({ length: 10 }).map((_, i) => (
        <path
          key={i}
          d={`M${20 + i * 55} 480 Q${40 + i * 55} 430 ${20 + i * 55} 400`}
          stroke="#1b5e20"
          strokeWidth="3"
          fill="none"
          opacity="0.35"
        />
      ))}

      {/* connecting path from farm to market */}
      <path
        d="M90 300 C 180 260, 240 260, 300 220"
        stroke="#ffffff"
        strokeWidth="3"
        strokeDasharray="2 10"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* farm node */}
      <g transform="translate(50,255)">
        <circle cx="0" cy="0" r="34" fill="url(#card)" stroke="#2e7d32" strokeWidth="2" />
        <path d="M-12 6 L0 -10 L12 6 Z" fill="#2e7d32" />
        <rect x="-8" y="6" width="16" height="10" fill="#66bb6a" />
      </g>

      {/* market/price card */}
      <g transform="translate(300,150)">
        <rect x="-70" y="-46" width="180" height="92" rx="16" fill="url(#card)" stroke="#e5e7eb" />
        <text x="-58" y="-20" fontSize="11" fill="#2e7d32" fontWeight="700">MARKET PRICE</text>
        <text x="-58" y="4" fontSize="22" fill="#0b1210" fontWeight="800">₹2,840</text>
        <text x="-58" y="24" fontSize="10" fill="#6b7280">Wheat · per quintal</text>
        <polyline points="30,20 55,-4 75,10 100,-24" fill="none" stroke="#2e7d32" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* buyer node */}
      <g transform="translate(470,290)">
        <circle cx="0" cy="0" r="30" fill="url(#card)" stroke="#f59e0b" strokeWidth="2" />
        <rect x="-10" y="-10" width="20" height="16" rx="2" fill="#f59e0b" />
        <rect x="-6" y="-16" width="12" height="8" rx="1" fill="#f59e0b" />
      </g>
      <path
        d="M370 190 C 410 210, 440 240, 460 268"
        stroke="#ffffff"
        strokeWidth="3"
        strokeDasharray="2 10"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* trucks / logistics dot */}
      <g transform="translate(200,390)">
        <rect x="-22" y="-10" width="34" height="18" rx="3" fill="#ffffff" opacity="0.9" />
        <rect x="10" y="-4" width="14" height="12" rx="2" fill="#ffffff" opacity="0.9" />
        <circle cx="-14" cy="10" r="4" fill="#0b1210" opacity="0.4" />
        <circle cx="14" cy="10" r="4" fill="#0b1210" opacity="0.4" />
      </g>
    </svg>
  )
}

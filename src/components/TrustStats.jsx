import { Cpu, Headphones, Package, Target } from 'lucide-react'

const items = [
  { icon: Target, label: 'Precision Agriculture' },
  { icon: Cpu, label: 'Advanced Drone Technology' },
  { icon: Headphones, label: 'Professional Service' },
  { icon: Package, label: 'Genuine Spare Parts' },
]

export default function TrustStats() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8" aria-label="Key strengths">
      <div className="reveal mx-auto max-w-7xl rounded-2xl border border-forest-900/5 bg-white px-6 py-8 shadow-xl shadow-forest-900/10 sm:px-10">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-800">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="font-display text-base font-semibold text-charcoal sm:text-lg">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

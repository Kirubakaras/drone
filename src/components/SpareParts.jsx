import {
  Battery,
  Cog,
  Fan,
  Gauge,
  Package,
  Radio,
  SprayCan,
  Zap,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

const categories = [
  { label: 'Motors', icon: Zap },
  { label: 'Propellers', icon: Fan },
  { label: 'Batteries', icon: Battery },
  { label: 'Pumps', icon: Gauge },
  { label: 'Spray Components', icon: SprayCan },
  { label: 'Controllers', icon: Radio },
  { label: 'Flight Components', icon: Cog },
  { label: 'Drone Accessories', icon: Package },
]

export default function SpareParts() {
  const goContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="spare-parts"
      className="scroll-mt-24 bg-white py-20 sm:py-28"
      aria-labelledby="parts-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="parts-heading"
            eyebrow="Spare Parts"
            title="Genuine Parts. Reliable Performance."
          />
          <p className="max-w-md text-sm text-charcoal-muted lg:text-right">
            Categories we support — contact us to confirm availability for your drone model.
          </p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {categories.map(({ label, icon: Icon }) => (
            <li key={label} className="reveal">
              <button
                type="button"
                onClick={goContact}
                className="flex w-full flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-forest-50/50 p-6 text-center transition hover:border-forest-600/40 hover:bg-forest-50 hover:shadow-md"
              >
                <Icon className="h-8 w-8 text-forest-800" aria-hidden />
                <span className="text-sm font-semibold text-charcoal">{label}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="reveal mt-12 text-center">
          <button
            type="button"
            onClick={goContact}
            className="rounded-full bg-forest-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-800"
          >
            Find Spare Parts
          </button>
        </div>
      </div>
    </section>
  )
}

import {
  Factory,
  LifeBuoy,
  Package,
  ShoppingCart,
  Sparkles,
  Wrench,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

const services = [
  {
    icon: ShoppingCart,
    title: 'Drone Sales',
    text: 'Choose the right agricultural drone solution for your farming requirements.',
  },
  {
    icon: Factory,
    title: 'Drone Manufacturing',
    text: 'Professional drone solutions designed for agriculture and specialized applications.',
  },
  {
    icon: Wrench,
    title: 'Drone Service & Repair',
    text: 'Technical support and maintenance to keep your drone operating reliably.',
  },
  {
    icon: Package,
    title: 'Spare Parts',
    text: 'Reliable and compatible spare parts for agricultural and commercial drones.',
  },
  {
    icon: Sparkles,
    title: 'Drone Upgrades',
    text: 'Improve your drone capabilities with suitable components and upgrades.',
  },
  {
    icon: LifeBuoy,
    title: 'Technical Support',
    text: 'Get expert guidance for operation, maintenance and troubleshooting.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto mb-14 max-w-3xl text-center">
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="Complete Drone Support Under One Roof"
            className="mx-auto text-center"
          />
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`reveal ${i % 3 === 1 ? 'reveal-delay-1' : i % 3 === 2 ? 'reveal-delay-2' : ''}`}
            >
              <article className="group h-full rounded-2xl border border-stone-200/80 bg-white p-8 transition hover:border-forest-600/30 hover:shadow-lg">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-900 text-forest-400 transition group-hover:bg-forest-800">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-charcoal">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-charcoal-muted">{text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
